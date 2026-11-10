(function () {
  var theme = null;

  try {
    var raw = window.localStorage.getItem("cppPracticeHub.v1");
    if (raw) {
      var saved = JSON.parse(raw);
      if (saved && (saved.theme === "dark" || saved.theme === "light")) {
        theme = saved.theme;
      }
    }
  } catch (error) {
    theme = null;
  }

  if (!theme) {
    try {
      theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    } catch (error) {
      theme = "dark";
    }
  }

  document.documentElement.setAttribute("data-theme", theme);
})();
