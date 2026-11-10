window.CPPUtils = (function () {
  var DIFFICULTY_LABELS = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    challenge: "Challenge"
  };

  var DIFFICULTY_ORDER = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    challenge: 4
  };

  var KHmer_MONTHS = [
    "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
    "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
  ];

  var CPP_KEYWORDS = [
    "alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor",
    "break", "case", "catch", "class", "compl", "concept", "const", "consteval",
    "constexpr", "constinit", "const_cast", "continue", "co_await", "co_return",
    "co_yield", "decltype", "default", "delete", "do", "dynamic_cast", "else",
    "enum", "explicit", "export", "extern", "for", "friend", "goto", "if",
    "inline", "mutable", "namespace", "new", "noexcept", "not", "not_eq",
    "operator", "or", "or_eq", "private", "protected", "public", "register",
    "reinterpret_cast", "requires", "return", "sizeof", "static", "static_assert",
    "static_cast", "struct", "switch", "template", "this", "thread_local", "throw",
    "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile",
    "while", "xor", "xor_eq", "true", "false", "nullptr", "override", "final"
  ];

  var CPP_TYPES = [
    "bool", "char", "char8_t", "char16_t", "char32_t", "double", "float", "int",
    "long", "short", "signed", "unsigned", "void", "wchar_t", "size_t", "string",
    "vector", "array", "map", "set", "pair", "tuple", "ostream", "istream",
    "ifstream", "ofstream", "stringstream", "unique_ptr", "shared_ptr", "optional"
  ];

  var keywordSet = new Set(CPP_KEYWORDS);
  var typeSet = new Set(CPP_TYPES);

  var tokenPattern = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[ \t]*[A-Za-z_][A-Za-z0-9_]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[fFlLuU]*\b|\b[A-Za-z_][A-Za-z0-9_]*(?=\s*\())/g;

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHTML(value).replace(/`/g, "&#96;");
  }

  function formatInline(value) {
    return escapeHTML(value)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function classifyToken(token) {
    if (token.indexOf("//") === 0 || token.indexOf("/*") === 0) {
      return "tok-comment";
    }

    if (token.charAt(0) === "#") {
      return "tok-preprocessor";
    }

    if (token.charAt(0) === '"' || token.charAt(0) === "'") {
      return "tok-string";
    }

    if (/^\d/.test(token)) {
      return "tok-number";
    }

    if (typeSet.has(token)) {
      return "tok-type";
    }

    if (keywordSet.has(token)) {
      return "tok-keyword";
    }

    return "tok-function";
  }

  function highlightCpp(code) {
    var source = String(code == null ? "" : code);
    var result = "";
    var lastIndex = 0;
    var match;

    tokenPattern.lastIndex = 0;

    while ((match = tokenPattern.exec(source)) !== null) {
      result += escapeHTML(source.slice(lastIndex, match.index));
      result += '<span class="' + classifyToken(match[0]) + '">' + escapeHTML(match[0]) + "</span>";
      lastIndex = match.index + match[0].length;
    }

    result += escapeHTML(source.slice(lastIndex));
    return result;
  }

  function icon(name, className) {
    var attr = className ? ' class="' + escapeAttribute(className) + '"' : "";
    return '<i data-lucide="' + escapeAttribute(name) + '"' + attr + ' aria-hidden="true"></i>';
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function difficultyLabel(value) {
    return DIFFICULTY_LABELS[value] || value;
  }

  function difficultyClass(value) {
    return "badge badge-" + value;
  }

  function difficultyOrder(value) {
    return DIFFICULTY_ORDER[value] || 99;
  }

  function formatKhmerDate(date) {
    var value = date instanceof Date ? date : new Date(date);
    return value.getDate() + " " + KHmer_MONTHS[value.getMonth()] + " " + value.getFullYear();
  }

  function formatDateISO(date) {
    var value = date instanceof Date ? date : new Date(date);
    var month = String(value.getMonth() + 1).padStart(2, "0");
    var day = String(value.getDate()).padStart(2, "0");
    return value.getFullYear() + "-" + month + "-" + day;
  }

  function hashString(value) {
    var hash = 2166136261;
    var text = String(value == null ? "" : value);

    for (var i = 0; i < text.length; i += 1) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    return Math.abs(hash >>> 0);
  }

  function dailyIndex(length, seed) {
    if (!length) {
      return -1;
    }

    return hashString((seed || formatDateISO(new Date())) + "|cpp-practice-hub") % length;
  }

  function debounce(fn, wait) {
    var timeout = null;

    return function () {
      var args = arguments;
      var context = this;

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        timeout = null;
        fn.apply(context, args);
      }, wait);
    };
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function percent(part, total) {
    if (!total) {
      return 0;
    }

    return Math.round((part / total) * 100);
  }

  function truncate(value, maxLength) {
    var text = String(value == null ? "" : value);
    if (text.length <= maxLength) {
      return text;
    }

    return text.slice(0, Math.max(0, maxLength - 1)).trimEnd() + "…";
  }

  function copyText(text) {
    var value = String(text == null ? "" : text);

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value).then(function () {
        return true;
      }).catch(function () {
        return fallbackCopy(value);
      });
    }

    return Promise.resolve(fallbackCopy(value));
  }

  function fallbackCopy(value) {
    var textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.top = "0";
    textarea.style.left = "0";
    document.body.appendChild(textarea);
    textarea.select();

    var copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(textarea);
    return copied;
  }

  function downloadFile(filename, content, type) {
    var blob = new Blob([content], { type: type || "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 500);
  }

  function lineCount(value) {
    return String(value == null ? "" : value).split(/\r?\n/).length;
  }

  function normalise(value) {
    return String(value == null ? "" : value)
      .toLocaleLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function unique(values) {
    return Array.from(new Set(values));
  }

  function getProgressCircle(percentValue, label) {
    var radius = 68;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference - (clamp(percentValue, 0, 100) / 100) * circumference;

    return [
      '<div class="progress-ring-wrap">',
      '<svg class="progress-ring" viewBox="0 0 168 168" aria-hidden="true">',
      '<circle class="progress-ring-track" cx="84" cy="84" r="' + radius + '"></circle>',
      '<circle class="progress-ring-value" cx="84" cy="84" r="' + radius + '" ',
      'stroke-dasharray="' + circumference.toFixed(2) + '" ',
      'stroke-dashoffset="' + offset.toFixed(2) + '"></circle>',
      "</svg>",
      '<div class="progress-ring-label"><strong>' + clamp(percentValue, 0, 100) + "%</strong><span>" + escapeHTML(label || "បានបញ្ចប់") + "</span></div>",
      "</div>"
    ].join("");
  }

  return {
    DIFFICULTY_LABELS: DIFFICULTY_LABELS,
    escapeHTML: escapeHTML,
    escapeAttribute: escapeAttribute,
    formatInline: formatInline,
    highlightCpp: highlightCpp,
    icon: icon,
    refreshIcons: refreshIcons,
    difficultyLabel: difficultyLabel,
    difficultyClass: difficultyClass,
    difficultyOrder: difficultyOrder,
    formatKhmerDate: formatKhmerDate,
    formatDateISO: formatDateISO,
    hashString: hashString,
    dailyIndex: dailyIndex,
    debounce: debounce,
    clamp: clamp,
    percent: percent,
    truncate: truncate,
    copyText: copyText,
    downloadFile: downloadFile,
    lineCount: lineCount,
    normalise: normalise,
    unique: unique,
    getProgressCircle: getProgressCircle
  };
})();
