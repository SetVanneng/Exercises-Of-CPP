(function () {
  "use strict";

  var A = window.CPPApp;
  var U = A.Utils;
  var Storage = A.Storage;
  var Filters = A.Filters;

  function renderDashboard() {
    var state = Storage.getState();
    var total = A.exercises.length;
    var done = A.completedExercises().length;
    var remaining = Math.max(0, total - done);
    var percent = U.percent(done, total);
    var activity = Storage.getActivityStats();
    var daily = A.pickDaily(A.exercises, "dashboard");
    var continueExercise = A.getContinueExercise();
    var recent = state.recent.map(function (id) { return A.exerciseMap[id]; }).filter(Boolean).slice(0, 4);
    var dailyTopic = daily ? A.getTopic(daily.topicId) : null;
    var dailyBookmarked = daily ? Storage.isBookmarked(daily.id) : false;
    var stageCards = A.stages.map(A.renderStageCard).join("");

    var recentMarkup = recent.length
      ? `<div class="recent-grid">${recent.map(A.renderExerciseCard).join("")}</div>`
      : A.emptyState({
        icon: "history",
        title: "មិនទាន់មានប្រវត្តិអនុវត្ត",
        message: "លំហាត់ដែលអ្នកបើកមើល នឹងបង្ហាញនៅទីនេះ ដើម្បីឱ្យអ្នកត្រឡប់មកបន្តបានយ៉ាងងាយ។",
        compact: true,
        action: `<a class="button button-primary button-sm" href="#/exercises">${U.icon("book-open")}ជ្រើសរើសលំហាត់</a>`
      });

    var continueMarkup = "";
    if (continueExercise) {
      var continueDone = Storage.isCompleted(continueExercise.id);
      continueMarkup = `
        <div class="continue-card">
          <span class="continue-icon">${U.icon(continueDone ? "trophy" : "play")}</span>
          <div class="continue-copy">
            <span>${done === 0 ? "ចាប់ផ្តើមថ្ងៃនេះ" : continueDone ? "អនុវត្តបន្ថែម" : "បន្តពីកន្លែងដែលអ្នកឈប់"}</span>
            <strong>${A.esc(continueExercise.title)}</strong>
          </div>
          <a class="button button-soft button-sm" href="${A.exerciseHref(continueExercise.id)}">${continueDone ? "អនុវត្តម្តងទៀត" : "បន្តអនុវត្ត"}${U.icon("arrow-right")}</a>
        </div>`;
    }

    var dailyMarkup = daily ? `
      <h3>${A.esc(daily.title)}</h3>
      <p class="description">${A.esc(daily.description)}</p>
      <div class="spotlight-meta">
        ${A.difficultyBadge(daily.difficulty)}
        ${dailyTopic ? A.topicBadge(dailyTopic.id) : ""}
      </div>
      <div class="spotlight-footer">
        <span class="exercise-id">${A.esc(A.formatExerciseId(daily.id))}</span>
        <div class="exercise-card-actions">
          <button class="icon-button${dailyBookmarked ? " is-active" : ""}" type="button" data-action="toggle-bookmark" data-id="${A.esc(daily.id)}" title="រក្សាទុក" aria-label="រក្សាទុក" aria-pressed="${dailyBookmarked}">${U.icon("bookmark")}</button>
          <a class="button button-primary button-sm" href="${A.exerciseHref(daily.id)}">ចាប់ផ្តើម${U.icon("arrow-right")}</a>
        </div>
      </div>`
      : `<h3>មិនទាន់មានលំហាត់</h3>`;

    return `
      <section class="dashboard-hero">
        <div class="hero-panel">
          <span class="hero-badge">${U.icon("sparkles")}វេទិកាអនុវត្ត C++ ដោយគ្មានគណនី</span>
          <h1 class="hero-title">រៀន C++ ដោយ <span class="accent">ការអនុវត្ត</span><br>មិនមែនដោយការទន្ទេញ</h1>
          <p class="hero-copy">សួស្តី! មានលំហាត់ C++ ចំនួន ${total} រង់ចាំអ្នក ចាប់ពីមូលដ្ឋានរហូតដល់ Object-Oriented Programming។ ព្យាយាមដោះស្រាយដោយខ្លួនឯងជាមុន រួចទើបបើកមើលចម្លើយ ដើម្បីឱ្យការគិតរបស់អ្នករឹងមាំឡើង។</p>
          <div class="hero-actions">
            <a class="button button-primary button-lg" href="#/exercises">${U.icon("book-open")}ចាប់ផ្តើមអនុវត្ត</a>
            <button class="button button-secondary button-lg" type="button" data-action="random-challenge" data-source="dashboard">${U.icon("shuffle")}លំហាត់ចៃដន្យ</button>
          </div>
        </div>
        <aside class="progress-panel">
          <div class="progress-panel-head">
            <div>
              <h2>វឌ្ឍនភាពរបស់អ្នក</h2>
              <p>${done} ក្នុង ${total} លំហាត់</p>
            </div>
            <span class="badge badge-neutral">${U.icon("activity")}Live</span>
          </div>
          ${U.getProgressCircle(percent, "បានបញ្ចប់")}
          <div class="progress-panel-meta">
            <div class="progress-meta-item"><span>បានបញ្ចប់</span><strong>${done}</strong></div>
            <div class="progress-meta-item"><span>ថ្ងៃនេះ</span><strong>${activity.today}</strong></div>
          </div>
        </aside>
      </section>

      <div class="stats-grid">
        <article class="stat-card"><span class="stat-icon accent">${U.icon("book-open")}</span><div class="stat-card-copy"><span>លំហាត់សរុប</span><strong>${total}</strong></div></article>
        <article class="stat-card"><span class="stat-icon success">${U.icon("circle-check-big")}</span><div class="stat-card-copy"><span>បានបញ្ចប់</span><strong>${done}</strong></div></article>
        <article class="stat-card"><span class="stat-icon warning">${U.icon("circle-dashed")}</span><div class="stat-card-copy"><span>នៅសល់</span><strong>${remaining}</strong></div></article>
        <article class="stat-card"><span class="stat-icon">${U.icon("flame")}</span><div class="stat-card-copy"><span>ថ្ងៃបន្តបន្ទាប់</span><strong>${activity.streak}</strong></div></article>
      </div>
      <div class="progress-reset-row">
        <button class="text-button danger" type="button" data-action="reset-progress">${U.icon("rotate-ccw")}Reset Progress</button>
        <span class="muted khmer">លុបវឌ្ឍនភាពទាំងអស់ ប៉ុន្តែរក្សា theme បច្ចុប្បន្ន។</span>
      </div>
      ${continueMarkup}

      <section class="section">
        <div class="section-header">
          <div><h2>ជម្រើសសម្រាប់ថ្ងៃនេះ</h2><p>Daily Challenge និងការអនុវត្តចៃដន្យ ដើម្បីរក្សាទម្លាប់រៀន។</p></div>
        </div>
        <div class="spotlight-grid">
          <article class="spotlight-card">
            <div class="spotlight-head"><span class="spotlight-label">${U.icon("sun")}Daily Challenge</span><span class="spotlight-date">${U.formatKhmerDate(new Date())}</span></div>
            ${dailyMarkup}
          </article>
          <article class="spotlight-card">
            <div class="spotlight-head"><span class="spotlight-label">${U.icon("shuffle")}Random Practice</span></div>
            <h3>ជ្រើសរើសកម្រិតរបស់អ្នក</h3>
            <p class="description">ជ្រើស difficulty មួយ ហើយទុកឱ្យប្រព័ន្ធជ្រើសលំហាត់មួយសម្រាប់អ្នក។</p>
            <div class="random-controls">
              <div>
                <label for="dashboard-random-difficulty">កម្រិតពិបាក</label>
                <div class="random-inline">
                  <select id="dashboard-random-difficulty">
                    <option value="all">គ្រប់កម្រិត</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="challenge">Challenge</option>
                  </select>
                  <button class="button button-primary" type="button" data-action="random-challenge" data-source="dashboard-select">${U.icon("shuffle")}ទាញ</button>
                </div>
              </div>
              <div class="random-card-result" id="random-result">${U.icon("sparkles")}ចុចប៊ូតុង ដើម្បីចាប់ផ្តើមលំហាត់ចៃដន្យ</div>
            </div>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div><h2>ផ្លូវរៀន C++</h2><p>រាល់ប្រធានបទមានលំហាត់ច្រើនកម្រិត និងវឌ្ឍនភាពដោយឡែក។</p></div>
          <a class="section-link" href="#/exercises">មើលលំហាត់ទាំងអស់${U.icon("arrow-right")}</a>
        </div>
        <div class="roadmap-grid">${stageCards}</div>
      </section>

      <section class="section">
        <div class="section-header">
          <div><h2>បានអនុវត្តថ្មីៗ</h2><p>ត្រឡប់ទៅលំហាត់ដែលអ្នកបានបើកដោយឆាប់រហ័ស។</p></div>
          <a class="section-link" href="#/exercises?status=working">កំពុងអនុវត្ត${U.icon("arrow-right")}</a>
        </div>
        ${recentMarkup}
      </section>`;
  }

  function activeFilterChips() {
    var filters = A.ui.filters;
    var chips = [];

    if (filters.search && filters.search.trim()) {
      chips.push({ key: "search", label: 'ស្វែងរក: "' + U.truncate(filters.search.trim(), 24) + '"' });
    }
    if (filters.topic && filters.topic !== "all") {
      chips.push({ key: "topic", label: "ប្រធានបទ: " + A.getTopicName(filters.topic) });
    }
    if (filters.difficulty && filters.difficulty !== "all") {
      chips.push({ key: "difficulty", label: "កម្រិត: " + U.difficultyLabel(filters.difficulty) });
    }
    if (filters.status && filters.status !== "all") {
      chips.push({ key: "status", label: "ស្ថានភាព: " + (A.STATUS_LABELS[filters.status] || filters.status) });
    }
    if (filters.sort && filters.sort !== "number") {
      chips.push({ key: "sort", label: "តម្រៀប: " + (A.SORT_LABELS[filters.sort] || filters.sort) });
    }
    if (filters.bookmarked) {
      chips.push({ key: "bookmarked", label: "រក្សាទុកតែប៉ុណ្ណោះ" });
    }

    return chips.map(function (chip) {
      return `<span class="filter-chip">${A.esc(chip.label)}<button type="button" data-action="remove-filter" data-key="${A.esc(chip.key)}" aria-label="លុប filter ${A.esc(chip.label)}">${U.icon("x")}</button></span>`;
    }).join("");
  }

  function renderFilterPanel() {
    var filters = A.ui.filters;
    var active = Filters.hasActiveFilters(filters);

    return `
      <div class="filter-panel" id="filter-panel">
        <div class="filter-row">
          <div class="field field-search">
            <label for="exercise-search">ស្វែងរក</label>
            <div class="input-wrap">${U.icon("search")}<input id="exercise-search" type="search" value="${A.esc(filters.search)}" placeholder="ឈ្មោះលំហាត់ ឬពាក្យគន្លឹះ..." autocomplete="off" data-filter="search"></div>
          </div>
          <div class="field"><label for="filter-topic">ប្រធានបទ</label><select id="filter-topic" data-filter="topic">${A.topicOptionsMarkup(filters.topic)}</select></div>
          <div class="field"><label for="filter-difficulty">កម្រិតពិបាក</label><select id="filter-difficulty" data-filter="difficulty">${A.optionsMarkup([
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
            { value: "challenge", label: "Challenge" }
          ], filters.difficulty, { value: "all", label: "គ្រប់កម្រិត" })}</select></div>
          <div class="field"><label for="filter-status">ស្ថានភាព</label><select id="filter-status" data-filter="status">${A.optionsMarkup([
            { value: "incomplete", label: "មិនទាន់បញ្ចប់" },
            { value: "completed", label: "បានបញ្ចប់" },
            { value: "working", label: "កំពុងអនុវត្ត" }
          ], filters.status, { value: "all", label: "ទាំងអស់" })}</select></div>
          <div class="field"><label for="filter-sort">តម្រៀបតាម</label><select id="filter-sort" data-filter="sort">${A.optionsMarkup([
            { value: "difficulty-asc", label: "ងាយ → ពិបាក" },
            { value: "difficulty-desc", label: "ពិបាក → ងាយ" },
            { value: "title", label: "ចំណងជើង" }
          ], filters.sort, { value: "number", label: "លេខលំហាត់" })}</select></div>
        </div>
        <div class="filter-actions">
          <div class="filter-actions-left">
            <button class="filter-toggle${filters.bookmarked ? " is-active" : ""}" type="button" data-action="toggle-bookmark-filter" aria-pressed="${filters.bookmarked}">${U.icon("bookmark")}រក្សាទុកតែប៉ុណ្ណោះ</button>
            <div class="active-filters" id="active-filters">${activeFilterChips()}</div>
          </div>
          <div class="filter-actions-right">
            <button class="button button-ghost button-sm" type="button" data-action="clear-filters"${active ? "" : " hidden"}>${U.icon("rotate-ccw")}Clear Filters</button>
          </div>
        </div>
      </div>`;
  }

  function renderExerciseResults() {
    var results = Filters.apply(A.exercises, A.ui.filters);
    var resultContainer = document.getElementById("exercise-results");
    var countContainer = document.getElementById("results-count");
    var chipContainer = document.getElementById("active-filters");
    var clearButton = document.querySelector('[data-action="clear-filters"]');
    var bookmarkButton = document.querySelector('[data-action="toggle-bookmark-filter"]');
    var active = Filters.hasActiveFilters(A.ui.filters);

    if (!resultContainer) {
      return;
    }

    resultContainer.innerHTML = results.length
      ? `<div class="exercise-grid">${results.map(A.renderExerciseCard).join("")}</div>`
      : A.emptyState({
        icon: "search-x",
        title: "រកមិនឃើញលំហាត់",
        message: "សូមសាកល្បងផ្លាស់ប្តូរពាក្យស្វែងរក ឬលុប filter មួយចំនួន។",
        action: active ? `<button class="button button-primary button-sm" type="button" data-action="clear-filters">${U.icon("rotate-ccw")}Clear Filters</button>` : ""
      });

    if (countContainer) {
      countContainer.innerHTML = `បង្ហាញ <strong>${results.length}</strong> ក្នុង ${A.exercises.length} លំហាត់`;
    }

    if (chipContainer) {
      chipContainer.innerHTML = activeFilterChips();
    }

    if (clearButton) {
      clearButton.hidden = !active;
    }

    if (bookmarkButton) {
      bookmarkButton.classList.toggle("is-active", A.ui.filters.bookmarked);
      bookmarkButton.setAttribute("aria-pressed", String(A.ui.filters.bookmarked));
    }

    U.refreshIcons();
  }

  function renderExercises() {
    var done = A.completedExercises().length;

    return `
      <div class="page-head">
        <div class="page-head-copy">
          <span class="eyebrow">${U.icon("book-open")}បណ្ណាល័យលំហាត់</span>
          <h1 class="page-title">អនុវត្តតាមផ្លូវរៀន C++</h1>
          <p class="page-subtitle">${A.exercises.length} លំហាត់ ក្នុង ${A.topics.length} ប្រធានបទ។ ស្វែងរក ត្រង និងតាមដានវឌ្ឍនភាពរបស់អ្នកនៅកន្លែងតែមួយ។</p>
        </div>
        <span class="badge badge-neutral">${U.icon("circle-check-big")}${done} បានបញ្ចប់</span>
      </div>
      ${renderFilterPanel()}
      <div class="results-bar">
        <p class="results-count" id="results-count"></p>
        <span class="view-note">${U.icon("info")} ចុចលើលំហាត់ ដើម្បីអានលម្អិត</span>
      </div>
      <div id="exercise-results"></div>`;
  }

  function renderChallenges() {
    var challengePool = A.exercises.filter(function (exercise) { return exercise.difficulty === "challenge"; });
    var daily = A.pickDaily(challengePool.length ? challengePool : A.exercises, "challenge");
    var dailyTopic = daily ? A.getTopic(daily.topicId) : null;
    var doneCount = challengePool.filter(function (exercise) { return Storage.isCompleted(exercise.id); }).length;
    var percent = U.percent(doneCount, challengePool.length);
    var visible = challengePool.slice(0, A.ui.challengeLimit);
    var remaining = Math.max(0, challengePool.length - visible.length);

    var difficulties = [
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" },
      { value: "challenge", label: "Challenge" }
    ];

    var difficultyButtons = difficulties.map(function (item) {
      return `<button class="difficulty-pill${A.ui.challengeDifficulty === item.value ? " is-active" : ""}" type="button" data-action="set-challenge-difficulty" data-difficulty="${item.value}">${item.label}</button>`;
    }).join("");

    var dailyMarkup = daily ? `
      <div class="spotlight-meta">
        ${A.difficultyBadge(daily.difficulty)}
        ${dailyTopic ? A.topicBadge(dailyTopic.id) : ""}
        <span class="badge badge-neutral">${U.icon("calendar")}${U.formatKhmerDate(new Date())}</span>
      </div>
      <h2 style="font-family:var(--font-khmer);font-size:24px;margin:17px 0 7px;">${A.esc(daily.title)}</h2>
      <p class="description" style="max-width:520px;">${A.esc(daily.description)}</p>
      <div class="challenge-main-actions">
        <a class="button button-primary button-lg" href="${A.exerciseHref(daily.id)}">ចាប់ផ្តើម Daily Challenge${U.icon("arrow-right")}</a>
        <button class="button button-secondary button-lg" type="button" data-action="random-challenge" data-source="challenges">${U.icon("shuffle")}Random Challenge</button>
      </div>`
      : `<h1>មិនទាន់មាន Challenge</h1>`;

    return `
      <div class="challenge-hero">
        <section class="challenge-main-card">
          <span class="eyebrow">${U.icon("zap")}Challenge Zone</span>
          <h1>យកជ័យជម្នះលើបញ្ហាពិបាក</h1>
          <p>សាកល្បងសមត្ថភាពរបស់អ្នកជាមួយលំហាត់ដែលត្រូវការគំនិតច្នៃប្រឌិត និងការរួមបញ្ចូលចំណេះដឹងពីប្រធានបទមុនៗ។</p>
          ${dailyMarkup}
        </section>
        <aside class="challenge-random-card">
          <div><h2>ជ្រើសរើសកម្រិត</h2><p>ជ្រើស difficulty មួយ រួចទាញលំហាត់ចៃដន្យភ្លាមៗ។</p></div>
          <div class="difficulty-picker">${difficultyButtons}</div>
          <div class="random-card-result">${U.icon("target")}កម្រិតដែលបានជ្រើស៖ <strong>${A.esc(U.difficultyLabel(A.ui.challengeDifficulty))}</strong></div>
          <button class="button button-primary button-block" type="button" data-action="random-challenge" data-source="challenges-select">${U.icon("shuffle")}ទាញលំហាត់ចៃដន្យ</button>
        </aside>
      </div>

      <div class="challenge-stats">
        <article class="challenge-stat"><span>Challenge សរុប</span><strong>${challengePool.length}</strong></article>
        <article class="challenge-stat"><span>បានបញ្ចប់</span><strong>${doneCount}</strong></article>
        <article class="challenge-stat"><span>អត្រាបញ្ចប់</span><strong>${percent}%</strong></article>
      </div>

      <section class="section" id="challenge-bank">
        <div class="section-header">
          <div><h2>Challenge Bank</h2><p>លំហាត់កម្រិត Challenge ទាំងអស់ ដើម្បីហ្វឹកហាត់បន្ថែម។</p></div>
          <span class="badge badge-challenge">${U.icon("zap")}${challengePool.length} Challenges</span>
        </div>
        ${visible.length ? `<div class="exercise-grid">${visible.map(A.renderExerciseCard).join("")}</div>` : A.emptyState({ icon: "zap", title: "មិនទាន់មាន Challenge", message: "Challenge នឹងបង្ហាញនៅទីនេះ។" })}
        ${remaining ? `<div style="text-align:center;margin-top:18px;"><button class="button button-secondary" type="button" data-action="load-more-challenges">មើលបន្ថែម (${remaining} ទៀត)${U.icon("chevron-down")}</button></div>` : ""}
      </section>`;
  }

  function renderBookmarks() {
    var state = Storage.getState();
    var bookmarked = A.exercises.filter(function (exercise) {
      return state.bookmarked.indexOf(exercise.id) !== -1;
    });

    return `
      <div class="page-head">
        <div class="page-head-copy">
          <span class="eyebrow">${U.icon("bookmark")}រក្សាទុកសម្រាប់ពេលក្រោយ</span>
          <h1 class="page-title">លំហាត់ដែលអ្នកបានរក្សាទុក</h1>
          <p class="page-subtitle">ប្រមូលលំហាត់ពិបាក ឬសំខាន់ទុកនៅទីនេះ ដើម្បីត្រឡប់មកវិញពេលអ្នកមានពេល។</p>
        </div>
        <span class="badge badge-neutral">${U.icon("bookmark")}${bookmarked.length} រក្សាទុក</span>
      </div>
      ${bookmarked.length
        ? `<div class="exercise-grid">${bookmarked.map(A.renderExerciseCard).join("")}</div>`
        : A.emptyState({
          icon: "bookmark",
          title: "មិនទាន់មានលំហាត់រក្សាទុក",
          message: "ចុច icon រក្សាទុកនៅលើលំហាត់ណាមួយ ដើម្បីបន្ថែមវាទៅទីនេះ។",
          action: `<a class="button button-primary button-sm" href="#/exercises">${U.icon("book-open")}រកមើលលំហាត់</a>`
        })}`;
  }

  function renderPlayground() {
    var templates = A.Playground.getTemplateList();
    var templateButtons = templates.map(function (template) {
      return `<button class="template-button" type="button" data-action="load-template" data-template="${A.esc(template.key)}">${U.icon("file-code-2")}${A.esc(template.label)}</button>`;
    }).join("");

    return `
      <div class="playground-head">
        <div class="page-head-copy">
          <span class="eyebrow">${U.icon("code-2")}Code Playground</span>
          <h1 class="page-title">កន្លែងសរសេរកូដ C++</h1>
          <p class="page-subtitle">សរសេរ សាកល្បងគំនិត និងរក្សាទុកកូដរបស់អ្នកក្នុង browser។ ចុច Run Code ដើម្បី compile និងដំណើរការកូដ C++ នៅលើ online compiler។</p>
        </div>
        <span class="badge badge-complete">${U.icon("circle-play")}Online C++ compiler</span>
      </div>

      <div class="playground-layout">
        <section class="editor-shell">
          <div class="editor-toolbar">
            <div class="editor-toolbar-left">
              <span class="editor-label">${U.icon("file-code-2")}main.cpp</span>
              <span class="editor-status"><span class="status-dot"></span><span id="editor-save-state">រក្សាទុកដោយស្វ័យប្រវត្តិ</span></span>
            </div>
            <div class="editor-toolbar-right">
              <button class="button button-sm button-primary" id="run-code-button" type="button" data-action="run-code">${U.icon("play")}<span id="run-code-label">Run Code</span></button>
              <button class="button button-sm button-ghost" type="button" data-action="copy-playground">${U.icon("copy")}Copy</button>
              <button class="button button-sm button-ghost" type="button" data-action="download-playground">${U.icon("download")}Download .cpp</button>
              <button class="button button-sm button-ghost" type="button" data-action="clear-playground">${U.icon("eraser")}Clear</button>
            </div>
          </div>
          <div class="editor-area" id="playground-editor"></div>
          <div class="runner-panel">
            <div class="runner-pane">
              <div class="runner-pane-head">
                <span>${U.icon("keyboard")}Input (stdin)</span>
                <span class="runner-hint">Optional</span>
              </div>
              <textarea class="runner-input" id="playground-stdin" spellcheck="false" placeholder="បញ្ចូលទិន្នន័យសម្រាប់ cin នៅទីនេះ..."></textarea>
            </div>
            <div class="runner-pane">
              <div class="runner-pane-head">
                <span>${U.icon("terminal")}Output</span>
                <span class="runner-status" id="runner-status">Ready</span>
                <button class="runner-clear" type="button" data-action="clear-run-output">${U.icon("trash-2")}Clear</button>
              </div>
              <div class="runner-output" id="playground-output" aria-live="polite">
                <div class="console-empty">${U.icon("circle-play")}ចុច <strong>Run Code</strong> ដើម្បីមើលលទ្ធផលនៅទីនេះ។</div>
              </div>
            </div>
          </div>
        </section>

        <aside class="playground-sidebar">
          <div class="info-card warning">
            <h3>${U.icon("globe-2")}Online compiler</h3>
            <p>Run Code ប្រើ <strong>Judge0 CE</strong> ឬ <strong>Wandbox</strong> តាមរយៈ internet។ កូដ និង input របស់អ្នកត្រូវបញ្ជូនទៅ service សាធារណៈទាំងនោះ។ <strong>សូមកុំដាក់ secret, password ឬទិន្នន័យឯកជន</strong>ក្នុងកូដ។</p>
          </div>
          <div class="info-card">
            <h3>${U.icon("layout-template")}Templates</h3>
            <div class="template-list">${templateButtons}</div>
          </div>
          <div class="info-card">
            <h3>${U.icon("terminal")}Compile នៅកុំព្យូទ័រ</h3>
            <ol>
              <li>រក្សាទុកកូដជា <code>main.cpp</code>។</li>
              <li>បើក terminal ក្នុង folder នោះ។</li>
              <li>វាយ <code>g++ main.cpp -std=c++17 -o main</code>។</li>
              <li>ដំណើរការដោយ <code>./main</code> ឬ <code>main.exe</code> នៅ Windows។</li>
            </ol>
          </div>
        </aside>
      </div>`;
  }

  function renderNotFound() {
    return A.emptyState({
      icon: "map-pin-off",
      title: "រកមិនឃើញទំព័រ",
      message: "តំណភ្ជាប់ដែលអ្នកចូលអាចខុស ឬលំហាត់នេះមិនមាន។",
      action: `<a class="button button-primary button-sm" href="#/dashboard">ត្រឡប់ទៅផ្ទាំងគ្រប់គ្រង</a>`
    });
  }

  window.CPPViews = {
    renderDashboard: renderDashboard,
    renderExercises: renderExercises,
    renderExerciseResults: renderExerciseResults,
    renderChallenges: renderChallenges,
    renderBookmarks: renderBookmarks,
    renderPlayground: renderPlayground,
    renderNotFound: renderNotFound
  };
})();
