(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "arrays-01",
      topicId: "arrays",
      title: "Sum of Array",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវបូកតម្លៃទាំងអស់ក្នុង array។ លំហាត់នេះជាការណែនាំអំពីការប្រកាស array, ការអានតម្លៃចូល និងការប្រើ loop ដើម្បីដំណើរការ elements។`,
      requirements: [
        "អានចំនួន elements N ពី input។",
        "អានតម្លៃ N តួចូលក្នុង array។",
        "គណនាផលបូកនៃ elements ទាំងអស់។",
        "បង្ហាញផលបូក។"
      ],
      input: "ចំនួន N បន្ទាប់មកតម្លៃ N តួ។",
      output: "ផលបូកនៃ elements។",
      samples: [{ input: "5\n1 2 3 4 5", output: "15" }],
      constraints: ["1 <= N <= 100។", "តម្លៃជាចំនួនគត់។"],
      hint: "ប្រកាស int arr[100]; ហើយអាន arr[i] ក្នុង loop។ បន្ទាប់មកបូក arr[i] ចូល sum ក្នុង loop មួយទៀត ឬ loop តែមួយ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }

    cout << sum << endl;
    return 0;
}`,
      explanation: `array រក្សាទុកតម្លៃច្រើនក្រោមឈ្មោះតែមួយ ហើយចូលប្រើដោយ index ចាប់ពី 0។ យើងអាន arr[0] ដល់ arr[n - 1] បន្ទាប់មកបូកចូល sum។ ការចាប់ index ពី 0 គឺជាច្បាប់សំខាន់ក្នុង C++។`,
      expectedOutput: "15"
    },
    {
      id: "arrays-02",
      topicId: "arrays",
      title: "Average of Array",
      difficulty: "beginner",
      type: "code",
      description: `គ្រូម្នាក់ចង់ដឹងពិន្ទុមធ្យមភាគរបស់សិស្សទាំងអស់ក្នុងថ្នាក់។ អ្នកត្រូវអានពិន្ទុចូល array ហើយគណនាមធ្យមភាគជាចំនួនទសភាគពីរខ្ទង់។`,
      requirements: [
        "អានចំនួនសិស្ស N និងពិន្ទុ N តួ។",
        "គណនាផលបូក និងមធ្យមភាគ។",
        "បង្ហាញមធ្យមភាគដោយលេខទសភាគពីរខ្ទង់។"
      ],
      input: "ចំនួន N បន្ទាប់មកពិន្ទុ N តួ។",
      output: "មធ្យមភាគដែលមានទសភាគពីរខ្ទង់។",
      samples: [{ input: "4\n10 20 30 40", output: "25.00" }],
      constraints: ["1 <= N <= 100។", "ត្រូវប្រើ iomanip សម្រាប់ fixed និង setprecision(2)។"],
      hint: "បូកតម្លៃទាំងអស់ជា double ឬ int បន្ទាប់មកចែកនឹង N ដោយប្រើ 1.0 ដើម្បីឱ្យបានចំនួនទសភាគ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    int sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }

    double average = static_cast<double>(sum) / n;
    cout << fixed << setprecision(2) << average << endl;
    return 0;
}`,
      explanation: `បើចែក int នឹង int នោះ C++ នឹងបង្គត់ចេញជាចំនួនគត់។ ដូច្នេះយើង cast sum ទៅ double មុនចែក។ fixed និង setprecision(2) បង្ហាញលេខទសភាគពីរខ្ទង់ជានិច្ច ដូចជា 25.00។`,
      expectedOutput: "25.00"
    },
    {
      id: "arrays-03",
      topicId: "arrays",
      title: "Largest Element",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវរកតម្លៃធំបំផុតក្នុង array។ អ្នកត្រូវចាប់ផ្តើមពី element ដំបូង ហើយប្រៀបធៀបជាមួយ elements ដទៃដើម្បីរកតម្លៃអតិបរមា។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "រកតម្លៃធំបំផុតក្នុង array។",
        "បង្ហាញតម្លៃធំបំផុត។"
      ],
      input: "ចំនួន N បន្ទាប់មកតម្លៃ N តួ។",
      output: "តម្លៃធំបំផុត។",
      samples: [{ input: "6\n3 9 2 14 7 5", output: "14" }],
      constraints: ["1 <= N <= 100។", "តម្លៃអាចជាចំនួនគត់អវិជ្ជមាន។"],
      hint: "កំណត់ largest = arr[0]; បន្ទាប់មក loop ពី i = 1 ហើយបើ arr[i] > largest ធ្វើ largest = arr[i]។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int largest = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    cout << largest << endl;
    return 0;
}`,
      explanation: `យើងចាប់ផ្តើម largest ដោយ element ដំបូង ព្រោះវាជាតម្លៃដែលយើងដឹងសុខ។ បន្ទាប់មកពិនិត្យ elements ដែលនៅសល់។ បើរកឃើញតម្លៃធំជាង largest យើងធ្វើបច្ចុប្បន្នភាព។ នៅចុងបញ្ចប់ largest គឺជាតម្លៃធំបំផុត។`,
      expectedOutput: "14"
    },
    {
      id: "arrays-04",
      topicId: "arrays",
      title: "Smallest Element",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីស្តុកទំនិញត្រូវរកបរិមាណតិចបំផុតក្នុង array។ អ្នកត្រូវអនុវត្តដំណើរការស្វែងរកដែលស្រដៀងនឹងការរកតម្លៃធំបំផុត ប៉ុន្តែប្រៀបធៀបផ្ទុយគ្នា។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "រកតម្លៃតូចបំផុតក្នុង array។",
        "បង្ហាញតម្លៃតូចបំផុត។"
      ],
      input: "ចំនួន N បន្ទាប់មកតម្លៃ N តួ។",
      output: "តម្លៃតូចបំផុត។",
      samples: [{ input: "5\n8 3 11 4 7", output: "3" }],
      constraints: ["1 <= N <= 100។", "តម្លៃជាចំនួនគត់។"],
      hint: "កំណត់ smallest = arr[0]; ហើយបើ arr[i] < smallest ធ្វើ smallest = arr[i] ក្នុង loop។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int smallest = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    cout << smallest << endl;
    return 0;
}`,
      explanation: `ដំណើរការនេះស្វែងរកតម្លៃតូចបំផុតដោយចាប់ផ្តើមពី element ដំបូង។ រាល់ element ថ្មី បើតូចជាង smallest យើងយកវាជាតម្លៃតូចបំផុតថ្មី។ ការចាប់ផ្តើមពី arr[0] ជៀសវាងបញ្ហាជាមួយលេខអវិជ្ជមាន។`,
      expectedOutput: "3"
    },
    {
      id: "arrays-05",
      topicId: "arrays",
      title: "Reverse Array",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីមួយត្រូវបង្ហាញ elements ក្នុង array តាមលំដាប់បញ្ច្រាស។ លំហាត់នេះហាត់ការចូលប្រើ array ដោយ index ពីចុងទៅដើម។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "បង្ហាញ elements ពីចុងក្រោយទៅដំបូង។",
        "បំបែកតម្លៃដោយចន្លោះ និងគ្មានចន្លោះលើសចុងបន្ទាត់។"
      ],
      input: "ចំនួន N បន្ទាប់មកតម្លៃ N តួ។",
      output: "Array ដែលបានបញ្ច្រាស។",
      samples: [{ input: "5\n1 2 3 4 5", output: "5 4 3 2 1" }],
      constraints: ["1 <= N <= 100។", "ត្រូវ loop ពី n - 1 ចុះដល់ 0។"],
      hint: "ប្រើ for (int i = n - 1; i >= 0; i--) ហើយបង្ហាញ arr[i] ដោយដាក់ចន្លោះមុនលេខលុះត្រាតែវាមិនមែនជាលេខដំបូង។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    for (int i = n - 1; i >= 0; i--) {
        if (i < n - 1) {
            cout << " ";
        }
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
      explanation: `index ចុងក្រោយគឺ n - 1 មិនមែន n ទេ ព្រោះ array ចាប់ពី 0។ យើងចាប់ i = n - 1 ហើយថយ i-- រហូតដល់ 0។ លក្ខខណ្ឌសម្រាប់ចន្លោះធានាថាមិនមានចន្លោះលើសនៅចុងបន្ទាត់។`,
      expectedOutput: "5 4 3 2 1"
    },
    {
      id: "arrays-06",
      topicId: "arrays",
      title: "Count Occurrences",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រព័ន្ធរាប់សំឡេងត្រូវរាប់ថាតើតម្លៃមួយបានបង្ហាញប៉ុន្មានដងក្នុង array។ អ្នកត្រូវអាន target បន្ទាប់ពី array ហើយ loop រាប់រាល់ការត្រូវគ្នា។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "អាន target ដែលត្រូវរាប់។",
        "រាប់ចំនួនដងដែល target បង្ហាញក្នុង array។",
        "បង្ហាញចំនួនដង។"
      ],
      input: "ចំនួន N, តម្លៃ N តួ និង target។",
      output: "ចំនួនដងដែល target បង្ហាញ។",
      samples: [{ input: "7\n1 2 1 3 1 4 1\n1", output: "4" }],
      constraints: ["1 <= N <= 100។", "បើ target មិនមាន បង្ហាញ 0។"],
      hint: "កំណត់ count = 0; ហើយក្នុង loop បើ arr[i] == target បង្កើន count។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int target;
    cin >> target;

    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            count++;
        }
    }

    cout << count << endl;
    return 0;
}`,
      explanation: `ការរាប់ occurrence គឺជាការប្រៀបធៀប element នីមួយៗជាមួយ target។ រាល់ពេលស្មើគ្នា count កើនមួយ។ បើ target មិនមានក្នុង array នោះ count នៅ 0 ដែលជាលទ្ធផលត្រឹមត្រូវ។`,
      expectedOutput: "4"
    },
    {
      id: "arrays-07",
      topicId: "arrays",
      title: "Quiz: Array Indexing",
      difficulty: "intermediate",
      type: "quiz",
      description: `index ក្នុង C++ array ចាប់ផ្តើមពី 0។ សូមអាន snippet ហើយកំណត់តម្លៃដែលត្រូវបានបង្ហាញនៅពេលចូលប្រើ index ផ្សេងៗ។`,
      requirements: [
        "អាន array និង index ដែលត្រូវបានប្រើ។",
        "ចងចាំថា index ដំបូងគឺ 0។",
        "ជ្រើសរើស output ត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    cout << arr[2] << " " << arr[4];
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: ["30 50", "20 40", "30 40", "10 50"],
      correctIndex: 0,
      quizExplanation: "index 0 គឺ 10, index 1 គឺ 20, index 2 គឺ 30, index 3 គឺ 40 និង index 4 គឺ 50។ ដូច្នេះ arr[2] គឺ 30 និង arr[4] គឺ 50។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "រាប់ index ចាប់ពី 0 មិនមែន 1។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    cout << arr[2] << " " << arr[4];
    return 0;
}`,
      explanation: `array ក្នុង C++ ចាប់ index ពី 0។ ដូច្នេះ arr[0] = 10, arr[1] = 20, arr[2] = 30, arr[3] = 40 និង arr[4] = 50។ ការភ្ញាក់ផ្អើលញឹកញាប់គឺការគិតថា index ចាប់ពី 1 ដែលនាំឱ្យអានខុសមួយកន្លែង។`,
      expectedOutput: "30 50"
    },
    {
      id: "arrays-08",
      topicId: "arrays",
      title: "Second Largest Element",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីចាត់ថ្នាក់ពិន្ទុត្រូវរកតម្លៃធំបំផុតទីពីរ ដោយមិនរាប់តម្លៃស្ទួន។ អ្នកត្រូវតាមដានតម្លៃធំបំផុត និងតម្លៃធំបំផុតទីពីរក្នុង loop តែមួយ។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "រកតម្លៃធំបំផុតទីពីរដែលខុសពីតម្លៃធំបំផុត។",
        "បើគ្មានតម្លៃទីពីរ បង្ហាញ None។",
        "បង្ហាញតម្លៃដែលរកឃើញ។"
      ],
      input: "ចំនួន N និងតម្លៃ N តួ។",
      output: "តម្លៃធំបំផុតទីពីរ ឬ None។",
      samples: [{ input: "6\n5 9 9 2 7 1", output: "7" }],
      constraints: ["1 <= N <= 100។", "ត្រូវមិនរាប់តម្លៃស្ទួន។"],
      hint: "រក្សា first និង second ចាប់ផ្តើមពី INT_MIN។ បើ x > first ផ្លាស់ first ទៅ second ហើយ first = x។ បើ x < first និង x > second កំណត់ second = x។",
      solution: String.raw`#include <iostream>
#include <climits>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int first = INT_MIN;
    int second = INT_MIN;
    for (int i = 0; i < n; i++) {
        int value = arr[i];
        if (value > first) {
            second = first;
            first = value;
        } else if (value < first && value > second) {
            second = value;
        }
    }

    if (second == INT_MIN) {
        cout << "None" << endl;
    } else {
        cout << second << endl;
    }
    return 0;
}`,
      explanation: `តម្លៃធំបំផុតថ្មីធ្វើឱ្យតម្លៃធំបំផុតចាស់ក្លាយជាបេក្ខជនទីពីរ។ យើងធ្វើបច្ចុប្បន្នភាព second តែពេល value តូចជាង first និងធំជាង second ដើម្បីកុំរាប់តម្លៃស្ទួន។ បើ second នៅ INT_MIN នោះមានតែតម្លៃមួយប្រភេទ ដូច្នេះបង្ហាញ None។`,
      expectedOutput: "7"
    },
    {
      id: "arrays-09",
      topicId: "arrays",
      title: "Sort Array Ascending",
      difficulty: "advanced",
      type: "code",
      description: `របាយការណ៍ពិន្ទុត្រូវបង្ហាញលេខតាមលំដាប់ពីតូចទៅធំ។ អ្នកអាចប្រើ function sort ពី standard library ដើម្បីរៀបចំ array បន្ទាប់មកបង្ហាញលទ្ធផល។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "រៀបចំ array ពីតូចទៅធំ។",
        "បង្ហាញ array ដែលបានរៀបចំ ដោយបំបែកដោយចន្លោះ។"
      ],
      input: "ចំនួន N និងតម្លៃ N តួ។",
      output: "Array ដែលរៀបចំរួច។",
      samples: [{ input: "6\n40 10 30 20 50 5", output: "5 10 20 30 40 50" }],
      constraints: ["1 <= N <= 100។", "ត្រូវប្រើ #include <algorithm> និង sort។"],
      hint: "sort(arr, arr + n); រៀបចំ array ពីតូចទៅធំដោយស្វ័យប្រវត្តិ។ បន្ទាប់មក loop បង្ហាញ arr[i]។",
      solution: String.raw`#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    sort(arr, arr + n);

    for (int i = 0; i < n; i++) {
        if (i > 0) {
            cout << " ";
        }
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
      explanation: `sort(arr, arr + n) ត្រូវការ pointer ទៅ element ដំបូង និង pointer បន្ទាប់ពី element ចុងក្រោយ។ arr + n ជាទីតាំងបន្ទាប់ពី arr[n - 1] ដូច្នេះ sort គ្របដណ្តប់ elements ទាំងអស់។ បន្ទាប់ពី sort array មានលំដាប់កើនឡើង។`,
      expectedOutput: "5 10 20 30 40 50"
    },
    {
      id: "arrays-10",
      topicId: "arrays",
      title: "Matrix Sum",
      difficulty: "advanced",
      type: "code",
      description: `សន្លឹកកិច្ចការគណិតវិទ្យាមានតារាងលេខពីរវិមាត្រ។ អ្នកត្រូវអាន matrix ហើយគណនាផលបូកនៃ elements ទាំងអស់ដោយប្រើ nested loop។`,
      requirements: [
        "អានចំនួនជួរដេក rows និងជួរឈរ cols។",
        "អានតម្លៃ rows * cols ចូល matrix។",
        "គណនាផលបូក elements ទាំងអស់។",
        "បង្ហាញផលបូក។"
      ],
      input: "rows, cols បន្ទាប់មកតម្លៃ matrix។",
      output: "ផលបូកនៃ elements ក្នុង matrix។",
      samples: [{ input: "2 3\n1 2 3\n4 5 6", output: "21" }],
      constraints: ["1 <= rows, cols <= 50។", "ត្រូវប្រើ 2D array និង nested loop។"],
      hint: "ប្រកាស int matrix[50][50]; អានដោយ matrix[i][j] ក្នុង loop ពីរជាន់ ហើយបូកចូល sum ពេលអាន។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int rows, cols;
    cin >> rows >> cols;

    int matrix[50][50];
    int sum = 0;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
            sum += matrix[i][j];
        }
    }

    cout << sum << endl;
    return 0;
}`,
      explanation: `2D array ប្រើ index ពីរ៖ index ទីមួយសម្រាប់ជួរដេក និងទីពីរសម្រាប់ជួរឈរ។ loop ខាងក្រៅរត់តាម rows ហើយខាងក្នុងរត់តាម cols។ យើងបូកតម្លៃចូល sum ភ្លាមៗពេលអាន ដូច្នេះមិនចាំបាច់ loop ទីពីរទេ។`,
      expectedOutput: "21"
    },
    {
      id: "arrays-11",
      topicId: "arrays",
      title: "Merge Two Arrays",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីរបាយការណ៍ត្រូវបញ្ចូលលេខពី array ពីរចូលគ្នា រួចរៀបចំជាលំដាប់តែមួយ។ អ្នកត្រូវចម្លង elements ទាំងអស់ចូល array ថ្មី បន្ទាប់មក sort។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួសម្រាប់ array ទីមួយ។",
        "អានចំនួន M និងតម្លៃ M តួសម្រាប់ array ទីពីរ។",
        "បញ្ចូល elements ទាំងអស់ចូល array តែមួយ។",
        "រៀបចំ និងបង្ហាញលទ្ធផលពីតូចទៅធំ។"
      ],
      input: "N, តម្លៃ N តួ, M, តម្លៃ M តួ។",
      output: "Array រួមដែលរៀបចំរួច។",
      samples: [{ input: "3\n1 4 7\n3\n2 5 6", output: "1 2 4 5 6 7" }],
      constraints: ["1 <= N, M <= 100។", "ត្រូវប្រើ array ថ្មីសម្រាប់ផ្ទុកលទ្ធផលរួម។"],
      hint: "ប្រកាស int merged[200]; ចម្លង arr និង arr2 ចូល merged ដោយប្រើ index បន្តបន្ទាប់ បន្ទាប់មក sort(merged, merged + n + m)។",
      solution: String.raw`#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;

    int first[100];
    for (int i = 0; i < n; i++) {
        cin >> first[i];
    }

    int m;
    cin >> m;

    int second[100];
    for (int i = 0; i < m; i++) {
        cin >> second[i];
    }

    int merged[200];
    int index = 0;
    for (int i = 0; i < n; i++) {
        merged[index] = first[i];
        index++;
    }
    for (int i = 0; i < m; i++) {
        merged[index] = second[i];
        index++;
    }

    sort(merged, merged + n + m);

    for (int i = 0; i < n + m; i++) {
        if (i > 0) {
            cout << " ";
        }
        cout << merged[i];
    }
    cout << endl;
    return 0;
}`,
      explanation: `យើងប្រើ index ដាច់ដោយឡែកដើម្បីដាក់ elements បន្តបន្ទាប់ក្នុង merged។ បន្ទាប់ពីចម្លងរួច merged មាន n + m elements។ sort រៀបចំវាពីតូចទៅធំ។ ការប្រុងប្រយ័ត្នគឺ merged ត្រូវមានទំហំគ្រប់គ្រាន់សម្រាប់ elements ទាំងអស់។`,
      expectedOutput: "1 2 4 5 6 7"
    },
    {
      id: "arrays-12",
      topicId: "arrays",
      title: "Rotate Array Left",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីបង្ហាញបញ្ជីត្រូវបង្វិល elements ទៅឆ្វេង K ដង។ អ្នកអាចបង្ហាញ array ដោយចាប់ផ្តើមពី index K ហើយបន្តជាវង់ដោយប្រើ operator %។`,
      requirements: [
        "អានចំនួន N និងតម្លៃ N តួ។",
        "អានចំនួនដង K ដែលត្រូវបង្វិលទៅឆ្វេង។",
        "បង្ហាញ array បន្ទាប់ពីបង្វិល K ដង។",
        "បំបែកតម្លៃដោយចន្លោះ។"
      ],
      input: "N, តម្លៃ N តួ និង K។",
      output: "Array ដែលបង្វិលទៅឆ្វេង K ដង។",
      samples: [{ input: "5\n1 2 3 4 5\n2", output: "3 4 5 1 2" }],
      constraints: ["1 <= N <= 100។", "0 <= K <= 1000។", "K អាចធំជាង N ដូច្នេះត្រូវប្រើ K % N។"],
      hint: "កំណត់ k = k % n; បន្ទាប់មក loop i ពី 0 ដល់ n - 1 ហើយបង្ហាញ arr[(i + k) % n]។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int k;
    cin >> k;
    k = k % n;

    for (int i = 0; i < n; i++) {
        if (i > 0) {
            cout << " ";
        }
        cout << arr[(i + k) % n];
    }
    cout << endl;
    return 0;
}`,
      explanation: `ការបង្វិលទៅឆ្វេង K ដង មានន័យថា element ដំបូងក្លាយជា arr[K]។ ដូច្នេះយើងបង្ហាញ arr[(i + K) % N] តាមលំដាប់ i។ operator % ធ្វើឱ្យ index វិលត្រឡប់ទៅ 0 ពេលហួសចុង array។ ការធ្វើ K % N ជៀសវាងការបង្វិលលើសរង្វង់ដែលមិនចាំបាច់។`,
      expectedOutput: "3 4 5 1 2"
    },
    {
      id: "arrays-13",
      topicId: "arrays",
      title: "Quiz: 2D Array Access",
      difficulty: "challenge",
      type: "quiz",
      description: `2D array ប្រើ index ពីរដើម្បីចូលប្រើ element។ សូមអាន snippet ហើយគណនាតម្លៃដែលត្រូវបានបង្ហាញពី grid ពីរវិមាត្រ។`,
      requirements: [
        "អានទីតាំង row និង col ដែលត្រូវបានចូលប្រើ។",
        "ចងចាំថា index ទាំងពីរចាប់ពី 0។",
        "ជ្រើសរើស output ត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int grid[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    cout << grid[1][2] + grid[0][1];
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញលេខប៉ុន្មាន?",
      options: ["8", "7", "9", "5"],
      correctIndex: 0,
      quizExplanation: "grid[1][2] គឺ row 1 (ជួរទីពីរ) និង col 2 (ជួរឈរទីបី) ដែលមានតម្លៃ 6។ grid[0][1] គឺ row 0 និង col 1 ដែលមានតម្លៃ 2។ ដូច្នេះ 6 + 2 = 8។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "index ទីមួយជា row និង index ទីពីរជា column ហើយទាំងពីរចាប់ពី 0។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int grid[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    cout << grid[1][2] + grid[0][1];
    return 0;
}`,
      explanation: `នៅក្នុង 2D array grid[row][col] ជា row ទី row និង column ទី col។ grid[1][2] គឺ 6 ព្រោះ row index 1 ជាជួរទីពីរ និង col index 2 ជាតម្លៃចុងក្រោយ។ grid[0][1] គឺ 2។ ផលបូកគឺ 8។`,
      expectedOutput: "8"
    }
  ]);
})();
