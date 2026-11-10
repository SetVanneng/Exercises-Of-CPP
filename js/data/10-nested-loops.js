(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "nested-loops-01",
      topicId: "nested-loops",
      title: "Rectangle of Stars",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវគូរចតុកោណពីសញ្ញាផ្កាយ។ លំហាត់នេះជាការណែនាំដំបូងអំពី nested loop ដែល loop ខាងក្នុងបង្ហាញជួរឈរ ហើយ loop ខាងក្រៅបង្ហាញជួរដេក។`,
      requirements: [
        "អានចំនួនជួរដេក rows និងចំនួនជួរឈរ cols។",
        "បង្ហាញចតុកោណដែលមាន rows បន្ទាត់ និង cols ផ្កាយក្នុងមួយបន្ទាត់។",
        "ប្រើ nested loop។"
      ],
      input: "ចំនួនគត់ពីរ rows និង cols។",
      output: "ចតុកោណផ្កាយ។",
      samples: [{ input: "3 5", output: "*****\n*****\n*****" }],
      constraints: ["1 <= rows, cols <= 50។", "ត្រូវប្រើ loop ពីរជាន់។"],
      hint: "loop ខាងក្រៅ for (int i = 0; i < rows; i++) ហើយខាងក្នុង for (int j = 0; j < cols; j++) cout << \"*\"; បន្ទាប់មក endl នៅចុង loop ខាងក្រៅ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int rows, cols;
    cin >> rows >> cols;

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `loop ខាងក្រៅគ្រប់គ្រងចំនួនបន្ទាត់។ រាល់ជុំ វារត់ loop ខាងក្នុងដើម្បីបង្ហាញ cols ផ្កាយ។ បន្ទាប់មក endl បញ្ចប់បន្ទាត់។ ដូច្នេះចំនួនផ្កាយសរុបគឺ rows * cols។`,
      expectedOutput: "*****\n*****\n*****"
    },
    {
      id: "nested-loops-02",
      topicId: "nested-loops",
      title: "Right Triangle",
      difficulty: "beginner",
      type: "code",
      description: `ក្លឹបសិស្សចង់គូរត្រីកោណកែងដោយផ្កាយ។ បន្ទាត់ទីមួយមានផ្កាយមួយ បន្ទាត់ទីពីរមានពីរ ហើយបន្តរហូតដល់បន្ទាត់ទី N។ លំហាត់នេះប្រើ loop ខាងក្នុងដែលពឹងផ្អែកលើ i។`,
      requirements: [
        "អានចំនួនជួរ N ពី input។",
        "បន្ទាត់ទី i ត្រូវមានផ្កាយ i តួ។",
        "បង្ហាញត្រីកោណកែងឆ្វេង។"
      ],
      input: "ចំនួនជួរ N។",
      output: "ត្រីកោណផ្កាយ N បន្ទាត់។",
      samples: [{ input: "4", output: "*\n**\n***\n****" }],
      constraints: ["1 <= N <= 50។", "loop ខាងក្នុងត្រូវរត់តាម i។"],
      hint: "for (int i = 1; i <= n; i++) { for (int j = 1; j <= i; j++) cout << \"*\"; cout << endl; }",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `loop ខាងក្រៅកំណត់បន្ទាត់ i។ loop ខាងក្នុងរត់ j ពី 1 ដល់ i ដូច្នេះបន្ទាត់ទី i មានផ្កាយចំនួន i។ នេះបង្កើតរូបរាងត្រីកោណកែងដែលធំឡើងបន្តិចម្តងៗ។`,
      expectedOutput: "*\n**\n***\n****"
    },
    {
      id: "nested-loops-03",
      topicId: "nested-loops",
      title: "Number Triangle",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីអប់រំមួយបង្ហាញលេខជារាងត្រីកោណ ដែលបន្ទាត់ទី i មានលេខ 1 ដល់ i។ លំហាត់នេះហាត់ nested loop ជាមួយចន្លោះរវាងលេខ។`,
      requirements: [
        "អានចំនួនជួរ N ពី input។",
        "បន្ទាត់ទី i ត្រូវបង្ហាញលេខ 1 ដល់ i បំបែកដោយចន្លោះ។",
        "មិនត្រូវមានចន្លោះលើសនៅចុងបន្ទាត់។"
      ],
      input: "ចំនួនជួរ N។",
      output: "ត្រីកោណលេខ N បន្ទាត់។",
      samples: [{ input: "4", output: "1\n1 2\n1 2 3\n1 2 3 4" }],
      constraints: ["1 <= N <= 50។", "ប្រើ nested loop និងលក្ខខណ្ឌសម្រាប់ចន្លោះ។"],
      hint: "ក្នុង loop ខាងក្នុង បង្ហាញចន្លោះមុនលេខ លុះត្រាតែ j > 1។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (j > 1) {
                cout << " ";
            }
            cout << j;
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `loop ខាងក្នុងបង្ហាញ j ចាប់ពី 1 ដល់ i។ យើងដាក់ចន្លោះមុនលេខលុះត្រាតែវាមិនមែនជាលេខដំបូង ដើម្បីកុំឱ្យមានចន្លោះនៅដើមបន្ទាត់។ បន្ទាប់មក endl បញ្ចប់បន្ទាត់នីមួយៗ។`,
      expectedOutput: "1\n1 2\n1 2 3\n1 2 3 4"
    },
    {
      id: "nested-loops-04",
      topicId: "nested-loops",
      title: "Inverted Triangle",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវគូរត្រីកោណចុះក្រោម ដែលបន្ទាត់ទីមួយមានផ្កាយច្រើនបំផុត ហើយបន្តថយចុះ។ លំហាត់នេះបង្ហាញពីការបញ្ច្រាសទិសដៅនៃ loop។`,
      requirements: [
        "អានចំនួនជួរ N ពី input។",
        "បន្ទាត់ទី 1 មានផ្កាយ N តួ។",
        "បន្ទាត់បន្ទាប់ៗមានផ្កាយថយចុះមួយតួរ។",
        "បន្ទាត់ចុងក្រោយមានផ្កាយមួយតួ។"
      ],
      input: "ចំនួនជួរ N។",
      output: "ត្រីកោណផ្កាយចុះក្រោម។",
      samples: [{ input: "3", output: "***\n**\n*" }],
      constraints: ["1 <= N <= 50។", "ត្រូវប្រើ nested loop។"],
      hint: "loop ខាងក្នុងរត់ j ពី i ដល់ N ឬពី 1 ដល់ N - i + 1។ ជ្រើសវិធីណាមួយដែលអ្នកយល់ងាយ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i + 1; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `នៅជុំ i = 1 loop ខាងក្នុងរត់ n ដង។ នៅជុំ i = 2 រត់ n - 1 ដង ហើយបន្តថយចុះ។ ដូច្នេះចំនួនផ្កាយក្នុងបន្ទាត់នីមួយៗថយចុះមួយ ដែលបង្កើតរាងត្រីកោណចុះក្រោម។`,
      expectedOutput: "***\n**\n*"
    },
    {
      id: "nested-loops-05",
      topicId: "nested-loops",
      title: "Multiplication Table Grid",
      difficulty: "intermediate",
      type: "code",
      description: `គ្រូគណិតវិទ្យាចង់បង្ហាញតារាងគុណ N x N ជាតារាងតម្រង់ជួរ។ អ្នកត្រូវប្រើ nested loop និង setw ដើម្បីរៀបចំទទឹងជួរឈរឱ្យស្មើគ្នា។`,
      requirements: [
        "អានចំនួនគត់ N ពី input។",
        "បង្ហាញតារាង N ជួរ និង N ជួរឈរ។",
        "តម្លៃក្នុងជួរឈរនីមួយៗគឺផលគុណ row * col។",
        "ប្រើ setw(4) សម្រាប់តម្លៃនីមួយៗ។"
      ],
      input: "ចំនួនគត់ N។",
      output: "តារាងគុណ N x N។",
      samples: [{ input: "3", output: "   1   2   3\n   2   4   6\n   3   6   9" }],
      constraints: ["1 <= N <= 20។", "ត្រូវប្រើ iomanip និង setw(4)។"],
      hint: "ប្រើ #include <iomanip> ហើយក្នុង loop ខាងក្នុង cout << setw(4) << i * j; បន្ទាប់មក endl នៅចុងបន្ទាត់។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            cout << setw(4) << i * j;
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `setw(4) កំណត់ទទឹងអប្បបរមា 4 តួអក្សរសម្រាប់តម្លៃបន្ទាប់ ហើយតម្រង់ស្តាំដោយស្វ័យប្រវត្តិ។ ដូច្នេះលេខតូចនិងធំមានទទឹងស្មើគ្នា ហើយតារាងមើលទៅត្រង់ជួរ។ loop ខាងក្រៅគឺជួរដេក ហើយខាងក្នុងគឺជួរឈរ។`,
      expectedOutput: "   1   2   3\n   2   4   6\n   3   6   9"
    },
    {
      id: "nested-loops-06",
      topicId: "nested-loops",
      title: "Star Pyramid",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីត្រូវគូរពីរ៉ាមីតផ្កាយដែលមានរាងស៊ីមេទ្រី។ បន្ទាត់នីមួយៗត្រូវការចន្លោះនៅខាងឆ្វេង និងផ្កាយចំនួនសេសដើម្បីឱ្យកំពូលស្ថិតនៅកណ្តាល។`,
      requirements: [
        "អានចំនួនជួរ N ពី input។",
        "បន្ទាត់ទី i មានចន្លោះ N - i ហើយមានផ្កាយ 2 * i - 1។",
        "បង្ហាញពីរ៉ាមីត N បន្ទាត់។"
      ],
      input: "ចំនួនជួរ N។",
      output: "ពីរ៉ាមីតផ្កាយ។",
      samples: [{ input: "4", output: "   *\n  ***\n *****\n*******" }],
      constraints: ["1 <= N <= 30។", "ត្រូវប្រើ loop ពីរដាច់ដោយឡែកសម្រាប់ចន្លោះ និងផ្កាយ។"],
      hint: "ក្នុងបន្ទាត់ទី i បង្ហាញចន្លោះ N - i ដង បន្ទាប់មកផ្កាយ 2 * i - 1 ដង។ បញ្ចប់ដោយ endl។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `ដើម្បីឱ្យកំពូលនៅកណ្តាល បន្ទាត់ខាងលើត្រូវមានចន្លោះច្រើន ហើយបន្តថយចុះមួយនៅបន្ទាត់នីមួយៗ។ ចំនួនផ្កាយ 2 * i - 1 បង្កើតលំដាប់ 1, 3, 5, 7 ដែលជាចំនួនសេស ដើម្បីរក្សារាងស៊ីមេទ្រី។`,
      expectedOutput: "   *\n  ***\n *****\n*******"
    },
    {
      id: "nested-loops-07",
      topicId: "nested-loops",
      title: "Quiz: Nested Loop Iterations",
      difficulty: "intermediate",
      type: "quiz",
      description: `nested loop ធ្វើឱ្យ loop ខាងក្នុងរត់ម្តងទៀតរាល់ជុំនៃ loop ខាងក្រៅ។ សូមគណនាចំនួនដងសរុបដែល statement ខាងក្នុងត្រូវបានប្រតិបត្តិ។`,
      requirements: [
        "អានចំនួនជុំនៃ loop ខាងក្រៅ និងខាងក្នុង។",
        "គណនាចំនួនដងសរុបនៃ count++។",
        "ជ្រើសរើសចម្លើយត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int count = 0;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 4; j++) {
            count++;
        }
    }
    cout << count;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញលេខប៉ុន្មាន?",
      options: ["12", "7", "3", "4"],
      correctIndex: 0,
      quizExplanation: "loop ខាងក្រៅរត់ 3 ដង។ រាល់ជុំ loop ខាងក្នុងរត់ 4 ដង ហើយ count++ កើនមួយដងក្នុងជុំនីមួយៗ។ ដូច្នេះចំនួនសរុបគឺ 3 * 4 = 12។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "គុណចំនួនជុំនៃ loop ខាងក្រៅ នឹងចំនួនជុំនៃ loop ខាងក្នុង។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int count = 0;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 4; j++) {
            count++;
        }
    }
    cout << count;
    return 0;
}`,
      explanation: `សម្រាប់ nested loop ចំនួនប្រតិបត្តិការសរុបគឺផលគុណនៃចំនួនជុំ។ loop ខាងក្រៅ 3 ជុំ និងខាងក្នុង 4 ជុំ ដូច្នេះ count++ រត់ 3 * 4 = 12 ដង។`,
      expectedOutput: "12"
    },
    {
      id: "nested-loops-08",
      topicId: "nested-loops",
      title: "Floyd's Triangle",
      difficulty: "advanced",
      type: "code",
      description: `Floyd's Triangle បង្ហាញលេខជាប់ៗគ្នាជារាងត្រីកោណ ដែលចំនួនលេខកើនឡើងមួយនៅបន្ទាត់នីមួយៗ។ អ្នកត្រូវប្រើ counter ដាច់ដោយឡែកពីអថេរ loop។`,
      requirements: [
        "អានចំនួនជួរ N ពី input។",
        "បន្ទាត់ទី i មានលេខ i តួ។",
        "លេខត្រូវបន្តជាប់គ្នាពី 1 រហូតដល់ចុងក្រោយ។",
        "បំបែកលេខដោយចន្លោះ និងគ្មានចន្លោះលើសចុងបន្ទាត់។"
      ],
      input: "ចំនួនជួរ N។",
      output: "Floyd's Triangle N បន្ទាត់។",
      samples: [{ input: "4", output: "1\n2 3\n4 5 6\n7 8 9 10" }],
      constraints: ["1 <= N <= 50។", "ត្រូវប្រើ counter ដែលកើននៅរាល់លេខដែលបង្ហាញ។"],
      hint: "កំណត់ int value = 1; ហើយក្នុង loop ខាងក្នុង cout << value; value++; បន្ថែមចន្លោះតាមលក្ខខណ្ឌដូចលំហាត់ Number Triangle។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int value = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (j > 1) {
                cout << " ";
            }
            cout << value;
            value++;
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `value ជា counter ឯករាជ្យដែលកើននៅរាល់លេខដែលបង្ហាញ។ វាមិនកំណត់ឡើងវិញនៅបន្ទាត់ថ្មីទេ ដូច្នេះលេខបន្តជាប់គ្នាពីបន្ទាត់មួយទៅបន្ទាត់មួយ។ loop ខាងក្នុងកំណត់ចំនួនលេខក្នុងបន្ទាត់ទី i គឺ i តួ។`,
      expectedOutput: "1\n2 3\n4 5 6\n7 8 9 10"
    },
    {
      id: "nested-loops-09",
      topicId: "nested-loops",
      title: "Hollow Square",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីក្រាហ្វិកត្រូវគូរការ៉េ hollow ដែលមានតែស៊ុមខាងក្រៅ។ អ្នកត្រូវប្រើ nested loop និងលក្ខខណ្ឌដើម្បីកំណត់ថាតើទីតាំងណាជាស៊ុម និងណាជាចន្លោះ។`,
      requirements: [
        "អានទំហំ N ពី input។",
        "បន្ទាត់ទីមួយ និងចុងក្រោយត្រូវមានផ្កាយ N តួ។",
        "បន្ទាត់កណ្តាលត្រូវមានផ្កាយនៅចុងទាំងពីរ និងចន្លោះនៅខាងក្នុង។"
      ],
      input: "ទំហំ N ដែល N >= 2។",
      output: "ការ៉េ hollow N x N។",
      samples: [{ input: "5", output: "*****\n*   *\n*   *\n*   *\n*****" }],
      constraints: ["2 <= N <= 50។", "ប្រើលក្ខខណ្ឌ i == 0, i == n - 1, j == 0 ឬ j == n - 1។"],
      hint: "ក្នុង loop ពីរជាន់ បើនៅជួរដេកដំបូង ឬចុងក្រោយ ឬជួរឈរដំបូង ឬចុងក្រោយ បង្ហាញ * បើមិនដូច្នេះបង្ហាញចន្លោះ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `ទីតាំងដែលមាន i == 0, i == n - 1, j == 0 ឬ j == n - 1 គឺជាស៊ុមខាងក្រៅ ដូច្នេះបង្ហាញផ្កាយ។ ទីតាំងផ្សេងទៀតស្ថិតនៅខាងក្នុង ដូច្នេះបង្ហាញចន្លោះ។ លក្ខខណ្ឌនេះធ្វើឱ្យការ៉េមើលទៅ hollow។`,
      expectedOutput: "*****\n*   *\n*   *\n*   *\n*****"
    },
    {
      id: "nested-loops-10",
      topicId: "nested-loops",
      title: "Pascal's Triangle",
      difficulty: "advanced",
      type: "code",
      description: `Pascal's Triangle បង្ហាញមេគុណ binomial ជារាងត្រីកោណ។ អ្នកអាចបង្កើតវាបានដោយមិនប្រើ array ដោយគណនាតម្លៃបន្តបន្ទាប់ពីតម្លៃមុនក្នុងបន្ទាត់តែមួយ។`,
      requirements: [
        "អានចំនួនជួរ N ពី input។",
        "បង្ហាញបន្ទាត់ទី 0 ដល់ N - 1 នៃ Pascal's Triangle។",
        "បន្ទាត់ទី i មានលេខ i + 1 តួ។",
        "បំបែកលេខដោយចន្លោះ។"
      ],
      input: "ចំនួនជួរ N។",
      output: "Pascal's Triangle N បន្ទាត់។",
      samples: [{ input: "5", output: "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1" }],
      constraints: ["1 <= N <= 20។", "ត្រូវប្រើ integer arithmetic និង nested loop។"],
      hint: "សម្រាប់បន្ទាត់ i ចាប់ value = 1។ សម្រាប់ j ពី 1 ដល់ i គណនា value = value * (i - j + 1) / j។ បង្ហាញ value រាល់ជុំ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        int value = 1;
        for (int j = 0; j <= i; j++) {
            if (j > 0) {
                value = value * (i - j + 1) / j;
                cout << " ";
            }
            cout << value;
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `នៅបន្ទាត់ i តម្លៃដំបូងគឺ 1។ តម្លៃបន្ទាប់គណនាដោយរូបមន្ត value = value * (i - j + 1) / j ដែលជាការគណនា binomial coefficient បន្តបន្ទាប់។ ការប្រើ integer arithmetic ត្រឹមត្រូវព្រោះផលចែកចេញជាចំនួនគត់ជានិច្ចនៅជំហាននេះ។`,
      expectedOutput: "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1"
    },
    {
      id: "nested-loops-11",
      topicId: "nested-loops",
      title: "Diamond Pattern",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីត្រូវគូររូបពេជ្រពីផ្កាយ ដែលមានពាក់កណ្តាលខាងលើធំឡើង និងពាក់កណ្តាលខាងក្រោមតូចចុះ។ លំហាត់នេះសាកល្បងការគូរពីរដំណាក់កាលដោយប្រើ nested loop។`,
      requirements: [
        "អានចំនួន N ជាកម្ពស់ពាក់កណ្តាលរួមទាំងជួរកណ្តាល។",
        "បង្ហាញពាក់កណ្តាលខាងលើពី i = 1 ដល់ N។",
        "បង្ហាញពាក់កណ្តាលខាងក្រោមពី i = N - 1 ចុះដល់ 1។",
        "ចន្លោះខាងឆ្វេងគឺ N - i ហើយផ្កាយគឺ 2 * i - 1។"
      ],
      input: "ចំនួនគត់ N។",
      output: "រូបពេជ្រផ្កាយ។",
      samples: [{ input: "3", output: "  *\n ***\n*****\n ***\n  *" }],
      constraints: ["1 <= N <= 30។", "ត្រូវប្រើ loop ពីរដំណាក់កាលសម្រាប់ផ្នែកខាងលើ និងខាងក្រោម។"],
      hint: "ប្រើ loop i = 1 ដល់ n សម្រាប់ផ្នែកខាងលើ ហើយ loop i = n - 1 ចុះដល់ 1 សម្រាប់ផ្នែកខាងក្រោម។ ក្នុងជុំនីមួយៗបង្ហាញចន្លោះ និងផ្កាយដូចពីរ៉ាមីត។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++) {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `ផ្នែកខាងលើប្រើ loop កើនពី 1 ដល់ N ដើម្បីបង្កើតរាងពីរ៉ាមីត។ ជួរកណ្តាលគឺជួរធំបំផុត។ បន្ទាប់មក loop ថយពី N - 1 ដល់ 1 បង្កើតផ្នែកខាងក្រោមដែលឆ្លុះនឹងផ្នែកខាងលើ។ ការប្រើ loop ដាច់ដោយឡែកធ្វើឱ្យកូដអានងាយ។`,
      expectedOutput: "  *\n ***\n*****\n ***\n  *"
    },
    {
      id: "nested-loops-12",
      topicId: "nested-loops",
      title: "Checkerboard Pattern",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីហ្គេមត្រូវបង្ហាញក្តារអុកខ្លីៗជា checkerboard។ អ្នកត្រូវប្រើ nested loop និងលក្ខខណ្ឌផលបូក index ដើម្បីប្តូរតួអក្សរឆ្លាស់គ្នា។`,
      requirements: [
        "អានទំហំ N ពី input។",
        "បង្ហាញក្តារ N x N។",
        "បើផលបូក row + col ជាលេខគូ បង្ហាញ #។",
        "បើផលបូកជាលេខសេស បង្ហាញ .។",
        "ចាប់ផ្តើមដោយ # នៅជ្រុងខាងឆ្វេងខាងលើ។"
      ],
      input: "ទំហំ N។",
      output: "Checkerboard N x N។",
      samples: [{ input: "4", output: "#.#.\n.#.#\n#.#.\n.#.#" }],
      constraints: ["1 <= N <= 50។", "ត្រូវប្រើ nested loop និងលក្ខខណ្ឌ (i + j) % 2។"],
      hint: "ក្នុង loop ពីរជាន់ បើ (i + j) % 2 == 0 បង្ហាញ # បើមិនដូច្នេះបង្ហាញ .។ បញ្ចប់បន្ទាត់ដោយ endl។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if ((i + j) % 2 == 0) {
                cout << "#";
            } else {
                cout << ".";
            }
        }
        cout << endl;
    }
    return 0;
}`,
      explanation: `នៅជួរដេកគូ ជួរឈរគូមានផលបូកគូ ដូច្នេះបង្ហាញ #។ នៅពេលផ្លាស់ទីមួយជួរឈរ ផលបូកក្លាយជាសេស ដូច្នេះបង្ហាញ .។ លំនាំនេះបន្តឆ្លាស់គ្នាទាំងជួរដេក និងជួរឈរ ដែលបង្កើត checkerboard។`,
      expectedOutput: "#.#.\n.#.#\n#.#.\n.#.#"
    },
    {
      id: "nested-loops-13",
      topicId: "nested-loops",
      title: "Quiz: Break in Nested Loops",
      difficulty: "challenge",
      type: "quiz",
      description: `break ក្នុង nested loop បញ្ឈប់តែ loop ជាន់ដែលវាស្ថិតនៅប៉ុណ្ណោះ។ សូមអាន snippet ហើយកំណត់តម្លៃ count នៅចុងក្រោយ។`,
      requirements: [
        "អានទីតាំងនៃ break ក្នុង loop ខាងក្នុង។",
        "គណនាចំនួនដងដែល count++ ត្រូវបានប្រតិបត្តិ។",
        "ជ្រើសរើសចម្លើយត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int count = 0;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 4; j++) {
            if (j == 2) {
                break;
            }
            count++;
        }
    }
    cout << count;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញលេខប៉ុន្មាន?",
      options: ["3", "12", "6", "0"],
      correctIndex: 0,
      quizExplanation: "នៅ loop ខាងក្នុង j = 1 count++ រត់ បន្ទាប់មក j = 2 break ចេញពី loop ខាងក្នុង។ break មិនបញ្ឈប់ loop ខាងក្រៅទេ ដូច្នេះ loop ខាងក្រៅបន្តទៅជុំបន្ទាប់។ count កើន 1 ដងក្នុងមួយជុំនៃ i ដូច្នេះសរុបគឺ 3។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "break ប៉ះពាល់តែ loop ជាន់ដែលនៅជិតបំផុតដែលវាស្ថិតនៅ។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int count = 0;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 4; j++) {
            if (j == 2) {
                break;
            }
            count++;
        }
    }
    cout << count;
    return 0;
}`,
      explanation: `break បញ្ឈប់ loop ខាងក្នុងភ្លាមៗ ប៉ុន្តែ loop ខាងក្រៅនៅតែបន្ត។ ដូច្នេះក្នុងជុំ i នីមួយៗ count++ រត់តែម្តង (ពេល j = 1) មុនពេល break នៅ j = 2។ i មាន 3 ជុំ ដូច្នេះ count គឺ 3។`,
      expectedOutput: "3"
    }
  ]);
})();
