(function () {
  "use strict";

  var A = window.CPPApp;
  var Views = window.CPPViews;
  var U = A.Utils;
  var Storage = A.Storage;
  var ui = A.ui;

  var mainNav = document.getElementById("main-nav");
  var mobileMenuButton = document.querySelector(".mobile-menu-button");
  var searchDebounce = U.debounce(function () {
    Storage.saveFilters(ui.filters);
    Views.renderExerciseResults();
  }, 180);
  var editorSaveDebounce = null;

  function parseRoute() {
    var raw = window.location.hash || "#/dashboard";
    var withoutHash = raw.replace(/^#\/?/, "");
    var parts = withoutHash.split("?");
    var segments = parts[0].split("/").filter(Boolean);
    var query = new URLSearchParams(parts[1] || "");

    if (!segments.length || segments[0] === "dashboard") {
      return { name: "dashboard", query: query };
    }

    if (segments[0] === "exercises") {
      return { name: "exercises", query: query };
    }

    if (segments[0] === "exercise" && segments[1]) {
      return { name: "exercise", id: decodeURIComponent(segments[1]), query: query };
    }

    if (segments[0] === "challenges") {
      return { name: "challenges", query: query };
    }

    if (segments[0] === "bookmarks") {
      return { name: "bookmarks", query: query };
    }

    if (segments[0] === "playground") {
      return { name: "playground", query: query };
    }

    return { name: "notfound", query: query };
  }

  function updateNav(routeName) {
    var activeName = routeName === "exercise" ? "exercises" : routeName;
    document.querySelectorAll(".main-nav a[data-nav]").forEach(function (link) {
      var active = link.getAttribute("data-nav") === activeName;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function setTitle(title) {
    document.title = title + " — C++ Practice Hub";
  }

  function closeMobileMenu() {
    if (!mainNav || !mobileMenuButton) {
      return;
    }
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  }

  function toggleMobileMenu() {
    if (!mainNav || !mobileMenuButton) {
      return;
    }
    var open = !mainNav.classList.contains("is-open");
    mainNav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    mobileMenuButton.setAttribute("aria-expanded", String(open));
  }

  function destroyEditor() {
    if (!ui.editor) {
      return;
    }

    try {
      Storage.setPlaygroundCode(ui.editor.getValue());
    } catch (error) {
      // The editor can be detached during navigation.
    }

    try {
      ui.editor.destroy();
    } catch (error) {
      // Destroy is best-effort when the DOM is being replaced.
    }

    ui.editor = null;
  }

  function setEditorStatus(message) {
    var status = document.getElementById("editor-save-state");
    if (status) {
      status.textContent = message;
    }
  }

  function initPlaygroundEditor() {
    var container = document.getElementById("playground-editor");
    if (!container || !A.Playground) {
      return;
    }

    var saved = Storage.getPlaygroundCode();
    var initialValue = saved || A.Playground.getTemplate("starter");
    var saveCode = U.debounce(function (value) {
      Storage.setPlaygroundCode(value);
      setEditorStatus("បានរក្សាទុក");
    }, 450);

    ui.editor = A.Playground.mount(container, {
      value: initialValue,
      onChange: function (value) {
        setEditorStatus("កំពុងរក្សាទុក...");
        saveCode(value);
      }
    });

    window.setTimeout(function () {
      if (ui.editor) {
        ui.editor.refresh();
      }
    }, 40);
  }

  function renderRoute(options) {
    var settings = options || {};
    var scrollY = window.scrollY;
    var route = ui.currentRoute || parseRoute();

    destroyEditor();
    updateNav(route.name);

    if (route.name === "dashboard") {
      A.setView(Views.renderDashboard());
      setTitle("អនុវត្ត C++ ឱ្យកាន់តែខ្លាំង");
    } else if (route.name === "exercises") {
      A.setView(Views.renderExercises());
      setTitle("បណ្ណាល័យលំហាត់");
      Views.renderExerciseResults();
    } else if (route.name === "exercise") {
      var exercise = A.exerciseMap[route.id];
      if (!exercise) {
        A.setView(Views.renderNotFound());
        setTitle("រកមិនឃើញលំហាត់");
      } else {
        if (ui.activeExerciseId !== exercise.id) {
          Storage.markWorking(exercise.id);
          ui.activeExerciseId = exercise.id;
        }
        A.setView(Views.renderExerciseDetail(exercise));
        setTitle(exercise.title);
        Views.restoreOpenPanels(exercise);
      }
    } else if (route.name === "challenges") {
      A.setView(Views.renderChallenges());
      setTitle("Challenge Zone");
    } else if (route.name === "bookmarks") {
      A.setView(Views.renderBookmarks());
      setTitle("លំហាត់រក្សាទុក");
    } else if (route.name === "playground") {
      A.setView(Views.renderPlayground());
      setTitle("Code Playground");
      initPlaygroundEditor();
    } else {
      A.setView(Views.renderNotFound());
      setTitle("រកមិនឃើញទំព័រ");
    }

    window.requestAnimationFrame(function () {
      if (settings.preserveScroll) {
        window.scrollTo({ top: scrollY, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }

  function applyQueryFilters(route) {
    if (route.name !== "exercises" || !route.query) {
      return;
    }

    var query = route.query;
    var changed = false;
    var topic = query.get("topic");
    var difficulty = query.get("difficulty");
    var status = query.get("status");
    var sort = query.get("sort");
    var search = query.get("search");

    if (topic && A.topicMap[topic]) {
      ui.filters.topic = topic;
      changed = true;
    }

    if (difficulty && ["beginner", "intermediate", "advanced", "challenge"].indexOf(difficulty) !== -1) {
      ui.filters.difficulty = difficulty;
      changed = true;
    }

    if (status && ["incomplete", "completed", "working"].indexOf(status) !== -1) {
      ui.filters.status = status;
      changed = true;
    }

    if (sort && ["number", "difficulty-asc", "difficulty-desc", "title"].indexOf(sort) !== -1) {
      ui.filters.sort = sort;
      changed = true;
    }

    if (search) {
      ui.filters.search = search;
      changed = true;
    }

    if (query.get("bookmarked") === "true") {
      ui.filters.bookmarked = true;
      changed = true;
    }

    if (changed) {
      Storage.saveFilters(ui.filters);
    }
  }

  function handleRoute() {
    var route = parseRoute();
    var key = window.location.hash || "#/dashboard";
    var changed = key !== ui.routeKey;

    if (changed) {
      ui.openSolutions.clear();
      ui.openHints.clear();
      ui.openOutputs.clear();
      ui.activeExerciseId = null;
      ui.challengeLimit = 12;
      closeMobileMenu();
    }

    ui.currentRoute = route;
    ui.routeKey = key;
    applyQueryFilters(route);
    renderRoute({ preserveScroll: false });
  }

  function navigate(path) {
    if ((window.location.hash || "#/dashboard") === path) {
      handleRoute();
      return;
    }

    window.location.hash = path;
  }

  function focusSearch() {
    if (ui.currentRoute && ui.currentRoute.name === "exercises") {
      var input = document.getElementById("exercise-search");
      if (input) {
        input.focus();
        input.select();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    navigate("#/exercises");
    window.setTimeout(function () {
      var field = document.getElementById("exercise-search");
      if (field) {
        field.focus();
        field.select();
      }
    }, 90);
  }

  function drawRandomChallenge(source) {
    var difficulty = "all";

    if (source === "dashboard-select") {
      var dashboardSelect = document.getElementById("dashboard-random-difficulty");
      difficulty = dashboardSelect ? dashboardSelect.value : "all";
    } else if (source === "challenges") {
      difficulty = "challenge";
    } else if (source === "challenges-select") {
      difficulty = ui.challengeDifficulty;
    }

    var pool = A.exercises.filter(function (exercise) {
      return difficulty === "all" || exercise.difficulty === difficulty;
    });

    if (!pool.length) {
      A.showToast("មិនមានលំហាត់សម្រាប់កម្រិតនេះទេ។", "error");
      return;
    }

    var previous = ui.activeExerciseId;
    var chosen = pool[Math.floor(Math.random() * pool.length)];

    if (pool.length > 1 && chosen.id === previous) {
      chosen = pool[(pool.indexOf(chosen) + 1) % pool.length];
    }

    navigate("#/exercise/" + encodeURIComponent(chosen.id));
  }

  function resetFilters() {
    ui.filters = Object.assign({}, A.DEFAULT_FILTERS);
    Storage.saveFilters(ui.filters);
    if ((window.location.hash || "").indexOf("#/exercises?") === 0) {
      window.history.replaceState(null, "", "#/exercises");
      ui.routeKey = "#/exercises";
      ui.currentRoute = parseRoute();
    }
    renderRoute({ preserveScroll: true });
  }

  function removeFilter(key) {
    if (!Object.prototype.hasOwnProperty.call(ui.filters, key)) {
      return;
    }

    if (key === "bookmarked") {
      ui.filters.bookmarked = false;
    } else {
      ui.filters[key] = A.DEFAULT_FILTERS[key];
    }

    Storage.saveFilters(ui.filters);
    renderRoute({ preserveScroll: true });
  }

  function toggleHint(id) {
    var exercise = A.exerciseMap[id];
    if (!exercise) {
      return;
    }

    var open = !ui.openHints.has(id);
    if (open) {
      ui.openHints.add(id);
    } else {
      ui.openHints.delete(id);
    }

    var reveal = document.getElementById("hint-reveal");
    if (reveal) {
      reveal.classList.toggle("is-open", open);
    }

    var button = Array.from(document.querySelectorAll('[data-action="toggle-hint"]')).find(function (item) {
      return item.getAttribute("data-id") === id;
    });

    if (button) {
      button.innerHTML = U.icon("eye") + (open ? "លាក់ Hint" : "Show Hint");
      U.refreshIcons();
    }
  }

  function toggleOutput(id) {
    var exercise = A.exerciseMap[id];
    if (!exercise) {
      return;
    }

    var open = !ui.openOutputs.has(id);
    if (open) {
      ui.openOutputs.add(id);
    } else {
      ui.openOutputs.delete(id);
    }

    var reveal = document.getElementById("output-reveal");
    if (reveal) {
      reveal.classList.toggle("is-open", open);
    }

    var button = Array.from(document.querySelectorAll('[data-action="toggle-output"]')).find(function (item) {
      return item.getAttribute("data-id") === id;
    });

    if (button) {
      button.innerHTML = U.icon("eye") + (open ? "លាក់លទ្ធផល" : "Show Expected Output");
      U.refreshIcons();
    }
  }

  function requestSolution(id) {
    var exercise = A.exerciseMap[id];
    if (!exercise) {
      return;
    }

    A.showModal({
      title: "មើលចម្លើយ?",
      message: "Are you sure you want to see the solution? Try solving it yourself first! សូមព្យាយាមដោះស្រាយដោយខ្លួនឯងមុនពេលមើលចម្លើយ។",
      confirmText: "បាទ/ចាស មើលចម្លើយ",
      cancelText: "ព្យាយាមម្តងទៀត",
      tone: "warning",
      icon: "eye",
      onConfirm: function () {
        Storage.markRevealed(id);
        ui.openSolutions.add(id);
        Views.setSolutionOpen(exercise, true, true);
      }
    });
  }

  function toggleSolution(id) {
    var exercise = A.exerciseMap[id];
    if (!exercise) {
      return;
    }

    if (ui.openSolutions.has(id)) {
      ui.openSolutions.delete(id);
      Views.setSolutionOpen(exercise, false, true);
      return;
    }

    requestSolution(id);
  }

  function copySolution(id) {
    var exercise = A.exerciseMap[id];
    if (!exercise) {
      return;
    }

    U.copyText(exercise.solution || "").then(function (copied) {
      A.showToast(copied ? "បាន copy កូដទៅ clipboard។" : "មិនអាច copy បានទេ។ សូមសាកល្បងម្តងទៀត។", copied ? "success" : "error");
    });
  }

  function handlePlaygroundTemplate(key) {
    if (!ui.editor) {
      return;
    }

    var template = A.Playground.getTemplate(key);
    var current = ui.editor.getValue();

    var applyTemplate = function () {
      if (!ui.editor) {
        return;
      }
      ui.editor.setValue(template);
      ui.editor.focus();
      Storage.setPlaygroundCode(template);
      setEditorStatus("បានរក្សាទុក");
      A.showToast("បានបញ្ចូល template ថ្មី។", "success");
    };

    if (current.trim().length > 0 && current !== template) {
      A.showModal({
        title: "បញ្ចូល template?",
        message: "កូដបច្ចុប្បន្ននឹងត្រូវជំនួសដោយ template ថ្មី។ តើអ្នកប្រាកដទេ?",
        confirmText: "ជំនួសកូដ",
        cancelText: "រក្សាទុកដដែល",
        icon: "file-code-2",
        onConfirm: applyTemplate
      });
    } else {
      applyTemplate();
    }
  }

  function clearPlayground() {
    if (!ui.editor) {
      return;
    }

    A.showModal({
      title: "សម្អាត editor?",
      message: "កូដទាំងអស់នៅក្នុង editor នឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?",
      confirmText: "សម្អាត",
      cancelText: "បោះបង់",
      tone: "danger",
      icon: "eraser",
      confirmClass: "button-danger",
      onConfirm: function () {
        if (!ui.editor) {
          return;
        }
        ui.editor.setValue("");
        ui.editor.focus();
        Storage.setPlaygroundCode("");
        setEditorStatus("បានសម្អាត");
        A.showToast("បានសម្អាត editor។", "success");
      }
    });
  }

  function setRunnerStatus(message, tone) {
    var status = document.getElementById("runner-status");
    if (!status) {
      return;
    }
    status.textContent = message;
    status.className = "runner-status" + (tone ? " is-" + tone : "");
  }

  function setRunButtonRunning(running) {
    var button = document.getElementById("run-code-button");
    var label = document.getElementById("run-code-label");
    if (button) {
      button.disabled = running;
      button.classList.toggle("is-running", running);
    }
    if (label) {
      label.textContent = running ? "Running..." : "Run Code";
    }
  }

  function makeConsoleBlock(label, text, tone) {
    var block = document.createElement("div");
    block.className = "console-block" + (tone ? " is-" + tone : "");

    var head = document.createElement("div");
    head.className = "console-block-head";
    head.textContent = label;

    var pre = document.createElement("pre");
    pre.textContent = text;

    block.appendChild(head);
    block.appendChild(pre);
    return block;
  }

  function showConsoleEmpty(message) {
    var output = document.getElementById("playground-output");
    if (!output) {
      return;
    }
    output.innerHTML = "";
    var empty = document.createElement("div");
    empty.className = "console-empty";
    empty.textContent = message;
    output.appendChild(empty);
  }

  function clearRunOutput() {
    ui.activeRunId = null;
    ui.isRunning = false;
    setRunButtonRunning(false);
    setRunnerStatus("Ready");
    showConsoleEmpty("ចុច Run Code ដើម្បីមើលលទ្ធផលនៅទីនេះ។");
  }

  function renderRunResult(result) {
    var output = document.getElementById("playground-output");
    if (!output) {
      return;
    }

    output.innerHTML = "";
    var hasContent = false;

    if (result.compileOutput && result.compileOutput.trim()) {
      output.appendChild(makeConsoleBlock("Compiler", result.compileOutput.trim(), "error"));
      hasContent = true;
    }

    if (result.stderr && result.stderr.trim()) {
      output.appendChild(makeConsoleBlock("Runtime error", result.stderr.trim(), "error"));
      hasContent = true;
    }

    if (result.stdout && result.stdout.length) {
      output.appendChild(makeConsoleBlock("Program output", result.stdout, "success"));
      hasContent = true;
    }

    if (result.message && result.message.trim()) {
      output.appendChild(makeConsoleBlock("Message", result.message.trim(), "warning"));
      hasContent = true;
    }

    if (!hasContent) {
      output.appendChild(makeConsoleBlock("Program output", "(no output)", "muted"));
    }

    var metaParts = [result.provider];
    if (result.time !== null && result.time !== undefined) {
      metaParts.push("Time: " + result.time + "s");
    }
    if (result.memory !== null && result.memory !== undefined) {
      metaParts.push("Memory: " + result.memory + " KB");
    }

    var meta = document.createElement("div");
    meta.className = "console-meta";
    meta.textContent = metaParts.join(" · ");
    output.appendChild(meta);

    setRunnerStatus(result.ok ? "Accepted" : result.status, result.ok ? "success" : "error");
  }

  function runPlaygroundCode() {
    if (!ui.editor || ui.isRunning) {
      return;
    }

    var code = ui.editor.getValue();
    var input = document.getElementById("playground-stdin");
    var stdin = input ? input.value : "";

    if (!window.CPPCompiler) {
      A.showToast("Compiler module មិនបាន load ទេ។ សូម refresh ទំព័រ។", "error");
      return;
    }

    if (!navigator.onLine) {
      setRunnerStatus("Offline", "error");
      showConsoleEmpty("អ្នកកំពុង offline។ Online compiler ត្រូវការ internet។");
      A.showToast("សូមភ្ជាប់ internet ដើម្បី Run កូដ។", "error");
      return;
    }

    Storage.setPlaygroundCode(code);
    ui.isRunning = true;
    ui.activeRunId = Date.now() + "-" + Math.random();
    var runId = ui.activeRunId;

    setRunButtonRunning(true);
    setRunnerStatus("Compiling...", "running");
    showConsoleEmpty("កំពុង compile និងដំណើរការកូដ...");

    window.CPPCompiler.run(code, stdin).then(function (result) {
      if (ui.activeRunId !== runId) {
        return;
      }
      renderRunResult(result);
    }).catch(function (error) {
      if (ui.activeRunId !== runId) {
        return;
      }
      setRunnerStatus("Connection error", "error");
      showConsoleEmpty(error.message || "មិនអាច run កូដបានទេ។");
      A.showToast("Online compiler មិនអាចភ្ជាប់បានទេ។", "error");
    }).finally(function () {
      if (ui.activeRunId === runId) {
        ui.isRunning = false;
        setRunButtonRunning(false);
      }
    });
  }

  function handleAction(action, element) {
    var id = element.getAttribute("data-id");
    var exercise = id ? A.exerciseMap[id] : null;

    if (action === "toggle-theme") {
      Storage.setTheme(Storage.getTheme() === "dark" ? "light" : "dark");
      closeMobileMenu();
      return;
    }

    if (action === "toggle-menu") {
      toggleMobileMenu();
      return;
    }

    if (action === "global-search") {
      closeMobileMenu();
      focusSearch();
      return;
    }

    if (action === "toggle-bookmark" && exercise) {
      var bookmarked = Storage.toggleBookmark(exercise.id);
      A.showToast(bookmarked ? "បានរក្សាទុកលំហាត់។" : "បានដកចេញពីរក្សាទុក។", "success");
      renderRoute({ preserveScroll: true });
      return;
    }

    if (action === "toggle-complete" && exercise) {
      var completed = Storage.toggleCompleted(exercise.id);
      A.showToast(completed ? "បានសម្គាល់ថាបានបញ្ចប់។" : "បានដកស្ថានភាពបញ្ចប់។", "success");
      renderRoute({ preserveScroll: true });
      return;
    }

    if (action === "random-challenge") {
      drawRandomChallenge(element.getAttribute("data-source"));
      return;
    }

    if (action === "set-challenge-difficulty") {
      ui.challengeDifficulty = element.getAttribute("data-difficulty") || "challenge";
      renderRoute({ preserveScroll: true });
      return;
    }

    if (action === "load-more-challenges") {
      ui.challengeLimit += 12;
      renderRoute({ preserveScroll: true });
      return;
    }

    if (action === "toggle-bookmark-filter") {
      ui.filters.bookmarked = !ui.filters.bookmarked;
      Storage.saveFilters(ui.filters);
      renderRoute({ preserveScroll: true });
      return;
    }

    if (action === "clear-filters") {
      resetFilters();
      return;
    }

    if (action === "remove-filter") {
      removeFilter(element.getAttribute("data-key"));
      return;
    }

    if (action === "toggle-hint" && id) {
      toggleHint(id);
      return;
    }

    if (action === "toggle-output" && id) {
      toggleOutput(id);
      return;
    }

    if (action === "toggle-solution" && id) {
      toggleSolution(id);
      return;
    }

    if (action === "copy-solution" && id) {
      copySolution(id);
      return;
    }

    if (action === "print-exercise") {
      window.print();
      return;
    }

    if (action === "quiz-answer" && exercise && exercise.type === "quiz") {
      if (Storage.getQuizAnswer(id) !== null) {
        return;
      }

      var index = Number(element.getAttribute("data-index"));
      Storage.setQuizAnswer(id, index);
      var correct = Number(exercise.correctIndex) === index;
      A.showToast(correct ? "ចម្លើយត្រឹមត្រូវ!" : "មិនទាន់ត្រូវទេ។ សូមអានការពន្យល់។", correct ? "success" : "error");
      renderRoute({ preserveScroll: true });
      return;
    }

    if (action === "run-code") {
      runPlaygroundCode();
      return;
    }

    if (action === "clear-run-output") {
      clearRunOutput();
      return;
    }

    if (action === "copy-playground" && ui.editor) {
      U.copyText(ui.editor.getValue()).then(function (copied) {
        A.showToast(copied ? "បាន copy កូដ។" : "មិនអាច copy បានទេ។", copied ? "success" : "error");
      });
      return;
    }

    if (action === "download-playground" && ui.editor) {
      U.downloadFile("cpp-practice.cpp", ui.editor.getValue(), "text/x-c++src;charset=utf-8");
      A.showToast("បានទាញយក cpp-practice.cpp។", "success");
      return;
    }

    if (action === "clear-playground") {
      clearPlayground();
      return;
    }

    if (action === "load-template") {
      handlePlaygroundTemplate(element.getAttribute("data-template"));
      return;
    }

    if (action === "reset-progress") {
      A.showModal({
        title: "Reset វឌ្ឍនភាព?",
        message: "វឌ្ឍនភាពទាំងអស់ រួមទាំងលំហាត់បានបញ្ចប់ Bookmark និងចម្លើយដែលបានមើល នឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?",
        confirmText: "Reset ទាំងអស់",
        cancelText: "បោះបង់",
        tone: "danger",
        icon: "triangle-alert",
        confirmClass: "button-danger",
        onConfirm: function () {
          Storage.resetProgress();
          ui.filters = Object.assign({}, A.DEFAULT_FILTERS);
          ui.openSolutions.clear();
          ui.openHints.clear();
          ui.openOutputs.clear();
          ui.activeExerciseId = null;
          navigate("#/dashboard");
          A.showToast("វឌ្ឍនភាពត្រូវបាន reset។", "success");
        }
      });
    }
  }

  document.addEventListener("click", function (event) {
    var actionElement = event.target.closest("[data-action]");

    if (actionElement) {
      var action = actionElement.getAttribute("data-action");
      if (action === "toggle-theme" || action === "toggle-menu" || action === "global-search" || action.indexOf("bookmark") !== -1 || action.indexOf("complete") !== -1) {
        event.preventDefault();
      }
      handleAction(action, actionElement);
    }

    if (document.body.classList.contains("menu-open") && !event.target.closest(".site-header")) {
      closeMobileMenu();
    }

    if (event.target.closest(".main-nav a")) {
      closeMobileMenu();
    }
  });

  document.addEventListener("change", function (event) {
    var field = event.target.closest("[data-filter]");
    if (!field) {
      return;
    }

    var key = field.getAttribute("data-filter");
    if (key === "search") {
      return;
    }

    ui.filters[key] = field.value;
    Storage.saveFilters(ui.filters);
    Views.renderExerciseResults();
  });

  document.addEventListener("input", function (event) {
    var field = event.target.closest('[data-filter="search"]');
    if (!field) {
      return;
    }

    ui.filters.search = field.value;
    searchDebounce();
  });

  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      focusSearch();
    }

    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980) {
      closeMobileMenu();
    }
    if (ui.editor) {
      ui.editor.refresh();
    }
  });

  window.addEventListener("beforeunload", function () {
    if (ui.editor) {
      Storage.setPlaygroundCode(ui.editor.getValue());
    }
  });

  Storage.subscribe(function (state, reason) {
    if (reason === "external") {
      ui.filters = Storage.getFilters();
      handleRoute();
    }
  });

  function updateFooterYear() {
    var year = new Date().getFullYear();
    document.querySelectorAll("[data-current-year]").forEach(function (element) {
      element.textContent = year;
    });
  }

  function init() {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/dashboard");
    }

    updateFooterYear();
    handleRoute();
    window.addEventListener("hashchange", handleRoute);

    if (!Storage.isAvailable()) {
      A.showToast("LocalStorage មិនអាចប្រើបានទេ។ វឌ្ឍនភាពនឹងរក្សាទុកតែក្នុង session នេះ។", "error");
    }

    if (!A.exercises.length) {
      A.showToast("មិនទាន់បាន load ទិន្នន័យលំហាត់ទេ។ សូមពិនិត្យ js/data/។", "error");
    }

    setTimeout(function () {
      var menuButton = document.querySelector(".mobile-menu-button");
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
      }
    }, 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
