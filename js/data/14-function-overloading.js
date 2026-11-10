(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "function-overloading-01",
      topicId: "function-overloading",
      title: "Overloaded Add",
      difficulty: "beginner",
      type: "code",
      description: `Function overloading អនុញ្ញាតឱ្យយើងប្រើឈ្មោះ function ដូចគ្នាសម្រាប់ប្រភេទ parameter ផ្សេងគ្នា។ លំហាត់នេះឱ្យអ្នកសរសេរ add សម្រាប់ int និង add សម្រាប់ double។`,
      requirements: [
        "បង្កើត function add(int, int) ដែល return ផលបូកចំនួនគត់។",
        "បង្កើត function add(double, double) ដែល return ផលបូកចំនួនទសភាគ។",
        "អាន int ពីរ និង double ពីរ រួចបង្ហាញលទ្ធផលពីរ overload ដាច់ដោយឡែក។"
      ],
      input: "បន្ទាត់ទីមួយ int ពីរ និងបន្ទាត់ទីពីរ double ពីរ។",
      output: "បន្ទាត់ទីមួយ Int sum និងបន្ទាត់ទីពីរ Double sum ដែលមានទសភាគមួយ។",
      samples: [{ input: "3 4\n2.5 1.5", output: "Int sum: 7\nDouble sum: 4.0" }],
      constraints: ["ត្រូវប្រើ function ឈ្មោះ add ទាំងពីរ។", "Double sum ត្រូវបង្ហាញទសភាគមួយ។"],
      hint: "ប្រើ fixed និង setprecision(1) សម្រាប់ Double sum។ Compiler ជ្រើស overload តាមប្រភេទ argument។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    int a, b;
    double x, y;
    cin >> a >> b;
    cin >> x >> y;

    cout << "Int sum: " << add(a, b) << endl;
    cout << fixed << setprecision(1);
    cout << "Double sum: " << add(x, y) << endl;
    return 0;
}`,
      explanation: `Compiler មើលប្រភេទ argument ដើម្បីជ្រើស overload ត្រឹមត្រូវ។ add(a, b) ជាមួយ int ហៅ version int ឯ add(x, y) ជាមួយ double ហៅ version double។ ឈ្មោះដូចគ្នា ប៉ុន្តែ parameter list ខុសគ្នា។`,
      expectedOutput: "Int sum: 7\nDouble sum: 4.0"
    },
    {
      id: "function-overloading-02",
      topicId: "function-overloading",
      title: "Overloaded Area",
      difficulty: "beginner",
      type: "code",
      description: `ការគណនាកំឡុងការការ៉េ និងចតុកោណមានឈ្មោះដូចគ្នាថា area ប៉ុន្តែចំនួន parameter ខុសគ្នា។ អ្នកត្រូវបង្កើត overload ពីរសម្រាប់ករណីទាំងនេះ។`,
      requirements: [
        "បង្កើត function area(int side) សម្រាប់ការ៉េ។",
        "បង្កើត function area(int length, int width) សម្រាប់ចតុកោណ។",
        "អាន side និង length width រួចបង្ហាញផ្ទៃទាំងពីរ។"
      ],
      input: "បន្ទាត់ទីមួយ side និងបន្ទាត់ទីពីរ length និង width។",
      output: "បន្ទាត់ទីមួយ Square area និងបន្ទាត់ទីពីរ Rectangle area។",
      samples: [{ input: "4\n5 3", output: "Square area: 16\nRectangle area: 15" }],
      constraints: ["ចំនួនគត់វិជ្ជមាន។", "ត្រូវប្រើ function ឈ្មោះ area ទាំងពីរ។"],
      hint: "area(int side) return side * side; ហើយ area(int length, int width) return length * width;។",
      solution: String.raw`#include <iostream>

using namespace std;

int area(int side) {
    return side * side;
}

int area(int length, int width) {
    return length * width;
}

int main() {
    int side;
    int length, width;
    cin >> side;
    cin >> length >> width;

    cout << "Square area: " << area(side) << endl;
    cout << "Rectangle area: " << area(length, width) << endl;
    return 0;
}`,
      explanation: `overload អាចខុសគ្នាដោយចំនួន parameter ផងដែរ។ area(side) មាន argument មួយ ដូច្នេះហៅ version ការ៉េ ឯ area(length, width) មាន argument ពីរ ដូច្នេះហៅ version ចតុកោណ។`,
      expectedOutput: "Square area: 16\nRectangle area: 15"
    },
    {
      id: "function-overloading-03",
      topicId: "function-overloading",
      title: "Quiz: Return Type Only",
      difficulty: "beginner",
      type: "quiz",
      description: `សិស្សម្នាក់ព្យាយាមបង្កើត function ពីរដែលមានឈ្មោះដូចគ្នា និង parameter ដូចគ្នា ប៉ុន្តែ return type ខុសគ្នា។ សូមពិនិត្យ snippet ហើយជ្រើសរើសចម្លើយត្រឹមត្រូវ។`,
      requirements: ["ពិនិត្យឈ្មោះ function, parameter និង return type។", "ជ្រើសរើសចម្លើយមួយ។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int getValue() {
    return 5;
}

double getValue() {
    return 5.5;
}

int main() {
    cout << getValue() << endl;
    return 0;
}`,
      quizQuestion: "តើហេតុអ្វី snippet នេះមិនអាច compile បាន?",
      options: [
        "មិនអាច overload function ដោយខុសគ្នាតែ return type បានទេ។",
        "មិនអាចប្រើ double ក្នុង function បានទេ។",
        "cout មិនអាចបង្ហាញ int បានទេ។",
        "ត្រូវប្រើ void getValue() ជំនួស។"
      ],
      correctIndex: 0,
      quizExplanation: "Function overloading ត្រូវផ្អែកលើ parameter list ដែលខុសគ្នា។ Return type មិនគ្រប់គ្រាន់សម្រាប់បែងចែក overload ទេ ដូច្នេះ compiler មិនអាចជ្រើសបាន។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សូមពិនិត្យ parameter list នៃ function ទាំងពីរ។ តើវាខុសគ្នាឬអត់?",
      solution: String.raw`#include <iostream>
using namespace std;

int getValue() {
    return 5;
}

double getDoubleValue() {
    return 5.5;
}

int main() {
    cout << getValue() << endl;
    return 0;
}`,
      explanation: `overload resolution ត្រូវការ parameter list ខុសគ្នា ដូចជាចំនួន ឬប្រភេទ parameter។ ប្រសិនបើ function ពីរខុសគ្នាតែ return type compiler មិនអាចដឹងថាត្រូវហៅមួយណាទេ ដូច្នេះវារាយការណ៍ error។`,
      expectedOutput: "Compile error: overloading requires different parameters"
    },
    {
      id: "function-overloading-04",
      topicId: "function-overloading",
      title: "Overloaded Print",
      difficulty: "beginner",
      type: "code",
      description: `ការបង្ហាញទិន្នន័យប្រភេទផ្សេងគ្នាអាចប្រើឈ្មោះ function ដូចគ្នាបាន។ អ្នកត្រូវបង្កើត print សម្រាប់ int, double និង string ហើយហៅវាតាមលំដាប់ដែលបានកំណត់។`,
      requirements: [
        "បង្កើត overload print ចំនួនបីសម្រាប់ int, double និង string។",
        "អានចំនួនគត់ ចំនួនទសភាគ និងពាក្យមួយ។",
        "បង្ហាញជា Integer, Double និង String តាមលំដាប់។"
      ],
      input: "បន្ទាត់ទីមួយ int, បន្ទាត់ទីពីរ double និងបន្ទាត់ទីបី string។",
      output: "បីបន្ទាត់ដែលមាន label Integer, Double និង String។",
      samples: [{ input: "5\n3.14\nC++", output: "Integer: 5\nDouble: 3.14\nString: C++" }],
      constraints: ["string គ្មានចន្លោះ។", "ត្រូវប្រើ overload print ទាំងបី។"],
      hint: "បង្កើត void print(int), void print(double) និង void print(string) ដែលបង្ហាញ label ផ្សេងគ្នា។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

void print(int value) {
    cout << "Integer: " << value << endl;
}

void print(double value) {
    cout << "Double: " << value << endl;
}

void print(string value) {
    cout << "String: " << value << endl;
}

int main() {
    int a;
    double b;
    string c;
    cin >> a;
    cin >> b;
    cin >> c;

    print(a);
    print(b);
    print(c);
    return 0;
}`,
      explanation: `print មានបី version ដែលខុសគ្នាតាមប្រភេទ parameter។ នៅពេលហៅ print(a) compiler ជ្រើស version int, print(b) ជ្រើស version double និង print(c) ជ្រើស version string ដោយស្វ័យប្រវត្តិ។`,
      expectedOutput: "Integer: 5\nDouble: 3.14\nString: C++"
    },
    {
      id: "function-overloading-05",
      topicId: "function-overloading",
      title: "Overloaded Max",
      difficulty: "intermediate",
      type: "code",
      description: `Function overloading អាចបម្រើការស្វែងរកតម្លៃធំបំផុតសម្រាប់ទិន្នន័យផ្សេងៗ។ អ្នកត្រូវបង្កើត maxValue សម្រាប់ int ពីរ, double ពីរ និង int បី។`,
      requirements: [
        "បង្កើត maxValue(int, int) និង maxValue(double, double)។",
        "បង្កើត maxValue(int, int, int) សម្រាប់ចំនួនបី។",
        "អានទិន្នន័យបីជួរ ហើយបង្ហាញលទ្ធផលបីបន្ទាត់។"
      ],
      input: "បន្ទាត់ទីមួយ int ពីរ, បន្ទាត់ទីពីរ double ពីរ និងបន្ទាត់ទីបី int បី។",
      output: "Int max, Double max និង Three max។",
      samples: [{ input: "7 3\n2.5 8.1\n4 9 6", output: "Int max: 7\nDouble max: 8.1\nThree max: 9" }],
      constraints: ["Double max បង្ហាញតាមទម្រង់ធម្មតា។", "ត្រូវប្រើ overload ទាំងបី។"],
      hint: "maxValue(int, int) អាចប្រើលក្ខខណ្ឌ a > b ? a : b។ maxValue(int, int, int) អាចហៅ maxValue ពីរដង។",
      solution: String.raw`#include <iostream>

using namespace std;

int maxValue(int a, int b) {
    return a > b ? a : b;
}

double maxValue(double a, double b) {
    return a > b ? a : b;
}

int maxValue(int a, int b, int c) {
    return maxValue(maxValue(a, b), c);
}

int main() {
    int a, b;
    double x, y;
    int p, q, r;
    cin >> a >> b;
    cin >> x >> y;
    cin >> p >> q >> r;

    cout << "Int max: " << maxValue(a, b) << endl;
    cout << "Double max: " << maxValue(x, y) << endl;
    cout << "Three max: " << maxValue(p, q, r) << endl;
    return 0;
}`,
      explanation: `overload សម្រាប់ int និង double ធ្វើឱ្យការហៅមាន syntax ដូចគ្នា ប៉ុន្តែ compiler ជ្រើស version តាមប្រភេទ argument។ maxValue សម្រាប់បីចំនួនអាចយកលទ្ធផលពី maxValue ពីរចំនួនមកប្រើឡើងវិញ ដើម្បីកាត់បន្ថយការសរសេរស្ទួន។`,
      expectedOutput: "Int max: 7\nDouble max: 8.1\nThree max: 9"
    },
    {
      id: "function-overloading-06",
      topicId: "function-overloading",
      title: "Overloaded Greeting",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រព័ន្ធស្វាគមន៍អាចផ្តល់សារខ្លី ឬសារដែលមានឋានៈ។ លំហាត់នេះឱ្យអ្នកបង្កើត greet សម្រាប់ឈ្មោះតែមួយ និង greet សម្រាប់ឋានៈជាមួយឈ្មោះ។`,
      requirements: [
        "បង្កើត greet(string name) ដែល return Hello, name!។",
        "បង្កើត greet(string title, string name) ដែល return Hello, title name!។",
        "អាន name និង title រួចបង្ហាញសារទាំងពីរ។"
      ],
      input: "បន្ទាត់ទីមួយ name និងបន្ទាត់ទីពីរ title ដោយគ្មានចន្លោះ។",
      output: "សារស្វាគមន៍ពីរបន្ទាត់។",
      samples: [{ input: "Dara\nMr.", output: "Hello, Dara!\nHello, Mr. Dara!" }],
      constraints: ["name និង title គ្មានចន្លោះ។", "ត្រូវប្រើ overload ទាំងពីរ។"],
      hint: "greet(string name) return \"Hello, \" + name + \"!\"; ហើយ greet(string title, string name) return \"Hello, \" + title + \" \" + name + \"!\";។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

string greet(string name) {
    return "Hello, " + name + "!";
}

string greet(string title, string name) {
    return "Hello, " + title + " " + name + "!";
}

int main() {
    string name;
    string title;
    cin >> name;
    cin >> title;

    cout << greet(name) << endl;
    cout << greet(title, name) << endl;
    return 0;
}`,
      explanation: `greet មាន overload ដោយចំនួន parameter។ ការហៅជាមួយ argument មួយជ្រើស version ធម្មតា ឯការហៅជាមួយ argument ពីរជ្រើស version ដែលមានឋានៈ។ ការត្រួតលំដាប់ parameter មានសារៈសំខាន់ព្រោះទាំងពីរជា string។`,
      expectedOutput: "Hello, Dara!\nHello, Mr. Dara!"
    },
    {
      id: "function-overloading-07",
      topicId: "function-overloading",
      title: "Quiz: Ambiguous Call",
      difficulty: "intermediate",
      type: "quiz",
      description: `នៅពេល overload ពីរអាចទទួល argument ដូចគ្នាបានស្មើៗគ្នា compiler មិនអាចជ្រើសបានទេ។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផលនៃការ compile។`,
      requirements: ["ពិនិត្យប្រភេទ parameter នៃ overload ទាំងពីរ។", "ពិនិត្យប្រភេទ argument ដែលបានបញ្ជូន។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

void show(int a, double b) {
    cout << "int, double" << endl;
}

void show(double a, int b) {
    cout << "double, int" << endl;
}

int main() {
    show(3, 4);
    return 0;
}`,
      quizQuestion: "តើមានអ្វីកើតឡើងនៅពេល compile?",
      options: [
        "Compile error ព្រោះការហៅ show(3, 4) ជា ambiguous។",
        "បង្ហាញ int, double ដោយស្វ័យប្រវត្តិ។",
        "បង្ហាញ double, int ដោយស្វ័យប្រវត្តិ។",
        "បង្ហាញទាំងពីរបន្ទាត់។"
      ],
      correctIndex: 0,
      quizExplanation: "argument 3 និង 4 ជា int ទាំងពីរ។ ដើម្បីហៅ overload ទីមួយត្រូវបំប្លែង 4 ទៅ double ហើយដើម្បីហៅទីពីរត្រូវបំប្លែង 3 ទៅ double។ ការបំប្លែងទាំងពីរមានគុណភាពស្មើគ្នា ដូច្នេះ compiler រាយការណ៍ ambiguous។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សូមពិនិត្យថាតើ argument ត្រូវបំប្លែងប្រភេទប៉ុន្មានកន្លែងសម្រាប់ overload នីមួយៗ។",
      solution: String.raw`#include <iostream>
using namespace std;

void show(int a, double b) {
    cout << "int, double" << endl;
}

void show(double a, int b) {
    cout << "double, int" << endl;
}

int main() {
    show(3, 4.0);
    return 0;
}`,
      explanation: `show(3, 4) មិនផ្គូផ្គង overload ណាមួយយ៉ាងពិតប្រាកដទេ។ ទាំងពីរត្រូវការការបំប្លែងមួយកន្លែង ដូច្នេះគ្មានអ្នកឈ្នះច្បាស់លាស់។ ការផ្តល់ show(3, 4.0) ធ្វើឱ្យ overload ទីមួយផ្គូផ្គងយ៉ាងត្រឹមត្រូវ។`,
      expectedOutput: "Compile error: ambiguous call"
    },
    {
      id: "function-overloading-08",
      topicId: "function-overloading",
      title: "Overloaded Circle and Rectangle Area",
      difficulty: "advanced",
      type: "code",
      description: `ការគណនាផ្ទៃរូបធរណីមាត្រផ្សេងៗអាចប្រើឈ្មោះ area ដូចគ្នា ប៉ុន្តែ parameter ខុសគ្នា។ អ្នកត្រូវបង្កើត area សម្រាប់រង្វង់ និង area សម្រាប់ចតុកោណដោយបង្ហាញទសភាគពីរ។`,
      requirements: [
        "បង្កើត area(double radius) សម្រាប់ផ្ទៃរង្វង់ដោយប្រើ PI ប្រហែល 3.14159។",
        "បង្កើត area(double length, double width) សម្រាប់ចតុកោណ។",
        "អាន radius និង length width រួចបង្ហាញលទ្ធផលដោយទសភាគពីរ។"
      ],
      input: "បន្ទាត់ទីមួយ radius និងបន្ទាត់ទីពីរ length និង width។",
      output: "បន្ទាត់ទីមួយ Circle និងបន្ទាត់ទីពីរ Rectangle ដោយទសភាគពីរ។",
      samples: [{ input: "2\n3 4", output: "Circle: 12.57\nRectangle: 12.00" }],
      constraints: ["ប្រើ fixed និង setprecision(2)។", "radius, length និង width ជាចំនួនវិជ្ជមាន។"],
      hint: "ផ្ទៃរង្វង់ = PI * radius * radius។ ប្រើ const double PI = 3.14159;។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

const double PI = 3.14159;

double area(double radius) {
    return PI * radius * radius;
}

double area(double length, double width) {
    return length * width;
}

int main() {
    double radius;
    double length, width;
    cin >> radius;
    cin >> length >> width;

    cout << fixed << setprecision(2);
    cout << "Circle: " << area(radius) << endl;
    cout << "Rectangle: " << area(length, width) << endl;
    return 0;
}`,
      explanation: `area(double) និង area(double, double) ខុសគ្នាដោយចំនួន parameter។ ការហៅជាមួយ argument មួយជ្រើសរង្វង់ ឯ argument ពីរជ្រើសចតុកោណ។ fixed និង setprecision(2) គ្រប់គ្រងទម្រង់ទសភាគ។`,
      expectedOutput: "Circle: 12.57\nRectangle: 12.00"
    },
    {
      id: "function-overloading-09",
      topicId: "function-overloading",
      title: "Overloaded Absolute Value",
      difficulty: "advanced",
      type: "code",
      description: `តម្លៃដាច់ខាតអាចគណនាបានសម្រាប់ប្រភេទចំនួនផ្សេងៗ។ លំហាត់នេះឱ្យអ្នកបង្កើត absolute សម្រាប់ int, long long និង double ដើម្បីហាត់ overload resolution។`,
      requirements: [
        "បង្កើត absolute(int), absolute(long long) និង absolute(double)។",
        "function នីមួយៗ return តម្លៃដាច់ខាតដោយមិនប្រើ std::abs។",
        "អានតម្លៃបីប្រភេទ ហើយបង្ហាញជាបីបន្ទាត់។"
      ],
      input: "បន្ទាត់ទីមួយ int, បន្ទាត់ទីពីរ long long និងបន្ទាត់ទីបី double។",
      output: "តម្លៃដាច់ខាតនៃតម្លៃនីមួយៗតាមលំដាប់។",
      samples: [{ input: "-5\n-9000000000\n-3.25", output: "5\n9000000000\n3.25" }],
      constraints: ["មិនត្រូវប្រើ std::abs ឬ cmath ទេ។", "ត្រូវប្រើ overload ទាំងបី។"],
      hint: "សម្រាប់ចំនួនគត់ return value < 0 ? -value : value;។ សម្រាប់ double ប្រើលក្ខខណ្ឌដូចគ្នា។",
      solution: String.raw`#include <iostream>

using namespace std;

int absolute(int value) {
    if (value < 0) {
        return -value;
    }
    return value;
}

long long absolute(long long value) {
    if (value < 0) {
        return -value;
    }
    return value;
}

double absolute(double value) {
    if (value < 0) {
        return -value;
    }
    return value;
}

int main() {
    int a;
    long long b;
    double c;
    cin >> a;
    cin >> b;
    cin >> c;

    cout << absolute(a) << endl;
    cout << absolute(b) << endl;
    cout << absolute(c) << endl;
    return 0;
}`,
      explanation: `literal និង variable មានប្រភេទជាក់លាក់ ដូច្នេះ overload resolution ជ្រើស version ដែលផ្គូផ្គងបំផុត។ variable b ជា long long ហៅ version long long មិនមែន int ទេ ដែលជួយរក្សាតម្លៃធំបានត្រឹមត្រូវ។`,
      expectedOutput: "5\n9000000000\n3.25"
    },
    {
      id: "function-overloading-10",
      topicId: "function-overloading",
      title: "Overloaded String Repeat",
      difficulty: "advanced",
      type: "code",
      description: `ការធ្វើអត្ថបទដដែលៗអាចធ្វើបានសម្រាប់ទាំង string និង char។ អ្នកត្រូវបង្កើត repeat ពីរ overload ដែល return លទ្ធផលជា string តាមចំនួនដងដែលបានកំណត់។`,
      requirements: [
        "បង្កើត repeat(const string& text, int times) ដែលធ្វើអត្ថបទដដែលៗ។",
        "បង្កើត repeat(char ch, int times) ដែលធ្វើតួអក្សរដដែលៗ។",
        "អានពាក្យ និងចំនួនដង រួចបង្ហាញលទ្ធផលពីរ overload។"
      ],
      input: "ពាក្យមួយ និងចំនួនគត់ times បំបែកដោយចន្លោះ។",
      output: "បន្ទាត់ទីមួយពាក្យដដែលៗ និងបន្ទាត់ទីពីរតួអក្សរដំបូងដដែលៗ។",
      samples: [{ input: "ab 3", output: "ababab\naaa" }],
      constraints: ["times >= 0។", "ពាក្យគ្មានចន្លោះ។"],
      hint: "ប្រើ string result និង loop for ដើម្បីបន្ថែម text ឬ ch ចំនួន times ដង។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

string repeat(const string& text, int times) {
    string result = "";
    for (int i = 0; i < times; i++) {
        result += text;
    }
    return result;
}

string repeat(char ch, int times) {
    string result = "";
    for (int i = 0; i < times; i++) {
        result += ch;
    }
    return result;
}

int main() {
    string text;
    int times;
    cin >> text >> times;

    cout << repeat(text, times) << endl;
    cout << repeat(text[0], times) << endl;
    return 0;
}`,
      explanation: `text[0] មានប្រភេទ char ដូច្នេះការហៅ repeat(text[0], times) ជ្រើស overload char មិនមែន overload string។ នេះបង្ហាញថាប្រភេទ argument កំណត់ overload ដែលត្រូវហៅ។`,
      expectedOutput: "ababab\naaa"
    },
    {
      id: "function-overloading-11",
      topicId: "function-overloading",
      title: "Overloaded Power",
      difficulty: "challenge",
      type: "code",
      description: `ស្វ័យគុណអាចគណនាបានសម្រាប់ base ជាចំនួនគត់ ឬចំនួនទសភាគ។ អ្នកត្រូវបង្កើត power ពីរ overload ដែលទទួល exponent ជា int ដូចគ្នា ប៉ុន្តែ base ខុសគ្នា។`,
      requirements: [
        "បង្កើត power(int base, int exponent) ដែល return long long។",
        "បង្កើត power(double base, int exponent) ដែល return double។",
        "អាន int base និង exponent បន្ទាប់មក double base និង exponent រួចបង្ហាញលទ្ធផលពីរ។"
      ],
      input: "បន្ទាត់ទីមួយ int base និង exponent និងបន្ទាត់ទីពីរ double base និង exponent។",
      output: "លទ្ធផល integer power និង double power ជាពីរបន្ទាត់។",
      samples: [{ input: "2 5\n1.5 2", output: "32\n2.25" }],
      constraints: ["exponent >= 0។", "មិនត្រូវប្រើ pow ទេ។"],
      hint: "ទាំងពីរ overload អាចប្រើ loop ដូចគ្នា ដោយ result មានប្រភេទខុសគ្នា។",
      solution: String.raw`#include <iostream>

using namespace std;

long long power(int base, int exponent) {
    long long result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

double power(double base, int exponent) {
    double result = 1.0;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

int main() {
    int intBase, intExponent;
    double doubleBase;
    int doubleExponent;
    cin >> intBase >> intExponent;
    cin >> doubleBase >> doubleExponent;

    cout << power(intBase, intExponent) << endl;
    cout << power(doubleBase, doubleExponent) << endl;
    return 0;
}`,
      explanation: `overload ខុសគ្នាតែប្រភេទ parameter ទីមួយ។ intBase ជា int ហៅ version int ឯ doubleBase ជា double ហៅ version double។ ការប្រើ result ខុសប្រភេទជួយរក្សាភាពត្រឹមត្រូវនៃលទ្ធផល។`,
      expectedOutput: "32\n2.25"
    },
    {
      id: "function-overloading-12",
      topicId: "function-overloading",
      title: "Overloaded Price Formatter",
      difficulty: "challenge",
      type: "code",
      description: `ប្រព័ន្ធលក់ទំនិញអាចរក្សាតម្លៃជាចំនួនសេន ឬជាដុល្លារ។ អ្នកត្រូវបង្កើត formatPrice ពីរ overload ដែល return អត្ថបទតម្លៃដូចគ្នាជាទម្រង់ដុល្លារពីរខ្ទង់ទសភាគ។`,
      requirements: [
        "បង្កើត formatPrice(int cents) ដែលបំប្លែងសេនទៅជាតម្លៃដុល្លារ។",
        "បង្កើត formatPrice(double dollars) ដែលបង្ហាញតម្លៃដុល្លារ។",
        "អាន cents និង dollars រួចបង្ហាញលទ្ធផលពីរបន្ទាត់ដែលមានសញ្ញា $។"
      ],
      input: "បន្ទាត់ទីមួយ cents និងបន្ទាត់ទីពីរ dollars។",
      output: "អត្ថបទតម្លៃពីរបន្ទាត់ក្នុងទម្រង់ $x.xx។",
      samples: [{ input: "1234\n12.34", output: "$12.34\n$12.34" }],
      constraints: ["cents ជាចំនួនគត់មិនអវិជ្ជមាន។", "ត្រូវប្រើ fixed និង setprecision(2) ។"],
      hint: "formatPrice(int cents) អាចហៅ formatPrice(cents / 100.0) ដើម្បីប្រើ overload double ឡើងវិញ។ ប្រើ ostringstream ដើម្បីបង្កើត string។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <sstream>
#include <string>

using namespace std;

string formatPrice(double dollars) {
    ostringstream out;
    out << fixed << setprecision(2) << "$" << dollars;
    return out.str();
}

string formatPrice(int cents) {
    return formatPrice(cents / 100.0);
}

int main() {
    int cents;
    double dollars;
    cin >> cents;
    cin >> dollars;

    cout << formatPrice(cents) << endl;
    cout << formatPrice(dollars) << endl;
    return 0;
}`,
      explanation: `formatPrice(int) បំប្លែងសេនទៅដុល្លារដោយចែកនឹង 100.0 ហើយហៅ formatPrice(double) ដើម្បីរៀបចំទម្រង់។ ការប្រើ overload ឡើងវិញជួយឱ្យការបង្ហាញទសភាគមានលក្ខណៈដូចគ្នាទាំងពីរ។`,
      expectedOutput: "$12.34\n$12.34"
    },
    {
      id: "function-overloading-13",
      topicId: "function-overloading",
      title: "Overloaded Value Classifier",
      difficulty: "challenge",
      type: "code",
      description: `ការចាត់ថ្នាក់តម្លៃអាចធ្វើបានតាមប្រភេទទិន្នន័យ។ អ្នកត្រូវបង្កើត classify បី overload សម្រាប់ int, double និង char ដោយបង្ហាញព័ត៌មានខុសគ្នាតាមប្រភេទ។`,
      requirements: [
        "classify(int) return Positive, Negative ឬ Zero។",
        "classify(double) return Positive decimal, Negative decimal ឬ Zero decimal។",
        "classify(char) return Vowel, Consonant ឬ Not a letter។",
        "អាន int, double និង char រួចបង្ហាញលទ្ធផលបីបន្ទាត់។"
      ],
      input: "បន្ទាត់ទីមួយ int, បន្ទាត់ទីពីរ double និងបន្ទាត់ទីបី char។",
      output: "ការចាត់ថ្នាក់នៃតម្លៃនីមួយៗតាមលំដាប់។",
      samples: [{ input: "0\n-2.5\na", output: "Zero\nNegative decimal\nVowel" }],
      constraints: ["char អាចជាអក្សរ ឬមិនមែនអក្សរ។", "ត្រូវរាប់ a, e, i, o, u ជា vowel ទាំងអក្សរតូច និងធំ។"],
      hint: "ប្រើ tolower ពី cctype ដើម្បីធ្វើឱ្យការត្រួតពិនិត្យ vowel មិនប្រកាន់អក្សរតូច ឬធំ។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

string classify(int value) {
    if (value > 0) {
        return "Positive";
    }
    if (value < 0) {
        return "Negative";
    }
    return "Zero";
}

string classify(double value) {
    if (value > 0) {
        return "Positive decimal";
    }
    if (value < 0) {
        return "Negative decimal";
    }
    return "Zero decimal";
}

string classify(char ch) {
    char lower = static_cast<char>(tolower(static_cast<unsigned char>(ch)));
    if (!isalpha(static_cast<unsigned char>(lower))) {
        return "Not a letter";
    }
    if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {
        return "Vowel";
    }
    return "Consonant";
}

int main() {
    int a;
    double b;
    char c;
    cin >> a;
    cin >> b;
    cin >> c;

    cout << classify(a) << endl;
    cout << classify(b) << endl;
    cout << classify(c) << endl;
    return 0;
}`,
      explanation: `classify មាន overload បីដែលខុសគ្នាតាមប្រភេទ parameter។ ការហៅ classify(a) ជ្រើស version int, classify(b) ជ្រើស version double និង classify(c) ជ្រើស version char។ ការប្រើ tolower និង isalpha ជួយឱ្យការចាត់ថ្នាក់តួអក្សរមានភាពបត់បែន។`,
      expectedOutput: "Zero\nNegative decimal\nVowel"
    }
  ]);
})();
