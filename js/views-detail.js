(function () {
  "use strict";

  var A = window.CPPApp;
  var U = A.Utils;
  var Storage = A.Storage;

  var solutionClearTimer = null;

  function solutionGateMarkup(exercise, open) {
    return `
      <div class="solution-gate" id="solution-gate">
        <span class="solution-lock">${U.icon(open ? "unlock" : "lock")}</span>
        <div class="solution-gate-copy">
          <strong>${open ? "ចម្លើយកំពុងបង្ហាញ" : "ចម្លើយត្រូវបានលាក់"}</strong>
          <p>${open ? "អ្នកអាចលាក់ចម្លើយវិញ ដើម្បីសាកល្បងម្តងទៀត។" : "សូមព្យាយាមដោះស្រាយដោយខ្លួនឯងជាមុន។ ចម្លើយនឹងបង្ហាញបន្ទាប់ពីអ្នកបញ្ជាក់។"}</p>
        </div>
        <button class="button button-sm ${open ? "button-secondary" : "button-primary"}" type="button" data-action="toggle-solution" data-id="${A.esc(exercise.id)}">${U.icon(open ? "eye-off" : "eye")}${open ? "Hide Solution" : "មើលចម្លើយ"}</button>
      </div>`;
  }

  function solutionContentMarkup(exercise) {
    return `
      <div class="solution-content">
        <div class="code-block">
          <div class="code-block-head">
            <div class="code-block-head-left"><span class="code-dots"><i></i><i></i><i></i></span><span class="code-file">solution.cpp</span></div>
            <button class="copy-code" type="button" data-action="copy-solution" data-id="${A.esc(exercise.id)}">${U.icon("copy")}Copy Code</button>
          </div>
          <pre><code>${U.highlightCpp(exercise.solution || "")}</code></pre>
        </div>
        <div class="content-card" style="padding:16px;box-shadow:none;">
          <h3 style="margin-top:0;">ការពន្យល់អំពីដំណោះស្រាយ</h3>
          <div class="explanation">${A.rich(exercise.explanation || "")}</div>
        </div>
        ${exercise.expectedOutput ? `<div class="expected-output-card"><div class="code-block-head"><span>Expected Output</span></div><pre>${A.esc(exercise.expectedOutput)}</pre></div>` : ""}
      </div>`;
  }

  function solutionSectionMarkup(exercise) {
    var open = A.ui.openSolutions.has(exercise.id);
    return `
      <section class="content-card solution-section" id="solution-section">
        <h2>${U.icon("lock-keyhole")}ចម្លើយ និងការពន្យល់</h2>
        ${solutionGateMarkup(exercise, open)}
        <div class="reveal-wrap${open ? " is-open" : ""}" id="solution-reveal">
          <div class="reveal-inner"></div>
        </div>
      </section>`;
  }

  function setSolutionOpen(exercise, open, animate) {
    var wrap = document.getElementById("solution-reveal");
    var gate = document.getElementById("solution-gate");

    if (!wrap) {
      return;
    }

    var inner = wrap.querySelector(".reveal-inner");
    if (!inner) {
      return;
    }

    if (solutionClearTimer) {
      window.clearTimeout(solutionClearTimer);
      solutionClearTimer = null;
    }

    if (gate) {
      gate.outerHTML = solutionGateMarkup(exercise, open);
    }

    if (open) {
      inner.innerHTML = solutionContentMarkup(exercise);
      if (animate === false) {
        wrap.classList.add("is-open");
      } else {
        window.requestAnimationFrame(function () {
          wrap.classList.add("is-open");
        });
      }
      U.refreshIcons();
    } else {
      wrap.classList.remove("is-open");
      solutionClearTimer = window.setTimeout(function () {
        inner.innerHTML = "";
        solutionClearTimer = null;
      }, 280);
      U.refreshIcons();
    }
  }

  function restoreOpenPanels(exercise) {
    if (A.ui.openSolutions.has(exercise.id)) {
      setSolutionOpen(exercise, true, false);
    }
  }

  function quizMarkup(exercise) {
    if (exercise.type !== "quiz") {
      return "";
    }

    var answer = Storage.getQuizAnswer(exercise.id);
    var answered = answer !== null && answer !== undefined;
    var correct = Number(exercise.correctIndex);
    var options = exercise.options || [];

    var optionsMarkup = options.map(function (option, index) {
      var className = "quiz-option";
      if (answered) {
        className += " is-locked";
        if (index === correct) {
          className += " is-correct";
        } else if (index === Number(answer)) {
          className += " is-incorrect";
        }
      }
      return `<button class="${className}" type="button" data-action="quiz-answer" data-id="${A.esc(exercise.id)}" data-index="${index}"${answered ? " disabled" : ""}><span class="quiz-option-letter">${String.fromCharCode(65 + index)}</span><span>${A.rich(option)}</span></button>`;
    }).join("");

    var feedback = "";
    if (answered) {
      var isCorrect = Number(answer) === correct;
      feedback = `<div class="quiz-feedback ${isCorrect ? "correct" : "incorrect"}">${U.icon(isCorrect ? "circle-check-big" : "circle-x")}<div>${isCorrect ? "ត្រឹមត្រូវ! " : "មិនទាន់ត្រូវទេ។ ចម្លើយត្រឹមត្រូវគឺ " + String.fromCharCode(65 + correct) + "។ "}${A.rich(exercise.quizExplanation || "មើលការពន្យល់បន្ថែមនៅផ្នែកចម្លើយ។")}</div></div>`;
    }

    return `
      <section class="content-card">
        <h2>${U.icon("list-checks")}Quiz ខ្លីៗ</h2>
        <div class="quiz-block">
          ${exercise.snippet ? `<div class="code-block code-inline-block"><div class="code-block-head"><span class="code-file">question.cpp</span></div><pre><code>${U.highlightCpp(exercise.snippet)}</code></pre></div>` : ""}
          <p class="quiz-question">${A.rich(exercise.quizQuestion || "ជ្រើសរើសចម្លើយត្រឹមត្រូវ។")}</p>
          <div class="quiz-options">${optionsMarkup}</div>
          ${feedback}
        </div>
      </section>`;
  }

  function stackPanels(exercise) {
    var output = exercise.expectedOutput || "";
    var hintOpen = A.ui.openHints.has(exercise.id);
    var outputOpen = A.ui.openOutputs.has(exercise.id);

    return `
      ${exercise.hint ? `
        <section class="content-card hint-section">
          <h2>${U.icon("lightbulb")}Hint</h2>
          <div class="hint-gate">
            <p>ប្រើ hint ដើម្បីរកទិសដៅ ប៉ុន្តែសូមព្យាយាមសរសេរកូដដោយខ្លួនឯងជាមុន។</p>
            <button class="button button-sm button-secondary" type="button" data-action="toggle-hint" data-id="${A.esc(exercise.id)}">${U.icon("eye")}${hintOpen ? "លាក់ Hint" : "Show Hint"}</button>
          </div>
          <div class="reveal-wrap${hintOpen ? " is-open" : ""}" id="hint-reveal">
            <div class="reveal-inner"><div class="hint-content">${U.icon("lightbulb")}<div>${A.rich(exercise.hint)}</div></div></div>
          </div>
        </section>` : ""}
      ${output ? `
        <section class="content-card">
          <h2>${U.icon("monitor-check")}លទ្ធផលរំពឹងទុក</h2>
          <p class="muted khmer" style="font-size:12px;margin-bottom:11px;">សាកល្បងសរសេរកូដ ឬទាយលទ្ធផលជាមុន រួចទើបបើកមើលលទ្ធផលនេះ។</p>
          <button class="button button-sm button-secondary reveal-output-button" type="button" data-action="toggle-output" data-id="${A.esc(exercise.id)}">${U.icon("eye")}${outputOpen ? "លាក់លទ្ធផល" : "Show Expected Output"}</button>
          <div class="reveal-wrap${outputOpen ? " is-open" : ""}" id="output-reveal">
            <div class="reveal-inner"><div class="expected-output-card"><pre>${A.esc(output)}</pre></div></div>
          </div>
        </section>` : ""}`;
  }

  function referenceMarkup(exercise) {
    var reference = exercise.reference;
    if (!reference || !reference.url) {
      return "";
    }

    return `
      <a class="exercise-reference" href="${A.esc(reference.url)}" target="_blank" rel="noopener noreferrer">
        ${U.icon("book-open")}
        <span>${A.esc(reference.label || "Reference")}</span>
        ${U.icon("external-link")}
      </a>`;
  }

  function detailQuickFacts(exercise, topic) {
    var state = Storage.getState();
    var topicExercises = A.exercisesByTopic[exercise.topicId] || [];
    var topicDone = A.completedInTopic(exercise.topicId);
    var topicPercent = U.percent(topicDone, topicExercises.length);

    return `
      <section class="detail-sidebar-card">
        <h3>ព័ត៌មានលំហាត់</h3>
        <dl class="quick-facts">
          <div><dt>លេខសម្គាល់</dt><dd>${A.esc(A.formatExerciseId(exercise.id))}</dd></div>
          <div><dt>ប្រធានបទ</dt><dd>${A.esc(topic ? topic.name : "C++")}</dd></div>
          <div><dt>កម្រិត</dt><dd>${A.esc(U.difficultyLabel(exercise.difficulty))}</dd></div>
          <div><dt>ប្រភេទ</dt><dd>${exercise.type === "quiz" ? "Quiz" : "Coding"}</dd></div>
          <div><dt>ស្ថានភាព</dt><dd>${state.completed.indexOf(exercise.id) !== -1 ? "បានបញ្ចប់" : "មិនទាន់បញ្ចប់"}</dd></div>
          <div><dt>បានមើលចម្លើយ</dt><dd>${state.revealed.indexOf(exercise.id) !== -1 ? "បាទ/ចាស" : "មិនទាន់"}</dd></div>
        </dl>
        <div class="sidebar-progress">
          <div class="sidebar-progress-head"><span>វឌ្ឍនភាពប្រធានបទ</span><strong>${topicDone}/${topicExercises.length}</strong></div>
          <div class="progress-track"><div class="progress-fill" style="width:${topicPercent}%"></div></div>
        </div>
        <div class="sidebar-actions">
          <a class="button button-secondary button-sm button-block" href="#/exercises?topic=${encodeURIComponent(exercise.topicId)}">${U.icon("book-open")}លំហាត់ក្នុងប្រធានបទ</a>
          <button class="button button-secondary button-sm button-block" type="button" data-action="print-exercise">${U.icon("printer")}Print Exercise</button>
        </div>
      </section>`;
  }

  function renderExerciseDetail(exercise) {
    var topic = A.getTopic(exercise.topicId);
    var state = Storage.getState();
    var completed = state.completed.indexOf(exercise.id) !== -1;
    var bookmarked = state.bookmarked.indexOf(exercise.id) !== -1;
    var index = A.exercises.findIndex(function (item) { return item.id === exercise.id; });
    var previous = index > 0 ? A.exercises[index - 1] : null;
    var next = index < A.exercises.length - 1 ? A.exercises[index + 1] : null;
    var samples = exercise.samples || [];

    var requirements = (exercise.requirements || []).map(function (requirement) {
      return `<li>${U.icon("check")}<span>${A.rich(requirement)}</span></li>`;
    }).join("");

    var constraints = (exercise.constraints || []).length
      ? `<section class="content-card"><h2>${U.icon("shield-alert")}លក្ខខណ្ឌ និងកំណត់សម្គាល់</h2><ul class="constraint-list">${exercise.constraints.map(function (item) { return `<li>${A.rich(item)}</li>`; }).join("")}</ul></section>`
      : "";

    var ioCard = (exercise.input || exercise.output || samples.length)
      ? `
        <section class="content-card">
          <h2>${U.icon("arrow-left-right")}Input / Output</h2>
          ${exercise.input || exercise.output ? `<div class="io-grid">
            ${exercise.input ? `<div class="io-card"><div class="io-card-label">${U.icon("log-in")}Input</div><p>${A.rich(exercise.input)}</p></div>` : ""}
            ${exercise.output ? `<div class="io-card"><div class="io-card-label">${U.icon("log-out")}Output</div><p>${A.rich(exercise.output)}</p></div>` : ""}
          </div>` : ""}
          ${samples.length ? `<h3>ឧទាហរណ៍</h3>${samples.map(function (sample, sampleIndex) {
            var hasInput = sample.input !== undefined && sample.input !== null && String(sample.input).length > 0;
            return `
              <div class="sample-block">
                <div class="sample-block-head"><span>Sample ${sampleIndex + 1}</span><span>Input → Output</span></div>
                <div class="sample-grid${hasInput ? "" : " single"}">
                  ${hasInput ? `<div class="sample-column"><span class="sample-column-label">Input</span><pre>${A.esc(sample.input)}</pre></div>` : ""}
                  <div class="sample-column"><span class="sample-column-label">Output</span><pre class="output">${A.esc(sample.output)}</pre></div>
                </div>
              </div>`;
          }).join("")}` : ""}
        </section>`
      : "";

    var previousMarkup = previous
      ? `<a class="exercise-nav-link" href="${A.exerciseHref(previous.id)}"><span class="exercise-nav-label">${U.icon("arrow-left")}Previous</span><span class="exercise-nav-title">${A.esc(previous.title)}</span></a>`
      : "<span></span>";
    var nextMarkup = next
      ? `<a class="exercise-nav-link next" href="${A.exerciseHref(next.id)}"><span class="exercise-nav-label">Next${U.icon("arrow-right")}</span><span class="exercise-nav-title">${A.esc(next.title)}</span></a>`
      : "<span></span>";

    return `
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="#/dashboard">ផ្ទាំងគ្រប់គ្រង</a>${U.icon("chevron-right")}
        <a href="#/exercises">លំហាត់</a>${U.icon("chevron-right")}
        <a href="#/exercises?topic=${encodeURIComponent(exercise.topicId)}">${A.esc(topic ? topic.name : "C++")}</a>${U.icon("chevron-right")}
        <span>${A.esc(A.formatExerciseId(exercise.id))}</span>
      </nav>

      <section class="detail-hero">
        <div class="detail-hero-top">
          ${A.difficultyBadge(exercise.difficulty)}
          ${A.typeBadge(exercise)}
          ${A.topicBadge(exercise.topicId)}
          ${completed ? `<span class="badge badge-complete">${U.icon("circle-check")}Completed</span>` : ""}
        </div>
        <h1 id="exercise-detail-title">${A.esc(exercise.title)}</h1>
        <p class="exercise-id">Exercise ID: ${A.esc(A.formatExerciseId(exercise.id))}</p>
        <div class="detail-hero-actions">
          <button class="button ${completed ? "button-success" : "button-primary"}" type="button" data-action="toggle-complete" data-id="${A.esc(exercise.id)}">${U.icon(completed ? "circle-check-big" : "circle")}${completed ? "បានបញ្ចប់" : "សម្គាល់ថាបានបញ្ចប់"}</button>
          <button class="button button-secondary" type="button" data-action="toggle-bookmark" data-id="${A.esc(exercise.id)}">${U.icon("bookmark")}${bookmarked ? "ដកចេញពីរក្សាទុក" : "រក្សាទុកលំហាត់"}</button>
          <button class="button button-ghost" type="button" data-action="print-exercise">${U.icon("printer")}Print</button>
        </div>
      </section>

      <div class="detail-layout">
        <div class="detail-main">
          <section class="content-card">
            <h2>${U.icon("file-text")}ការពិពណ៌នាបញ្ហា</h2>
            <div class="problem-description">${A.rich(exercise.description)}</div>
            ${requirements ? `<h3>តម្រូវការ</h3><ul class="requirements-list">${requirements}</ul>` : ""}
            ${referenceMarkup(exercise)}
          </section>
          ${quizMarkup(exercise)}
          ${ioCard}
          ${constraints}
          ${stackPanels(exercise)}
          ${solutionSectionMarkup(exercise)}
          <div class="exercise-nav">${previousMarkup}${nextMarkup}</div>
        </div>
        <aside class="detail-aside">
          ${detailQuickFacts(exercise, topic)}
        </aside>
      </div>`;
  }

  window.CPPViews = window.CPPViews || {};
  window.CPPViews.renderExerciseDetail = renderExerciseDetail;
  window.CPPViews.restoreOpenPanels = restoreOpenPanels;
  window.CPPViews.setSolutionOpen = setSolutionOpen;
  window.CPPViews.solutionContentMarkup = solutionContentMarkup;
})();
