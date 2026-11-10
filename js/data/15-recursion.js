(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "recursion-01",
      topicId: "recursion",
      title: "Recursive Factorial",
      difficulty: "beginner",
      type: "code",
      description: `Recursion គឺជាការដោះស្រាយបញ្ហាដោយឱ្យ function ហៅខ្លួនឯងលើបញ្ហាតូចជាង។ លំហាត់នេះឱ្យអ្នកសរសេរ factorial ដោយប្រើ recursion និង base case ឱ្យបានត្រឹមត្រូវ។`,
      requirements: [
        "បង្កើត function factorial ដែល return long long។",
        "កំណត់ base case 0! = 1។",
        "សម្រាប់ n > 0 ត្រូវ return n * factorial(n - 1)។"
      ],
      input: "ចំនួនគត់ n ដែល 0 <= n <= 20។",
      output: "តម្លៃ n! ។",
      samples: [{ input: "5", output: "120" }],
      constraints: ["ត្រូវប្រើ recursion មិនមែន loop ទេ។", "n មិនលើស 20។"],
      hint: "function ត្រូវឈប់នៅពេល n == 0 ហើយបើមិនដូច្នេះ return n * factorial(n - 1)។",
      solution: String.raw`#include <iostream>

using namespace std;

long long factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
      explanation: `factorial(5) ហៅ factorial(4) ដែលហៅ factorial(3) បន្តរហូតដល់ factorial(0)។ នៅពេល base case return 1 លទ្ធផលត្រូវបានគុណត្រឡប់មកវិញតាមលំដាប់ 1 * 1 * 2 * 3 * 4 * 5 ដែលផ្តល់ 120។`,
      expectedOutput: "120"
    },
    {
      id: "recursion-02",
      topicId: "recursion",
      title: "Recursive Sum to N",
      difficulty: "beginner",
      type: "code",
      description: `ការគណនាផលបូកពី 1 ដល់ n អាចសរសេរបានយ៉ាងខ្លីដោយ recursion។ អ្នកត្រូវបង្កើត function sumTo ដែលបូក n ជាមួយផលបូករបស់ n - 1។`,
      requirements: [
        "បង្កើត function sumTo ដែលទទួល int n និង return int។",
        "កំណត់ base case នៅពេល n <= 0 ដោយ return 0។",
        "សម្រាប់ n > 0 ត្រូវ return n + sumTo(n - 1)។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន n មួយ។",
      output: "ផលបូក 1 + 2 + ... + n។",
      samples: [{ input: "10", output: "55" }],
      constraints: ["ត្រូវប្រើ recursion។", "n >= 1។"],
      hint: "base case គឺ n <= 0 return 0 ដើម្បីឈប់ការហៅ។",
      solution: String.raw`#include <iostream>

using namespace std;

int sumTo(int n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumTo(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << sumTo(n) << endl;
    return 0;
}`,
      explanation: `sumTo(10) បូក 10 ជាមួយ sumTo(9) ហើយបន្តរហូតដល់ sumTo(0) return 0។ បន្ទាប់មកតម្លៃត្រូវបូកត្រឡប់មកវិញជា 10 + 9 + ... + 1 = 55។ base case ការពារការហៅមិនចេះឈប់។`,
      expectedOutput: "55"
    },
    {
      id: "recursion-03",
      topicId: "recursion",
      title: "Quiz: Missing Base Case",
      difficulty: "beginner",
      type: "quiz",
      description: `Base case គឺជាផ្នែកចាំបាច់នៃ recursion ព្រោះវាកំណត់ពេលដែល function ត្រូវឈប់ហៅខ្លួនឯង។ សូមពិនិត្យ snippet ដែលខ្វះ base case ហើយជ្រើសរើសចម្លើយត្រឹមត្រូវ។`,
      requirements: ["ពិនិត្យ function ថាតើមានលក្ខខណ្ឌឈប់ឬអត់។", "ជ្រើសរើសចម្លើយមួយ។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int countdown(int n) {
    return countdown(n - 1);
}

int main() {
    cout << countdown(3) << endl;
    return 0;
}`,
      quizQuestion: "តើមានអ្វីកើតឡើងនៅពេលដំណើរការកម្មវិធី?",
      options: [
        "Recursion បន្តដោយគ្មានឈប់ ហើយ stack overflow កើតឡើង។",
        "កម្មវិធី return 0 ដោយស្វ័យប្រវត្តិ។",
        "កម្មវិធីបង្ហាញ 3 2 1 0។",
        "Compiler បដិសេធការហៅ function ខ្លួនឯង។"
      ],
      correctIndex: 0,
      quizExplanation: "function countdown មិនមាន base case ដូច្នេះវាហៅខ្លួនឯងឥតឈប់។ call stack លូតលាស់រហូតហួសដែនកំណត់ ហើយបណ្តាលឱ្យ stack overflow។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សូមរកមើលលក្ខខណ្ឌដែល function ត្រូវ return ដោយមិនហៅខ្លួនឯង។",
      solution: String.raw`#include <iostream>
using namespace std;

int countdown(int n) {
    if (n <= 0) {
        return 0;
    }
    return countdown(n - 1);
}

int main() {
    cout << countdown(3) << endl;
    return 0;
}`,
      explanation: `base case គឺជាលក្ខខណ្ឌដែលនាំឱ្យ recursion ឈប់។ បើគ្មានវា function នឹងហៅខ្លួនឯងរហូត stack overflow។ ការបន្ថែម if (n <= 0) return 0; ធ្វើឱ្យ recursion មានចំណុចបញ្ចប់។`,
      expectedOutput: "Stack overflow"
    },
    {
      id: "recursion-04",
      topicId: "recursion",
      title: "Recursive Power",
      difficulty: "beginner",
      type: "code",
      description: `ស្វ័យគុណអាចគណនាបានដោយ recursion តាមទំនាក់ទំនង base^exp = base * base^(exp-1)។ អ្នកត្រូវសរសេរ function power ដោយមិនប្រើ pow។`,
      requirements: [
        "បង្កើត function power ដែល return long long។",
        "កំណត់ base case exponent == 0 ដោយ return 1។",
        "សម្រាប់ exponent > 0 ត្រូវ return base * power(base, exponent - 1)។"
      ],
      input: "ចំនួនគត់ base និង exponent ដែល exponent >= 0។",
      output: "តម្លៃ base^exponent។",
      samples: [{ input: "3 4", output: "81" }],
      constraints: ["មិនត្រូវប្រើ pow ទេ។", "exponent >= 0។"],
      hint: "base case គឺ exponent == 0 ព្រោះចំនួនណាក៏ដោយលើកកំឡាំង 0 ស្មើ 1។",
      solution: String.raw`#include <iostream>

using namespace std;

long long power(int base, int exponent) {
    if (exponent == 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

int main() {
    int base, exponent;
    cin >> base >> exponent;
    cout << power(base, exponent) << endl;
    return 0;
}`,
      explanation: `power(3, 4) ហៅ power(3, 3) ហើយបន្តរហូតដល់ power(3, 0) return 1។ បន្ទាប់មកតម្លៃត្រូវគុណត្រឡប់មកវិញជា 3 * 3 * 3 * 3 * 1 = 81។ ទំនាក់ទំនងនេះកាត់បញ្ហាធំជាបញ្ហាតូចមួយជំហាន។`,
      expectedOutput: "81"
    },
    {
      id: "recursion-05",
      topicId: "recursion",
      title: "Fibonacci Number",
      difficulty: "intermediate",
      type: "code",
      description: `លំដាប់ Fibonacci ចាប់ផ្តើមដោយ 0 និង 1 ហើយចំនួនបន្ទាប់គឺផលបូកពីរចំនួនមុន។ អ្នកត្រូវសរសេរ function fibonacci ដោយប្រើ recursion តាមនិយមន័យ។`,
      requirements: [
        "បង្កើត function fibonacci ដែល return int។",
        "កំណត់ fibonacci(0) = 0 និង fibonacci(1) = 1។",
        "សម្រាប់ n > 1 ត្រូវ return fibonacci(n - 1) + fibonacci(n - 2)។"
      ],
      input: "ចំនួនគត់ n ដែល 0 <= n <= 30។",
      output: "តម្លៃ Fibonacci ទី n។",
      samples: [{ input: "10", output: "55" }],
      constraints: ["ត្រូវប្រើ recursion។", "n មិនលើស 30 ដើម្បីរក្សាល្បឿន។"],
      hint: "base case មានពីរ៖ n == 0 return 0 និង n == 1 return 1។",
      solution: String.raw`#include <iostream>

using namespace std;

int fibonacci(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n;
    cin >> n;
    cout << fibonacci(n) << endl;
    return 0;
}`,
      explanation: `fibonacci(10) បំបែកជា fibonacci(9) និង fibonacci(8) ហើយបន្តដូចគ្នា។ វិធីនេះអានតាមនិយមន័យគណិតវិទ្យាបានយ៉ាងច្បាស់ ប៉ុន្តែវាគណនាតម្លៃដដែលៗច្រើនដង ដូច្នេះមិនសូវល្អសម្រាប់ n ធំខ្លាំងទេ។`,
      expectedOutput: "55"
    },
    {
      id: "recursion-06",
      topicId: "recursion",
      title: "Recursive Digit Sum",
      difficulty: "intermediate",
      type: "code",
      description: `ការបូកខ្ទង់អាចសរសេរបានយ៉ាងស្អាតដោយ recursion ព្រោះខ្ទង់ចុងក្រោយគឺ n % 10 ហើយផ្នែកដែលនៅសល់គឺ n / 10។ អ្នកត្រូវបង្កើត function digitSum ដោយគ្មាន loop។`,
      requirements: [
        "បង្កើត function digitSum ដែលទទួល int n និង return int។",
        "កំណត់ base case n == 0 ដោយ return 0។",
        "សម្រាប់ n > 0 ត្រូវ return n % 10 + digitSum(n / 10)។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន n មួយ។",
      output: "ផលបូកខ្ទង់ទាំងអស់នៃ n។",
      samples: [{ input: "9421", output: "16" }],
      constraints: ["ត្រូវប្រើ recursion មិនមែន loop ទេ។", "n >= 1។"],
      hint: "base case n == 0 return 0។ បន្ទាប់មក n % 10 ជាខ្ទង់ចុងក្រោយ ហើយ n / 10 ជាចំនួនដែលនៅសល់។",
      solution: String.raw`#include <iostream>

using namespace std;

int digitSum(int n) {
    if (n == 0) {
        return 0;
    }
    return n % 10 + digitSum(n / 10);
}

int main() {
    int n;
    cin >> n;
    cout << digitSum(n) << endl;
    return 0;
}`,
      explanation: `digitSum(9421) យក 1 បូក digitSum(942) បន្ទាប់មកយក 2 បូក digitSum(94) ហើយបន្តរហូតដល់ 0។ ផលបូកចុងក្រោយគឺ 1 + 2 + 4 + 9 = 16។ ការបែងចែកដោយ 10 កាត់បន្ថយបញ្ហាមួយខ្ទង់រាល់ជំហាន។`,
      expectedOutput: "16"
    },
    {
      id: "recursion-07",
      topicId: "recursion",
      title: "Recursive Reverse String",
      difficulty: "intermediate",
      type: "code",
      description: `ការបញ្ច្រាសអត្ថបទអាចធ្វើបានដោយយកតួអក្សរដំបូងទៅដាក់ចុងក្រោយ បន្ទាប់មកបញ្ច្រាសផ្នែកដែលនៅសល់។ អ្នកត្រូវសរសេរ function reverseText ដោយប្រើ recursion។`,
      requirements: [
        "បង្កើត function reverseText ដែលទទួល string និង return string។",
        "កំណត់ base case នៅពេល string មានប្រវែង 0 ឬ 1។",
        "សម្រាប់ string ធំជាង 1 ត្រូវ return reverseText(s.substr(1)) + s[0]។"
      ],
      input: "ពាក្យមួយដែលគ្មានចន្លោះ។",
      output: "ពាក្យដែលបានបញ្ច្រាស។",
      samples: [{ input: "hello", output: "olleh" }],
      constraints: ["ត្រូវប្រើ recursion។", "ប្រវែងពាក្យមិនលើស 30។"],
      hint: "s.substr(1) យកផ្នែកបន្ទាប់ពីតួអក្សរដំបូង។ បន្ទាប់មកបន្ថែម s[0] នៅចុងបញ្ចប់។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

string reverseText(const string& s) {
    if (s.size() <= 1) {
        return s;
    }
    return reverseText(s.substr(1)) + s[0];
}

int main() {
    string text;
    cin >> text;
    cout << reverseText(text) << endl;
    return 0;
}`,
      explanation: `reverseText("hello") ហៅ reverseText("ello") ហើយបន្ថែម h នៅចុងបញ្ចប់។ ដំណើរការបន្តរហូត string នៅសល់តួអក្សរមួយ ដែលជា base case។ លទ្ធផលចុងក្រោយគឺ olleh។`,
      expectedOutput: "olleh"
    },
    {
      id: "recursion-08",
      topicId: "recursion",
      title: "Recursive GCD",
      difficulty: "advanced",
      type: "code",
      description: `Euclidean algorithm អាចសរសេរបានយ៉ាងខ្លីដោយ recursion តាមទំនាក់ទំនង gcd(a, b) = gcd(b, a % b)។ អ្នកត្រូវបង្កើត function gcd ដែលប្រើទំនាក់ទំនងនេះ។`,
      requirements: [
        "បង្កើត function gcd ដែលទទួល int ពីរ និង return int។",
        "កំណត់ base case b == 0 ដោយ return a។",
        "សម្រាប់ b != 0 ត្រូវ return gcd(b, a % b)។"
      ],
      input: "ចំនួនគត់វិជ្ជមានពីរ a និង b។",
      output: "GCD នៃ a និង b។",
      samples: [{ input: "48 18", output: "6" }],
      constraints: ["ត្រូវប្រើ recursion។", "a និង b វិជ្ជមាន។"],
      hint: "base case គឺ b == 0 ព្រោះ gcd(a, 0) = a។ បើមិនដូច្នេះ បន្តជាមួយ b និង a % b។",
      solution: String.raw`#include <iostream>

using namespace std;

int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << endl;
    return 0;
}`,
      explanation: `gcd(48, 18) ហៅ gcd(18, 12) បន្ទាប់មក gcd(12, 6) ហើយ gcd(6, 0) return 6។ រាល់ជំហាន ចំនួនពីរត្រូវបានជំនួសដោយ b និង a % b ដែលកាត់បន្ថយទំហំបញ្ហាយ៉ាងលឿន។`,
      expectedOutput: "6"
    },
    {
      id: "recursion-09",
      topicId: "recursion",
      title: "Recursive Palindrome Check",
      difficulty: "advanced",
      type: "code",
      description: `Palindrome គឺជាអត្ថបទដែលអានពីឆ្វេងទៅស្តាំ ឬស្តាំទៅឆ្វេងដូចគ្នា។ អ្នកត្រូវបង្កើត function isPalindrome ដោយប្រៀបធៀបតួអក្សរពីចុងទាំងពីរ ហើយបន្តចូលខាងក្នុងដោយ recursion។`,
      requirements: [
        "បង្កើត function isPalindrome ដែលទទួល string និង index ឆ្វេង ស្តាំ។",
        "ប្រសិនបើ left >= right ត្រូវ return true។",
        "ប្រសិនបើ s[left] != s[right] ត្រូវ return false។",
        "បើមិនដូច្នេះ បន្តពិនិត្យដោយ isPalindrome(s, left + 1, right - 1)។"
      ],
      input: "ពាក្យមួយដែលគ្មានចន្លោះ។",
      output: "អត្ថបទ Palindrome ឬ Not Palindrome។",
      samples: [{ input: "madam", output: "Palindrome" }],
      constraints: ["អក្សរតូច និងធំចាត់ទុកដូចគ្នា។", "ត្រូវប្រើ recursion។"],
      hint: "ហៅ isPalindrome(text, 0, text.size() - 1) ពី main។ ប្រើ tolower ដើម្បីមិនប្រកាន់អក្សរតូច ឬធំ។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

bool isPalindrome(const string& s, int left, int right) {
    if (left >= right) {
        return true;
    }
    char a = static_cast<char>(tolower(static_cast<unsigned char>(s[left])));
    char b = static_cast<char>(tolower(static_cast<unsigned char>(s[right])));
    if (a != b) {
        return false;
    }
    return isPalindrome(s, left + 1, right - 1);
}

int main() {
    string text;
    cin >> text;
    if (isPalindrome(text, 0, text.size() - 1)) {
        cout << "Palindrome" << endl;
    } else {
        cout << "Not Palindrome" << endl;
    }
    return 0;
}`,
      explanation: `function ប្រៀបធៀបតួអក្សរឆ្វេងបំផុត និងស្តាំបំផុត។ ប្រសិនបើដូចគ្នា វាបន្តចូលខាងក្នុងដោយបង្កើន left និងបន្ថយ right។ នៅពេល left >= right មានន័យថាបានពិនិត្យគ្រប់គូហើយ ដូច្នេះ return true។`,
      expectedOutput: "Palindrome"
    },
    {
      id: "recursion-10",
      topicId: "recursion",
      title: "Quiz: Recursive Output Order",
      difficulty: "advanced",
      type: "quiz",
      description: `ទីតាំងនៃការហៅ recursion ប៉ះពាល់លំដាប់ output។ សូមពិនិត្យ snippet ហើយជ្រើសរើសលទ្ធផលដែលបង្ហាញ។`,
      requirements: ["តាមដានលំដាប់ cout មុន និងក្រោយការហៅ printDown។", "ជ្រើសរើសចម្លើយមួយ។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

void printDown(int n) {
    if (n == 0) {
        return;
    }
    cout << n << " ";
    printDown(n - 1);
}

int main() {
    printDown(4);
    cout << endl;
    return 0;
}`,
      quizQuestion: "តើ output ជាអ្វី?",
      options: [
        "4 3 2 1",
        "1 2 3 4",
        "4 3 2 1 0",
        "0 1 2 3 4"
      ],
      correctIndex: 0,
      quizExplanation: "cout ត្រូវបានធ្វើមុនការហៅ printDown(n - 1)។ ដូច្នេះលេខត្រូវបង្ហាញពីធំទៅតូចគឺ 4 3 2 1 ហើយ n == 0 គ្រាន់តែឈប់ដោយមិនបង្ហាញ 0។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "មើលថាតើ cout នៅមុន ឬក្រោយការហៅ printDown។ ប្រសិនបើនៅមុន លេខធំបង្ហាញមុន។",
      solution: String.raw`#include <iostream>
using namespace std;

void printDown(int n) {
    if (n == 0) {
        return;
    }
    cout << n << " ";
    printDown(n - 1);
}

int main() {
    printDown(4);
    cout << endl;
    return 0;
}`,
      explanation: `ការហៅ recursion កើតឡើងក្រោយ cout ដូច្នេះលេខត្រូវបង្ហាញតាមលំដាប់ចុះ។ ប្រសិនបើយើងដាក់ cout ក្រោយ printDown(n - 1) លំដាប់នឹងប្រែជា 1 2 3 4 វិញ។`,
      expectedOutput: "4 3 2 1"
    },
    {
      id: "recursion-11",
      topicId: "recursion",
      title: "Tower of Hanoi Moves",
      difficulty: "challenge",
      type: "code",
      description: `Tower of Hanoi គឺជាបញ្ហាបុរាណដែលបង្ហាញភាពខ្លាំងនៃ recursion។ អ្នកត្រូវបង្កើត function hanoi ដែលបង្ហាញការផ្លាស់ disk និង return ចំនួនជំហានសរុប។`,
      requirements: [
        "បង្កើត function hanoi(int n, char from, char to, char aux) ដែល return int។",
        "បង្ហាញបន្ទាត់ Move disk k from X to Y សម្រាប់ជំហាននីមួយៗ។",
        "នៅចុងបញ្ចប់បង្ហាញ Total moves: ចំនួនជំហាន។",
        "ចាប់ផ្តើមដោយ disk ទាំងអស់នៅ A ហើយផ្លាស់ទៅ C ដោយប្រើ B ជា auxiliary។"
      ],
      input: "ចំនួន disk n ដែល 1 <= n <= 10។",
      output: "បន្ទាត់ការផ្លាស់ disk តាមលំដាប់ បន្ទាប់មកបន្ទាត់ Total moves។",
      samples: [{ input: "2", output: "Move disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C\nTotal moves: 3" }],
      constraints: ["ត្រូវប្រើ recursion។", "ឈ្មោះ peg ជា A, B និង C។"],
      hint: "ផ្លាស់ n - 1 disk ទៅ auxiliary, ផ្លាស់ disk n ធំបំផុតទៅ destination, បន្ទាប់មកផ្លាស់ n - 1 disk ពី auxiliary ទៅ destination។",
      solution: String.raw`#include <iostream>

using namespace std;

int hanoi(int n, char from, char to, char aux) {
    if (n == 0) {
        return 0;
    }
    int moves = hanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    moves++;
    moves += hanoi(n - 1, aux, to, from);
    return moves;
}

int main() {
    int n;
    cin >> n;
    int total = hanoi(n, 'A', 'C', 'B');
    cout << "Total moves: " << total << endl;
    return 0;
}`,
      explanation: `ដើម្បីផ្លាស់ disk n ធំបំផុតទៅ C យើងត្រូវផ្លាស់ disk n - 1 ទៅ B ជាមុន។ បន្ទាប់មកផ្លាស់ disk n ទៅ C ហើយចុងក្រោយផ្លាស់ disk n - 1 ពី B ទៅ C។ ដំណើរការនេះត្រូវធ្វើម្តងទៀតដោយ recursion ហើយចំនួនជំហានសរុបគឺ 2^n - 1។`,
      expectedOutput: "Move disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C\nTotal moves: 3"
    },
    {
      id: "recursion-12",
      topicId: "recursion",
      title: "Recursive Binary Representation",
      difficulty: "challenge",
      type: "code",
      description: `ការបំប្លែងចំនួនទៅជា binary អាចធ្វើបានដោយ recursion ដោយបែងចែកនឹង 2 ម្តងមួយៗ។ អ្នកត្រូវបង្ហាញ bit ពីខ្ទង់សំខាន់បំផុតទៅខ្ទង់តូចបំផុត ដោយមិនប្រើ array។`,
      requirements: [
        "បង្កើត function printBinary ដែលទទួល int n និងបង្ហាញ binary។",
        "កំណត់ base case n == 0 ដោយឈប់។",
        "សម្រាប់ n > 0 ត្រូវហៅ printBinary(n / 2) ជាមុន រួច cout << n % 2។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន n មួយ។",
      output: "តំណាង binary នៃ n។",
      samples: [{ input: "13", output: "1101" }],
      constraints: ["ត្រូវប្រើ recursion។", "n >= 1។"],
      hint: "ការហៅ printBinary(n / 2) មុន cout ធ្វើឱ្យ bit ខ្ពស់បង្ហាញមុន។ បន្ទាប់មកបង្ហាញ n % 2។",
      solution: String.raw`#include <iostream>

using namespace std;

void printBinary(int n) {
    if (n == 0) {
        return;
    }
    printBinary(n / 2);
    cout << n % 2;
}

int main() {
    int n;
    cin >> n;
    printBinary(n);
    cout << endl;
    return 0;
}`,
      explanation: `printBinary(13) ហៅ printBinary(6) ដែលហៅ printBinary(3) បន្តរហូតដល់ 0។ បន្ទាប់មក bit ត្រូវបង្ហាញតាមលំដាប់ត្រឡប់មកវិញគឺ 1 1 0 1 ដែលជា binary របស់ 13។ ការហៅមុន cout ជួយឱ្យ bit សំខាន់បំផុតបង្ហាញមុន។`,
      expectedOutput: "1101"
    },
    {
      id: "recursion-13",
      topicId: "recursion",
      title: "Recursive Combinations",
      difficulty: "challenge",
      type: "code",
      description: `ចំនួនវិធីជ្រើស r វត្ថុពី n វត្ថុ អាចគណនាបានដោយទំនាក់ទំនង Pascal គឺ C(n, r) = C(n-1, r-1) + C(n-1, r)។ អ្នកត្រូវសរសេរ function combinations ដោយប្រើ recursion។`,
      requirements: [
        "បង្កើត function combinations(int n, int r) ដែល return long long។",
        "កំណត់ base case r == 0 ឬ r == n ដោយ return 1។",
        "សម្រាប់ករណីផ្សេង return combinations(n - 1, r - 1) + combinations(n - 1, r)។"
      ],
      input: "ចំនួនគត់ n និង r ដែល 0 <= r <= n <= 25។",
      output: "តម្លៃ C(n, r)។",
      samples: [{ input: "5 2", output: "10" }],
      constraints: ["ត្រូវប្រើ recursion។", "0 <= r <= n <= 25។"],
      hint: "ប្រើ long long សម្រាប់លទ្ធផល ហើយកំណត់ base case ពីរគឺ r == 0 និង r == n។",
      solution: String.raw`#include <iostream>

using namespace std;

long long combinations(int n, int r) {
    if (r == 0 || r == n) {
        return 1;
    }
    return combinations(n - 1, r - 1) + combinations(n - 1, r);
}

int main() {
    int n, r;
    cin >> n >> r;
    cout << combinations(n, r) << endl;
    return 0;
}`,
      explanation: `ការជ្រើស r វត្ថុពី n វត្ថុអាចបែងជាពីរករណី៖ ជ្រើសវត្ថុមួយជាក់លាក់ ឬមិនជ្រើសវា។ ករណីទីមួយគឺ C(n-1, r-1) និងករណីទីពីរគឺ C(n-1, r)។ ផលបូកនៃករណីទាំងពីរផ្តល់ C(n, r) ហើយ base case គឺនៅពេលជ្រើសគ្មាន ឬជ្រើសទាំងអស់។`,
      expectedOutput: "10"
    }
  ]);
})();
