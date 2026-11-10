# C++ Practice Hub

An exercise-only C++ learning platform built with HTML, CSS, and vanilla JavaScript. The interface is in Khmer, while exercise titles, C++ keywords, and technical terms remain in English.

**Owner:** Set Vanneng

## What is included

- 27 C++ topics organized into 5 learning stages
- 351 exercises: 298 coding exercises and 53 concept quizzes
- Dedicated `cin` input topic immediately after Variables
- Beginner, intermediate, advanced, and challenge difficulty levels
- Khmer problem descriptions, requirements, hints, and explanations
- Hidden solutions with confirmation before revealing
- Progress tracking, bookmarks, recent activity, streaks, and quiz answers
- Search, topic, difficulty, status, bookmark, and sorting filters
- Random challenge and daily challenge modes
- CodeMirror C++ playground with starter templates
- Online C++17 compiler with custom stdin and runtime/compile output
- Dark and light themes with remembered preference
- Responsive layouts for desktop, tablet, and mobile
- LocalStorage persistence with no account or backend required

## Run locally

Open `index.html` directly in a modern browser. A local HTTP server is optional but recommended:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Online compiler

The playground's **Run Code** button sends the current program and stdin to a public online compiler:

1. Judge0 CE
2. Wandbox as fallback

The compiler runs C++17 with a time limit, memory limit, custom input, and separate compile/runtime output. Internet access is required. Since these are public services, students must not submit passwords, secrets, or private data in code.

To compile locally instead:

```powershell
g++ main.cpp -std=c++17 -o main
./main
```

On Windows, run `main.exe`.

## Project structure

```text
index.html
css/
  themes.css
  style.css
  responsive.css
js/
  theme-init.js
  utils.js
  storage.js
  filters.js
  playground.js
  compiler.js
  app-core.js
  views.js
  views-detail.js
  app.js
  data/
    topics.js
    01-intro.js ... 27-abstraction.js
tools/
  verify-data.js
```

Exercise files push arrays of exercise objects into `window.CPP_DATA.exercises`. The app normalizes those arrays into one flat exercise list.

## Verification

Validate metadata, compile every coding solution, and run every sample:

```powershell
node tools/verify-data.js --run-samples
```

Check JavaScript syntax:

```powershell
Get-ChildItem -LiteralPath "js" -Recurse -Filter *.js | ForEach-Object { node --check $_.FullName }
```

Verified result:

- 351 exercises
- 298 coding solutions compiled successfully
- 298 sample runs matched expected output
- 0 data validation issues
- 0 JavaScript syntax errors

## Content references

The `cin` input exercises follow the scope and examples of the W3Schools C++ input lessons:

- [C++ User Input](https://www.w3schools.com/cpp/cpp_user_input.asp)
- [C++ User Input Strings](https://www.w3schools.com/cpp/cpp_strings_input.asp)

## Notes

- No framework, build step, or package installation is required.
- Google Fonts, Lucide icons, CodeMirror, and the online compiler load from CDNs.
- Progress is stored locally under `cppPracticeHub.v1`.
# Exercises-Of-CPP
