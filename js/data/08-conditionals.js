(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "conditionals-01",
      topicId: "conditionals",
      title: "Even or Odd",
      difficulty: "beginner",
      type: "code",
      description: `សិស្សម្នាក់ចង់ឱ្យកម្មវិធីរបស់គាត់ចាត់ថ្នាក់លេខជា គូ ឬ សេស។ លំហាត់នេះហាត់ការប្រើ if, else និង operator ម៉ូឌុល ដើម្បីពិនិត្យលក្ខខណ្ឌសាមញ្ញមួយ។`,
      requirements: [
        "អានចំនួនគត់មួយពី input។",
        "បើលេខចែកដាច់នឹង 2 ឱ្យបង្ហាញ Even។",
        "បើលេខមិនចែកដាច់នឹង 2 ឱ្យបង្ហាញ Odd។",
        "បង្ហាញលទ្ធផលតែមួយបន្ទាត់ ហើយមិនត្រូវបង្ហាញ prompt ទេ។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "ពាក្យ Even ឬ Odd។",
      samples: [{ input: "7", output: "Odd" }],
      constraints: ["លេខអាចជាចំនួនគត់វិជ្ជមាន អវិជ្ជមាន ឬសូន្យ។", "មិនត្រូវបង្ហាញអត្ថបទបន្ថែមទេ។"],
      hint: "ប្រើ number % 2 == 0 ដើម្បីពិនិត្យថាជាលេខគូ។ បើលទ្ធផលជា 0 គឺជា Even បើមិនដូច្នេះគឺ Odd។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int number;
    cin >> number;

    if (number % 2 == 0) {
        cout << "Even" << endl;
    } else {
        cout << "Odd" << endl;
    }
    return 0;
}`,
      explanation: `operator % ផ្តល់សំណល់នៃការចែក។ បើ number % 2 ស្មើ 0 នោះលេខចែកដាច់នឹង 2 ដូច្នេះជាលេខគូ (Even)។ បើមិនស្មើ 0 នោះជាលេខសេស (Odd)។`,
      expectedOutput: "Odd"
    },
    {
      id: "conditionals-02",
      topicId: "conditionals",
      title: "Pass or Fail",
      difficulty: "beginner",
      type: "code",
      description: `គ្រូម្នាក់ចង់ឱ្យកម្មវិធីសម្រេចថាសិស្សជាប់ ឬធ្លាក់ដោយផ្អែកលើពិន្ទុ។ ពិន្ទុចាប់ពី 50 ឡើងទៅគឺជាប់។ លំហាត់នេះប្រើ comparison operator ជាមួយ if និង else។`,
      requirements: [
        "អានពិន្ទុជាចំនួនគត់ពី input។",
        "បើពិន្ទុធំជាង ឬស្មើ 50 ឱ្យបង្ហាញ Pass។",
        "បើពិន្ទុតិចជាង 50 ឱ្យបង្ហាញ Fail។"
      ],
      input: "ពិន្ទុជាចំនួនគត់ពី 0 ដល់ 100។",
      output: "ពាក្យ Pass ឬ Fail។",
      samples: [{ input: "45", output: "Fail" }],
      constraints: ["ពិន្ទុស្ថិតនៅចន្លោះ 0 ដល់ 100។", "មិនត្រូវបង្ហាញ prompt ឬអត្ថបទបន្ថែមទេ។"],
      hint: "សរសេរ if (score >= 50) សម្រាប់ករណីជាប់ ហើយប្រើ else សម្រាប់ករណីធ្លាក់។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int score;
    cin >> score;

    if (score >= 50) {
        cout << "Pass" << endl;
    } else {
        cout << "Fail" << endl;
    }
    return 0;
}`,
      explanation: `លក្ខខណ្ឌ score >= 50 ផ្ទៀងផ្ទាត់ថាពិន្ទុដល់កម្រិតជាប់ឬអត់។ បើពិត កម្មវិធីបង្ហាញ Pass។ បើមិនពិត វារត់ទៅ else ហើយបង្ហាញ Fail។`,
      expectedOutput: "Fail"
    },
    {
      id: "conditionals-03",
      topicId: "conditionals",
      title: "Larger of Two Numbers",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីតូចមួយត្រូវប្រៀបធៀបលេខពីរ ហើយបង្ហាញលេខធំជាង។ នេះជាការអនុវត្ត if, else ជាមួយ comparison operator ដែលអ្នកនឹងប្រើញឹកញាប់។`,
      requirements: [
        "អានចំនួនគត់ពីរពី input។",
        "ប្រៀបធៀបលេខទាំងពីរ។",
        "បង្ហាញតែលេខធំជាង។",
        "បើលេខទាំងពីរស្មើគ្នា បង្ហាញលេខនោះតែម្តង។"
      ],
      input: "ចំនួនគត់ពីរ បំបែកដោយចន្លោះ។",
      output: "ចំនួនគត់ធំជាង។",
      samples: [{ input: "12 25", output: "25" }],
      constraints: ["លេខទាំងពីរស្ថិតក្នុងចន្លោះ int ធម្មតា។", "មិនត្រូវបង្ហាញ label បន្ថែមទេ។"],
      hint: "ប្រើ if (a > b) cout << a; else cout << b; ហើយបញ្ចប់ដោយ endl។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a > b) {
        cout << a << endl;
    } else {
        cout << b << endl;
    }
    return 0;
}`,
      explanation: `យើងប្រើ a > b ដើម្បីសម្រេចថា a ធំជាង b ឬអត់។ បើពិត បង្ហាញ a។ បើមិនពិត រួមទាំងករណីស្មើគ្នា បង្ហាញ b។ ដូច្នេះលទ្ធផលតែងតែជាលេខធំជាង ឬលេខស្មើ។`,
      expectedOutput: "25"
    },
    {
      id: "conditionals-04",
      topicId: "conditionals",
      title: "Positive, Negative, or Zero",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីគណិតវិទ្យាមួយត្រូវចាត់ថ្នាក់លេខជាបីប្រភេទ៖ វិជ្ជមាន អវិជ្ជមាន និង សូន្យ។ លំហាត់នេះប្រើ if, else if និង else ដើម្បីគ្របដណ្តប់លក្ខខណ្ឌទាំងអស់។`,
      requirements: [
        "អានចំនួនគត់មួយពី input។",
        "បើលេខធំជាង 0 បង្ហាញ Positive។",
        "បើលេខតិចជាង 0 បង្ហាញ Negative។",
        "បើលេខស្មើ 0 បង្ហាញ Zero។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "ពាក្យ Positive, Negative ឬ Zero។",
      samples: [{ input: "-4", output: "Negative" }],
      constraints: ["ត្រូវគ្របដណ្តប់ករណីសូន្យដោយឡែក។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ពិនិត្យ number > 0 មុន បន្ទាប់មក number < 0 ហើយប្រើ else សម្រាប់សូន្យ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int number;
    cin >> number;

    if (number > 0) {
        cout << "Positive" << endl;
    } else if (number < 0) {
        cout << "Negative" << endl;
    } else {
        cout << "Zero" << endl;
    }
    return 0;
}`,
      explanation: `if និង else if ត្រូវបានពិនិត្យតាមលំដាប់ពីលើចុះក្រោម។ បើ number > 0 មិនពិត វាបន្តទៅ number < 0។ បើទាំងពីរមិនពិត នោះលេខពិតជាសូន្យ ដូច្នេះ else ត្រូវគ្នា។`,
      expectedOutput: "Negative"
    },
    {
      id: "conditionals-05",
      topicId: "conditionals",
      title: "Grade Letter",
      difficulty: "intermediate",
      type: "code",
      description: `សាលាមួយបម្លែងពិន្ទុលេខទៅជានិទ្ទេសអក្សរ។ អ្នកត្រូវសរសេរកម្មវិធីដែលពិនិត្យជួរពិន្ទុពីខ្ពស់ទៅទាប ដើម្បីកំណត់និទ្ទេសត្រឹមត្រូវ។`,
      requirements: [
        "អានពិន្ទុជាចំនួនគត់ពី 0 ដល់ 100។",
        "ពិន្ទុ 90 ឡើងទៅ បង្ហាញ A។",
        "ពិន្ទុ 80 ដល់ 89 បង្ហាញ B។",
        "ពិន្ទុ 70 ដល់ 79 បង្ហាញ C។",
        "ពិន្ទុ 60 ដល់ 69 បង្ហាញ D។",
        "ពិន្ទុក្រោម 60 បង្ហាញ F។"
      ],
      input: "ពិន្ទុជាចំនួនគត់។",
      output: "និទ្ទេសមួយអក្សរ។",
      samples: [{ input: "85", output: "B" }],
      constraints: ["ត្រូវពិនិត្យជួរខ្ពស់មុនជួរទាប។", "បង្ហាញតែអក្សរនិទ្ទេសប៉ុណ្ណោះ។"],
      hint: "ប្រើ else if តាមលំដាប់ >= 90, >= 80, >= 70, >= 60 ហើយ else សម្រាប់ F។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int score;
    cin >> score;

    if (score >= 90) {
        cout << "A" << endl;
    } else if (score >= 80) {
        cout << "B" << endl;
    } else if (score >= 70) {
        cout << "C" << endl;
    } else if (score >= 60) {
        cout << "D" << endl;
    } else {
        cout << "F" << endl;
    }
    return 0;
}`,
      explanation: `លំដាប់នៃ else if មានសារៈសំខាន់ណាស់។ ដោយពិនិត្យ >= 90 មុន ពិន្ទុ 95 នឹងត្រូវចាប់ជា A មិនមែន B។ បន្ទាប់មកជួរបន្ថែមទៀតត្រូវបានពិនិត្យតែនៅពេលជួរខាងលើមិនពិតប៉ុណ្ណោះ។`,
      expectedOutput: "B"
    },
    {
      id: "conditionals-06",
      topicId: "conditionals",
      title: "Quiz: Which Grade Is Printed?",
      difficulty: "intermediate",
      type: "quiz",
      description: `សិស្សម្នាក់សរសេរកម្មវិធីកំណត់និទ្ទេសដោយប្រើ else if ជាច្រើនជាន់។ សូមអាន snippet ហើយកំណត់ថាតើកម្មវិធីនឹងបង្ហាញអ្វី។`,
      requirements: [
        "អាន snippet ដោយយកចិត្តទុកដាក់លើតម្លៃ score។",
        "ពិនិត្យលក្ខខណ្ឌតាមលំដាប់ if និង else if។",
        "ជ្រើសរើសចម្លើយមួយ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int score = 72;
    if (score >= 90) {
        cout << "A";
    } else if (score >= 80) {
        cout << "B";
    } else if (score >= 70) {
        cout << "C";
    } else {
        cout << "D";
    }
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: ["A", "B", "C", "D"],
      correctIndex: 2,
      quizExplanation: "score មានតម្លៃ 72។ លក្ខខណ្ឌ >= 90 និង >= 80 មិនពិត ប៉ុន្តែ >= 70 ពិត ដូច្នេះកម្មវិធីបង្ហាញ C ហើយឈប់ពិនិត្យ else if បន្ថែមទៀត។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ចាប់ផ្តើមពិនិត្យពីលក្ខខណ្ឌដំបូងដែលពិត។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int score = 72;
    if (score >= 90) {
        cout << "A";
    } else if (score >= 80) {
        cout << "B";
    } else if (score >= 70) {
        cout << "C";
    } else {
        cout << "D";
    }
    return 0;
}`,
      explanation: `else if ត្រូវបានពិនិត្យតាមលំដាប់។ នៅពេលលក្ខខណ្ឌមួយពិត ប្លុកនោះរត់ ហើយប្លុក else if ដែលនៅសល់ត្រូវបានរំលង។ ដោយសារ 72 >= 70 តែមិន >= 80 លទ្ធផលគឺ C។`,
      expectedOutput: "C"
    },
    {
      id: "conditionals-07",
      topicId: "conditionals",
      title: "Leap Year Check",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រតិទិនសាលាត្រូវការកំណត់ថាឆ្នាំណាជាឆ្នាំបង្គ្រប់ ដើម្បីគណនាថ្ងៃបន្ថែមនៅខែកុម្ភៈ។ លំហាត់នេះប្រើ logical operators រួមគ្នាជាមួយ if។`,
      requirements: [
        "អានឆ្នាំជាចំនួនគត់ពី input។",
        "ឆ្នាំចែកដាច់នឹង 400 គឺជាឆ្នាំបង្គ្រប់។",
        "ឆ្នាំចែកដាច់នឹង 4 តែមិនចែកដាច់នឹង 100 ក៏ជាឆ្នាំបង្គ្រប់។",
        "បង្ហាញ Leap year ឬ Not a leap year។"
      ],
      input: "ឆ្នាំជាចំនួនគត់វិជ្ជមាន។",
      output: "ពាក្យ Leap year ឬ Not a leap year។",
      samples: [{ input: "2024", output: "Leap year" }],
      constraints: ["ត្រូវគោរពច្បាប់ឆ្នាំ 100 និង 400។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ប្រើ (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ជាលក្ខខណ្ឌតែមួយ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int year;
    cin >> year;

    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        cout << "Leap year" << endl;
    } else {
        cout << "Not a leap year" << endl;
    }
    return 0;
}`,
      explanation: `ឆ្នាំបង្គ្រប់មានច្បាប់ពិសេស។ ឆ្នាំដែលចែកដាច់នឹង 100 មិនមែនជាឆ្នាំបង្គ្រប់ទេ លុះត្រាតែវាចែកដាច់នឹង 400។ ដូច្នេះ 2000 ជាឆ្នាំបង្គ្រប់ ប៉ុន្តែ 1900 មិនមែន។ ការប្រើ || និង && ជួយសរសេរលក្ខខណ្ឌទាំងនេះក្នុងបន្ទាត់តែមួយ។`,
      expectedOutput: "Leap year"
    },
    {
      id: "conditionals-08",
      topicId: "conditionals",
      title: "Simple Calculator",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវបង្កើតម៉ាស៊ីនគិតលេខបឋមដែលទទួលប្រមាណវិធី បូក ដក គុណ ចែក។ លំហាត់នេះជាការអនុវត្ត switch ជាមួយ char operator។`,
      requirements: [
        "អានចំនួនគត់ a, ប្រមាណវិធី op និងចំនួនគត់ b តាមលំដាប់។",
        "គាំទ្រ operator +, -, * និង /។",
        "បើចែកនឹងសូន្យ បង្ហាញ Error។",
        "បើ operator មិនស្គាល់ បង្ហាញ Error។",
        "បង្ហាញលទ្ធផលជាចំនួនគត់។"
      ],
      input: "ចំនួនគត់ a បន្ទាប់មក operator និងចំនួនគត់ b។",
      output: "លទ្ធផលនៃការគណនា ឬ Error។",
      samples: [{ input: "15 * 4", output: "60" }],
      constraints: ["ការចែកជា integer division។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ប្រើ switch (op) ហើយក្នុង case '/' ពិនិត្យ b == 0 មុនចែក។ កុំភ្លេច break ក្នុង case នីមួយៗ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    char op;
    cin >> a >> op >> b;

    switch (op) {
        case '+':
            cout << a + b << endl;
            break;
        case '-':
            cout << a - b << endl;
            break;
        case '*':
            cout << a * b << endl;
            break;
        case '/':
            if (b == 0) {
                cout << "Error" << endl;
            } else {
                cout << a / b << endl;
            }
            break;
        default:
            cout << "Error" << endl;
            break;
    }
    return 0;
}`,
      explanation: `switch ជ្រើសរើស case ដែលត្រូវនឹងតម្លៃ op។ break បញ្ឈប់ការធ្លាក់ទៅ case បន្ទាប់។ ករណីចែកនឹងសូន្យត្រូវពិនិត្យដោយឡែក ព្រោះវាមិនមែនជាប្រមាណវិធីត្រឹមត្រូវ។ default គ្របដណ្តប់ operator ដែលមិនស្គាល់។`,
      expectedOutput: "60"
    },
    {
      id: "conditionals-09",
      topicId: "conditionals",
      title: "Triangle Type",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីធរណីមាត្រមួយត្រូវកំណត់ប្រភេទត្រីកោណពីរប្រវែងជ្រុងបី។ អ្នកត្រូវពិនិត្យថាជ្រុងទាំងបីអាចបង្កើតត្រីកោណបាន ឬអត់ មុនពេលចាត់ថ្នាក់។`,
      requirements: [
        "អានចំនួនគត់បីជាប្រវែងជ្រុង។",
        "បើមិនអាចបង្កើតត្រីកោណ បង្ហាញ Not a triangle។",
        "បើជ្រុងទាំងបីស្មើ បង្ហាញ Equilateral។",
        "បើជ្រុងពីរស្មើ បង្ហាញ Isosceles។",
        "បើជ្រុងទាំងបីខុសគ្នា បង្ហាញ Scalene។"
      ],
      input: "ចំនួនគត់បី បំបែកដោយចន្លោះ។",
      output: "ប្រភេទត្រីកោណ។",
      samples: [{ input: "3 4 5", output: "Scalene" }],
      constraints: ["ជ្រុងជាចំនួនគត់វិជ្ជមាន។", "ត្រូវពិនិត្យលក្ខខណ្ឌត្រីកោណមុនចាត់ថ្នាក់។"],
      hint: "ត្រីកោណត្រឹមត្រូវនៅពេល a + b > c, a + c > b និង b + c > a។ បន្ទាប់មកពិនិត្យជ្រុងស្មើគ្នា។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    if (a + b <= c || a + c <= b || b + c <= a) {
        cout << "Not a triangle" << endl;
    } else if (a == b && b == c) {
        cout << "Equilateral" << endl;
    } else if (a == b || a == c || b == c) {
        cout << "Isosceles" << endl;
    } else {
        cout << "Scalene" << endl;
    }
    return 0;
}`,
      explanation: `ដើម្បីក្លាយជាត្រីកោណ ផលបូកជ្រុងពីរត្រូវធំជាងជ្រុងទីបីជានិច្ច។ បើលក្ខខណ្ឌនេះខុស យើងបង្ហាញ Not a triangle ហើយឈប់។ បន្ទាប់មកចាត់ថ្នាក់តាមចំនួនជ្រុងស្មើ។ ត្រីកោណស្មើជ្រុងទាំងបីក៏ជា isosceles ដែរ ដូច្នេះត្រូវពិនិត្យ equilateral មុន។`,
      expectedOutput: "Scalene"
    },
    {
      id: "conditionals-10",
      topicId: "conditionals",
      title: "Season by Month",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីអាកាសធាតុមួយបង្ហាញរដូវតាមលេខខែ។ អ្នកត្រូវប្រើ switch ជាមួយ case ជាច្រើនដែលចែករំលែកលទ្ធផលដូចគ្នា ដើម្បីកាត់បន្ថយកូដស្ទួន។`,
      requirements: [
        "អានលេខខែពី 1 ដល់ 12។",
        "ខែ 12, 1, 2 បង្ហាញ Winter។",
        "ខែ 3, 4, 5 បង្ហាញ Spring។",
        "ខែ 6, 7, 8 បង្ហាញ Summer។",
        "ខែ 9, 10, 11 បង្ហាញ Autumn។",
        "លេខខែមិនត្រឹមត្រូវ បង្ហាញ Invalid month។"
      ],
      input: "លេខខែជាចំនួនគត់។",
      output: "ឈ្មោះរដូវ ឬ Invalid month។",
      samples: [{ input: "12", output: "Winter" }],
      constraints: ["ត្រូវប្រើ switch និង fall-through សម្រាប់ខែដែលមានរដូវដូចគ្នា។", "មិនត្រូវប្រើ if ជំនួស switch ទេ។"],
      hint: "ដាក់ case 12: case 1: case 2: បន្ទាប់មក cout និង break តែម្តង។ ធ្វើដូចគ្នាសម្រាប់រដូវផ្សេងទៀត។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int month;
    cin >> month;

    switch (month) {
        case 12:
        case 1:
        case 2:
            cout << "Winter" << endl;
            break;
        case 3:
        case 4:
        case 5:
            cout << "Spring" << endl;
            break;
        case 6:
        case 7:
        case 8:
            cout << "Summer" << endl;
            break;
        case 9:
        case 10:
        case 11:
            cout << "Autumn" << endl;
            break;
        default:
            cout << "Invalid month" << endl;
            break;
    }
    return 0;
}`,
      explanation: `នៅពេល case មួយគ្មាន break ការប្រតិបត្តិនឹងធ្លាក់ទៅ case ខាងក្រោម។ យើងចេញប្រយោជន៍ពីឥរិយាបថនេះ ដើម្បីឱ្យខែជាច្រើនចែករំលែក output តែមួយ។ default គ្របដណ្តប់លេខខែដែលមិនស្ថិតក្នុង 1 ដល់ 12។`,
      expectedOutput: "Winter"
    },
    {
      id: "conditionals-11",
      topicId: "conditionals",
      title: "Number to Word",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីអប់រំកុមារតូចត្រូវបំលែងលេខ 1 ដល់ 5 ទៅជាពាក្យអង់គ្លេស។ លំហាត់នេះសាកល្បងការប្រើ switch ជាមួយ default សម្រាប់តម្លៃក្រៅជួរ។`,
      requirements: [
        "អានចំនួនគត់មួយពី input។",
        "បើលេខ 1 ដល់ 5 បង្ហាញពាក្យ One, Two, Three, Four ឬ Five តាមលេខ។",
        "បើលេខក្រៅជួរ បង្ហាញ Unknown។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "ពាក្យអង់គ្លេស ឬ Unknown។",
      samples: [{ input: "3", output: "Three" }],
      constraints: ["ត្រូវប្រើ switch។", "មិនត្រូវប្រើ array ឬ if ជាច្រើនជាន់ទេ។"],
      hint: "សរសេរ case 1 ដល់ case 5 ដោយនីមួយៗមាន cout និង break។ បន្ថែម default សម្រាប់ Unknown។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int number;
    cin >> number;

    switch (number) {
        case 1:
            cout << "One" << endl;
            break;
        case 2:
            cout << "Two" << endl;
            break;
        case 3:
            cout << "Three" << endl;
            break;
        case 4:
            cout << "Four" << endl;
            break;
        case 5:
            cout << "Five" << endl;
            break;
        default:
            cout << "Unknown" << endl;
            break;
    }
    return 0;
}`,
      explanation: `switch សមស្របសម្រាប់ការប្រៀបធៀបតម្លៃច្បាស់លាស់ជាច្រើន។ case នីមួយៗគ្របដណ្តប់លេខមួយ ហើយ break បញ្ឈប់ការបន្តទៅ case បន្ទាប់។ default ធានាថាកម្មវិធីមាន output ទោះបី input មិនស្ថិតក្នុងជួរក៏ដោយ។`,
      expectedOutput: "Three"
    },
    {
      id: "conditionals-12",
      topicId: "conditionals",
      title: "Quadrant Finder",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីកូអរដោនេមួយត្រូវកំណត់ទីតាំងចំណុចនៅលើប្លង់ Cartesian។ ចំណុចអាចនៅក្នុង quadrant ណាមួយ ឬនៅលើអ័ក្ស ឬនៅគល់តំណាង។`,
      requirements: [
        "អាន x និង y ជាចំនួនគត់ពី input។",
        "បើ x = 0 និង y = 0 បង្ហាញ Origin។",
        "បើ x = 0 តែ y មិន 0 បង្ហាញ Y-axis។",
        "បើ y = 0 តែ x មិន 0 បង្ហាញ X-axis។",
        "បើផ្សេង បង្ហាញ Quadrant I, II, III ឬ IV តាមសញ្ញា x និង y។"
      ],
      input: "ចំនួនគត់ពីរ x និង y។",
      output: "ទីតាំងចំណុច។",
      samples: [{ input: "3 -2", output: "Quadrant IV" }],
      constraints: ["ត្រូវពិនិត្យករណីអ័ក្ស និងគល់តំណាងមុន quadrant។", "ប្រើ Roman numeral ឱ្យត្រូវតាមឧទាហរណ៍។"],
      hint: "Quadrant I មាន x > 0 និង y > 0។ Quadrant II មាន x < 0 និង y > 0។ បន្តតាមលំដាប់នេះ ហើយពិនិត្យ x == 0 ឬ y == 0 មុន។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int x, y;
    cin >> x >> y;

    if (x == 0 && y == 0) {
        cout << "Origin" << endl;
    } else if (x == 0) {
        cout << "Y-axis" << endl;
    } else if (y == 0) {
        cout << "X-axis" << endl;
    } else if (x > 0 && y > 0) {
        cout << "Quadrant I" << endl;
    } else if (x < 0 && y > 0) {
        cout << "Quadrant II" << endl;
    } else if (x < 0 && y < 0) {
        cout << "Quadrant III" << endl;
    } else {
        cout << "Quadrant IV" << endl;
    }
    return 0;
}`,
      explanation: `ចំណុចដែលនៅលើអ័ក្សមាន x ឬ y ស្មើ 0 ដូច្នេះត្រូវពិនិត្យករណីទាំងនេះមុន ដើម្បីកុំឱ្យវាត្រូវចាត់ជា quadrant។ បន្ទាប់មកសញ្ញារបស់ x និង y កំណត់ quadrant។ ករណីចុងក្រោយគឺ x > 0 និង y < 0 ដែលជា Quadrant IV។`,
      expectedOutput: "Quadrant IV"
    },
    {
      id: "conditionals-13",
      topicId: "conditionals",
      title: "Quiz: Logical Operator Precedence",
      difficulty: "challenge",
      type: "quiz",
      description: `Logical operators អាចផ្លាស់ប្តូរលទ្ធផលនៃលក្ខខណ្ឌយ៉ាងខ្លាំង។ សូមអាន snippet ហើយកំណត់ output ដោយគោរពលំដាប់ precedence។`,
      requirements: [
        "អានតម្លៃរបស់ a, b និង c។",
        "ពិនិត្យថា && ឬ || ត្រូវបានគណនាមុន។",
        "ជ្រើសរើស output ត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int a = -1;
    int b = 5;
    int c = 0;
    if (a > 0 && b > 0 || c > 0) {
        cout << "Yes";
    } else {
        cout << "No";
    }
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: ["Yes", "No", "Compile error", "Yes និង No ទាំងពីរ"],
      correctIndex: 1,
      quizExplanation: "&& មាន precedence ខ្ពស់ជាង || ដូច្នេះកន្សោមត្រូវអានថា (a > 0 && b > 0) || (c > 0)។ a > 0 មិនពិត ដូច្នេះផ្នែកឆ្វេងមិនពិត។ c > 0 ក៏មិនពិត ដូច្នេះលទ្ធផលសរុបមិនពិត ហើយកម្មវិធីបង្ហាញ No។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ចងចាំថា && ត្រូវគណនាមុន || ហើយវង់ក្រចកអាចធ្វើឱ្យអានងាយជាង។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int a = -1;
    int b = 5;
    int c = 0;
    if (a > 0 && b > 0 || c > 0) {
        cout << "Yes";
    } else {
        cout << "No";
    }
    return 0;
}`,
      explanation: `precedence នៃ && ខ្ពស់ជាង || ដូច្នេះកន្សោមត្រូវបានវាយតម្លៃជា (a > 0 && b > 0) || (c > 0)។ a > 0 គឺ false ដូច្នេះ (false && true) គឺ false។ c > 0 ក៏ false ដែរ។ false || false គឺ false ដូច្នេះ else រត់ ហើយបង្ហាញ No។`,
      expectedOutput: "No"
    }
  ]);
})();
