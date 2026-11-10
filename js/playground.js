window.CPPPlayground = (function () {
  var templates = {
    starter: [
      "#include <iostream>",
      "",
      "using namespace std;",
      "",
      "int main() {",
      "    cout << \"Hello, C++!\" << endl;",
      "    return 0;",
      "}",
      ""
    ].join("\n"),
    variables: [
      "#include <iostream>",
      "#include <string>",
      "",
      "using namespace std;",
      "",
      "int main() {",
      "    string name = \"Dara\";",
      "    int age = 19;",
      "    double score = 87.5;",
      "",
      "    cout << \"Name: \" << name << endl;",
      "    cout << \"Age: \" << age << endl;",
      "    cout << \"Score: \" << score << endl;",
      "    return 0;",
      "}",
      ""
    ].join("\n"),
    loops: [
      "#include <iostream>",
      "",
      "using namespace std;",
      "",
      "int main() {",
      "    int n;",
      "    cout << \"Enter n: \";",
      "    cin >> n;",
      "",
      "    for (int i = 1; i <= n; i++) {",
      "        cout << i << \" \";",
      "    }",
      "    cout << endl;",
      "    return 0;",
      "}",
      ""
    ].join("\n"),
    functions: [
      "#include <iostream>",
      "",
      "using namespace std;",
      "",
      "int add(int a, int b);",
      "",
      "int main() {",
      "    int a = 12;",
      "    int b = 8;",
      "    cout << \"Sum: \" << add(a, b) << endl;",
      "    return 0;",
      "}",
      "",
      "int add(int a, int b) {",
      "    return a + b;",
      "}",
      ""
    ].join("\n"),
    classDemo: [
      "#include <iostream>",
      "#include <string>",
      "",
      "using namespace std;",
      "",
      "class Student {",
      "private:",
      "    string name;",
      "    double score;",
      "",
      "public:",
      "    Student(string n, double s) : name(n), score(s) {}",
      "",
      "    void display() const {",
      "        cout << name << \" scored \" << score << endl;",
      "    }",
      "};",
      "",
      "int main() {",
      "    Student student(\"Sokha\", 91.5);",
      "    student.display();",
      "    return 0;",
      "}",
      ""
    ].join("\n"),
    recursion: [
      "#include <iostream>",
      "",
      "using namespace std;",
      "",
      "int factorial(int n) {",
      "    if (n <= 1) {",
      "        return 1;",
      "    }",
      "    return n * factorial(n - 1);",
      "}",
      "",
      "int main() {",
      "    int n = 5;",
      "    cout << n << \"! = \" << factorial(n) << endl;",
      "    return 0;",
      "}",
      ""
    ].join("\n")
  };

  var TEMPLATE_LABELS = {
    starter: "Starter program",
    variables: "Variables & output",
    loops: "Loops with input",
    functions: "Functions",
    classDemo: "Class & object",
    recursion: "Recursion"
  };

  var editor = null;
  var mode = "codemirror";

  function mount(container, options) {
    var settings = options || {};
    var initialValue = settings.value || templates.starter;

    if (typeof window.CodeMirror === "function") {
      mode = "codemirror";
      editor = window.CodeMirror(container, {
        value: initialValue,
        mode: "text/x-c++src",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        spellcheck: false,
        autofocus: false
      });

      if (typeof settings.onChange === "function") {
        editor.on("change", function (instance) {
          settings.onChange(instance.getValue());
        });
      }

      setTimeout(function () {
        if (editor) {
          editor.refresh();
        }
      }, 30);

      return {
        mode: mode,
        getValue: function () { return editor ? editor.getValue() : ""; },
        setValue: function (value) { if (editor) { editor.setValue(value); } },
        focus: function () { if (editor) { editor.focus(); } },
        refresh: function () { if (editor) { editor.refresh(); } },
        destroy: function () {
          if (editor) {
            editor.toTextArea();
            editor = null;
          }
        }
      };
    }

    mode = "textarea";
    var textarea = document.createElement("textarea");
    textarea.className = "fallback-editor";
    textarea.spellcheck = false;
    textarea.setAttribute("aria-label", "តំបន់សរសេរកូដ C++");
    textarea.value = initialValue;
    container.innerHTML = "";
    container.appendChild(textarea);

    if (typeof settings.onChange === "function") {
      textarea.addEventListener("input", function () {
        settings.onChange(textarea.value);
      });
    }

    return {
      mode: mode,
      getValue: function () { return textarea.value; },
      setValue: function (value) { textarea.value = value; },
      focus: function () { textarea.focus(); },
      refresh: function () {},
      destroy: function () {
        textarea.remove();
      }
    };
  }

  function getTemplate(key) {
    return templates[key] || templates.starter;
  }

  function getTemplateList() {
    return Object.keys(templates).map(function (key) {
      return { key: key, label: TEMPLATE_LABELS[key] };
    });
  }

  return {
    mount: mount,
    getTemplate: getTemplate,
    getTemplateList: getTemplateList,
    mode: function () { return mode; }
  };
})();
