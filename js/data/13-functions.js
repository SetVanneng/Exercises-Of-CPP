(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "functions-01",
      topicId: "functions",
      title: "Sum of Two Numbers",
      difficulty: "beginner",
      type: "code",
      description: `ការប្រើ function ជួយឱ្យកូដមានរចនាសម្ព័ន្ធច្បាស់លាស់ និងអាចប្រើឡើងវិញបាន។ លំហាត់នេះស្នើឱ្យអ្នកសរសេរ function មួយសម្រាប់គណនាផលបូកនៃចំនួនគត់ពីរ បន្ទាប់មកហៅវាពី main។`,
      requirements: [
        "បង្កើត function ឈ្មោះ add ដែលទទួល parameter ពីរជា int និង return ផលបូក។",
        "អានចំនួនគត់ពីរពី input ដោយប្រើ cin។",
        "ហៅ function add ក្នុង main ហើយបង្ហាញលទ្ធផលតែម្តង។"
      ],
      input: "ចំនួនគត់ពីរ a និង b បំបែកដោយចន្លោះ។",
      output: "ផលបូក a + b ជាចំនួនគត់។",
      samples: [{ input: "7 5", output: "12" }],
      constraints: ["a និង b ជាចំនួនគត់ធម្មតា។", "មិនត្រូវបង្ហាញ prompt ណាមួយនៅលើ console ទេ។"],
      hint: "សរសេរ int add(int a, int b) { return a + b; } ហើយក្នុង main អានតម្លៃពីរ រួច cout << add(a, b) << endl;។",
      solution: String.raw`#include <iostream>

using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << add(a, b) << endl;
    return 0;
}`,
      explanation: `function add បំបែកការគណនាចេញពី main ដូច្នេះ main នៅសល់តែការអាន input និងបង្ហាញ output។ parameter a និង b ត្រូវបាន copy ចូល function ហើយ return បញ្ជូនលទ្ធផលត្រឡប់ទៅអ្នកហៅ។`,
      expectedOutput: "12"
    },
    {
      id: "functions-02",
      topicId: "functions",
      title: "Square and Cube",
      difficulty: "beginner",
      type: "code",
      description: `នៅក្នុងការគណនាធរណីមាត្រ យើងច្រើនត្រូវគណនាកំឡុងការ និងមាឌ។ លំហាត់នេះឱ្យអ្នកបង្កើត function ពីរដាច់ដោយឡែកសម្រាប់ square និង cube នៃចំនួនមួយ។`,
      requirements: [
        "បង្កើត function square ដែល return n * n។",
        "បង្កើត function cube ដែល return n * n * n។",
        "អានចំនួនគត់មួយ ហើយបង្ហាញ Square និង Cube ជាពីរបន្ទាត់។"
      ],
      input: "ចំនួនគត់ n មួយ។",
      output: "បន្ទាត់ទីមួយ Square: n*n និងបន្ទាត់ទីពីរ Cube: n*n*n។",
      samples: [{ input: "3", output: "Square: 9\nCube: 27" }],
      constraints: ["n ជាចំនួនគត់វិជ្ជមាន។", "ត្រូវប្រើ function ទាំងពីរក្នុង main។"],
      hint: "ប្រើ int square(int n) និង int cube(int n) ហើយបង្ហាញជាមួយ label Square: និង Cube:។",
      solution: String.raw`#include <iostream>

using namespace std;

int square(int n) {
    return n * n;
}

int cube(int n) {
    return n * n * n;
}

int main() {
    int n;
    cin >> n;
    cout << "Square: " << square(n) << endl;
    cout << "Cube: " << cube(n) << endl;
    return 0;
}`,
      explanation: `function នីមួយៗមានទំនួលខុសត្រូវតែមួយ។ square គណនាកំឡុងការ ឯ cube គណនាមាឌ។ ការបែងចែកបែបនេះធ្វើឱ្យកូដអានងាយ និងកែប្រែបានដោយមិនប៉ះពាល់ផ្នែកផ្សេង។`,
      expectedOutput: "Square: 9\nCube: 27"
    },
    {
      id: "functions-03",
      topicId: "functions",
      title: "Even or Odd Function",
      difficulty: "beginner",
      type: "code",
      description: `ការត្រួតពិនិត្យចំនួនគូ ឬសេស គឺជាបញ្ហាមូលដ្ឋានដែលអាចដាក់ក្នុង function ដើម្បីប្រើឡើងវិញ។ អ្នកត្រូវសរសេរ function ដែល return bool បន្ទាប់មកបង្ហាញអត្ថបទសមស្រប។`,
      requirements: [
        "បង្កើត function isEven ដែលទទួល int និង return true ប្រសិនបើចំនួនគូ។",
        "អានចំនួនគត់មួយពី input។",
        "ប្រើលទ្ធផលពី isEven ដើម្បីបង្ហាញ Even ឬ Odd។"
      ],
      input: "ចំនួនគត់ n មួយ។",
      output: "អត្ថបទ Even ឬ Odd។",
      samples: [{ input: "42", output: "Even" }],
      constraints: ["n អាចជាចំនួនគត់ធម្មតា។", "function isEven ត្រូវ return bool។"],
      hint: "n % 2 == 0 ជាលក្ខខណ្ឌសម្រាប់ចំនួនគូ។ សរសេរ return n % 2 == 0; ក្នុង function។",
      solution: String.raw`#include <iostream>

using namespace std;

bool isEven(int n) {
    return n % 2 == 0;
}

int main() {
    int n;
    cin >> n;
    if (isEven(n)) {
        cout << "Even" << endl;
    } else {
        cout << "Odd" << endl;
    }
    return 0;
}`,
      explanation: `function អាច return ប្រភេទ bool ដែលមានតម្លៃ true ឬ false។ ការប្រើ function ធ្វើឱ្យលក្ខខណ្ឌនៅក្នុង main ខ្លី ហើយយើងអាចហៅ isEven បានគ្រប់កន្លែងដែលត្រូវការ។`,
      expectedOutput: "Even"
    },
    {
      id: "functions-04",
      topicId: "functions",
      title: "Quiz: Missing Argument",
      difficulty: "beginner",
      type: "quiz",
      description: `សិស្សម្នាក់សរសេរ function សម្រាប់បូកចំនួនពីរ ប៉ុន្តែពេលហៅគាត់បញ្ជូន argument តែមួយ។ សូមពិនិត្យ snippet ហើយជ្រើសរើសចម្លើយដែលត្រឹមត្រូវ។`,
      requirements: ["អាន function signature និងចំនួន argument ដែលបានបញ្ជូន។", "ជ្រើសរើសចម្លើយមួយ។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(3) << endl;
    return 0;
}`,
      quizQuestion: "តើមានបញ្ហាអ្វីនៅពេល compile snippet នេះ?",
      options: [
        "function add ត្រូវការ argument ពីរ ប៉ុន្តែការហៅបញ្ជូនតែមួយ។",
        "function add មិនអាច return int បានទេ។",
        "ត្រូវប្រើ void add ជំនួស int add។",
        "cout មិនអាចបង្ហាញលទ្ធផលពី function បានទេ។"
      ],
      correctIndex: 0,
      quizExplanation: "add មាន parameter ពីរ ដូច្នេះការហៅត្រូវផ្តល់ argument ពីរ ដូចជា add(3, 4)។ បើផ្តល់តែមួយ compiler នឹងរាយការណ៍ថា too few arguments។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "រាប់ parameter ក្នុង function signature ហើយប្រៀបធៀបនឹងចំនួន argument ក្នុងការហៅ។",
      solution: String.raw`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(3, 4) << endl;
    return 0;
}`,
      explanation: `function signature កំណត់ចំនួន និងប្រភេទ argument ដែលអ្នកហៅត្រូវផ្តល់។ add ត្រូវការ int ពីរ ដូច្នេះ add(3) មិនគ្រប់គ្រាន់ទេ។ ការផ្តល់ add(3, 4) ធ្វើឱ្យកម្មវិធី compile និងដំណើរការបានត្រឹមត្រូវ។`,
      expectedOutput: "7"
    },
    {
      id: "functions-05",
      topicId: "functions",
      title: "Maximum of Three Numbers",
      difficulty: "intermediate",
      type: "code",
      description: `ការប្រៀបធៀបតម្លៃច្រើនក្នុង function តែមួយ ជួយកាត់បន្ថយការសរសេរ if ដដែលៗនៅក្នុង main។ អ្នកត្រូវសរសេរ function ដែលស្វែងរកតម្លៃធំបំផុតក្នុងចំណោមចំនួនបី។`,
      requirements: [
        "បង្កើត function maxOfThree ដែលទទួល int បី និង return តម្លៃធំបំផុត។",
        "អានចំនួនគត់បីពី input។",
        "បង្ហាញតម្លៃធំបំផុតតែម្តង។"
      ],
      input: "ចំនួនគត់បី a, b និង c បំបែកដោយចន្លោះ។",
      output: "តម្លៃធំបំផុតក្នុងចំណោម a, b និង c។",
      samples: [{ input: "4 9 2", output: "9" }],
      constraints: ["អាចមានតម្លៃស្មើគ្នាបាន។", "ត្រូវប្រើ function maxOfThree។"],
      hint: "ចាប់ផ្តើមដោយ result = a បន្ទាប់មកប្រៀបធៀប b និង c ជាមួយ result។",
      solution: String.raw`#include <iostream>

using namespace std;

int maxOfThree(int a, int b, int c) {
    int result = a;
    if (b > result) {
        result = b;
    }
    if (c > result) {
        result = c;
    }
    return result;
}

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << maxOfThree(a, b, c) << endl;
    return 0;
}`,
      explanation: `function ចាប់ផ្តើមដោយសន្មតថា a ជាតម្លៃធំបំផុត រួចធ្វើបច្ចុប្បន្នភាពនៅពេលឃើញតម្លៃធំជាង។ វិធីនេះអាចបន្ថែមចំនួនបានយ៉ាងងាយដោយបន្ថែមលក្ខខណ្ឌថ្មី។`,
      expectedOutput: "9"
    },
    {
      id: "functions-06",
      topicId: "functions",
      title: "Factorial Function",
      difficulty: "intermediate",
      type: "code",
      description: `Factorial ត្រូវបានប្រើក្នុង combinatorics និងស្ថិតិ។ លំហាត់នេះឱ្យអ្នកសរសេរ function factorial ដោយប្រើ loop នៅខាងក្នុង function ដើម្បីគណនា n!។`,
      requirements: [
        "បង្កើត function factorial ដែលទទួល int n និង return long long។",
        "គណនា 1 * 2 * ... * n ដោយប្រើ loop។",
        "កំណត់ 0! = 1 ហើយបង្ហាញលទ្ធផល។"
      ],
      input: "ចំនួនគត់ n ដែល 0 <= n <= 20។",
      output: "តម្លៃ n! ។",
      samples: [{ input: "5", output: "120" }],
      constraints: ["ប្រើ long long ដើម្បីជៀសវាង overflow សម្រាប់ n ធំ។", "n មិនលើស 20 ទេ។"],
      hint: "ចាប់ផ្តើម result = 1 ហើយរត់ for ពី 2 ដល់ n ដោយ result *= i។",
      solution: String.raw`#include <iostream>

using namespace std;

long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
      explanation: `function factorial រក្សា accumulator result ហើយគុណជាមួយ i រាល់ជុំ។ ការប្រើ long long ផ្តល់ទំហំធំជាង int ដែលចាំបាច់ព្រោះ factorial លូតលាស់លឿនណាស់។`,
      expectedOutput: "120"
    },
    {
      id: "functions-07",
      topicId: "functions",
      title: "Prime Check with Helper",
      difficulty: "intermediate",
      type: "code",
      description: `ការត្រួតពិនិត្យចំនួនបឋមអាចធ្វើបានក្នុង function ដាច់ដោយឡែក ដើម្បីឱ្យ main អានងាយ។ អ្នកត្រូវសរសេរ function isPrime ដែលពិនិត្យថាតើចំនួនមួយជាចំនួនបឋមឬអត់។`,
      requirements: [
        "បង្កើត function isPrime ដែល return true ប្រសិនបើ n ជាចំនួនបឋម។",
        "ចំនួនតូចជាង 2 មិនមែនជាចំនួនបឋមទេ។",
        "ពិនិត្យចែកពី 2 ដល់ sqrt(n) ដើម្បីបង្កើនប្រសិទ្ធភាព។"
      ],
      input: "ចំនួនគត់ n មួយ។",
      output: "អត្ថបទ Prime ឬ Not Prime។",
      samples: [{ input: "29", output: "Prime" }],
      constraints: ["n ជាចំនួនគត់ធម្មតា។", "ត្រូវប្រើ function isPrime។"],
      hint: "ប្រើ for (int i = 2; i * i <= n; i++) ហើយ return false ប្រសិនបើ n % i == 0។",
      solution: String.raw`#include <iostream>

using namespace std;

bool isPrime(int n) {
    if (n < 2) {
        return false;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    if (isPrime(n)) {
        cout << "Prime" << endl;
    } else {
        cout << "Not Prime" << endl;
    }
    return 0;
}`,
      explanation: `យើងគ្រាន់តែត្រូវពិនិត្យរហូតដល់ sqrt(n) ព្រោះប្រសិនបើ n មានចែក វាត្រូវមានចែកមួយដែលតូចជាង ឬស្មើ sqrt(n)។ function ត្រឡប់ false ភ្លាមៗនៅពេលរកឃើញចែក ហើយ return true នៅចុងបញ្ចប់។`,
      expectedOutput: "Prime"
    },
    {
      id: "functions-08",
      topicId: "functions",
      title: "GCD and LCM",
      difficulty: "advanced",
      type: "code",
      description: `GCD និង LCM ជាគំនិតសំខាន់ក្នុងគណិតវិទ្យា និងការគណនាប្រភាគ។ លំហាត់នេះឱ្យអ្នកបង្កើត function ពីរដាច់ដោយឡែក ហើយប្រើទំនាក់ទំនងរវាង GCD និង LCM។`,
      requirements: [
        "បង្កើត function gcd សម្រាប់រកចែករួមធំបំផុតដោយ Euclidean algorithm។",
        "បង្កើត function lcm ដែលប្រើ gcd ដើម្បីគណនា LCM។",
        "អានចំនួនគត់ពីរ ហើយបង្ហាញ GCD និង LCM ជាពីរបន្ទាត់។"
      ],
      input: "ចំនួនគត់វិជ្ជមានពីរ a និង b។",
      output: "បន្ទាត់ទីមួយ GCD: តម្លៃ និងបន្ទាត់ទីពីរ LCM: តម្លៃ។",
      samples: [{ input: "12 18", output: "GCD: 6\nLCM: 36" }],
      constraints: ["a និង b វិជ្ជមាន។", "LCM ត្រូវគណនាដោយជៀសវាង overflow តាមដែលអាចធ្វើបាន។"],
      hint: "gcd(a, b) អាចសរសេរជា while (b != 0) { int t = b; b = a % b; a = t; } ហើយ lcm = a / gcd(a, b) * b។",
      solution: String.raw`#include <iostream>

using namespace std;

long long gcd(long long a, long long b) {
    while (b != 0) {
        long long remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

long long lcm(long long a, long long b) {
    return a / gcd(a, b) * b;
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << "GCD: " << gcd(a, b) << endl;
    cout << "LCM: " << lcm(a, b) << endl;
    return 0;
}`,
      explanation: `Euclidean algorithm ចែក a នឹង b ហើយបន្តជាមួយ b និង remainder រហូត remainder ក្លាយជា 0។ សម្រាប់ LCM យើងចែកមុនពេលគុណ ដើម្បីកាត់បន្ថយហានិភ័យ overflow។`,
      expectedOutput: "GCD: 6\nLCM: 36"
    },
    {
      id: "functions-09",
      topicId: "functions",
      title: "Digit Sum Function",
      difficulty: "advanced",
      type: "code",
      description: `ការបំបែកខ្ទង់នៃចំនួនគត់ ត្រូវបានប្រើក្នុង checksum និងការវិភាគលេខ។ អ្នកត្រូវសរសេរ function ដែលគណនាផលបូកខ្ទង់ទាំងអស់នៃចំនួនមួយ ដោយប្រើ loop។`,
      requirements: [
        "បង្កើត function digitSum ដែលទទួល int n និង return ផលបូកខ្ទង់។",
        "ប្រើ n % 10 ដើម្បីយកខ្ទង់ចុងក្រោយ និង n / 10 ដើម្បីកាត់វាចេញ។",
        "អានចំនួនគត់មួយ ហើយបង្ហាញផលបូកខ្ទង់។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន n មួយ។",
      output: "ផលបូកខ្ទង់ទាំងអស់នៃ n។",
      samples: [{ input: "4729", output: "22" }],
      constraints: ["n វិជ្ជមាន។", "ត្រូវប្រើ loop ក្នុង function។"],
      hint: "ចាប់ផ្តើម sum = 0 ហើយ while (n > 0) { sum += n % 10; n /= 10; }។",
      solution: String.raw`#include <iostream>

using namespace std;

int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int main() {
    int n;
    cin >> n;
    cout << digitSum(n) << endl;
    return 0;
}`,
      explanation: `n % 10 ផ្តល់ខ្ទង់ខាងស្តាំបំផុត ហើយ n / 10 លុបខ្ទង់នោះចេញ។ ការធ្វើម្តងទៀតរហូត n ក្លាយជា 0 ធ្វើឱ្យយើងបូកគ្រប់ខ្ទង់បាន។`,
      expectedOutput: "22"
    },
    {
      id: "functions-10",
      topicId: "functions",
      title: "Quiz: Pass by Value",
      difficulty: "advanced",
      type: "quiz",
      description: `នៅពេលបញ្ជូន argument ទៅ function តាមលំនាំដើម C++ ប្រើ pass by value។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផលដែលបង្ហាញ។`,
      requirements: ["តាមដានតម្លៃ value មុន និងក្រោយការហៅ addTen។", "ជ្រើសរើសចម្លើយមួយ។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

void addTen(int x) {
    x = x + 10;
}

int main() {
    int value = 5;
    addTen(value);
    cout << value << endl;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: [
        "5",
        "10",
        "15",
        "មាន compile error ព្រោះ addTen ជា void។"
      ],
      correctIndex: 0,
      quizExplanation: "parameter x គឺជា copy នៃ value។ ការកែ x ក្នុង function មិនផ្លាស់ប្តូរ value ដើមទេ ដូច្នេះ value នៅតែ 5។ ដើម្បីកែ value ដើមត្រូវប្រើ reference ឬ pointer។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "parameter ធម្មតាជា copy។ សូមពិនិត្យថាតើ function កែ variable ណាមួយ។",
      solution: String.raw`#include <iostream>
using namespace std;

void addTen(int x) {
    x = x + 10;
}

int main() {
    int value = 5;
    addTen(value);
    cout << value << endl;
    return 0;
}`,
      explanation: `pass by value បង្កើត copy ដាច់ដោយឡែកសម្រាប់ function។ ការផ្លាស់ប្តូរ copy មិនប៉ះពាល់ variable ដើមនៅក្នុង main ទេ។ នេះជាមូលហេតុដែល output នៅតែ 5។`,
      expectedOutput: "5"
    },
    {
      id: "functions-11",
      topicId: "functions",
      title: "Power Without pow",
      difficulty: "challenge",
      type: "code",
      description: `ក្នុងការគណនាវិទ្យាសាស្ត្រ យើងច្រើនត្រូវគណនាស្វ័យគុណ។ លំហាត់នេះឱ្យអ្នកសរសេរ function power ដោយខ្លួនឯង ដោយមិនប្រើ pow ពី cmath។`,
      requirements: [
        "បង្កើត function power ដែលទទួល base និង exponent មិនអវិជ្ជមាន។",
        "return base លើកកំឡាំង exponent ជា long long។",
        "អាន base និង exponent ពី input ហើយបង្ហាញលទ្ធផល។"
      ],
      input: "ចំនួនគត់ base និង exponent បំបែកដោយចន្លោះ។",
      output: "តម្លៃ base^exponent។",
      samples: [{ input: "2 10", output: "1024" }],
      constraints: ["exponent >= 0។", "មិនត្រូវប្រើ pow ពី cmath ទេ។"],
      hint: "ចាប់ផ្តើម result = 1 ហើយគុណ result នឹង base ចំនួន exponent ដងដោយ loop។",
      solution: String.raw`#include <iostream>

using namespace std;

long long power(int base, int exponent) {
    long long result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

int main() {
    int base, exponent;
    cin >> base >> exponent;
    cout << power(base, exponent) << endl;
    return 0;
}`,
      explanation: `power ចាប់ផ្តើមពី 1 ហើយគុណនឹង base ម្តងមួយៗចំនួន exponent ដង។ ប្រសិនបើ exponent ជា 0 loop មិនដំណើរការ ហើយ result នៅតែ 1 ដែលជាតម្លៃត្រឹមត្រូវ។`,
      expectedOutput: "1024"
    },
    {
      id: "functions-12",
      topicId: "functions",
      title: "Perfect Number Check",
      difficulty: "challenge",
      type: "code",
      description: `ចំនួន perfect គឺជាចំនួនដែលស្មើនឹងផលបូកចែកត្រឹមត្រូវរបស់វា ដូចជា 6 និង 28។ អ្នកត្រូវបង្កើត function សម្រាប់គណនាផលបូកចែក ហើយប្រើវាដើម្បីពិនិត្យ។`,
      requirements: [
        "បង្កើត function sumProperDivisors ដែលបូកចែកត្រឹមត្រូវទាំងអស់នៃ n។",
        "ចែកត្រឹមត្រូវមានន័យថាចែកចេញ និងតូចជាង n។",
        "បង្ហាញ Perfect ប្រសិនបើផលបូកស្មើ n បើមិនដូច្នេះបង្ហាញ Not Perfect។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន n មួយ។",
      output: "អត្ថបទ Perfect ឬ Not Perfect។",
      samples: [{ input: "28", output: "Perfect" }],
      constraints: ["n ធំជាង 1។", "ត្រូវប្រើ function sumProperDivisors។"],
      hint: "រត់ for ពី 1 ដល់ n / 2 ហើយបូក i នៅពេល n % i == 0។",
      solution: String.raw`#include <iostream>

using namespace std;

int sumProperDivisors(int n) {
    int sum = 0;
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum;
}

int main() {
    int n;
    cin >> n;
    if (sumProperDivisors(n) == n) {
        cout << "Perfect" << endl;
    } else {
        cout << "Not Perfect" << endl;
    }
    return 0;
}`,
      explanation: `ចែកត្រឹមត្រូវនៃ n គឺជាចំនួនដែលចែក n ចេញដោយគ្មានសំណល់ និងតូចជាង n។ យើងគ្រាន់តែពិនិត្យរហូតដល់ n / 2 ព្រោះគ្មានចែកណាធំជាង n / 2 ក្រៅពី n ខ្លួនឯង។`,
      expectedOutput: "Perfect"
    },
    {
      id: "functions-13",
      topicId: "functions",
      title: "Function-Based Calculator",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីគណនាតូចមួយអាចបែងចែកប្រតិបត្តិការនីមួយៗទៅ function ដាច់ដោយឡែក។ អ្នកត្រូវអានចំនួនពីរ និង operator មួយ រួចហៅ function ដែលសមស្រប។`,
      requirements: [
        "បង្កើត function សម្រាប់បូក ដក គុណ និងចែកចំនួនគត់។",
        "អាន input ជាទម្រង់ a op b ដែល op ជា +, -, * ឬ /។",
        "ប្រើ switch ដើម្បីជ្រើស function ហើយបង្ហាញលទ្ធផល។"
      ],
      input: "ចំនួនគត់ a, operator op និងចំនួនគត់ b បំបែកដោយចន្លោះ។",
      output: "លទ្ធផលនៃប្រតិបត្តិការ a op b។",
      samples: [{ input: "8 * 5", output: "40" }],
      constraints: ["op ជាមួយក្នុងចំណោម +, -, *, /។", "សម្រាប់ការចែក b មិនស្មើ 0 ទេ។"],
      hint: "សរសេរ int add(int, int), subtract, multiply និង divide រួចប្រើ switch (op) ដើម្បីហៅ។",
      solution: String.raw`#include <iostream>

using namespace std;

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

int divide(int a, int b) {
    return a / b;
}

int main() {
    int a, b;
    char op;
    cin >> a >> op >> b;

    switch (op) {
        case '+':
            cout << add(a, b) << endl;
            break;
        case '-':
            cout << subtract(a, b) << endl;
            break;
        case '*':
            cout << multiply(a, b) << endl;
            break;
        case '/':
            cout << divide(a, b) << endl;
            break;
        default:
            cout << "Invalid operator" << endl;
    }
    return 0;
}`,
      explanation: `ការបំបែកប្រតិបត្តិការនីមួយៗទៅ function ធ្វើឱ្យ main ស្អាត និងងាយសាកល្បង។ switch ជ្រើស function តាម operator ដែលអ្នកប្រើបញ្ចូល។ ការចែកជា integer division ដូច្នេះលទ្ធផលជាចំនួនគត់។`,
      expectedOutput: "40"
    }
  ]);
})();
