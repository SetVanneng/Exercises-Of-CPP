window.CPPFilters = (function () {
  var Utils = window.CPPUtils;

  function topicLookup() {
    var lookup = {};
    (window.CPP_DATA.topics || []).forEach(function (topic) {
      lookup[topic.id] = topic;
    });
    return lookup;
  }

  function searchableText(exercise, topic) {
    var parts = [
      exercise.title,
      exercise.id,
      exercise.description,
      exercise.type,
      exercise.difficulty,
      topic ? topic.name : "",
      topic ? topic.english : ""
    ];

    (exercise.requirements || []).forEach(function (item) {
      parts.push(item);
    });

    (exercise.constraints || []).forEach(function (item) {
      parts.push(item);
    });

    return Utils.normalise(parts.join(" "));
  }

  function apply(exercises, filters) {
    var topics = topicLookup();
    var search = Utils.normalise(filters.search || "").trim();
    var result = exercises.filter(function (exercise) {
      var topic = topics[exercise.topicId];

      if (filters.topic && filters.topic !== "all" && exercise.topicId !== filters.topic) {
        return false;
      }

      if (filters.difficulty && filters.difficulty !== "all" && exercise.difficulty !== filters.difficulty) {
        return false;
      }

      if (filters.bookmarked && !window.CPPStorage.isBookmarked(exercise.id)) {
        return false;
      }

      if (filters.status === "completed" && !window.CPPStorage.isCompleted(exercise.id)) {
        return false;
      }

      if (filters.status === "incomplete" && window.CPPStorage.isCompleted(exercise.id)) {
        return false;
      }

      if (filters.status === "working" && !window.CPPStorage.isWorking(exercise.id)) {
        return false;
      }

      if (search && searchableText(exercise, topic).indexOf(search) === -1) {
        return false;
      }

      return true;
    });

    var sort = filters.sort || "number";

    result.sort(function (a, b) {
      if (sort === "difficulty-asc") {
        return Utils.difficultyOrder(a.difficulty) - Utils.difficultyOrder(b.difficulty) || a.order - b.order;
      }

      if (sort === "difficulty-desc") {
        return Utils.difficultyOrder(b.difficulty) - Utils.difficultyOrder(a.difficulty) || a.order - b.order;
      }

      if (sort === "title") {
        return a.title.localeCompare(b.title, "km");
      }

      return a.order - b.order;
    });

    return result;
  }

  function hasActiveFilters(filters) {
    return Boolean(
      (filters.search && filters.search.trim()) ||
      (filters.topic && filters.topic !== "all") ||
      (filters.difficulty && filters.difficulty !== "all") ||
      (filters.status && filters.status !== "all") ||
      (filters.sort && filters.sort !== "number") ||
      filters.bookmarked
    );
  }

  function countActiveFilters(filters) {
    var count = 0;

    if (filters.search && filters.search.trim()) {
      count += 1;
    }
    if (filters.topic && filters.topic !== "all") {
      count += 1;
    }
    if (filters.difficulty && filters.difficulty !== "all") {
      count += 1;
    }
    if (filters.status && filters.status !== "all") {
      count += 1;
    }
    if (filters.sort && filters.sort !== "number") {
      count += 1;
    }
    if (filters.bookmarked) {
      count += 1;
    }

    return count;
  }

  return {
    apply: apply,
    hasActiveFilters: hasActiveFilters,
    countActiveFilters: countActiveFilters
  };
})();
