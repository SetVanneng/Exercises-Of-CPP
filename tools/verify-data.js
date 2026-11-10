const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "js", "data");
const runSamples = process.argv.includes("--run-samples");
const compileOnly = !runSamples;

global.window = { CPP_DATA: { topics: [], stages: [], exercises: [] } };

const files = fs.readdirSync(dataDir).filter((name) => name.endsWith(".js")).sort();
for (const file of files) {
  const fullPath = path.join(dataDir, file);
  vm.runInThisContext(fs.readFileSync(fullPath, "utf8"), { filename: fullPath });
}

const data = global.window.CPP_DATA;
const exercises = data.exercises.flat(1);
const required = [
  "id", "topicId", "title", "difficulty", "type", "description", "requirements",
  "input", "output", "constraints", "hint", "solution", "explanation", "expectedOutput"
];
const difficulties = { beginner: 0, intermediate: 0, advanced: 0, challenge: 0 };
const issues = [];
const seen = new Set();
const topicCounts = {};

for (const exercise of exercises) {
  if (seen.has(exercise.id)) {
    issues.push(`${exercise.id}: duplicate id`);
  }
  seen.add(exercise.id);
  topicCounts[exercise.topicId] = (topicCounts[exercise.topicId] || 0) + 1;
  difficulties[exercise.difficulty] = (difficulties[exercise.difficulty] || 0) + 1;

  for (const field of required) {
    if (!(field in exercise)) {
      issues.push(`${exercise.id}: missing ${field}`);
    }
  }

  if (exercise.type === "code" && !Array.isArray(exercise.samples)) {
    issues.push(`${exercise.id}: samples is not an array`);
  }
  if (!Array.isArray(exercise.requirements) || !exercise.requirements.length) {
    issues.push(`${exercise.id}: requirements empty`);
  }
  if (!Array.isArray(exercise.constraints) || !exercise.constraints.length) {
    issues.push(`${exercise.id}: constraints empty`);
  }
  if (exercise.type === "code") {
    if (!exercise.solution || !exercise.solution.trim()) {
      issues.push(`${exercise.id}: empty solution`);
    }
    if (!exercise.samples || !exercise.samples.length) {
      issues.push(`${exercise.id}: code exercise has no sample`);
    }
  }
  if (exercise.type === "quiz") {
    if (!exercise.quizQuestion || !Array.isArray(exercise.options) || !exercise.options.length) {
      issues.push(`${exercise.id}: invalid quiz fields`);
    }
    if (!Number.isInteger(exercise.correctIndex) || exercise.correctIndex < 0 || exercise.correctIndex >= exercise.options.length) {
      issues.push(`${exercise.id}: invalid correctIndex`);
    }
  }
}

for (const topic of data.topics) {
  if (topicCounts[topic.id] !== 13) {
    issues.push(`Topic ${topic.id}: ${topicCounts[topic.id] || 0} exercises (expected 13)`);
  }
}

console.log(`Files: ${files.length}`);
console.log(`Topics: ${data.topics.length}`);
console.log(`Exercises: ${exercises.length}`);
console.log(`Code: ${exercises.filter((item) => item.type === "code").length}`);
console.log(`Quizzes: ${exercises.filter((item) => item.type === "quiz").length}`);
console.log(`Difficulty: ${JSON.stringify(difficulties)}`);
console.log(`Issues: ${issues.length}`);
issues.slice(0, 30).forEach((issue) => console.log(`- ${issue}`));

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "cpp-hub-verify-"));
let compileFailures = 0;
let sampleFailures = 0;
let ranSamples = 0;

for (const exercise of exercises) {
  if (exercise.type !== "code" || !exercise.solution) {
    continue;
  }

  const sourcePath = path.join(tempDir, `${exercise.id}.cpp`);
  const exePath = path.join(tempDir, `${exercise.id}.exe`);
  fs.writeFileSync(sourcePath, exercise.solution, "utf8");

  const compile = spawnSync("g++", ["-std=c++17", "-O0", sourcePath, "-o", exePath], {
    encoding: "utf8",
    timeout: 20000
  });

  if (compile.status !== 0) {
    compileFailures += 1;
    console.log(`COMPILE FAIL ${exercise.id}`);
    console.log((compile.stderr || compile.stdout || "").trim().split("\n").slice(0, 5).join("\n"));
    continue;
  }

  if (compileOnly) {
    continue;
  }

  for (let i = 0; i < exercise.samples.length; i += 1) {
    const sample = exercise.samples[i];
    const run = spawnSync(exePath, [], {
      input: sample.input || "",
      encoding: "utf8",
      timeout: 5000
    });
    ranSamples += 1;

    const normalize = (value) => String(value || "")
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) => line.replace(/[ \t]+$/g, ""))
      .join("\n")
      .replace(/\n+$/g, "");

    const actual = normalize(run.stdout);
    const expected = normalize(sample.output);

    if (run.status !== 0 || actual !== expected) {
      sampleFailures += 1;
      console.log(`SAMPLE FAIL ${exercise.id} sample ${i + 1} exit=${run.status}`);
      console.log(`EXPECTED:\n${expected}\nACTUAL:\n${actual}`);
      if (run.stderr) {
        console.log(`STDERR:\n${run.stderr}`);
      }
      break;
    }
  }
}

fs.rmSync(tempDir, { recursive: true, force: true });

console.log(`Compile failures: ${compileFailures}`);
console.log(`Samples run: ${ranSamples}`);
console.log(`Sample failures: ${sampleFailures}`);
process.exitCode = issues.length || compileFailures || sampleFailures ? 1 : 0;
