(function () {
  "use strict";

  var Utils = window.CPPUtils;
  var Storage = window.CPPStorage;
  var Filters = window.CPPFilters;
  var Data = window.CPP_DATA || { topics: [], stages: [], exercises: [] };

  var topics = (Data.topics || []).slice().sort(function (a, b) { return a.number - b.number; });
  var stages = (Data.stages || []).slice();
  var topicMap = {};
  var stageMap = {};
  var exerciseMap = {};
  var exercises = [];
  var exercisesByTopic = {};

  topics.forEach(function (topic) {
    topicMap[topic.id] = topic;
    exercisesByTopic[topic.id] = [];
  });

  stages.forEach(function (stage) {
    stageMap[stage.id] = stage;
  });

  var rawExercises = [];
  (Data.exercises || []).forEach(function (entry) {
    if (Array.isArray(entry)) {
      rawExercises.push.apply(rawExercises, entry);
    } else {
      rawExercises.push(entry);
    }
  });

  rawExercises.forEach(function (exercise, index) {
    var normalised = Object.assign({}, exercise, { order: index + 1 });
    exercises.push(normalised);
    exerciseMap[normalised.id] = normalised;
    if (!exercisesByTopic[normalised.topicId]) {
      exercisesByTopic[normalised.topicId] = [];
    }
    exercisesByTopic[normalised.topicId].push(normalised);
  });

  var DEFAULT_FILTERS = {
    search: "",
    topic: "all",
    difficulty: "all",
    status: "all",
    sort: "number",
    bookmarked: false
  };

  var SORT_LABELS = {
    number: "លេខលំហាត់",
    "difficulty-asc": "ងាយ → ពិបាក",
    "difficulty-desc": "ពិបាក → ងាយ",
    title: "ចំណងជើង"
  };

  var STATUS_LABELS = {
    incomplete: "មិនទាន់បញ្ចប់",
    completed: "បានបញ្ចប់",
    working: "កំពុងអនុវត្ត"
  };

  var ui = {
    filters: Storage.getFilters(),
    routeKey: null,
    currentRoute: null,
    activeExerciseId: null,
    openSolutions: new Set(),
    openHints: new Set(),
    openOutputs: new Set(),
    challengeDifficulty: "challenge",
    challengeLimit: 12,
    editor: null,
    modal: {
      onConfirm: null,
      lastFocus: null,
      closeTimer: null
    }
  };

  var appView = document.getElementById("app-view");
  var modalBackdrop = document.getElementById("modal-backdrop");
  var modalTitle = document.getElementById("modal-title");
  var modalMessage = document.getElementById("modal-message");
  var modalIcon = document.getElementById("modal-icon");
  var modalConfirm = modalBackdrop.querySelector("[data-modal-confirm]");
  var modalCancel = modalBackdrop.querySelector("[data-modal-cancel]");
  var toastRegion = document.getElementById("toast-region");

  function getTopic(id) {
    return topicMap[id] || null;
  }

  function getTopicName(id) {
    var topic = getTopic(id);
    return topic ? topic.name : "មិនស្គាល់ប្រធានបទ";
  }

  function completedExercises() {
    var state = Storage.getState();
    return exercises.filter(function (exercise) {
      return state.completed.indexOf(exercise.id) !== -1;
    });
  }

  function completedInTopic(topicId) {
    var state = Storage.getState();
    return (exercisesByTopic[topicId] || []).filter(function (exercise) {
      return state.completed.indexOf(exercise.id) !== -1;
    }).length;
  }

  function formatExerciseId(id) {
    return String(id || "").toUpperCase();
  }

  function exerciseHref(id) {
    return "#/exercise/" + encodeURIComponent(id);
  }

  function esc(value) {
    return Utils.escapeHTML(value);
  }

  function rich(value) {
    return Utils.formatInline(value);
  }

  function refreshIcons() {
    Utils.refreshIcons();
  }

  function setView(html) {
    appView.innerHTML = html;
    refreshIcons();
  }

  function topicBadge(topicId) {
    return '<span class="badge badge-topic">' + Utils.icon("folder") + esc(getTopicName(topicId)) + "</span>";
  }

  function difficultyBadge(difficulty) {
    return '<span class="' + Utils.difficultyClass(difficulty) + '">' + esc(Utils.difficultyLabel(difficulty)) + "</span>";
  }

  function typeBadge(exercise) {
    if (exercise.type === "quiz") {
      return '<span class="badge badge-quiz">' + Utils.icon("list-checks") + "Quiz</span>";
    }
    return "";
  }

  function emptyState(options) {
    var settings = options || {};
    var compact = settings.compact ? " compact" : "";
    return [
      '<div class="empty-state' + compact + '">',
      '<div class="empty-icon">' + Utils.icon(settings.icon || "search") + "</div>",
      "<h3>" + esc(settings.title || "រកមិនឃើញទិន្នន័យ") + "</h3>",
      "<p>" + esc(settings.message || "សូមសាកល្បងម្តងទៀត។") + "</p>",
      settings.action || "",
      "</div>"
    ].join("");
  }

  function renderExerciseCard(exercise) {
    var topic = getTopic(exercise.topicId);
    var state = Storage.getState();
    var completed = state.completed.indexOf(exercise.id) !== -1;
    var bookmarked = state.bookmarked.indexOf(exercise.id) !== -1;

    return [
      '<article class="exercise-card' + (completed ? " is-completed" : "") + '">',
      '<div class="exercise-card-top">',
      '<div class="exercise-card-meta">',
      '<span class="exercise-id">' + esc(formatExerciseId(exercise.id)) + "</span>",
      difficultyBadge(exercise.difficulty),
      typeBadge(exercise),
      completed ? '<span class="badge badge-complete">' + Utils.icon("circle-check") + "Completed</span>" : "",
      "</div>",
      "</div>",
      '<h3><a href="' + exerciseHref(exercise.id) + '">' + esc(exercise.title) + "</a></h3>",
      '<p class="exercise-excerpt">' + esc(Utils.truncate(exercise.description, 178)) + "</p>",
      '<div class="exercise-card-bottom">',
      '<span class="exercise-topic">' + Utils.icon(topic ? topic.icon : "folder") + "<span>" + esc(topic ? topic.name : "C++") + "</span></span>",
      '<div class="exercise-card-actions">',
      '<button class="icon-button' + (bookmarked ? " is-active" : "") + '" type="button" data-action="toggle-bookmark" data-id="' + esc(exercise.id) + '" title="' + (bookmarked ? "ដកចេញពីរក្សាទុក" : "រក្សាទុកលំហាត់") + '" aria-label="' + (bookmarked ? "ដកចេញពីរក្សាទុក" : "រក្សាទុកលំហាត់") + '" aria-pressed="' + bookmarked + '">' + Utils.icon("bookmark") + "</button>",
      '<button class="icon-button' + (completed ? " completed" : "") + '" type="button" data-action="toggle-complete" data-id="' + esc(exercise.id) + '" title="' + (completed ? "ដកស្ថានភាពបញ្ចប់" : "សម្គាល់ថាបានបញ្ចប់") + '" aria-label="' + (completed ? "ដកស្ថានភាពបញ្ចប់" : "សម្គាល់ថាបានបញ្ចប់") + '">' + Utils.icon(completed ? "circle-check-big" : "circle") + "</button>",
      '<a class="open-exercise-link" href="' + exerciseHref(exercise.id) + '">អនុវត្ត' + Utils.icon("arrow-right") + "</a>",
      "</div>",
      "</div>",
      "</article>"
    ].join("");
  }

  function renderStageCard(stage) {
    var stageTopics = topics.filter(function (topic) { return topic.stage === stage.id; });
    var total = stageTopics.reduce(function (sum, topic) {
      return sum + (exercisesByTopic[topic.id] || []).length;
    }, 0);
    var done = stageTopics.reduce(function (sum, topic) {
      return sum + completedInTopic(topic.id);
    }, 0);
    var percent = Utils.percent(done, total);

    var topicRows = stageTopics.map(function (topic) {
      var count = (exercisesByTopic[topic.id] || []).length;
      var topicDone = completedInTopic(topic.id);
      return [
        '<a class="topic-row" href="#/exercises?topic=' + encodeURIComponent(topic.id) + '">',
        '<span class="topic-row-icon">' + Utils.icon(topic.icon) + "</span>",
        '<span class="topic-row-name">' + esc(topic.name) + "</span>",
        '<span class="topic-row-count">' + topicDone + "/" + count + "</span>",
        '<span class="topic-row-arrow">' + Utils.icon("chevron-right") + "</span>",
        "</a>"
      ].join("");
    }).join("");

    return [
      '<article class="stage-card">',
      '<div class="stage-card-head">',
      '<span class="stage-icon">' + Utils.icon(stage.icon) + "</span>",
      '<div class="stage-card-title">',
      "<h3>" + esc(stage.name) + "</h3>",
      "<p>" + esc(stage.english) + "</p>",
      "</div>",
      '<span class="stage-progress-number">' + done + "/" + total + "</span>",
      "</div>",
      '<div class="stage-progress">',
      '<div class="progress-track"><div class="progress-fill" style="width:' + percent + '%"></div></div>',
      "</div>",
      '<div class="topic-list">' + topicRows + "</div>",
      "</article>"
    ].join("");
  }

  function getContinueExercise() {
    var state = Storage.getState();
    var candidates = [];

    if (state.lastExercise && exerciseMap[state.lastExercise]) {
      candidates.push(state.lastExercise);
    }

    state.working.slice().reverse().forEach(function (id) {
      if (exerciseMap[id]) {
        candidates.push(id);
      }
    });

    state.recent.forEach(function (id) {
      if (exerciseMap[id]) {
        candidates.push(id);
      }
    });

    for (var i = 0; i < candidates.length; i += 1) {
      if (!Storage.isCompleted(candidates[i])) {
        return exerciseMap[candidates[i]];
      }
    }

    return exercises.find(function (exercise) {
      return !Storage.isCompleted(exercise.id);
    }) || exercises[0] || null;
  }

  function pickDaily(pool, suffix) {
    if (!pool.length) {
      return null;
    }

    var index = Utils.dailyIndex(pool.length, Utils.formatDateISO(new Date()) + "|" + (suffix || "daily"));
    return pool[index];
  }

  function optionsMarkup(items, selected, allItem) {
    var parts = ['<option value="' + esc(allItem.value) + '">' + esc(allItem.label) + "</option>"];

    items.forEach(function (item) {
      parts.push('<option value="' + esc(item.value) + '"' + (item.value === selected ? " selected" : "") + ">" + esc(item.label) + "</option>");
    });

    return parts.join("");
  }

  function topicOptionsMarkup(selected) {
    var parts = ['<option value="all"' + (selected === "all" ? " selected" : "") + ">គ្រប់ប្រធានបទ</option>"];

    stages.forEach(function (stage) {
      var stageTopics = topics.filter(function (topic) { return topic.stage === stage.id; });
      if (!stageTopics.length) {
        return;
      }

      parts.push('<optgroup label="' + esc(stage.name) + '">');
      stageTopics.forEach(function (topic) {
        parts.push('<option value="' + esc(topic.id) + '"' + (selected === topic.id ? " selected" : "") + ">" + esc(topic.name) + " (" + (exercisesByTopic[topic.id] || []).length + ")</option>");
      });
      parts.push("</optgroup>");
    });

    return parts.join("");
  }

  function showToast(message, type) {
    if (!toastRegion) {
      return;
    }

    var tone = type || "info";
    var iconName = tone === "success" ? "circle-check-big" : tone === "error" ? "circle-alert" : "info";
    var toast = document.createElement("div");
    toast.className = "toast " + tone;
    toast.innerHTML = Utils.icon(iconName) + "<span>" + esc(message) + "</span>";
    toastRegion.appendChild(toast);
    refreshIcons();

    window.setTimeout(function () {
      toast.classList.add("is-leaving");
      window.setTimeout(function () {
        toast.remove();
      }, 200);
    }, 3200);
  }

  function showModal(options) {
    var settings = options || {};

    if (!modalBackdrop) {
      return;
    }

    if (ui.modal.closeTimer) {
      window.clearTimeout(ui.modal.closeTimer);
      ui.modal.closeTimer = null;
    }

    ui.modal.lastFocus = document.activeElement;
    ui.modal.onConfirm = typeof settings.onConfirm === "function" ? settings.onConfirm : null;

    modalTitle.textContent = settings.title || "តើអ្នកប្រាកដទេ?";
    modalMessage.textContent = settings.message || "";
    modalConfirm.textContent = settings.confirmText || "យល់ព្រម";
    modalCancel.textContent = settings.cancelText || "បោះបង់";
    modalConfirm.className = "button " + (settings.confirmClass || "button-primary");

    var tone = settings.tone || "default";
    modalIcon.className = "modal-icon" + (tone === "warning" ? " warning" : tone === "danger" ? " danger" : "");
    modalIcon.innerHTML = Utils.icon(settings.icon || (tone === "danger" ? "triangle-alert" : "help-circle"));

    modalBackdrop.hidden = false;
    window.requestAnimationFrame(function () {
      modalBackdrop.classList.add("is-open");
      modalCancel.focus();
    });
    refreshIcons();
  }

  function closeModal() {
    if (!modalBackdrop || modalBackdrop.hidden) {
      return;
    }

    ui.modal.onConfirm = null;
    modalBackdrop.classList.remove("is-open");
    ui.modal.closeTimer = window.setTimeout(function () {
      modalBackdrop.hidden = true;
      ui.modal.closeTimer = null;
      if (ui.modal.lastFocus && typeof ui.modal.lastFocus.focus === "function") {
        ui.modal.lastFocus.focus();
      }
    }, 180);
  }

  function confirmModal() {
    var callback = ui.modal.onConfirm;
    closeModal();
    if (callback) {
      callback();
    }
  }

  function bindCoreEvents() {
    if (modalCancel) {
      modalCancel.addEventListener("click", closeModal);
    }

    if (modalConfirm) {
      modalConfirm.addEventListener("click", confirmModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", function (event) {
        if (event.target === modalBackdrop) {
          closeModal();
        }
      });
    }

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modalBackdrop && !modalBackdrop.hidden) {
        closeModal();
      }
    });

    window.addEventListener("cpp-storage-error", function (event) {
      var message = event && event.detail && event.detail.message
        ? event.detail.message
        : "LocalStorage មិនអាចរក្សាទុកបានទេ។";
      showToast(message, "error");
    });
  }

  bindCoreEvents();

  window.CPPApp = {
    Data: Data,
    topics: topics,
    stages: stages,
    topicMap: topicMap,
    stageMap: stageMap,
    exerciseMap: exerciseMap,
    exercises: exercises,
    exercisesByTopic: exercisesByTopic,
    ui: ui,
    DEFAULT_FILTERS: DEFAULT_FILTERS,
    SORT_LABELS: SORT_LABELS,
    STATUS_LABELS: STATUS_LABELS,
    Utils: Utils,
    Storage: Storage,
    Filters: Filters,
    Playground: window.CPPPlayground,
    getTopic: getTopic,
    getTopicName: getTopicName,
    completedExercises: completedExercises,
    completedInTopic: completedInTopic,
    formatExerciseId: formatExerciseId,
    exerciseHref: exerciseHref,
    esc: esc,
    rich: rich,
    refreshIcons: refreshIcons,
    setView: setView,
    topicBadge: topicBadge,
    difficultyBadge: difficultyBadge,
    typeBadge: typeBadge,
    emptyState: emptyState,
    renderExerciseCard: renderExerciseCard,
    renderStageCard: renderStageCard,
    getContinueExercise: getContinueExercise,
    pickDaily: pickDaily,
    optionsMarkup: optionsMarkup,
    topicOptionsMarkup: topicOptionsMarkup,
    showToast: showToast,
    showModal: showModal,
    closeModal: closeModal
  };
})();
