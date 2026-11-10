window.CPPCompiler = (function () {
  "use strict";

  var JUDGE0_URL = "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";
  var WANDBOX_URL = "https://wandbox.org/api/compile.json";
  var JUDGE0_CPP_ID = 54;
  var WANDBOX_COMPILER = "gcc-13.2.0";

  function fetchJson(url, options, timeoutMs) {
    var controller = new AbortController();
    var timer = window.setTimeout(function () {
      controller.abort();
    }, timeoutMs);

    var requestOptions = Object.assign({}, options, { signal: controller.signal });

    return fetch(url, requestOptions).then(function (response) {
      if (!response.ok) {
        throw new Error("Compiler service returned HTTP " + response.status + ".");
      }
      return response.json();
    }).finally(function () {
      window.clearTimeout(timer);
    });
  }

  function normalizeResult(provider, data) {
    var stdout = data.stdout || "";
    var stderr = data.stderr || "";
    var compileOutput = data.compileOutput || "";
    var status = data.status || "Finished";
    var ok = Boolean(data.ok);

    return {
      provider: provider,
      ok: ok,
      stdout: stdout,
      stderr: stderr,
      compileOutput: compileOutput,
      status: status,
      time: data.time || null,
      memory: data.memory || null,
      message: data.message || ""
    };
  }

  function runJudge0(code, stdin) {
    return fetchJson(JUDGE0_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language_id: JUDGE0_CPP_ID,
        source_code: code,
        stdin: stdin || "",
        cpu_time_limit: 5,
        wall_time_limit: 12,
        memory_limit: 128000
      })
    }, 30000).then(function (data) {
      var compileOutput = data.compile_output || "";
      var stderr = data.stderr || "";
      var statusId = data.status && Number(data.status.id);
      var statusText = data.status && data.status.description ? data.status.description : "Unknown status";

      return normalizeResult("Judge0 CE", {
        ok: statusId === 3 && !compileOutput,
        stdout: data.stdout || "",
        stderr: stderr,
        compileOutput: compileOutput,
        status: statusText,
        time: data.time,
        memory: data.memory,
        message: data.message || ""
      });
    });
  }

  function runWandbox(code, stdin) {
    return fetchJson(WANDBOX_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        compiler: WANDBOX_COMPILER,
        code: code,
        stdin: stdin || "",
        "compiler-option-raw": "-std=c++17 -O2 -Wall",
        "runtime-option-raw": ""
      })
    }, 30000).then(function (data) {
      var compilerError = data.compiler_error || "";
      var compilerMessage = data.compiler_message || "";
      var status = String(data.status || "");
      var programError = data.program_error || "";
      var signal = data.signal || "";
      var runtimeStatus = status === "0" && !programError && !signal ? "Finished" : "Runtime error";

      if (compilerError) {
        runtimeStatus = "Compilation error";
      }

      return normalizeResult("Wandbox", {
        ok: status === "0" && !compilerError && !programError && !signal,
        stdout: data.program_output || "",
        stderr: programError,
        compileOutput: compilerError || compilerMessage,
        status: runtimeStatus,
        time: null,
        memory: null,
        message: signal ? "Signal: " + signal : ""
      });
    });
  }

  function run(code, stdin) {
    if (!code || !code.trim()) {
      return Promise.reject(new Error("សូមសរសេរកូដមុនពេល Run។"));
    }

    return runJudge0(code, stdin).catch(function (judgeError) {
      return runWandbox(code, stdin).catch(function (wandboxError) {
        throw new Error(
          "មិនអាចភ្ជាប់ទៅ online compiler បានទេ។ សូមពិនិត្យ internet ហើយព្យាយាមម្តងទៀត។ (" +
          judgeError.message + " / " + wandboxError.message + ")"
        );
      });
    });
  }

  return {
    run: run
  };
})();
