(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "dynamic-memory-01",
      topicId: "dynamic-memory",
      title: "Allocate a Single Integer",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវរៀនបង្កើត memory នៅ runtime ដោយប្រើ new។ លំហាត់នេះសាកល្បងការបង្កើត int មួយនៅលើ heap ការអានតម្លៃចូល និងការបញ្ចេញ memory ដោយ delete។`,
      requirements: [
        "ប្រើ new ដើម្បីបង្កើត pointer ទៅ int មួយ។",
        "អានតម្លៃពី input ចូលក្នុង memory នោះ។",
        "បង្ហាញតម្លៃក្នុងទម្រង់ Value: value។",
        "បញ្ចេញ memory ដោយ delete មុនពេលបញ្ចប់កម្មវិធី។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "តម្លៃដែលបានរក្សាទុក។",
      samples: [{ input: "42", output: "Value: 42" }],
      constraints: ["ត្រូវប្រើ new និង delete។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "int* p = new int; cin >> *p; ហើយបង្ហាញ *p។ កុំភ្លេច delete p;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int* p = new int;
    cin >> *p;
    cout << "Value: " << *p << endl;
    delete p;
    return 0;
}`,
      explanation: `new int បង្កើត memory សម្រាប់ int មួយនៅលើ heap ហើយត្រឡប់ pointer មកវិញ។ យើងប្រើ *p ដើម្បីអាន និងបង្ហាញតម្លៃដែល pointer ចង្អុលទៅ។ delete p បញ្ចេញ memory នោះវិញ ដើម្បីការពារ memory leak។`,
      expectedOutput: "Value: 42"
    },
    {
      id: "dynamic-memory-02",
      topicId: "dynamic-memory",
      title: "Sum of a Dynamic Array",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវបង្កើត array នៅ runtime តាមចំនួនដែលអ្នកប្រើបញ្ចូល។ បន្ទាប់មកអានតម្លៃទាំងអស់ និងគណនាផលបូក។`,
      requirements: [
        "អានចំនួនធាតុ n។",
        "ប្រើ new int[n] ដើម្បីបង្កើត array។",
        "អានតម្លៃ n ធាតុ និងគណនាផលបូក។",
        "បង្ហាញ Sum: total និងបញ្ចេញ array ដោយ delete[]។"
      ],
      input: "n បន្ទាប់មក n ចំនួនគត់។",
      output: "ផលបូកនៃធាតុទាំងអស់។",
      samples: [{ input: "4\n1 2 3 4", output: "Sum: 10" }],
      constraints: ["n ធំជាង 0។", "ត្រូវប្រើ delete[] សម្រាប់ array។"],
      hint: "int* arr = new int[n]; អានក្នុង loop ហើយបូកចូល sum។ បញ្ចប់ដោយ delete[] arr;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << endl;
    delete[] arr;
    return 0;
}`,
      explanation: `new int[n] បង្កើត array ដែលមាន n ធាតុនៅលើ heap។ យើងចូលប្រើធាតុដោយ index ដូច array ធម្មតា។ ព្រោះវាជា array ដែលបង្កើតដោយ new[] យើងត្រូវបញ្ចេញវាដោយ delete[] មិនមែន delete ធម្មតាទេ។`,
      expectedOutput: "Sum: 10"
    },
    {
      id: "dynamic-memory-03",
      topicId: "dynamic-memory",
      title: "Circle Area with Heap Double",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីគណនាផ្ទៃក្រឡារង្វង់ត្រូវរក្សាទុកកាំនៅលើ heap ដើម្បីហាត់ការប្រើ new ជាមួយ double។ លទ្ធផលត្រូវបង្ហាញដោយលេខទសភាគពីរ។`,
      requirements: [
        "ប្រើ new double សម្រាប់រក្សាទុកកាំ។",
        "អានកាំពី input។",
        "គណនាផ្ទៃក្រឡាដោយប្រើ 3.14159 * r * r។",
        "បង្ហាញ Area ដោយលេខទសភាគពីរ និងបញ្ចេញ memory។"
      ],
      input: "កាំជាចំនួនទសភាគ ឬចំនួនគត់។",
      output: "ផ្ទៃក្រឡារង្វង់។",
      samples: [{ input: "2", output: "Area: 12.57" }],
      constraints: ["កាំធំជាង 0។", "ប្រើ fixed និង setprecision(2)។"],
      hint: "double* r = new double; cin >> *r; double area = 3.14159 * (*r) * (*r); ហើយ delete r;។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double* r = new double;
    cin >> *r;
    double area = 3.14159 * (*r) * (*r);
    cout << fixed << setprecision(2);
    cout << "Area: " << area << endl;
    delete r;
    return 0;
}`,
      explanation: `new double ធ្វើការដូច new int ប៉ុន្តែសម្រាប់ចំនួនទសភាគ។ យើងអានតម្លៃចូលដោយ *r ហើយគណនាផ្ទៃក្រឡាតាមរូបមន្ត pi * r * r។ setprecision(2) បង្ហាញលទ្ធផលដោយពីរខ្ទង់ទសភាគ។`,
      expectedOutput: "Area: 12.57"
    },
    {
      id: "dynamic-memory-04",
      topicId: "dynamic-memory",
      title: "Quiz: New with Initial Value",
      difficulty: "beginner",
      type: "quiz",
      description: `new អាចបង្កើត memory និងកំណត់តម្លៃដំបូងក្នុងពេលតែមួយ។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផល។`,
      requirements: ["ពិនិត្យអត្ថន័យនៃ new int(7)។", "ជ្រើសរើសលទ្ធផលដែលបង្ហាញ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

int main() {
    int* p = new int(7);
    cout << *p;
    delete p;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: ["7", "0", "អាសយដ្ឋានរបស់ p", "Compile error"],
      correctIndex: 0,
      quizExplanation: "new int(7) បង្កើត int នៅលើ heap ហើយកំណត់តម្លៃដំបូងជា 7។ ដូច្នេះ *p គឺ 7 ហើយ cout បង្ហាញ 7។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "លេខក្នុងវង់ក្រចកបន្ទាប់ពី new int គឺជាតម្លៃដំបូង។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int* p = new int(7);
    cout << *p << endl;
    delete p;
    return 0;
}`,
      explanation: `new int(7) មានន័យថាបង្កើត int មួយ ហើយដាក់តម្លៃ 7 ចូលភ្លាមៗ។ បើសរសេរ new int ដោយគ្មានវង់ក្រចក តម្លៃដំបូងនឹងមិនត្រូវបានកំណត់ដោយយើងទេ។`,
      expectedOutput: "7"
    },
    {
      id: "dynamic-memory-05",
      topicId: "dynamic-memory",
      title: "Maximum in a Dynamic Array",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវរកតម្លៃអតិបរមានៅក្នុង array ដែលបង្កើតនៅ runtime។ លំហាត់នេះបង្ហាញការប្រើ new[] ជាមួយការវិភាគទិន្នន័យ។`,
      requirements: [
        "អានចំនួនធាតុ n។",
        "បង្កើត array ដោយ new int[n] និងអានតម្លៃ។",
        "រកតម្លៃធំបំផុតក្នុង array។",
        "បង្ហាញ Max: value និងបញ្ចេញ memory។"
      ],
      input: "n បន្ទាប់មក n ចំនួនគត់។",
      output: "តម្លៃអតិបរមា។",
      samples: [{ input: "5\n3 9 2 7 4", output: "Max: 9" }],
      constraints: ["n ធំជាង 0។", "តម្លៃអាចអវិជ្ជមានបាន។"],
      hint: "កំណត់ max = arr[0] បន្ទាប់មកធ្វើ loop ពី index 1 ហើយធ្វើបច្ចុប្បន្នភាពនៅពេល arr[i] > max។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int maxValue = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    cout << "Max: " << maxValue << endl;
    delete[] arr;
    return 0;
}`,
      explanation: `ការរកតម្លៃអតិបរមាត្រូវចាប់ផ្តើមពីធាតុមួយ បន្ទាប់មកប្រៀបធៀបជាមួយធាតុផ្សេងទៀត។ បើជួបតម្លៃធំជាង យើងធ្វើបច្ចុប្បន្នភាព maxValue។ array នេះបង្កើតដោយ new[] ដូច្នេះត្រូវបញ្ចេញដោយ delete[]។`,
      expectedOutput: "Max: 9"
    },
    {
      id: "dynamic-memory-06",
      topicId: "dynamic-memory",
      title: "Reverse a Dynamic Array",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវអាន array ដែលបង្កើតនៅ runtime ហើយបង្ហាញធាតុតាមលំដាប់បញ្ច្រាស។ នេះហាត់ការគ្រប់គ្រង index និង memory។`,
      requirements: [
        "អានចំនួនធាតុ n។",
        "បង្កើត array ដោយ new int[n] និងអានតម្លៃ។",
        "បង្ហាញធាតុពីចុងទៅដើម បំបែកដោយចន្លោះ។",
        "បញ្ចេញ memory ដោយ delete[]។"
      ],
      input: "n បន្ទាប់មក n ចំនួនគត់។",
      output: "ធាតុតាមលំដាប់បញ្ច្រាស។",
      samples: [{ input: "5\n1 2 3 4 5", output: "5 4 3 2 1" }],
      constraints: ["n ធំជាង 0។", "គ្មានចន្លោះនៅចុងបញ្ចប់ទេ។"],
      hint: "ចាប់ពី i = n - 1 ចុះដល់ 0 ហើយបង្ហាញ arr[i]។ បន្ថែមចន្លោះតែនៅពេល i > 0។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    for (int i = n - 1; i >= 0; i--) {
        cout << arr[i];
        if (i > 0) {
            cout << " ";
        }
    }
    cout << endl;
    delete[] arr;
    return 0;
}`,
      explanation: `ការបង្ហាញបញ្ច្រាសធ្វើឡើងដោយចាប់ផ្តើម index ពី n - 1 ហើយថយក្រោយរហូតដល់ 0។ យើងបន្ថែមចន្លោះតែរវាងធាតុ ដើម្បីកុំឱ្យមានចន្លោះលើសនៅចុងបញ្ចប់។`,
      expectedOutput: "5 4 3 2 1"
    },
    {
      id: "dynamic-memory-07",
      topicId: "dynamic-memory",
      title: "Dynamic Matrix Sum",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត matrix ពីរវិមាត្រនៅ runtime ដោយប្រើ new សម្រាប់ទាំង rows និងជួរនីមួយៗ។ បន្ទាប់មកគណនាផលបូកនៃធាតុទាំងអស់។`,
      requirements: [
        "អានចំនួន rows និង cols។",
        "បង្កើត int** matrix ដោយ new int*[rows] និង new int[cols] សម្រាប់ជួរនីមួយៗ។",
        "អានធាតុទាំងអស់ និងគណនាផលបូក។",
        "បង្ហាញ Sum: value និងបញ្ចេញ memory ឱ្យបានត្រឹមត្រូវ។"
      ],
      input: "rows cols បន្ទាប់មក ធាតុ rows*cols។",
      output: "ផលបូកនៃធាតុទាំងអស់ក្នុង matrix។",
      samples: [{ input: "2 3\n1 2 3\n4 5 6", output: "Sum: 21" }],
      constraints: ["rows និង cols ធំជាង 0។", "ត្រូវ delete[] ជួរនីមួយៗ និង delete[] matrix។"],
      hint: "បង្កើត matrix[i] = new int[cols]; សម្រាប់ i នីមួយៗ។ ពេលបញ្ចេញ ធ្វើ delete[] matrix[i]; មុន delete[] matrix;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int rows;
    int cols;
    cin >> rows >> cols;
    int** matrix = new int*[rows];
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
    }
    int sum = 0;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
            sum += matrix[i][j];
        }
    }
    cout << "Sum: " << sum << endl;
    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];
    }
    delete[] matrix;
    return 0;
}`,
      explanation: `matrix ពីរវិមាត្រដែលបង្កើតដោយ dynamic memory ត្រូវការ allocation ពីរជាន់។ ដំបូងបង្កើត array នៃ pointers សម្រាប់ rows បន្ទាប់មកបង្កើត array សម្រាប់ជួរនីមួយៗ។ ពេលបញ្ចេញត្រូវលុបជួរនីមួយៗមុន រួចទើបលុប array នៃ pointers។`,
      expectedOutput: "Sum: 21"
    },
    {
      id: "dynamic-memory-08",
      topicId: "dynamic-memory",
      title: "Growing Array Until Zero",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវអានលេខជាបន្តបន្ទាប់រហូតដល់ជួប 0 ដោយមិនដឹងចំនួនជាមុន។ ត្រូវប្រើ dynamic array ដែលពង្រីក capacity ដោយស្វ័យប្រវត្តិ នៅពេលពេញ។`,
      requirements: [
        "បង្កើត array ដំបូងដោយ capacity 2។",
        "អានលេខរហូតដល់ 0 ហើយបញ្ចូលចូល array។",
        "នៅពេល array ពេញ បង្កើត array ថ្មីដែលមាន capacity ពីរដង ចម្លងទិន្នន័យ ហើយ delete array ចាស់។",
        "បង្ហាញចំនួនធាតុ និងផលបូក។"
      ],
      input: "លេខជាច្រើន បញ្ចប់ដោយ 0។",
      output: "Count និង Sum នៃលេខដែលបានអានមុន 0។",
      samples: [{ input: "5 10 15 0", output: "Count: 3\nSum: 30" }],
      constraints: ["0 មិនត្រូវបញ្ចូលក្នុង array។", "ត្រូវ delete[] array ចាស់បន្ទាប់ពីចម្លង។"],
      hint: "ពិនិត្យ if (count == capacity) មុនបញ្ចូលតម្លៃថ្មី។ បង្កើត new int[capacity * 2] ហើយចម្លងធាតុចាស់ដោយ loop។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int capacity = 2;
    int count = 0;
    int* data = new int[capacity];
    int value;
    while (cin >> value && value != 0) {
        if (count == capacity) {
            int newCapacity = capacity * 2;
            int* bigger = new int[newCapacity];
            for (int i = 0; i < count; i++) {
                bigger[i] = data[i];
            }
            delete[] data;
            data = bigger;
            capacity = newCapacity;
        }
        data[count] = value;
        count++;
    }
    int sum = 0;
    for (int i = 0; i < count; i++) {
        sum += data[i];
    }
    cout << "Count: " << count << endl;
    cout << "Sum: " << sum << endl;
    delete[] data;
    return 0;
}`,
      explanation: `នៅពេលយើងមិនដឹងចំនួនទិន្នន័យជាមុន យើងអាចចាប់ផ្តើមដោយ capacity តូច ហើយពង្រីកវានៅពេលពេញ។ ការពង្រីកត្រូវបង្កើត array ថ្មី ចម្លងទិន្នន័យចាស់ បន្ទាប់មក delete array ចាស់។ វិធីនេះជួយឱ្យយើងរក្សាទុកទិន្នន័យដែលមានចំនួនមិនច្បាស់លាស់។`,
      expectedOutput: "Count: 3\nSum: 30"
    },
    {
      id: "dynamic-memory-09",
      topicId: "dynamic-memory",
      title: "Transpose a Dynamic Matrix",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវបង្កើត matrix នៅ runtime ហើយបង្ហាញ matrix បញ្ច្រាសជួរ និងជួរឈរ (transpose)។ លំហាត់នេះហាត់ការគ្រប់គ្រង 2D dynamic memory និង index។`,
      requirements: [
        "អាន rows និង cols។",
        "បង្កើត matrix ដោយ dynamic allocation ពីរជាន់។",
        "អានធាតុទាំងអស់។",
        "បង្ហាញ transpose ដែលមាន cols បន្ទាត់ និង rows តម្លៃក្នុងមួយបន្ទាត់។",
        "បញ្ចេញ memory ទាំងអស់។"
      ],
      input: "rows cols បន្ទាប់មក ធាតុ rows*cols។",
      output: "Matrix transpose ដោយបំបែកតម្លៃដោយចន្លោះ។",
      samples: [{ input: "2 3\n1 2 3\n4 5 6", output: "1 4\n2 5\n3 6" }],
      constraints: ["rows និង cols ធំជាង 0។", "គ្មានចន្លោះលើសនៅចុងបន្ទាត់ទេ។"],
      hint: "Transpose បង្ហាញ matrix[i][j] ជា matrix[j][i]។ ប្រើ loop ខាងក្រៅលើ j និងខាងក្នុងលើ i។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int rows;
    int cols;
    cin >> rows >> cols;
    int** matrix = new int*[rows];
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
    }
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    for (int j = 0; j < cols; j++) {
        for (int i = 0; i < rows; i++) {
            cout << matrix[i][j];
            if (i < rows - 1) {
                cout << " ";
            }
        }
        cout << endl;
    }
    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];
    }
    delete[] matrix;
    return 0;
}`,
      explanation: `transpose ប្តូរទីតាំងជួរដេក និងជួរឈរ។ ធាតុនៅ matrix[i][j] នឹងបង្ហាញនៅទីតាំង (j, i) ក្នុង transpose។ ដូច្នេះយើងធ្វើ loop ខាងក្រៅលើជួរឈរ j ហើយខាងក្នុងលើជួរដេក i។ ការបញ្ចេញ memory ត្រូវធ្វើពីជួរនីមួយៗមុន array នៃ pointers។`,
      expectedOutput: "1 4\n2 5\n3 6"
    },
    {
      id: "dynamic-memory-10",
      topicId: "dynamic-memory",
      title: "Quiz: Delete Array Correctly",
      difficulty: "advanced",
      type: "quiz",
      description: `ការបញ្ចេញ memory ឱ្យបានត្រឹមត្រូវគឺជាផ្នែកសំខាន់នៃ dynamic memory។ សូមពិនិត្យ snippet ហើយកំណត់បញ្ហាសំខាន់។`,
      requirements: ["ពិនិត្យថា array ត្រូវបានបង្កើតដោយ new[]។", "ជ្រើសរើសការពន្យល់ត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

int main() {
    int* a = new int[5];
    for (int i = 0; i < 5; i++) {
        a[i] = i + 1;
    }
    delete a;
    return 0;
}`,
      quizQuestion: "តើបញ្ហាសំខាន់នៅក្នុង snippet នេះជាអ្វី?",
      options: [
        "គួរប្រើ delete[] a; ព្រោះ a បង្កើតដោយ new[]",
        "delete a; គឺត្រឹមត្រូវហើយ",
        "ត្រូវប្រើ free(a); ជំនួស",
        "មិនអាចប្រើ new int[5] បានទេ"
      ],
      correctIndex: 0,
      quizExplanation: "array ដែលបង្កើតដោយ new[] ត្រូវបញ្ចេញដោយ delete[]។ ការប្រើ delete ធម្មតាជាមួយ array គឺមិនត្រឹមត្រូវ ហើយអាចបង្កើត undefined behavior។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ផ្គូផ្គង new[] ជាមួយ delete[] និង new ជាមួយ delete។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int* a = new int[5];
    for (int i = 0; i < 5; i++) {
        a[i] = i + 1;
    }
    delete[] a;
    return 0;
}`,
      explanation: `រាល់ការបង្កើត memory ត្រូវមានការបញ្ចេញដែលត្រូវគ្នា។ new ត្រូវផ្គូផ្គងជាមួយ delete ហើយ new[] ត្រូវផ្គូផ្គងជាមួយ delete[]។ ការប្រើ delete ខុសទម្រង់អាចធ្វើឱ្យកម្មវិធីមានបញ្ហានៅពេលដំណើរការ។`,
      expectedOutput: "delete[] a;"
    },
    {
      id: "dynamic-memory-11",
      topicId: "dynamic-memory",
      title: "Sort a Dynamic Array",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវអាន array ដែលបង្កើតនៅ runtime ហើយតម្រៀបវាពីតូចទៅធំ។ លំហាត់នេះរួមបញ្ចូល dynamic memory និង algorithm តម្រៀបសាមញ្ញ។`,
      requirements: [
        "អានចំនួនធាតុ n។",
        "បង្កើត array ដោយ new int[n] និងអានតម្លៃ។",
        "តម្រៀប array ពីតូចទៅធំដោយ bubble sort។",
        "បង្ហាញធាតុដែលបានតម្រៀប បំបែកដោយចន្លោះ និងបញ្ចេញ memory។"
      ],
      input: "n បន្ទាប់មក n ចំនួនគត់។",
      output: "ធាតុដែលបានតម្រៀបពីតូចទៅធំ។",
      samples: [{ input: "5\n5 1 4 2 3", output: "1 2 3 4 5" }],
      constraints: ["n ធំជាង 0។", "គ្មានចន្លោះលើសនៅចុងបញ្ចប់។"],
      hint: "ប្រើ loop ពីរ ហើយប្តូរ arr[j] និង arr[j+1] នៅពេល arr[j] > arr[j+1]។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) {
            cout << " ";
        }
    }
    cout << endl;
    delete[] arr;
    return 0;
}`,
      explanation: `bubble sort ប្រៀបធៀបធាតុជាប់គ្នា ហើយប្តូរទីតាំងបើធាតុខាងឆ្វេងធំជាង។ បន្ទាប់ពី loop នីមួយៗ ធាតុធំបំផុតផ្លាស់ទៅចុងបញ្ចប់។ ការតម្រៀបធ្វើលើ array ដែលបង្កើតដោយ new[] ហើយបញ្ចេញដោយ delete[] នៅចុងបញ្ចប់។`,
      expectedOutput: "1 2 3 4 5"
    },
    {
      id: "dynamic-memory-12",
      topicId: "dynamic-memory",
      title: "Longest Word in Dynamic Strings",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវរកពាក្យវែងបំផុតពីបញ្ជីពាក្យដែលបង្កើតនៅ runtime។ លំហាត់នេះហាត់ការប្រើ dynamic array នៃ string និងការប្រៀបធៀបប្រវែង។`,
      requirements: [
        "អានចំនួនពាក្យ n។",
        "បង្កើត array ដោយ new string[n]។",
        "អានពាក្យទាំងអស់ និងរកពាក្យដែលមានប្រវែងវែងបំផុត។",
        "បង្ហាញ Longest: word និង Length: number។",
        "បញ្ចេញ memory ដោយ delete[]។"
      ],
      input: "n បន្ទាប់មក n ពាក្យ។",
      output: "ពាក្យវែងបំផុត និងប្រវែងរបស់វា។",
      samples: [{ input: "3\napple\nbanana\nkiwi", output: "Longest: banana\nLength: 6" }],
      constraints: ["n ធំជាង 0។", "ពាក្យមិនមានចន្លោះ។"],
      hint: "ប្រើ words[i].length() ដើម្បីប្រៀបធៀបប្រវែង ហើយរក្សាទុក index ឬ string របស់ពាក្យវែងបំផុត។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;
    string* words = new string[n];
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    string longest = words[0];
    for (int i = 1; i < n; i++) {
        if (words[i].length() > longest.length()) {
            longest = words[i];
        }
    }
    cout << "Longest: " << longest << endl;
    cout << "Length: " << longest.length() << endl;
    delete[] words;
    return 0;
}`,
      explanation: `new string[n] បង្កើត array នៃ string នៅលើ heap។ យើងប្រៀបធៀបប្រវែងដោយប្រើ length() ហើយរក្សាទុកពាក្យវែងបំផុតដែលជួប។ បន្ទាប់ពីប្រើរួច យើងត្រូវ delete[] words ដើម្បីបញ្ចេញ memory ទាំងអស់។`,
      expectedOutput: "Longest: banana\nLength: 6"
    },
    {
      id: "dynamic-memory-13",
      topicId: "dynamic-memory",
      title: "Matrix Row and Column Sums",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវគណនាផលបូកនៃជួរដេក និងជួរឈរនៃ matrix ដែលបង្កើតនៅ runtime។ លំហាត់នេះហាត់ការប្រើ 2D dynamic array និងការគណនាពីរទិស។`,
      requirements: [
        "អាន rows និង cols។",
        "បង្កើត matrix ដោយ dynamic allocation។",
        "គណនា និងបង្ហាញផលបូកជួរដេកនីមួយៗក្នុងទម្រង់ Row i: value។",
        "គណនា និងបង្ហាញផលបូកជួរឈរនីមួយៗក្នុងទម្រង់ Col j: value។",
        "បញ្ចេញ memory ទាំងអស់។"
      ],
      input: "rows cols បន្ទាប់មក ធាតុ rows*cols។",
      output: "ផលបូកជួរដេក បន្ទាប់មកផលបូកជួរឈរ។",
      samples: [{ input: "2 3\n1 2 3\n4 5 6", output: "Row 1: 6\nRow 2: 15\nCol 1: 5\nCol 2: 7\nCol 3: 9" }],
      constraints: ["rows និង cols ធំជាង 0។", "លេខជួរដេក និងជួរឈរចាប់ផ្តើមពី 1 ក្នុង output។"],
      hint: "គណនាផលបូកជួរដេកក្នុង loop នីមួយៗ។ សម្រាប់ជួរឈរ ប្រើ loop ខាងក្រៅលើ j និងបូក matrix[i][j]។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int rows;
    int cols;
    cin >> rows >> cols;
    int** matrix = new int*[rows];
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
    }
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    for (int i = 0; i < rows; i++) {
        int sum = 0;
        for (int j = 0; j < cols; j++) {
            sum += matrix[i][j];
        }
        cout << "Row " << i + 1 << ": " << sum << endl;
    }
    for (int j = 0; j < cols; j++) {
        int sum = 0;
        for (int i = 0; i < rows; i++) {
            sum += matrix[i][j];
        }
        cout << "Col " << j + 1 << ": " << sum << endl;
    }
    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];
    }
    delete[] matrix;
    return 0;
}`,
      explanation: `ផលបូកជួរដេកគណនាបានដោយ loop លើជួរឈរនៅក្នុងជួរដេកមួយ។ ផលបូកជួរឈរគណនាបានដោយ loop លើជួរដេកនៅក្នុងជួរឈរមួយ។ យើងបង្ហាញលេខជួរដេក និងជួរឈរដោយបូក 1 ព្រោះ index ចាប់ផ្តើមពី 0 ប៉ុន្តែ output ចាប់ផ្តើមពី 1។`,
      expectedOutput: "Row 1: 6\nRow 2: 15\nCol 1: 5\nCol 2: 7\nCol 3: 9"
    }
  ]);
})();
