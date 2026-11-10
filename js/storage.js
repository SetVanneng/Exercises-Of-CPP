window.CPPStorage = (function () {
  var STORAGE_KEY = "cppPracticeHub.v1";

  var DEFAULT_STATE = {
    version: 1,
    theme: null,
    completed: [],
    bookmarked: [],
    working: [],
    revealed: [],
    quizAnswers: {},
    recent: [],
    lastExercise: null,
    activity: {},
    playgroundCode: "",
    filters: {
      search: "",
      topic: "all",
      difficulty: "all",
      status: "all",
      sort: "number",
      bookmarked: false
    }
  };

  var available = true;
  var listeners = [];
  var state = loadState();

  function createDefaultState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function safeArray(value) {
    return Array.isArray(value) ? value.filter(function (item) { return typeof item === "string"; }) : [];
  }

  function loadState() {
    var fallback = createDefaultState();

    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return fallback;
      }

      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return fallback;
      }

      return normaliseState(parsed);
    } catch (error) {
      available = false;
      return fallback;
    }
  }

  function normaliseState(value) {
    var base = createDefaultState();
    var filters = value.filters && typeof value.filters === "object" ? value.filters : {};
    var quizAnswers = value.quizAnswers && typeof value.quizAnswers === "object" && !Array.isArray(value.quizAnswers)
      ? value.quizAnswers
      : {};
    var activity = value.activity && typeof value.activity === "object" && !Array.isArray(value.activity)
      ? value.activity
      : {};

    return {
      version: 1,
      theme: value.theme === "dark" || value.theme === "light" ? value.theme : null,
      completed: safeArray(value.completed),
      bookmarked: safeArray(value.bookmarked),
      working: safeArray(value.working),
      revealed: safeArray(value.revealed),
      quizAnswers: quizAnswers,
      recent: safeArray(value.recent).slice(0, 12),
      lastExercise: typeof value.lastExercise === "string" ? value.lastExercise : null,
      activity: activity,
      playgroundCode: typeof value.playgroundCode === "string" ? value.playgroundCode : "",
      filters: {
        search: typeof filters.search === "string" ? filters.search : base.filters.search,
        topic: typeof filters.topic === "string" ? filters.topic : base.filters.topic,
        difficulty: typeof filters.difficulty === "string" ? filters.difficulty : base.filters.difficulty,
        status: typeof filters.status === "string" ? filters.status : base.filters.status,
        sort: typeof filters.sort === "string" ? filters.sort : base.filters.sort,
        bookmarked: filters.bookmarked === true
      }
    };
  }

  function persist(notify) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      available = true;
    } catch (error) {
      available = false;
      try {
        window.dispatchEvent(new CustomEvent("cpp-storage-error", {
          detail: { message: "LocalStorage មិនអាចរក្សាទុកបានទេ។" }
        }));
      } catch (dispatchError) {
        // Storage is optional. The interface continues to work in memory.
      }
    }

    if (notify !== false) {
      emitChange("update");
    }
  }

  function emitChange(reason) {
    var snapshot = getState();
    listeners.slice().forEach(function (callback) {
      try {
        callback(snapshot, reason);
      } catch (error) {
        // A failing listener should not break storage operations.
      }
    });
  }

  function getState() {
    return state;
  }

  function isAvailable() {
    return available;
  }

  function isCompleted(id) {
    return state.completed.indexOf(id) !== -1;
  }

  function isBookmarked(id) {
    return state.bookmarked.indexOf(id) !== -1;
  }

  function isRevealed(id) {
    return state.revealed.indexOf(id) !== -1;
  }

  function isWorking(id) {
    return state.working.indexOf(id) !== -1;
  }

  function addUnique(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function removeValue(list, value) {
    var index = list.indexOf(value);
    if (index !== -1) {
      list.splice(index, 1);
    }
  }

  function todayKey() {
    var date = new Date();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }

  function toggleCompleted(id) {
    var completed = isCompleted(id);

    if (completed) {
      removeValue(state.completed, id);
      if (state.lastExercise === id) {
        state.lastExercise = state.working.length ? state.working[state.working.length - 1] : null;
      }
    } else {
      addUnique(state.completed, id);
      removeValue(state.working, id);
      state.activity[todayKey()] = (state.activity[todayKey()] || 0) + 1;
      if (state.lastExercise === id) {
        state.lastExercise = null;
      }
    }

    persist();
    return !completed;
  }

  function toggleBookmark(id) {
    var bookmarked = isBookmarked(id);

    if (bookmarked) {
      removeValue(state.bookmarked, id);
    } else {
      addUnique(state.bookmarked, id);
    }

    persist();
    return !bookmarked;
  }

  function markRevealed(id) {
    addUnique(state.revealed, id);
    persist();
  }

  function markWorking(id) {
    addUnique(state.working, id);
    state.lastExercise = id;
    state.recent = [id].concat(state.recent.filter(function (item) { return item !== id; })).slice(0, 12);
    persist();
  }

  function removeWorking(id) {
    removeValue(state.working, id);
    if (state.lastExercise === id) {
      state.lastExercise = state.working.length ? state.working[state.working.length - 1] : null;
    }
    persist();
  }

  function setLastExercise(id) {
    state.lastExercise = id || null;
    persist();
  }

  function addRecent(id) {
    state.recent = [id].concat(state.recent.filter(function (item) { return item !== id; })).slice(0, 12);
    persist();
  }

  function setTheme(theme) {
    if (theme !== "dark" && theme !== "light") {
      return;
    }

    state.theme = theme;
    persist(false);
    document.documentElement.setAttribute("data-theme", theme);
    emitChange("theme");
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function setQuizAnswer(id, index) {
    state.quizAnswers[id] = index;
    persist();
  }

  function getQuizAnswer(id) {
    return Object.prototype.hasOwnProperty.call(state.quizAnswers, id) ? state.quizAnswers[id] : null;
  }

  function setPlaygroundCode(code) {
    state.playgroundCode = String(code == null ? "" : code);
    persist(false);
  }

  function getPlaygroundCode() {
    return state.playgroundCode || "";
  }

  function saveFilters(filters) {
    state.filters = {
      search: String(filters.search || ""),
      topic: String(filters.topic || "all"),
      difficulty: String(filters.difficulty || "all"),
      status: String(filters.status || "all"),
      sort: String(filters.sort || "number"),
      bookmarked: filters.bookmarked === true
    };
    persist(false);
  }

  function getFilters() {
    return {
      search: state.filters.search || "",
      topic: state.filters.topic || "all",
      difficulty: state.filters.difficulty || "all",
      status: state.filters.status || "all",
      sort: state.filters.sort || "number",
      bookmarked: state.filters.bookmarked === true
    };
  }

  function resetProgress() {
    var currentTheme = state.theme;

    state = createDefaultState();
    state.theme = currentTheme;
    persist();
  }

  function subscribe(callback) {
    if (typeof callback !== "function") {
      return function () {};
    }

    listeners.push(callback);
    return function () {
      listeners = listeners.filter(function (item) { return item !== callback; });
    };
  }

  try {
    window.addEventListener("storage", function (event) {
      if (event.key === STORAGE_KEY) {
        state = loadState();
        emitChange("external");
      }
    });
  } catch (error) {
    // The storage event is optional and only available in normal browsers.
  }

  function getActivityStats() {
    var dates = Object.keys(state.activity).sort();
    var total = 0;
    var today = state.activity[todayKey()] || 0;
    var streak = 0;

    dates.forEach(function (key) {
      total += Number(state.activity[key]) || 0;
    });

    if (dates.length) {
      var cursor = new Date();
      var cursorKey = todayKey();

      if (!Object.prototype.hasOwnProperty.call(state.activity, cursorKey)) {
        cursor.setDate(cursor.getDate() - 1);
        cursorKey = cursor.getFullYear() + "-" + String(cursor.getMonth() + 1).padStart(2, "0") + "-" + String(cursor.getDate()).padStart(2, "0");
      }

      while (Object.prototype.hasOwnProperty.call(state.activity, cursorKey) && (Number(state.activity[cursorKey]) || 0) > 0) {
        streak += 1;
        cursor.setDate(cursor.getDate() - 1);
        cursorKey = cursor.getFullYear() + "-" + String(cursor.getMonth() + 1).padStart(2, "0") + "-" + String(cursor.getDate()).padStart(2, "0");
      }
    }

    return {
      total: total,
      today: today,
      streak: streak
    };
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    getState: getState,
    isAvailable: isAvailable,
    isCompleted: isCompleted,
    isBookmarked: isBookmarked,
    isRevealed: isRevealed,
    isWorking: isWorking,
    toggleCompleted: toggleCompleted,
    toggleBookmark: toggleBookmark,
    markRevealed: markRevealed,
    markWorking: markWorking,
    removeWorking: removeWorking,
    setLastExercise: setLastExercise,
    addRecent: addRecent,
    setTheme: setTheme,
    getTheme: getTheme,
    setQuizAnswer: setQuizAnswer,
    getQuizAnswer: getQuizAnswer,
    setPlaygroundCode: setPlaygroundCode,
    getPlaygroundCode: getPlaygroundCode,
    saveFilters: saveFilters,
    getFilters: getFilters,
    resetProgress: resetProgress,
    subscribe: subscribe,
    getActivityStats: getActivityStats
  };
})();
