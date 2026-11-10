(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "loops-01",
      topicId: "loops",
      title: "Count from 1 to N",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវបង្ហាញលេខពី 1 ដល់ N នៅលើបន្ទាត់តែមួយ។ លំហាត់នេះជាការអនុវត្ត for loop ដំបូង និងការគ្រប់គ្រងចន្លោះរវាងលេខ។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "បង្ហាញលេខ 1 ដល់ N ដោយបំបែកដោយចន្លោះមួយ។",
        "មិនត្រូវមានចន្លោះលើសនៅចុងបន្ទាត់ទេ។"
      ],
      input: "ចំនួនគត់ N ដែល N >= 1។",
      output: "លេខ 1 ដល់ N នៅបន្ទាត់តែមួយ។",
      samples: [{ input: "5", output: "1 2 3 4 5" }],
      constraints: ["1 <= N <= 1000។", "ប្រើ loop មួយសម្រាប់បង្ហាញលេខ។"],
      hint: "ប្រើ for (int i = 1; i <= n; i++) ហើយបង្ហាញចន្លោះមុនលេខ លុះត្រាតែ i > 1។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        if (i > 1) {
            cout << " ";
        }
        cout << i;
    }
    cout << endl;
    return 0;
}`,
      explanation: `for loop មានផ្នែកបី៖ ចាប់ផ្តើម i = 1, លក្ខខណ្ឌ i <= n និងការបង្កើន i++។ វារត់ម្តងសម្រាប់លេខនីមួយៗ។ យើងបង្ហាញចន្លោះតែពេល i > 1 ដើម្បីកុំឱ្យមានចន្លោះនៅដើមបន្ទាត់។`,
      expectedOutput: "1 2 3 4 5"
    },
    {
      id: "loops-02",
      topicId: "loops",
      title: "Sum of First N Numbers",
      difficulty: "beginner",
      type: "code",
      description: `សិស្សម្នាក់ចង់គណនាផលបូកលេខពី 1 ដល់ N ដោយប្រើ loop។ លំហាត់នេះបង្ហាញពី accumulator ដែលបូកបញ្ចូលតម្លៃរាល់ដងដែល loop រត់។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "ប្រើ loop ដើម្បីបូកលេខ 1 ដល់ N។",
        "បង្ហាញផលបូកតែមួយបន្ទាត់។"
      ],
      input: "ចំនួនគត់ N ដែល N >= 1។",
      output: "ផលបូក 1 + 2 + ... + N។",
      samples: [{ input: "10", output: "55" }],
      constraints: ["1 <= N <= 10000។", "ត្រូវប្រើ variable សម្រាប់ផលបូក។"],
      hint: "កំណត់ int sum = 0; បន្ទាប់មកក្នុង loop ធ្វើ sum += i; ហើយបង្ហាញ sum នៅខាងក្រៅ loop។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    cout << sum << endl;
    return 0;
}`,
      explanation: `sum ចាប់ផ្តើមពី 0 ហើយនៅរាល់ជុំនៃ loop យើងបូក i ចូល។ នៅពេល loop បញ្ចប់ sum មានផលបូកទាំងអស់។ ការកំណត់ sum = 0 មុន loop គឺចាំបាច់ ដើម្បីកុំឱ្យមានតម្លៃចាស់ជាប់។`,
      expectedOutput: "55"
    },
    {
      id: "loops-03",
      topicId: "loops",
      title: "Multiplication Table",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីអប់រំមួយបង្ហាញតារាងគុណរបស់លេខ N ចាប់ពី 1 ដល់ 10។ លំហាត់នេះហាត់ការបង្ហាញលទ្ធផលម្តងក្នុងមួយបន្ទាត់ដោយប្រើ loop។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "បង្ហាញបន្ទាត់ N x i = លទ្ធផល សម្រាប់ i ពី 1 ដល់ 10។",
        "ត្រូវមានចន្លោះជុំវិញសញ្ញា x និង = ដូចឧទាហរណ៍។"
      ],
      input: "ចំនួនគត់ N។",
      output: "តារាងគុណ 10 បន្ទាត់។",
      samples: [{ input: "3", output: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30" }],
      constraints: ["1 <= N <= 100។", "ប្រើ loop មួយពី 1 ដល់ 10។"],
      hint: "for (int i = 1; i <= 10; i++) ហើយ cout << n << \" x \" << i << \" = \" << n * i << endl;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << n * i << endl;
    }
    return 0;
}`,
      explanation: `loop រត់ 10 ដង ដោយ i ជាតួគុណ។ ក្នុងជុំនីមួយៗ យើងបង្ហាញ N, i និងផលគុណ N * i។ ការប្រើ endl ធ្វើឱ្យបន្ទាត់នីមួយៗចុះបន្ទាត់ថ្មី។`,
      expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30"
    },
    {
      id: "loops-04",
      topicId: "loops",
      title: "Factorial Calculator",
      difficulty: "beginner",
      type: "code",
      description: `គណិតវិទ្យាប្រើ factorial ញឹកញាប់ក្នុងការរាប់បន្សំ។ អ្នកត្រូវគណនា N! ដោយគុណលេខ 1 ដល់ N ប្រើ loop និង variable ប្រភេទ long long។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "គណនា factorial នៃ N។",
        "បង្ហាញលទ្ធផលតែមួយបន្ទាត់។"
      ],
      input: "ចំនួនគត់ N ដែល 0 <= N <= 20។",
      output: "តម្លៃ N!។",
      samples: [{ input: "5", output: "120" }],
      constraints: ["ប្រើ long long សម្រាប់លទ្ធផល។", "0! ស្មើ 1។"],
      hint: "កំណត់ long long result = 1; ហើយគុណ result *= i ក្នុង loop ពី 1 ដល់ N។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }

    cout << result << endl;
    return 0;
}`,
      explanation: `factorial គឺផលគុណ 1 * 2 * ... * N។ យើងចាប់ផ្តើម result ជា 1 ព្រោះ 1 ជាតម្លៃអព្យាក្រឹតនៃគុណ។ បើ N = 0 loop មិនរត់ ហើយ result នៅ 1 ដែលត្រឹមត្រូវ។ long long ជួយរក្សាលេខធំដូច 20!។`,
      expectedOutput: "120"
    },
    {
      id: "loops-05",
      topicId: "loops",
      title: "Reverse a Number",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីមួយត្រូវបញ្ច្រាសលំដាប់ខ្ទង់នៃចំនួនគត់។ លំហាត់នេះប្រើ while loop និង operator % និង / ដើម្បីដកខ្ទង់ម្តងមួយៗ។`,
      requirements: [
        "អានចំនួនគត់វិជ្ជមាន N ពី input។",
        "បញ្ច្រាសលំដាប់ខ្ទង់របស់ N។",
        "បង្ហាញលេខដែលបានបញ្ច្រាស។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន N។",
      output: "លេខដែលបញ្ច្រាសខ្ទង់។",
      samples: [{ input: "1234", output: "4321" }],
      constraints: ["N > 0។", "មិនត្រូវបំប្លែងទៅជា string ទេ។"],
      hint: "ក្នុង while (n > 0) យកខ្ទង់ចុងក្រោយដោយ n % 10 បន្ថែមទៅ reversed * 10 ហើយកាត់ខ្ទង់ដោយ n /= 10។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int reversed = 0;
    while (n > 0) {
        int digit = n % 10;
        reversed = reversed * 10 + digit;
        n /= 10;
    }

    cout << reversed << endl;
    return 0;
}`,
      explanation: `n % 10 ផ្តល់ខ្ទង់ចុងក្រោយ។ យើងរុញ reversed ទៅឆ្វេងមួយខ្ទង់ដោយគុណនឹង 10 រួចបូកខ្ទង់ថ្មី។ n /= 10 កាត់ខ្ទង់ចុងក្រោយចេញ។ loop បន្តរហូតគ្មានខ្ទង់នៅសល់។`,
      expectedOutput: "4321"
    },
    {
      id: "loops-06",
      topicId: "loops",
      title: "Count Digits",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រព័ន្ធបញ្ជាក់លេខសម្គាល់ត្រូវដឹងថាលេខមួយមានប៉ុន្មានខ្ទង់។ អ្នកត្រូវរាប់ខ្ទង់ដោយប្រើ loop និងការចែកចំនួនគត់។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "រាប់ចំនួនខ្ទង់របស់ N។",
        "បង្ហាញចំនួនខ្ទង់។"
      ],
      input: "ចំនួនគត់ N ដែល N >= 0។",
      output: "ចំនួនខ្ទង់របស់ N។",
      samples: [{ input: "90210", output: "5" }],
      constraints: ["0 <= N <= 2,000,000,000។", "សម្រាប់ N = 0 ចំនួនខ្ទង់គឺ 1។"],
      hint: "កំណត់ count = 0; ហើយក្នុង while (n > 0) បង្កើន count និងធ្វើ n /= 10។ បើ n ដើមជា 0 កំណត់ count = 1។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int count = 0;
    if (n == 0) {
        count = 1;
    } else {
        while (n > 0) {
            count++;
            n /= 10;
        }
    }

    cout << count << endl;
    return 0;
}`,
      explanation: `រាល់ពេលចែក N នឹង 10 យើងដកខ្ទង់មួយចេញ។ ដូច្នេះចំនួនដងដែល while រត់គឺស្មើនឹងចំនួនខ្ទង់។ ករណី N = 0 ត្រូវដោះស្រាយដោយឡែក ព្រោះ while (0 > 0) មិនរត់ទេ។`,
      expectedOutput: "5"
    },
    {
      id: "loops-07",
      topicId: "loops",
      title: "Quiz: Continue Statement",
      difficulty: "intermediate",
      type: "quiz",
      description: `continue បញ្ឈប់ជុំបច្ចុប្បន្ន ហើយបន្តទៅជុំបន្ទាប់ភ្លាមៗ។ សូមអាន snippet ហើយកំណត់លទ្ធផលដែលបានបង្ហាញ។`,
      requirements: [
        "អាន for loop និងលក្ខខណ្ឌ if ខាងក្នុង។",
        "កំណត់ថាតើលេខណាត្រូវបានរំលង។",
        "ជ្រើសរើស output ត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }
        cout << i;
    }
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: ["12345", "1245", "123", "345"],
      correctIndex: 1,
      quizExplanation: "នៅពេល i ស្មើ 3 ពាក្យ continue ធ្វើឱ្យកម្មវិធីរំលង cout ហើយបន្តទៅ i = 4។ ដូច្នេះលេខ 3 មិនត្រូវបានបង្ហាញ ហើយលទ្ធផលគឺ 1245។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "continue មិនបញ្ចប់ loop ទេ វាគ្រាន់តែរំលងជុំនោះប៉ុណ្ណោះ។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }
        cout << i;
    }
    return 0;
}`,
      explanation: `continue រំលងផ្នែកដែលនៅសល់នៃជុំបច្ចុប្បន្ន ហើយទៅធ្វើ i++ បន្ទាប់មកពិនិត្យលក្ខខណ្ឌបន្ត។ ដូច្នេះពេល i = 3 cout មិនរត់ទេ ប៉ុន្តែ loop នៅតែបន្តដល់ 5។`,
      expectedOutput: "1245"
    },
    {
      id: "loops-08",
      topicId: "loops",
      title: "Sum of Even Numbers",
      difficulty: "advanced",
      type: "code",
      description: `គ្រូគណិតវិទ្យាចង់បង្ហាញផលបូកលេខគូពី 1 ដល់ N។ អ្នកត្រូវប្រើ loop និងលក្ខខណ្ឌដើម្បីជ្រើសតែលេខគូបញ្ចូលទៅក្នុងផលបូក។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "បូកតែលេខគូពី 1 ដល់ N។",
        "បង្ហាញផលបូក។"
      ],
      input: "ចំនួនគត់ N ដែល N >= 1។",
      output: "ផលបូកលេខគូ។",
      samples: [{ input: "10", output: "30" }],
      constraints: ["1 <= N <= 10000។", "ត្រូវប្រើ loop។"],
      hint: "ក្នុង loop ពិនិត្យ if (i % 2 == 0) មុនបូក i ចូល sum។ ឬចាប់ i = 2 ហើយបង្កើន i += 2។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int sum = 0;
    for (int i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }

    cout << sum << endl;
    return 0;
}`,
      explanation: `i % 2 == 0 ពិនិត្យថា i ជាលេខគូ។ បើពិត យើងបូក i ចូល sum។ សម្រាប់ N = 10 លេខគូគឺ 2, 4, 6, 8, 10 ហើយផលបូកគឺ 30។ ការប្រើ i += 2 ក៏អាចធ្វើបាន ហើយលឿនជាងបន្តិច។`,
      expectedOutput: "30"
    },
    {
      id: "loops-09",
      topicId: "loops",
      title: "Prime Number Check",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីសុវត្ថិភាពមួយត្រូវពិនិត្យថាលេខជា prime ឬអត់។ អ្នកត្រូវសាកល្បងចែកដោយលេខពី 2 ដល់ square root ដើម្បីឱ្យការពិនិត្យមានប្រសិទ្ធភាព។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "បើ N ជា prime បង្ហាញ Prime។",
        "បើមិនមែន បង្ហាញ Not prime។"
      ],
      input: "ចំនួនគត់ N ដែល N >= 0។",
      output: "ពាក្យ Prime ឬ Not prime។",
      samples: [{ input: "29", output: "Prime" }],
      constraints: ["0 <= N <= 1,000,000។", "លេខតូចជាង 2 មិនមែនជា prime។"],
      hint: "ចាប់ពី i = 2 រហូត i * i <= n។ បើ n % i == 0 នោះមិនមែន prime។ កុំភ្លេចពិនិត្យ n < 2។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    bool isPrime = true;
    if (n < 2) {
        isPrime = false;
    } else {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        cout << "Prime" << endl;
    } else {
        cout << "Not prime" << endl;
    }
    return 0;
}`,
      explanation: `លេខ prime មានតែចែកដាច់នឹង 1 និងខ្លួនឯង។ បើយើងរកឃើញចែកដាច់នឹងលេខណាមួយពី 2 ដល់ sqrt(N) នោះវាមិន prime។ យើងឈប់ភ្លាមដោយ break ពេលរកឃើញ ដើម្បីសន្សំពេល។`,
      expectedOutput: "Prime"
    },
    {
      id: "loops-10",
      topicId: "loops",
      title: "Armstrong Number",
      difficulty: "advanced",
      type: "code",
      description: `លេខ Armstrong គឺលេខដែលផលបូកគូបនៃខ្ទង់នីមួយៗស្មើនឹងលេខខ្លួនឯង។ ឧទាហរណ៍ 153 ព្រោះ 1^3 + 5^3 + 3^3 = 153។ អ្នកត្រូវពិនិត្យលក្ខណៈនេះដោយ loop។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "គណនាផលបូកគូបនៃខ្ទង់ទាំងអស់។",
        "បើស្មើ N បង្ហាញ Armstrong។",
        "បើមិនស្មើ បង្ហាញ Not Armstrong។"
      ],
      input: "ចំនួនគត់វិជ្ជមាន N។",
      output: "ពាក្យ Armstrong ឬ Not Armstrong។",
      samples: [{ input: "153", output: "Armstrong" }],
      constraints: ["N > 0។", "ត្រូវរក្សាតម្លៃ N ដើមទុកសម្រាប់ប្រៀបធៀប។"],
      hint: "ចម្លង N ទៅ original។ បន្ទាប់មក while (n > 0) យក digit = n % 10 បូក digit * digit * digit ចូល sum ហើយ n /= 10។ ប្រៀបធៀប sum នឹង original។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int original = n;
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit * digit;
        n /= 10;
    }

    if (sum == original) {
        cout << "Armstrong" << endl;
    } else {
        cout << "Not Armstrong" << endl;
    }
    return 0;
}`,
      explanation: `យើងរក្សា original ដើម្បីប្រៀបធៀបនៅចុងក្រោយ ព្រោះ n ត្រូវបានកាត់ខ្ទង់បន្តិចម្តងៗ។ sum បូកគូបនៃខ្ទង់នីមួយៗ។ បើ sum ស្មើ original នោះ N ជាលេខ Armstrong។`,
      expectedOutput: "Armstrong"
    },
    {
      id: "loops-11",
      topicId: "loops",
      title: "FizzBuzz",
      difficulty: "challenge",
      type: "code",
      description: `FizzBuzz ជាលំហាត់បុរាណដែលសាកល្បងការប្រើ loop និងលក្ខខណ្ឌជាច្រើន។ អ្នកត្រូវបង្ហាញលេខពី 1 ដល់ N ជំនួសដោយពាក្យនៅពេលចែកដាច់នឹង 3 ឬ 5។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "បើចែកដាច់នឹង 3 និង 5 បង្ហាញ FizzBuzz។",
        "បើចែកដាច់នឹង 3 បង្ហាញ Fizz។",
        "បើចែកដាច់នឹង 5 បង្ហាញ Buzz។",
        "បើមិនចែកដាច់នឹងទាំងពីរ បង្ហាញលេខខ្លួនឯង។",
        "បង្ហាញមួយបន្ទាត់ក្នុងមួយលេខ។"
      ],
      input: "ចំនួនគត់ N ដែល N >= 1។",
      output: "លំដាប់ FizzBuzz ចំនួន N បន្ទាត់។",
      samples: [{ input: "15", output: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz" }],
      constraints: ["1 <= N <= 10000។", "ត្រូវពិនិត្យករណីចែកដាច់នឹងទាំង 3 និង 5 មុនគេ។"],
      hint: "ក្នុង loop ពិនិត្យ i % 15 == 0 មុន បន្ទាប់មក i % 3 == 0 និង i % 5 == 0។ លំដាប់លក្ខខណ្ឌមានសារៈសំខាន់។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            cout << "FizzBuzz" << endl;
        } else if (i % 3 == 0) {
            cout << "Fizz" << endl;
        } else if (i % 5 == 0) {
            cout << "Buzz" << endl;
        } else {
            cout << i << endl;
        }
    }
    return 0;
}`,
      explanation: `លេខដែលចែកដាច់នឹង 3 និង 5 ក៏ចែកដាច់នឹង 15 ដែរ។ ដូច្នេះត្រូវពិនិត្យ i % 15 == 0 មុន បើមិនដូច្នេះលេខ 15 នឹងត្រូវចាប់ជា Fizz មុន។ បន្ទាប់មកពិនិត្យ 3 និង 5 តាមលំដាប់។`,
      expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
    },
    {
      id: "loops-12",
      topicId: "loops",
      title: "Greatest Common Divisor",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីកាត់បន្ថយប្រភាគត្រូវរក greatest common divisor របស់លេខពីរ។ អ្នកត្រូវប្រើ Euclid algorithm ដែលប្រើ while loop និង operator %។`,
      requirements: [
        "អានចំនួនគត់វិជ្ជមានពីរ a និង b។",
        "គណនា greatest common divisor របស់ពួកវា។",
        "បង្ហាញ GCD។"
      ],
      input: "ចំនួនគត់វិជ្ជមានពីរ។",
      output: "GCD របស់លេខទាំងពីរ។",
      samples: [{ input: "48 18", output: "6" }],
      constraints: ["a និង b ធំជាង 0។", "ត្រូវប្រើ while loop និង %។"],
      hint: "while (b != 0) { int temp = b; b = a % b; a = temp; } នៅចុងបញ្ចប់ GCD គឺ a។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }

    cout << a << endl;
    return 0;
}`,
      explanation: `Euclid algorithm ផ្អែកលើការពិតថា GCD(a, b) ស្មើ GCD(b, a % b)។ យើងធ្វើម្តងទៀតរហូត b ក្លាយជា 0។ នៅពេលនោះ a គឺជា GCD។ ឧទាហរណ៍ GCD(48, 18) = GCD(18, 12) = GCD(12, 6) = GCD(6, 0) = 6។`,
      expectedOutput: "6"
    },
    {
      id: "loops-13",
      topicId: "loops",
      title: "Quiz: Infinite Loop",
      difficulty: "challenge",
      type: "quiz",
      description: `Loop អាចរត់មិនចេះចប់ បើលក្ខខណ្ឌមិនដែលក្លាយជា false។ សូមអាន snippet ហើយកំណត់អ្វីដែលនឹងកើតឡើង។`,
      requirements: [
        "អាន while loop និង variable ដែលគ្រប់គ្រងវា។",
        "ពិនិត្យថាតើ variable ផ្លាស់ប្តូរក្នុង loop ឬអត់។",
        "ជ្រើសរើសចម្លើយត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 3) {
        cout << i;
    }
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះនឹងធ្វើអ្វី?",
      options: ["បង្ហាញ 012 ហើយឈប់", "បង្ហាញ 0 ម្តងហើយឈប់", "រត់មិនចេះចប់ ព្រោះ i មិនកើន", "Compile error ព្រោះខ្វះ i++"],
      correctIndex: 2,
      quizExplanation: "i ចាប់ផ្តើមពី 0 ហើយលក្ខខណ្ឌ i < 3 ពិតជានិច្ច ព្រោះក្នុង loop គ្មានការបង្កើន i។ ដូច្នេះ while នឹងបង្ហាញ 0 ម្តងហើយម្តងទៀតគ្មានទីបញ្ចប់។ កូដនេះ compile បាន ប៉ុន្តែជា infinite loop។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ពិនិត្យថាតើមាន statement ណាមួយផ្លាស់ប្តូរ i នៅក្នុង while body ឬអត់។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 3) {
        cout << i;
        i++;
    }
    return 0;
}`,
      explanation: `while loop ពិនិត្យលក្ខខណ្ឌម្តងមុនចូល body។ បើគ្មាន statement ផ្លាស់ប្តូរ i ទេ លក្ខខណ្ឌនៅតែពិតជារៀងរហូត ហើយ loop មិនបញ្ចប់។ ដើម្បីជួសជុល ត្រូវបន្ថែម i++ ក្នុង body។`,
      expectedOutput: "Infinite loop"
    }
  ]);
})();
