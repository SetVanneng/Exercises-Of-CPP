(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "references-01",
      topicId: "references",
      title: "Reference as Alias",
      difficulty: "beginner",
      type: "code",
      description: `Reference គឺជាឈ្មោះផ្សេងសម្រាប់ variable ដែលមានស្រាប់។ លំហាត់នេះឱ្យអ្នកបង្កើត reference ទៅ variable មួយ រួចកែតម្លៃតាម reference ដើម្បីមើលថាតើ variable ដើមផ្លាស់ប្តូរឬអត់។`,
      requirements: [
        "អានចំនួនគត់មួយដាក់ក្នុង value។",
        "បង្កើត reference ref ដែលយោងទៅ value។",
        "ប្រើ ref ដើម្បីបូកតម្លៃ 5 បន្ទាប់មកបង្ហាញ value ជាទម្រង់ After update: តម្លៃ។"
      ],
      input: "ចំនួនគត់ value មួយ។",
      output: "បន្ទាត់ After update: តម្លៃថ្មី។",
      samples: [{ input: "10", output: "After update: 15" }],
      constraints: ["reference ត្រូវភ្ជាប់ជាមួយ variable នៅពេលប្រកាស។", "ត្រូវកែតម្លៃតាម reference។"],
      hint: "ប្រើ int &ref = value; បន្ទាប់មក ref += 5;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int value;
    cin >> value;

    int &ref = value;
    ref += 5;

    cout << "After update: " << value << endl;
    return 0;
}`,
      explanation: `int &ref = value បង្កើត reference ដែលជាឈ្មោះមួយទៀតរបស់ value។ ការកែ ref គឺកែ value ដោយផ្ទាល់ ដូច្នេះ value ក្លាយជា 15។ reference មិនមែនជា copy ទេ វាចែករំលែក memory ដូចគ្នា។`,
      expectedOutput: "After update: 15"
    },
    {
      id: "references-02",
      topicId: "references",
      title: "Increment by Reference",
      difficulty: "beginner",
      type: "code",
      description: `ការបញ្ជូន reference ទៅ function អនុញ្ញាតឱ្យ function កែ variable ដើមបានដោយមិនចាំបាច់ប្រើ pointer syntax។ អ្នកត្រូវសរសេរ function increment ដែលបូកតម្លៃមួយ។`,
      requirements: [
        "បង្កើត function increment ដែលទទួល int& value។",
        "បង្កើនតម្លៃ value មួយនៅក្នុង function។",
        "អានចំនួនគត់ ហៅ function រួចបង្ហាញតម្លៃក្រោយបង្កើន។"
      ],
      input: "ចំនួនគត់ n មួយ។",
      output: "តម្លៃ n ក្រោយបង្កើនមួយ។",
      samples: [{ input: "9", output: "10" }],
      constraints: ["function parameter ត្រូវជា reference។", "មិនត្រូវប្រើ pointer ទេ។"],
      hint: "void increment(int &value) { value++; } ហើយហៅ increment(n); ពី main។",
      solution: String.raw`#include <iostream>

using namespace std;

void increment(int &value) {
    value++;
}

int main() {
    int n;
    cin >> n;

    increment(n);
    cout << n << endl;
    return 0;
}`,
      explanation: `parameter int &value ជា reference ទៅ argument ដើម ដូច្នេះ value++ កែ variable n នៅ main ដោយផ្ទាល់។ នេះជាអត្ថប្រយោជន៍សំខាន់នៃ pass by reference។`,
      expectedOutput: "10"
    },
    {
      id: "references-03",
      topicId: "references",
      title: "Quiz: Uninitialized Reference",
      difficulty: "beginner",
      type: "quiz",
      description: `Reference ត្រូវតែភ្ជាប់ទៅ variable នៅពេលប្រកាស ដោយមិនអាចប្រកាសទទេបានទេ។ សូមពិនិត្យ snippet ហើយជ្រើសរើសចម្លើយត្រឹមត្រូវ។`,
      requirements: ["ពិនិត្យការប្រកាស reference។", "ពិនិត្យថាតើ reference ត្រូវបានភ្ជាប់នៅពេលប្រកាសឬអត់។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int &ref;
    int value = 10;
    ref = value;
    cout << ref << endl;
    return 0;
}`,
      quizQuestion: "តើមានបញ្ហាអ្វីនៅក្នុង snippet នេះ?",
      options: [
        "reference ត្រូវតែ initialize នៅពេលប្រកាស ដូចជា int &ref = value;។",
        "មិនអាចប្រើ int &ref ក្នុង main បានទេ។",
        "cout មិនអាចបង្ហាញ reference បានទេ។",
        "ត្រូវប្រើ int *ref ជំនួស int &ref។"
      ],
      correctIndex: 0,
      quizExplanation: "reference មិនមែនជា variable ដែលអាចប្រកាសទទេបានទេ។ វាត្រូវភ្ជាប់ទៅ object ភ្លាមៗនៅពេលប្រកាស ដូចជា int &ref = value;។ ការសរសេរ int &ref; បណ្តាលឱ្យ compile error។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "reference ត្រូវការ target នៅពេលបង្កើត។ តើ int &ref; មាន target ឬអត់?",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int value = 10;
    int &ref = value;
    cout << ref << endl;
    return 0;
}`,
      explanation: `reference គឺជាឈ្មោះផ្សេងសម្រាប់ object ដែលមានស្រាប់ ដូច្នេះវាត្រូវ initialize នៅពេលប្រកាស។ ការសរសេរ int &ref = value; ភ្ជាប់ ref ទៅ value ហើយ ref មិនអាចផ្លាស់ទៅយោង object ផ្សេងនៅពេលក្រោយបានទេ។`,
      expectedOutput: "Compile error: reference must be initialized"
    },
    {
      id: "references-04",
      topicId: "references",
      title: "Swap Using References",
      difficulty: "beginner",
      type: "code",
      description: `ការប្តូរតម្លៃ variable ពីរគឺជាឧទាហរណ៍ដ៏ល្អនៃ pass by reference។ អ្នកត្រូវសរសេរ function swapValues ដែលទទួល reference ពីរ ហើយប្តូរតម្លៃដោយគ្មាន pointer។`,
      requirements: [
        "បង្កើត function swapValues ដែលទទួល int& ពីរ។",
        "ប្តូរតម្លៃ parameter ទាំងពីរដោយប្រើ temp។",
        "អានចំនួនពីរ ហៅ function រួចបង្ហាញតម្លៃក្រោយប្តូរ។"
      ],
      input: "ចំនួនគត់ពីរ a និង b បំបែកដោយចន្លោះ។",
      output: "តម្លៃ b និង a ក្រោយប្តូរ បំបែកដោយចន្លោះ។",
      samples: [{ input: "4 7", output: "7 4" }],
      constraints: ["parameter ត្រូវជា reference។", "មិនត្រូវប្រើ std::swap ទេ។"],
      hint: "void swapValues(int &a, int &b) { int temp = a; a = b; b = temp; }។",
      solution: String.raw`#include <iostream>

using namespace std;

void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;

    swapValues(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
      explanation: `a និង b ក្នុង function ជា reference ទៅ variable ដើម ដូច្នេះការប្តូរតម្លៃមានប្រសិទ្ធភាពដោយផ្ទាល់។ កូដ main អានស្អាតជាងការប្រើ pointer ព្រោះមិនចាំបាច់សរសេរ & ឬ *។`,
      expectedOutput: "7 4"
    },
    {
      id: "references-05",
      topicId: "references",
      title: "Const Reference Length",
      difficulty: "intermediate",
      type: "code",
      description: `ការប្រើ const reference ជួយជៀសវាងការចម្លង string ធំៗ ខណៈដែលធានាថា function មិនកែវា។ អ្នកត្រូវសរសេរ function បង្ហាញប្រវែង string តាម const reference។`,
      requirements: [
        "បង្កើត function printLength ដែលទទួល const string& text។",
        "បង្ហាញប្រវែងជាទម្រង់ Length: តម្លៃ។",
        "អានពាក្យមួយ ហើយហៅ function។"
      ],
      input: "ពាក្យមួយដែលគ្មានចន្លោះ។",
      output: "បន្ទាត់ Length: ប្រវែង។",
      samples: [{ input: "reference", output: "Length: 9" }],
      constraints: ["parameter ត្រូវជា const reference។", "មិនត្រូវកែ string ក្នុង function ទេ។"],
      hint: "void printLength(const string &text) { cout << \"Length: \" << text.size() << endl; }។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

void printLength(const string &text) {
    cout << "Length: " << text.size() << endl;
}

int main() {
    string text;
    cin >> text;

    printLength(text);
    return 0;
}`,
      explanation: `const string& ជៀសវាងការចម្លង string ទាំងមូល ដែលមានប្រយោជន៍ពេល string ធំ។ const បញ្ជាក់ថា function មិនអាចកែ text បានទេ ដូច្នេះការហៅមានសុវត្ថិភាព និងច្បាស់លាស់។`,
      expectedOutput: "Length: 9"
    },
    {
      id: "references-06",
      topicId: "references",
      title: "Double Array Elements by Reference",
      difficulty: "intermediate",
      type: "code",
      description: `Reference parameter អាចកែ element ក្នុង array បានដោយមិនចាំបាច់គណនា index ក្នុង function។ អ្នកត្រូវបង្កើត function doubleValue ដែលគុណតម្លៃនីមួយៗនឹង 2។`,
      requirements: [
        "បង្កើត function doubleValue ដែលទទួល int& value។",
        "គុណ value នឹង 2 នៅក្នុង function។",
        "អាន n និង element ចំនួន n រួចហៅ function សម្រាប់ element នីមួយៗ។",
        "បង្ហាញ array ក្រោយកែដោយបំបែក element ដោយចន្លោះ។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "Element ទាំងអស់ដែលបានគុណនឹង 2។",
      samples: [{ input: "3\n1 2 3", output: "2 4 6" }],
      constraints: ["1 <= n <= 100។", "function parameter ត្រូវជា reference។"],
      hint: "ក្នុង main ប្រើ for ហើយហៅ doubleValue(arr[i])។ ការផ្លាស់ប្តូរនឹងមានប្រសិទ្ធភាពលើ arr[i] ដោយផ្ទាល់។",
      solution: String.raw`#include <iostream>

using namespace std;

void doubleValue(int &value) {
    value *= 2;
}

int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < n; i++) {
        doubleValue(arr[i]);
    }

    for (int i = 0; i < n; i++) {
        if (i > 0) {
            cout << " ";
        }
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
      explanation: `arr[i] ត្រូវបានផ្ញើទៅ function ជា reference ដូច្នេះ value *= 2 កែ element ដើមក្នុង array ដោយផ្ទាល់។ នេះបង្ហាញថា reference អាចប្រើជាមួយ array element បានយ៉ាងងាយ។`,
      expectedOutput: "2 4 6"
    },
    {
      id: "references-07",
      topicId: "references",
      title: "Sum and Average by Reference",
      difficulty: "intermediate",
      type: "code",
      description: `function មួយអាចបង្កើតលទ្ធផលច្រើនតាម reference parameter។ អ្នកត្រូវសរសេរ compute ដែលគណនាផលបូក និងមធ្យមភាគនៃចំនួនបី ហើយសរសេរលទ្ធផលតាម reference។`,
      requirements: [
        "បង្កើត function compute ដែលទទួល int បី, int& sum និង double& average។",
        "គណនា sum = a + b + c និង average = sum / 3.0។",
        "អានចំនួនបី ហៅ function រួចបង្ហាញ Sum និង Average ដោយទសភាគពីរ។"
      ],
      input: "ចំនួនគត់បី a, b និង c។",
      output: "បន្ទាត់ទីមួយ Sum និងបន្ទាត់ទីពីរ Average ដោយទសភាគពីរ។",
      samples: [{ input: "4 5 6", output: "Sum: 15\nAverage: 5.00" }],
      constraints: ["sum ត្រូវជា reference ទៅ int។", "average ត្រូវជា reference ទៅ double។"],
      hint: "ហៅ compute(a, b, c, sum, average); ដោយ sum និង average ជា variable ក្នុង main។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

void compute(int a, int b, int c, int &sum, double &average) {
    sum = a + b + c;
    average = sum / 3.0;
}

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    int sum = 0;
    double average = 0.0;
    compute(a, b, c, sum, average);

    cout << "Sum: " << sum << endl;
    cout << fixed << setprecision(2);
    cout << "Average: " << average << endl;
    return 0;
}`,
      explanation: `sum និង average ជា reference parameter ដូច្នេះ function អាចសរសេរតម្លៃត្រឡប់ទៅ variable ក្នុង main។ នេះជារបៀបមួយក្នុងការ return លទ្ធផលច្រើនពី function តែមួយ។ ការប្រើ 3.0 ធ្វើឱ្យការចែកជា double។`,
      expectedOutput: "Sum: 15\nAverage: 5.00"
    },
    {
      id: "references-08",
      topicId: "references",
      title: "Reference Return from Array",
      difficulty: "advanced",
      type: "code",
      description: `function អាច return reference ទៅ element ក្នុង array ដើម្បីឱ្យអ្នកហៅអាចកែ element នោះបាន។ អ្នកត្រូវសរសេរ getElement ដែល return reference ទៅ element តាម index។`,
      requirements: [
        "បង្កើត function getElement ដែលទទួល int array និង index ហើយ return int&។",
        "អាន n, element ចំនួន n, index និងតម្លៃថ្មី។",
        "កែ element តាម reference ដែល getElement return មក។",
        "បង្ហាញ array ក្រោយកែដោយបំបែកដោយចន្លោះ។"
      ],
      input: "បន្ទាត់ទីមួយ n, បន្ទាត់ទីពីរ element និងបន្ទាត់ទីបី index និង newValue។",
      output: "Array ក្រោយកែ element តាម index។",
      samples: [{ input: "5\n10 20 30 40 50\n2 99", output: "10 20 99 40 50" }],
      constraints: ["0 <= index < n។", "function ត្រូវ return int&។"],
      hint: "int& getElement(int arr[], int index) { return arr[index]; } បន្ទាប់មក getElement(arr, index) = newValue;។",
      solution: String.raw`#include <iostream>

using namespace std;

int& getElement(int arr[], int index) {
    return arr[index];
}

int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int index;
    int newValue;
    cin >> index >> newValue;

    getElement(arr, index) = newValue;

    for (int i = 0; i < n; i++) {
        if (i > 0) {
            cout << " ";
        }
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
      explanation: `getElement return int& ដែលជា reference ទៅ arr[index] ពិតប្រាកដ។ ដូច្នេះការសរសេរ getElement(arr, index) = newValue កែ element នោះដោយផ្ទាល់។ ប្រសិនបើ return int ធម្មតា ការកែនឹងមានប្រសិទ្ធភាពលើ copy តែប៉ុណ្ណោះ។`,
      expectedOutput: "10 20 99 40 50"
    },
    {
      id: "references-09",
      topicId: "references",
      title: "Pass by Reference vs Value",
      difficulty: "advanced",
      type: "code",
      description: `ការប្រៀបធៀប pass by value និង pass by reference ជួយឱ្យយល់ពីពេលណាត្រូវប្រើមួយណា។ អ្នកត្រូវសរសេរ function ពីរដែលបង្កើនតម្លៃមួយ ប៉ុន្តែមួយទទួល value និងមួយទទួល reference។`,
      requirements: [
        "បង្កើត addOneByValue(int value) ដែលបង្កើន copy។",
        "បង្កើត addOneByReference(int& value) ដែលបង្កើន variable ដើម។",
        "អានចំនួនគត់ ហើយបង្ហាញលទ្ធផលក្រោយហៅ function នីមួយៗ។"
      ],
      input: "ចំនួនគត់ n មួយ។",
      output: "បន្ទាត់ទីមួយ After value និងបន្ទាត់ទីពីរ After reference។",
      samples: [{ input: "5", output: "After value: 5\nAfter reference: 6" }],
      constraints: ["ត្រូវប្រើ function ទាំងពីរ។", "បង្ហាញលទ្ធផលតាមលំដាប់ឧទាហរណ៍។"],
      hint: "ហៅ addOneByValue(copy) ដែល copy ជា variable ដាច់ដោយឡែក រួចហៅ addOneByReference(n)។",
      solution: String.raw`#include <iostream>

using namespace std;

void addOneByValue(int value) {
    value++;
}

void addOneByReference(int &value) {
    value++;
}

int main() {
    int n;
    cin >> n;

    int copy = n;
    addOneByValue(copy);
    cout << "After value: " << copy << endl;

    addOneByReference(n);
    cout << "After reference: " << n << endl;
    return 0;
}`,
      explanation: `addOneByValue ទទួល copy ដូច្នេះ value++ មិនប៉ះពាល់ copy នៅ main ទេ។ addOneByReference ទទួល reference ដូច្នេះ value++ កែ n ដោយផ្ទាល់។ ការប្រៀបធៀបនេះបង្ហាញពីភាពខុសគ្នានៃ semantic ទាំងពីរ។`,
      expectedOutput: "After value: 5\nAfter reference: 6"
    },
    {
      id: "references-10",
      topicId: "references",
      title: "Quiz: Const Reference",
      difficulty: "advanced",
      type: "quiz",
      description: `const reference អនុញ្ញាតឱ្យអានតម្លៃដោយមិនចម្លង ប៉ុន្តែមិនអនុញ្ញាតឱ្យកែ។ សូមពិនិត្យ snippet ហើយជ្រើសរើសចម្លើយត្រឹមត្រូវ។`,
      requirements: ["ពិនិត្យប្រភេទ parameter នៃ reset។", "ពិនិត្យថាតើ function កែ parameter ឬអត់។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

void reset(const int &value) {
    value = 0;
}

int main() {
    int x = 5;
    reset(x);
    cout << x << endl;
    return 0;
}`,
      quizQuestion: "តើមានអ្វីកើតឡើងនៅពេល compile?",
      options: [
        "Compile error ព្រោះមិនអាចកែ const reference បានទេ។",
        "កម្មវិធីបង្ហាញ 0។",
        "កម្មវិធីបង្ហាញ 5 ហើយមិនមាន error។",
        "កម្មវិធីបង្ហាញ address របស់ x។"
      ],
      correctIndex: 0,
      quizExplanation: "parameter value ជា const int& ដូច្នេះវាអានតម្លៃបានតែប៉ុណ្ណោះ។ ការសរសេរ value = 0 កែ object ដែលជា const ដូច្នេះ compiler បដិសេធ។ ប្រសិនបើចង់កែ ត្រូវប្រើ int& ធម្មតា។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "const មានន័យថាមិនអាចផ្លាស់ប្តូរតម្លៃបាន។ តើ value = 0 ជាការផ្លាស់ប្តូរឬអត់?",
      solution: String.raw`#include <iostream>
using namespace std;

void reset(int &value) {
    value = 0;
}

int main() {
    int x = 5;
    reset(x);
    cout << x << endl;
    return 0;
}`,
      explanation: `const reference សមស្របសម្រាប់ការអានតម្លៃដោយមិនចម្លង ប៉ុន្តែវាមិនអនុញ្ញាតឱ្យកែ object ទេ។ ប្រសិនបើ function ត្រូវកែ argument ត្រូវប្រើ int& ធម្មតា។ ការយល់ពីភាពខុសគ្នានេះជួយជ្រើស parameter ឱ្យត្រូវនឹងគោលបំណង។`,
      expectedOutput: "Compile error: cannot modify const reference"
    },
    {
      id: "references-11",
      topicId: "references",
      title: "Reference-Based Min and Max",
      difficulty: "challenge",
      type: "code",
      description: `Function មួយអាច return តម្លៃពីរតាម reference parameter។ អ្នកត្រូវសរសេរ findMinMax ដែលរកតម្លៃតូចបំផុត និងធំបំផុតក្នុង array ហើយសរសេរលទ្ធផលតាម reference។`,
      requirements: [
        "បង្កើត function findMinMax ដែលទទួល const int array, n, int& minValue និង int& maxValue។",
        "រកតម្លៃតូចបំផុត និងធំបំផុតដោយដើរ array ម្តង។",
        "អាន n និង element រួចបង្ហាញ Min និង Max ជាពីរបន្ទាត់។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "បន្ទាត់ទីមួយ Min និងបន្ទាត់ទីពីរ Max។",
      samples: [{ input: "6\n8 3 15 7 22 1", output: "Min: 1\nMax: 22" }],
      constraints: ["1 <= n <= 100។", "minValue និង maxValue ត្រូវជា reference parameter។"],
      hint: "កំណត់ minValue និង maxValue ជា element ដំបូង បន្ទាប់មកធ្វើបច្ចុប្បន្នភាពក្នុង loop។",
      solution: String.raw`#include <iostream>

using namespace std;

void findMinMax(const int arr[], int n, int &minValue, int &maxValue) {
    minValue = arr[0];
    maxValue = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
}

int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int minValue = 0;
    int maxValue = 0;
    findMinMax(arr, n, minValue, maxValue);

    cout << "Min: " << minValue << endl;
    cout << "Max: " << maxValue << endl;
    return 0;
}`,
      explanation: `findMinMax ទទួល minValue និង maxValue ជា reference ដូច្នេះវាអាចសរសេរលទ្ធផលពីរត្រឡប់ទៅ main។ Array ត្រូវបានផ្ញើជា const pointer-like parameter ដើម្បីអានតែប៉ុណ្ណោះ។ ការធ្វើបច្ចុប្បន្នភាពទាំង min និង max ក្នុង loop តែមួយមានប្រសិទ្ធភាព។`,
      expectedOutput: "Min: 1\nMax: 22"
    },
    {
      id: "references-12",
      topicId: "references",
      title: "Uppercase String by Reference",
      difficulty: "challenge",
      type: "code",
      description: `Reference អាចប្រើដើម្បីកែ string ដើមដោយផ្ទាល់ ដោយមិនចាំបាច់ return string ថ្មី។ អ្នកត្រូវសរសេរ function toUpperCase ដែលបំប្លែងអក្សរតូចទៅអក្សរធំ។`,
      requirements: [
        "បង្កើត function toUpperCase ដែលទទួល string& text។",
        "ប្រើ range-based for ជាមួយ char& ដើម្បីកែតួអក្សរនីមួយៗ។",
        "អានពាក្យមួយ ហៅ function រួចបង្ហាញពាក្យក្រោយបំប្លែង។"
      ],
      input: "ពាក្យមួយដែលគ្មានចន្លោះ។",
      output: "ពាក្យដែលបានបំប្លែងជាអក្សរធំ។",
      samples: [{ input: "hello", output: "HELLO" }],
      constraints: ["ត្រូវកែ string ដើមតាម reference។", "ប្រើ toupper ពី cctype។"],
      hint: "for (char &ch : text) { ch = toupper(static_cast<unsigned char>(ch)); }។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

void toUpperCase(string &text) {
    for (char &ch : text) {
        ch = static_cast<char>(toupper(static_cast<unsigned char>(ch)));
    }
}

int main() {
    string text;
    cin >> text;

    toUpperCase(text);
    cout << text << endl;
    return 0;
}`,
      explanation: `toUpperCase ទទួល string& ដូច្នេះការកែ text មានប្រសិទ្ធភាពលើ string ដើមក្នុង main។ range-based for ជាមួយ char& ផ្តល់ reference ទៅតួអក្សរនីមួយៗ ដូច្នេះការកែ ch កែ string ដោយផ្ទាល់។ toupper បម្លែងអក្សរតូចទៅអក្សរធំ។`,
      expectedOutput: "HELLO"
    },
    {
      id: "references-13",
      topicId: "references",
      title: "Reference-Based Fraction Simplify",
      difficulty: "challenge",
      type: "code",
      description: `ការសម្រួលប្រភាគត្រូវការចែកភាគបែង និងភាគយកនឹង GCD។ អ្នកត្រូវសរសេរ function reduce ដែលទទួល reference ទៅភាគយក និងភាគបែង ហើយកែពួកវាឱ្យសម្រួល។`,
      requirements: [
        "បង្កើត helper function gcd សម្រាប់រកចែករួមធំបំផុត។",
        "បង្កើត function reduce ដែលទទួល int& numerator និង int& denominator។",
        "ចែកទាំងពីរនឹង GCD ដើម្បីសម្រួលប្រភាគ។",
        "អានភាគយក និងភាគបែង ហើយបង្ហាញក្នុងទម្រង់ numerator/denominator។"
      ],
      input: "ចំនួនគត់វិជ្ជមានពីរ numerator និង denominator។",
      output: "ប្រភាគដែលបានសម្រួលក្នុងទម្រង់ numerator/denominator។",
      samples: [{ input: "8 12", output: "2/3" }],
      constraints: ["numerator និង denominator វិជ្ជមាន។", "reduce ត្រូវកែតម្លៃតាម reference។"],
      hint: "g = gcd(numerator, denominator); បន្ទាប់មក numerator /= g; និង denominator /= g;។",
      solution: String.raw`#include <iostream>

using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

void reduce(int &numerator, int &denominator) {
    int divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;
}

int main() {
    int numerator, denominator;
    cin >> numerator >> denominator;

    reduce(numerator, denominator);
    cout << numerator << "/" << denominator << endl;
    return 0;
}`,
      explanation: `reduce ទទួល numerator និង denominator ជា reference ដូច្នេះការចែកនឹង GCD កែតម្លៃដើមក្នុង main ដោយផ្ទាល់។ gcd រកចែករួមធំបំផុតដោយ Euclidean algorithm។ ការចែកទាំងពីរនឹង GCD ផ្តល់ប្រភាគសម្រួលដែលមិនអាចកាត់បន្ថយបានទៀត។`,
      expectedOutput: "2/3"
    }
  ]);
})();
