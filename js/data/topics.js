window.CPP_DATA = window.CPP_DATA || { topics: [], stages: [], exercises: [] };

window.CPP_DATA.stages = [
  {
    id: "foundations",
    name: "មូលដ្ឋាន C++",
    english: "C++ Foundations",
    description: "ចាប់ផ្តើមពី syntax ដំបូង រហូតដល់ការគណនាដោយ operators។",
    icon: "blocks"
  },
  {
    id: "control",
    name: "ការគ្រប់គ្រងលំហូរ",
    english: "Control Flow",
    description: "រៀនឱ្យកម្មវិធីសម្រេចចិត្ត និងធ្វើឡើងវិញដោយ conditionals និង loops។",
    icon: "git-branch"
  },
  {
    id: "data-functions",
    name: "ទិន្នន័យ និងអនុគមន៍",
    english: "Data & Functions",
    description: "គ្រប់គ្រង arrays, strings, functions និងបំបែកបញ្ហាធំជាផ្នែកតូចៗ។",
    icon: "layers"
  },
  {
    id: "memory-types",
    name: "Memory និងប្រភេទកំណត់ដោយខ្លួនឯង",
    english: "Memory & Custom Types",
    description: "យល់ពី pointers, references, structs, enums និង dynamic memory។",
    icon: "hard-drive"
  },
  {
    id: "oop",
    name: "Object-Oriented Programming",
    english: "Object-Oriented Programming",
    description: "រចនាកម្មវិធីដោយ classes, objects, inheritance និង polymorphism។",
    icon: "network"
  }
];

window.CPP_DATA.topics = [
  {
    id: "intro",
    number: 1,
    stage: "foundations",
    name: "មូលដ្ឋានដំបូងនៃ C++",
    english: "Introduction to C++",
    icon: "graduation-cap",
    description: "រចនាសម្ព័ន្ធកម្មវិធី C++ ដំបូង ការបង្ហាញអត្ថបទ និងការយល់ពី function main។"
  },
  {
    id: "output",
    number: 2,
    stage: "foundations",
    name: "ការបង្ហាញលទ្ធផល និង Escape Sequences",
    english: "Output & Escape Sequences",
    icon: "terminal",
    description: "បង្ហាញអត្ថបទឱ្យមានទម្រង់ច្បាស់លាស់ដោយ cout, \\n, \\t និង setw។"
  },
  {
    id: "variables",
    number: 3,
    stage: "foundations",
    name: "Variables និង Constants",
    english: "Variables & Constants",
    icon: "box",
    description: "រក្សាទុកទិន្នន័យក្នុង variables និងកំណត់តម្លៃដែលមិនផ្លាស់ប្តូរដោយ const។"
  },
  {
    id: "input",
    number: 4,
    stage: "foundations",
    name: "ការបញ្ចូលទិន្នន័យដោយ cin",
    english: "Console Input with cin",
    icon: "keyboard",
    description: "អានទិន្នន័យពី keyboard ដោយ cin, extraction operator >> និង getline() សម្រាប់អត្ថបទដែលមានចន្លោះ។"
  },
  {
    id: "data-types",
    number: 5,
    stage: "foundations",
    name: "Data Types",
    english: "Data Types",
    icon: "database",
    description: "ជ្រើសរើស int, double, char, bool និង string ឱ្យត្រូវនឹងប្រភេទទិន្នន័យ។"
  },
  {
    id: "type-conversion",
    number: 6,
    stage: "foundations",
    name: "Type Conversion និង Casting",
    english: "Type Conversion & Casting",
    icon: "repeat-2",
    description: "បំប្លែងប្រភេទទិន្នន័យដោយសុវត្ថិភាព និងយល់ពី implicit និង explicit conversion។"
  },
  {
    id: "operators",
    number: 7,
    stage: "foundations",
    name: "Operators",
    english: "Operators",
    icon: "calculator",
    description: "ប្រើ arithmetic, comparison, logical, assignment និង bitwise operators។"
  },
  {
    id: "conditionals",
    number: 8,
    stage: "control",
    name: "Conditional Statements",
    english: "Conditional Statements",
    icon: "git-branch",
    description: "សម្រេចចិត្តក្នុងកម្មវិធីដោយ if, else if, else និង switch។"
  },
  {
    id: "loops",
    number: 9,
    stage: "control",
    name: "Loops",
    english: "Loops",
    icon: "refresh-cw",
    description: "ធ្វើការងារដដែលៗដោយ for, while និង do-while ឱ្យមានលក្ខខណ្ឌច្បាស់លាស់។"
  },
  {
    id: "nested-loops",
    number: 10,
    stage: "control",
    name: "Nested Loops",
    english: "Nested Loops",
    icon: "grid-3x3",
    description: "បង្កើត patterns, tables និងដោះស្រាយបញ្ហាពីរវិមាត្រដោយ loop ក្នុង loop។"
  },
  {
    id: "arrays",
    number: 11,
    stage: "data-functions",
    name: "Arrays",
    english: "Arrays",
    icon: "rows-3",
    description: "រក្សាទុកទិន្នន័យច្រើនក្នុង array និងដំណើរការ elements ដោយ index។"
  },
  {
    id: "strings",
    number: 12,
    stage: "data-functions",
    name: "Strings",
    english: "Strings",
    icon: "type",
    description: "ដំណើរការអត្ថបទដោយ string, indexing, loops និង string functions។"
  },
  {
    id: "functions",
    number: 13,
    stage: "data-functions",
    name: "Functions",
    english: "Functions",
    icon: "function-square",
    description: "បំបែកកម្មវិធីជា functions តូចៗ ដែលអាចប្រើឡើងវិញ និងសាកល្បងបានងាយ។"
  },
  {
    id: "function-overloading",
    number: 14,
    stage: "data-functions",
    name: "Function Overloading",
    english: "Function Overloading",
    icon: "copy-stack",
    description: "បង្កើត functions ឈ្មោះដូចគ្នា ប៉ុន្តែ parameter ខុសគ្នា ដើម្បីបង្កើនភាពបត់បែន។"
  },
  {
    id: "recursion",
    number: 15,
    stage: "data-functions",
    name: "Recursion",
    english: "Recursion",
    icon: "rotate-ccw",
    description: "ដោះស្រាយបញ្ហាដោយ function ហៅខ្លួនឯង និងកំណត់ base case ឱ្យបានត្រឹមត្រូវ។"
  },
  {
    id: "pointers",
    number: 16,
    stage: "memory-types",
    name: "Pointers",
    english: "Pointers",
    icon: "mouse-pointer-2",
    description: "យល់ពី address, dereference និងការប្រើ pointer ជាមួយ arrays និង functions។"
  },
  {
    id: "references",
    number: 17,
    stage: "memory-types",
    name: "References",
    english: "References",
    icon: "link-2",
    description: "ប្រើ reference ដើម្បីចែករំលែកទិន្នន័យដោយមិនចាំបាច់ copy។"
  },
  {
    id: "structs",
    number: 18,
    stage: "memory-types",
    name: "Structures (struct)",
    english: "Structures",
    icon: "boxes",
    description: "ចាត់ចែងទិន្នន័យពាក់ព័ន្ធគ្នាជា struct ដូចជា Student, Book និង Employee។"
  },
  {
    id: "enums",
    number: 19,
    stage: "memory-types",
    name: "Enumerations (enum)",
    english: "Enumerations",
    icon: "list-checks",
    description: "ប្រើ enum សម្រាប់តម្លៃជាជម្រើសច្បាស់លាស់ ដូចជា status, role និង day។"
  },
  {
    id: "dynamic-memory",
    number: 20,
    stage: "memory-types",
    name: "Dynamic Memory Allocation",
    english: "Dynamic Memory Allocation",
    icon: "hard-drive",
    description: "បង្កើត និងបញ្ចេញ memory នៅ runtime ដោយ new និង delete ឱ្យបានត្រឹមត្រូវ។"
  },
  {
    id: "oop",
    number: 21,
    stage: "oop",
    name: "Object-Oriented Programming",
    english: "Object-Oriented Programming",
    icon: "network",
    description: "យល់ពី class, object, state និង behavior ជាមូលដ្ឋាននៃ OOP។"
  },
  {
    id: "classes-objects",
    number: 22,
    stage: "oop",
    name: "Classes និង Objects",
    english: "Classes & Objects",
    icon: "box-select",
    description: "រចនា class ដែលមាន attributes និង methods សម្រាប់ដោះស្រាយបញ្ហាជាក់ស្តែង។"
  },
  {
    id: "constructors",
    number: 23,
    stage: "oop",
    name: "Constructors និង Destructors",
    english: "Constructors & Destructors",
    icon: "hammer",
    description: "គ្រប់គ្រងការចាប់ផ្តើម និងការបញ្ចប់ object ដោយ constructor និង destructor។"
  },
  {
    id: "encapsulation",
    number: 24,
    stage: "oop",
    name: "Encapsulation",
    english: "Encapsulation",
    icon: "lock",
    description: "ការពារ state ខាងក្នុង class ដោយ private និងផ្តល់ access តាម methods។"
  },
  {
    id: "inheritance",
    number: 25,
    stage: "oop",
    name: "Inheritance",
    english: "Inheritance",
    icon: "git-merge",
    description: "បង្កើត class ថ្មីពី class ដែលមានស្រាប់ ដើម្បីប្រើលក្ខណៈរួមឡើងវិញ។"
  },
  {
    id: "polymorphism",
    number: 26,
    stage: "oop",
    name: "Polymorphism",
    english: "Polymorphism",
    icon: "split",
    description: "ឱ្យ object ផ្សេងៗឆ្លើយតបនឹង method ដូចគ្នាតាមរបៀបផ្ទាល់ខ្លួន។"
  },
  {
    id: "abstraction",
    number: 27,
    stage: "oop",
    name: "Abstraction",
    english: "Abstraction",
    icon: "puzzle",
    description: "បង្កើត abstract classes និង interfaces ដើម្បីបង្ហាញតែអ្វីដែលចាំបាច់។"
  }
];
