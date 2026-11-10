(function () {
  window.CPP_DATA.exercises.push([
    {
      "id": "variables-01",
      "topicId": "variables",
      "title": "Store the Student Age",
      "difficulty": "beginner",
      "type": "code",
      "description": "កម្មវិធីសាមញ្ញមួយត្រូវរក្សាទុកអាយុរបស់សិស្សក្នុង variable មួយ រួចបង្ហាញវានៅលើ console។ លំហាត់នេះហាត់ការប្រកាស និងការប្រើ variable ប្រភេទ int។",
      "requirements": [
        "ប្រកាស variable ប្រភេទ int ឈ្មោះ age ដែលមានតម្លៃ 18។",
        "បង្ហាញអត្ថបទ Age: និងតម្លៃរបស់ age នៅបន្ទាត់តែមួយ។",
        "បញ្ចប់ដោយ return 0។"
      ],
      "input": null,
      "output": "អាយុរបស់សិស្សនៅបន្ទាត់តែមួយ។",
      "samples": [
        {
          "input": "",
          "output": "Age: 18"
        }
      ],
      "constraints": [
        "មិនត្រូវប្រើ input ទេ។",
        "ត្រូវប្រើ variable int មិនមែនសរសេរលេខដោយផ្ទាល់ក្នុង cout ទេ។"
      ],
      "hint": "ប្រកាស int age = 18; បន្ទាប់មក cout << \"Age: \" << age << endl;",
      "solution": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int age = 18;\n    cout << \"Age: \" << age << endl;\n    return 0;\n}",
      "explanation": "Variable គឺជាកន្លែងរក្សាទុកទិន្នន័យក្នុង memory។ យើងប្រកាស age ជា int ហើយផ្តល់តម្លៃដំបូង 18។ បន្ទាប់មក cout អាចអានតម្លៃនោះមកបង្ហាញបាន។",
      "expectedOutput": "Age: 18"
    },
    {
      "id": "variables-02",
      "topicId": "variables",
      "title": "Coffee Price Update",
      "difficulty": "beginner",
      "type": "code",
      "description": "តម្លៃកាហ្វេអាចផ្លាស់ប្តូរបានតាមពេលវេលា។ អ្នកត្រូវប្រកាស variable សម្រាប់តម្លៃ កំណត់តម្លៃដំបូង បន្ទាប់មកផ្លាស់ប្តូរវាទៅតម្លៃថ្មី ហើយបង្ហាញតម្លៃចុងក្រោយ។",
      "requirements": [
        "ប្រកាស variable ប្រភេទ double ឈ្មោះ price ដែលចាប់ផ្តើមដោយ 2.50។",
        "ផ្លាស់ប្តូរតម្លៃ price ទៅ 3.25។",
        "បង្ហាញ Price: និងតម្លៃចុងក្រោយដោយលេខទសភាគពីរ។"
      ],
      "input": null,
      "output": "តម្លៃកាហ្វេថ្មី។",
      "samples": [
        {
          "input": "",
          "output": "Price: 3.25"
        }
      ],
      "constraints": [
        "មិនត្រូវប្រើ input ទេ។",
        "ត្រូវប្រើ fixed និង setprecision(2)។"
      ],
      "hint": "ប្រកាស double price = 2.50; បន្ទាប់មក price = 3.25; រួចបង្ហាញដោយ fixed និង setprecision(2)។",
      "solution": "#include <iostream>\n#include <iomanip>\n\nusing namespace std;\n\nint main() {\n    double price = 2.50;\n    price = 3.25;\n\n    cout << fixed << setprecision(2);\n    cout << \"Price: \" << price << endl;\n    return 0;\n}",
      "explanation": "Variable ដែលមិនមែន const អាចទទួលតម្លៃថ្មីបានគ្រប់ពេល។ ការផ្តល់តម្លៃថ្មីដោយ price = 3.25 ជំនួសតម្លៃចាស់ 2.50។ setprecision(2) បង្ហាញលេខទសភាគពីរខ្ទង់។",
      "expectedOutput": "Price: 3.25"
    },
    {
      "id": "variables-03",
      "topicId": "variables",
      "title": "Constant Discount Rate",
      "difficulty": "beginner",
      "type": "code",
      "description": "ហាងមួយមានអត្រាបញ្ចុះតម្លៃថេរ 10% សម្រាប់ទំនិញទាំងអស់។ អ្នកត្រូវប្រើ const variable សម្រាប់អត្រានេះ រួចគណនាបរិមាណបញ្ចុះតម្លៃសម្រាប់តម្លៃ 200។",
      "requirements": [
        "ប្រកាស const double DISCOUNT ដែលមានតម្លៃ 0.10។",
        "ប្រកាស double price ដែលមានតម្លៃ 200។",
        "គណនាបរិមាណបញ្ចុះតម្លៃ និងបង្ហាញជា Discount: និងតម្លៃ។"
      ],
      "input": null,
      "output": "បរិមាណបញ្ចុះតម្លៃ។",
      "samples": [
        {
          "input": "",
          "output": "Discount: 20"
        }
      ],
      "constraints": [
        "អត្រាបញ្ចុះតម្លៃត្រូវជា const។",
        "មិនត្រូវប្រើ input ទេ។"
      ],
      "hint": "ប្រើ const double DISCOUNT = 0.10; ហើយគណនា price * DISCOUNT។",
      "solution": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    const double DISCOUNT = 0.10;\n    double price = 200;\n    double discountAmount = price * DISCOUNT;\n\n    cout << \"Discount: \" << discountAmount << endl;\n    return 0;\n}",
      "explanation": "const ប្រាប់ compiler ថាតម្លៃនេះមិនត្រូវផ្លាស់ប្តូរទេ។ ការប្រើ const សម្រាប់អត្រាថេរ ជួយការពារកំហុស និងធ្វើឱ្យកូដអានយល់បានថាតម្លៃនោះជាចំនួនថេរ។",
      "expectedOutput": "Discount: 20"
    },
    {
      "id": "variables-04",
      "topicId": "variables",
      "title": "Predefined Swap",
      "difficulty": "beginner",
      "type": "code",
      "description": "ការប្តូរតម្លៃរវាង variable ពីរគឺជាបច្ចេកទេសមូលដ្ឋានដែលអ្នកត្រូវដឹង។ លំហាត់នេះកំណត់ចំនួនគត់ពីរនៅក្នុងកូដ រួចប្តូរតម្លៃដោយប្រើ variable បណ្តោះអាសន្ន។",
      "requirements": [
        "ប្រកាស int a = 5 និង int b = 9។",
        "បង្ហាញតម្លៃមុនប្តូរជា Before: a b។",
        "ប្តូរតម្លៃដោយប្រើ variable temp។",
        "បង្ហាញតម្លៃក្រោយប្តូរជា After: a b។"
      ],
      "input": null,
      "output": "តម្លៃមុន និងក្រោយប្តូរ។",
      "samples": [
        {
          "input": "",
          "output": "Before: 5 9\nAfter: 9 5"
        }
      ],
      "constraints": [
        "តម្លៃ a និង b ត្រូវកំណត់ក្នុងកូដ។",
        "ត្រូវប្រើ temp សម្រាប់ការប្តូរតម្លៃ។"
      ],
      "hint": "កំណត់ int a = 5; int b = 9; បន្ទាប់មក temp = a; a = b; b = temp;",
      "solution": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int a = 5;\n    int b = 9;\n\n    cout << \"Before: \" << a << \" \" << b << endl;\n\n    int temp = a;\n    a = b;\n    b = temp;\n\n    cout << \"After: \" << a << \" \" << b << endl;\n    return 0;\n}",
      "explanation": "បើយើងដាក់ a = b ដោយផ្ទាល់ តម្លៃដើមរបស់ a នឹងបាត់។ ដូច្នេះយើងរក្សាតម្លៃ a ក្នុង temp ជាមុន រួចចម្លង b ទៅ a និង temp ទៅ b។ ការកំណត់តម្លៃដំបូងក្នុងកូដជួយឱ្យឧទាហរណ៍អាចដំណើរការបានដោយគ្មាន input។",
      "expectedOutput": "Before: 5 9\nAfter: 9 5"
    },
    {
      "id": "variables-05",
      "topicId": "variables",
      "title": "Circle Area with constexpr",
      "difficulty": "intermediate",
      "type": "code",
      "description": "កម្មវិធីគណនាផ្ទៃក្រឡារង្វង់ត្រូវការតម្លៃ PI ថេរ។ លំហាត់នេះកំណត់កាំនៅក្នុងកូដ រួចប្រើ constexpr សម្រាប់ PI ដើម្បីគណនាផ្ទៃក្រឡា។",
      "requirements": [
        "ប្រកាស constexpr double PI ដែលមានតម្លៃ 3.14159។",
        "កំណត់ double radius = 2.0។",
        "គណនា area ដោយ PI * radius * radius។",
        "បង្ហាញ Area: និងតម្លៃដោយ setprecision(2)។"
      ],
      "input": null,
      "output": "ផ្ទៃក្រឡារង្វង់។",
      "samples": [
        {
          "input": "",
          "output": "Area: 12.57"
        }
      ],
      "constraints": [
        "កាំត្រូវកំណត់ក្នុងកូដ។",
        "PI ត្រូវជា constexpr។"
      ],
      "hint": "ប្រើ constexpr double PI = 3.14159; double radius = 2.0; ហើយ area = PI * radius * radius។",
      "solution": "#include <iostream>\n#include <iomanip>\n\nusing namespace std;\n\nint main() {\n    constexpr double PI = 3.14159;\n    double radius = 2.0;\n\n    double area = PI * radius * radius;\n\n    cout << fixed << setprecision(2);\n    cout << \"Area: \" << area << endl;\n    return 0;\n}",
      "explanation": "constexpr ធានាថាតម្លៃត្រូវបានគណនានៅ compile time ហើយមិនអាចផ្លាស់ប្តូរបានទេ។ វាសមស្របសម្រាប់ចំនួនថេរដូចជា PI ដែលត្រូវប្រើក្នុងការគណនាផ្ទៃក្រឡា។",
      "expectedOutput": "Area: 12.57"
    },
    {
      "id": "variables-06",
      "topicId": "variables",
      "title": "Quiz: Reassigning a Const",
      "difficulty": "intermediate",
      "type": "quiz",
      "description": "សិស្សម្នាក់ព្យាយាមផ្លាស់ប្តូរតម្លៃរបស់ variable ដែលបានប្រកាសជា const។ សូមពិនិត្យ snippet ហើយជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។",
      "requirements": [
        "អាន snippet ដោយយកចិត្តទុកដាក់លើ keyword const។",
        "ជ្រើសរើសចម្លើយដែលពន្យល់បញ្ហា។"
      ],
      "input": null,
      "output": null,
      "snippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const int MAX_SCORE = 100;\n    MAX_SCORE = 120;\n    cout << MAX_SCORE;\n    return 0;\n}",
      "quizQuestion": "តើមានអ្វីកើតឡើងពេល compile snippet នេះ?",
      "options": [
        "Compile error ព្រោះ const variable មិនអាចផ្លាស់ប្តូរតម្លៃបានទេ។",
        "កម្មវិធីបង្ហាញ 120។",
        "កម្មវិធីបង្ហាញ 100 ហើយមិនរាយការណ៍ error។",
        "Runtime error ពេលដំណើរការ។"
      ],
      "correctIndex": 0,
      "quizExplanation": "const កំណត់ថាតម្លៃមិនអាចផ្លាស់ប្តូរបានបន្ទាប់ពី initialization។ ការផ្តល់តម្លៃថ្មីឱ្យ MAX_SCORE ដូច្នេះ compiler នឹងរាយការណ៍ error។",
      "constraints": [
        "ជ្រើសរើសចម្លើយតែមួយ។"
      ],
      "hint": "const មានន័យថាតម្លៃត្រូវរក្សាថេរ។",
      "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const int MAX_SCORE = 100;\n    cout << MAX_SCORE;\n    return 0;\n}",
      "explanation": "Variable ដែលប្រកាសជា const ត្រូវទទួលតម្លៃតែម្តងនៅពេលប្រកាស។ បើអ្នកចង់ផ្លាស់ប្តូរតម្លៃក្រោយមក ត្រូវប្រើ variable ធម្មតាមិនមែន const។",
      "expectedOutput": "Compilation error"
    },
    {
      "id": "variables-07",
      "topicId": "variables",
      "title": "Temperature Average",
      "difficulty": "intermediate",
      "type": "code",
      "description": "ស្ថានីយអាកាសធាតុចង់គណនាសីតុណ្ហភាពមធ្យមពីការវាស់វែងបីដង។ តម្លៃទាំងបីត្រូវកំណត់ក្នុងកូដ រួចគណនាមធ្យមភាគដោយប្រើ double។",
      "requirements": [
        "ប្រកាស t1 = 30.0, t2 = 32.0 និង t3 = 34.0។",
        "គណនាមធ្យមភាគដោយចែកនឹង 3.0។",
        "បង្ហាញ Average: និងតម្លៃដោយលេខទសភាគពីរ។"
      ],
      "input": null,
      "output": "សីតុណ្ហភាពមធ្យម។",
      "samples": [
        {
          "input": "",
          "output": "Average: 32.00"
        }
      ],
      "constraints": [
        "សីតុណ្ហភាពត្រូវកំណត់ក្នុងកូដ។",
        "ត្រូវចែកនឹង 3.0 ដើម្បីឱ្យបានលទ្ធផល double។"
      ],
      "hint": "double average = (t1 + t2 + t3) / 3.0; រួចបង្ហាញដោយ fixed និង setprecision(2)។",
      "solution": "#include <iostream>\n#include <iomanip>\n\nusing namespace std;\n\nint main() {\n    double t1 = 30.0;\n    double t2 = 32.0;\n    double t3 = 34.0;\n\n    double average = (t1 + t2 + t3) / 3.0;\n\n    cout << fixed << setprecision(2);\n    cout << \"Average: \" << average << endl;\n    return 0;\n}",
      "explanation": "ការចែកនឹង 3.0 ធ្វើឱ្យការគណនាប្រើ double មិនមែន integer division។ បើចែកនឹង 3 ធម្មតា លទ្ធផលអាចត្រូវបានកាត់បន្ថយជាចំនួនគត់ ដែលធ្វើឱ្យមធ្យមភាគខុស។",
      "expectedOutput": "Average: 32.00"
    },
    {
      "id": "variables-08",
      "topicId": "variables",
      "title": "Variable Shadowing in Blocks",
      "difficulty": "advanced",
      "type": "code",
      "description": "Variable ដែលប្រកាសក្នុង block អាចប្រើឈ្មោះដូច variable ខាងក្រៅ ហើយវានឹងបាំង variable ខាងក្រៅ។ លំហាត់នេះបង្ហាញពីឥទ្ធិពលនៃ scope និង shadowing។",
      "requirements": [
        "ប្រកាស int value ខាងក្រៅ block ដែលមានតម្លៃ 10។",
        "បង្កើត block ថ្មី ហើយប្រកាស int value ដែលមានតម្លៃ 25 ក្នុង block។",
        "បង្ហាញ Inner: និងតម្លៃក្នុង block។",
        "បង្ហាញ Outer: និងតម្លៃខាងក្រៅ block បន្ទាប់ពី block បញ្ចប់។"
      ],
      "input": null,
      "output": "តម្លៃខាងក្នុង និងខាងក្រៅ block។",
      "samples": [
        {
          "input": "",
          "output": "Inner: 25\nOuter: 10"
        }
      ],
      "constraints": [
        "មិនត្រូវប្រើ input ទេ។",
        "ត្រូវប្រើ block scope ពិតប្រាកដ។"
      ],
      "hint": "ប្រើ curly braces ដើម្បីបង្កើត block ថ្មី ហើយប្រកាស int value ម្តងទៀតនៅខាងក្នុង។",
      "solution": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int value = 10;\n\n    {\n        int value = 25;\n        cout << \"Inner: \" << value << endl;\n    }\n\n    cout << \"Outer: \" << value << endl;\n    return 0;\n}",
      "explanation": "Variable ខាងក្នុង block មាន scope ត្រឹម block នោះប៉ុណ្ណោះ។ ពេលវាប្រើឈ្មោះដូចគ្នា វាបាំង variable ខាងក្រៅ ហើយបន្ទាប់ពី block បញ្ចប់ variable ខាងក្រៅនៅតែរក្សាតម្លៃដើមរបស់វា។",
      "expectedOutput": "Inner: 25\nOuter: 10"
    },
    {
      "id": "variables-09",
      "topicId": "variables",
      "title": "Compound Assignment Tracker",
      "difficulty": "advanced",
      "type": "code",
      "description": "កម្មវិធីតាមដានពិន្ទុធ្វើបច្ចុប្បន្នភាពតម្លៃជាច្រើនដំណាក់កាល។ តម្លៃចាប់ផ្តើមត្រូវកំណត់ក្នុងកូដ រួចអនុវត្ត compound assignment តាមលំដាប់ដែលបានកំណត់។",
      "requirements": [
        "ប្រកាស int value = 50។",
        "បន្ថែម 20 ដោយប្រើ +=។",
        "ដក 5 ដោយប្រើ -=។",
        "គុណនឹង 2 ដោយប្រើ *=។",
        "ចែកនឹង 5 ដោយប្រើ /= រួចបង្ហាញ Final: និងតម្លៃ។"
      ],
      "input": null,
      "output": "តម្លៃចុងក្រោយក្រោយការអនុវត្តទាំងបួន។",
      "samples": [
        {
          "input": "",
          "output": "Final: 26"
        }
      ],
      "constraints": [
        "តម្លៃចាប់ផ្តើមត្រូវកំណត់ក្នុងកូដ។",
        "ត្រូវប្រើ compound assignment operators។"
      ],
      "hint": "ចាប់ផ្តើមដោយ int value = 50; រួច value += 20; value -= 5; value *= 2; value /= 5;",
      "solution": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int value = 50;\n\n    value += 20;\n    value -= 5;\n    value *= 2;\n    value /= 5;\n\n    cout << \"Final: \" << value << endl;\n    return 0;\n}",
      "explanation": "Compound assignment គឺជាការសរសេរខ្លីសម្រាប់ value = value រួមជាមួយ operation។ លំដាប់មានសារៈសំខាន់ ព្រោះការគុណ និងចែកធ្វើបន្ទាប់ពីការបូក និងដកក្នុងលំហាត់នេះ។",
      "expectedOutput": "Final: 26"
    },
    {
      "id": "variables-10",
      "topicId": "variables",
      "title": "Quiz: Uninitialized Variable",
      "difficulty": "advanced",
      "type": "quiz",
      "description": "ការប្រើ variable ដែលមិនបានផ្តល់តម្លៃដំបូងអាចបង្កបញ្ហា។ សូមពិនិត្យ snippet ហើយជ្រើសរើសការពិពណ៌នាត្រឹមត្រូវបំផុត។",
      "requirements": [
        "យល់ពី initialization នៃ variable។",
        "ជ្រើសរើសចម្លើយដែលពន្យល់ហានិភ័យបានត្រឹមត្រូវ។"
      ],
      "input": null,
      "output": null,
      "snippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count;\n    cout << count;\n    return 0;\n}",
      "quizQuestion": "តើបញ្ហាសំខាន់នៃ snippet នេះជាអ្វី?",
      "options": [
        "count មិនបានផ្តល់តម្លៃដំបូង ដូច្នេះតម្លៃរបស់វាមិនអាចទុកចិត្តបាន។",
        "cout មិនអាចបង្ហាញ int បានទេ។",
        "count ត្រូវតែជា const ជានិច្ច។",
        "ត្រូវប្រើ #include <string> ដើម្បីបង្ហាញ int។"
      ],
      "correctIndex": 0,
      "quizExplanation": "Local variable ប្រភេទ int ដែលមិនបាន initialize មានតម្លៃមិនកំណត់។ ការអានតម្លៃនោះអាចផ្តល់លទ្ធផលចៃដន្យ ដូច្នេះត្រូវផ្តល់តម្លៃដំបូងជានិច្ច។",
      "constraints": [
        "ជ្រើសរើសចម្លើយតែមួយ។"
      ],
      "hint": "Variable ត្រូវការតម្លៃដំបូងមុនពេលប្រើ។",
      "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    cout << count;\n    return 0;\n}",
      "explanation": "ការផ្តល់តម្លៃដំបូងធ្វើឱ្យ variable មានតម្លៃច្បាស់លាស់ និងការពារកំហុសដែលពិបាករក។ ជាទូទៅ គួរកំណត់តម្លៃដំបូងឱ្យ variable គ្រប់ពេលដែលអាចធ្វើបាន។",
      "expectedOutput": "Indeterminate value"
    },
    {
      "id": "variables-11",
      "topicId": "variables",
      "title": "Monthly Budget Calculator",
      "difficulty": "challenge",
      "type": "code",
      "description": "គ្រួសារមួយចង់ដឹងថាប៉ុន្មានទុកជាសន្សំ បន្ទាប់ពីចំណាយចាំបាច់បីប្រភេទ។ ចំណូល និងចំណាយត្រូវកំណត់ក្នុងកូដ រួចគណនាសន្សំ និងអត្រាសន្សំជាភាគរយ។",
      "requirements": [
        "កំណត់ income = 1200.0, rent = 500.0, food = 250.0 និង transport = 100.0។",
        "គណនា expenses ជាផលបូកនៃចំណាយទាំងបី។",
        "គណនា savings ជា income ដក expenses។",
        "គណនា savingsRate ជា savings * 100.0 / income។",
        "បង្ហាញ Income, Expenses, Savings និង Savings Rate ដោយលេខទសភាគពីរ។"
      ],
      "input": null,
      "output": "របាយការណ៍ថវិកាបួនបន្ទាត់។",
      "samples": [
        {
          "input": "",
          "output": "Income: 1200.00\nExpenses: 850.00\nSavings: 350.00\nSavings Rate: 29.17%"
        }
      ],
      "constraints": [
        "តម្លៃទាំងអស់ត្រូវកំណត់ក្នុងកូដ។",
        "ត្រូវប្រើ variable ដាច់ដោយឡែកសម្រាប់ចំណាយនីមួយៗ។"
      ],
      "hint": "expenses = rent + food + transport; savings = income - expenses; savingsRate = savings * 100.0 / income។",
      "solution": "#include <iostream>\n#include <iomanip>\n\nusing namespace std;\n\nint main() {\n    double income = 1200.0;\n    double rent = 500.0;\n    double food = 250.0;\n    double transport = 100.0;\n\n    double expenses = rent + food + transport;\n    double savings = income - expenses;\n    double savingsRate = savings * 100.0 / income;\n\n    cout << fixed << setprecision(2);\n    cout << \"Income: \" << income << endl;\n    cout << \"Expenses: \" << expenses << endl;\n    cout << \"Savings: \" << savings << endl;\n    cout << \"Savings Rate: \" << savingsRate << \"%\" << endl;\n    return 0;\n}",
      "explanation": "យើងប្រើ variable ដាច់ដោយឡែកដើម្បីរក្សាទុកចំណាយនីមួយៗ រួចបូកបញ្ចូលជា expenses។ savings គឺជាចំណូលដែលនៅសល់ ហើយ savingsRate បង្ហាញវាជាភាគរយនៃចំណូល។",
      "expectedOutput": "Income: 1200.00\nExpenses: 850.00\nSavings: 350.00\nSavings Rate: 29.17%"
    },
    {
      "id": "variables-12",
      "topicId": "variables",
      "title": "Employee Salary Slip",
      "difficulty": "challenge",
      "type": "code",
      "description": "កម្មវិធីគណនាប្រាក់ខែត្រូវគណនាប្រាក់ខែសរុប ពន្ធ និងប្រាក់ខែសុទ្ធ។ ចំនួនម៉ោង និងអត្រាក្នុងមួយម៉ោងត្រូវកំណត់ក្នុងកូដ ហើយអត្រាពន្ធត្រូវជា const។",
      "requirements": [
        "កំណត់ hours = 50.0 និង hourlyRate = 10.0។",
        "គណនា gross ជា hours * hourlyRate។",
        "ប្រកាស const double TAX_RATE = 0.15។",
        "គណនា tax និង net ដោយប្រើ TAX_RATE។",
        "បង្ហាញ Gross, Tax និង Net ដោយលេខទសភាគពីរ។"
      ],
      "input": null,
      "output": "ប័ណ្ណប្រាក់ខែបីបន្ទាត់។",
      "samples": [
        {
          "input": "",
          "output": "Gross: 500.00\nTax: 75.00\nNet: 425.00"
        }
      ],
      "constraints": [
        "ម៉ោង និងអត្រាត្រូវកំណត់ក្នុងកូដ។",
        "TAX_RATE ត្រូវជា const។"
      ],
      "hint": "gross = hours * hourlyRate; tax = gross * TAX_RATE; net = gross - tax។",
      "solution": "#include <iostream>\n#include <iomanip>\n\nusing namespace std;\n\nint main() {\n    double hours = 50.0;\n    double hourlyRate = 10.0;\n\n    const double TAX_RATE = 0.15;\n    double gross = hours * hourlyRate;\n    double tax = gross * TAX_RATE;\n    double net = gross - tax;\n\n    cout << fixed << setprecision(2);\n    cout << \"Gross: \" << gross << endl;\n    cout << \"Tax: \" << tax << endl;\n    cout << \"Net: \" << net << endl;\n    return 0;\n}",
      "explanation": "gross គឺជាប្រាក់ខែមុនពន្ធ ដែលគណនាពីម៉ោងធ្វើការនិងអត្រា។ ពន្ធគឺជាភាគរយថេរនៃ gross ហើយ net គឺជាប្រាក់ខែដែលទទួលបានបន្ទាប់ពីកាត់ពន្ធ។",
      "expectedOutput": "Gross: 500.00\nTax: 75.00\nNet: 425.00"
    },
    {
      "id": "variables-13",
      "topicId": "variables",
      "title": "Coordinate Distance",
      "difficulty": "challenge",
      "type": "code",
      "description": "កម្មវិធីគណនាចម្ងាយរវាងចំណុចពីរនៅលើយន្តហោះ។ កូអរដោនេរបស់ចំណុចទាំងពីរត្រូវកំណត់ក្នុងកូដ រួចគណនាចម្ងាយដោយប្រើរូបមន្ត Pythagoras។",
      "requirements": [
        "កំណត់ x1 = 0.0, y1 = 0.0, x2 = 3.0 និង y2 = 4.0។",
        "គណនា dx ជា x2 - x1 និង dy ជា y2 - y1។",
        "គណនា distance ជា sqrt(dx * dx + dy * dy)។",
        "បង្ហាញ Distance: និងតម្លៃដោយលេខទសភាគពីរ។"
      ],
      "input": null,
      "output": "ចម្ងាយរវាងចំណុចពីរ។",
      "samples": [
        {
          "input": "",
          "output": "Distance: 5.00"
        }
      ],
      "constraints": [
        "កូអរដោនេត្រូវកំណត់ក្នុងកូដ។",
        "ត្រូវប្រើ #include <cmath> សម្រាប់ sqrt។"
      ],
      "hint": "ប្រើ double distance = sqrt(dx * dx + dy * dy); ហើយបង្ហាញដោយ fixed និង setprecision(2)។",
      "solution": "#include <iostream>\n#include <iomanip>\n#include <cmath>\n\nusing namespace std;\n\nint main() {\n    double x1 = 0.0;\n    double y1 = 0.0;\n    double x2 = 3.0;\n    double y2 = 4.0;\n\n    double dx = x2 - x1;\n    double dy = y2 - y1;\n    double distance = sqrt(dx * dx + dy * dy);\n\n    cout << fixed << setprecision(2);\n    cout << \"Distance: \" << distance << endl;\n    return 0;\n}",
      "explanation": "ចម្ងាយរវាងចំណុចពីរគឺជាអ៊ីប៉ូតេនុសនៃត្រីកោណកែងដែលមានជើង dx និង dy។ sqrt គណនាឫសការេ ហើយ setprecision(2) បង្ហាញលទ្ធផលជាលេខទសភាគពីរខ្ទង់។",
      "expectedOutput": "Distance: 5.00"
    }
  ]);
})();
