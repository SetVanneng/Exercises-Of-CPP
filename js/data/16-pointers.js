(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "pointers-01",
      topicId: "pointers",
      title: "Dereference Basics",
      difficulty: "beginner",
      type: "code",
      description: `Pointer គឺជា variable ដែលរក្សាទុក address របស់ variable មួយទៀត។ លំហាត់នេះឱ្យអ្នកបង្កើត pointer ទៅ variable មួយ រួចអានតម្លៃតាមរយៈ dereference។`,
      requirements: [
        "អានចំនួនគត់មួយដាក់ក្នុង variable value។",
        "បង្កើត pointer ptr ដែលចង្អុលទៅ value។",
        "បង្ហាញតម្លៃតាម pointer ជាទម្រង់ Value via pointer: តម្លៃ។"
      ],
      input: "ចំនួនគត់ value មួយ។",
      output: "បន្ទាត់ Value via pointer: តម្លៃ។",
      samples: [{ input: "42", output: "Value via pointer: 42" }],
      constraints: ["ត្រូវប្រើ & ដើម្បីយក address។", "ត្រូវប្រើ * ដើម្បីអានតម្លៃតាម pointer។"],
      hint: "int *ptr = &value; បន្ទាប់មក cout << *ptr << endl;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int value;
    cin >> value;

    int *ptr = &value;
    cout << "Value via pointer: " << *ptr << endl;
    return 0;
}`,
      explanation: `&value ផ្តល់ address របស់ value ហើយ int *ptr រក្សា address នោះ។ នៅពេលប្រើ *ptr យើងអានតម្លៃនៅ address ដែល ptr ចង្អុលទៅ ដែលក្នុងករណីនេះគឺ 42។`,
      expectedOutput: "Value via pointer: 42"
    },
    {
      id: "pointers-02",
      topicId: "pointers",
      title: "Update Through Pointer",
      difficulty: "beginner",
      type: "code",
      description: `Pointer មិនត្រឹមតែអានតម្លៃបានទេ វាក៏អាចកែតម្លៃដើមបានផងដែរ។ អ្នកត្រូវប្រើ pointer ដើម្បីបូកតម្លៃ variable ដើមបន្ថែម 10។`,
      requirements: [
        "អានចំនួនគត់មួយដាក់ក្នុង value។",
        "បង្កើត pointer ptr ទៅ value។",
        "ប្រើ *ptr ដើម្បីបូកតម្លៃ 10 បន្ទាប់មកបង្ហាញ value។"
      ],
      input: "ចំនួនគត់ value មួយ។",
      output: "តម្លៃ value ក្រោយបូក 10។",
      samples: [{ input: "15", output: "25" }],
      constraints: ["ត្រូវកែតម្លៃតាម pointer មិនមែនកែ value ដោយផ្ទាល់ទេ។", "បង្ហាញតែលទ្ធផលចុងក្រោយ។"],
      hint: "ប្រើ *ptr += 10; ហើយបន្ទាប់មក cout << value << endl;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int value;
    cin >> value;

    int *ptr = &value;
    *ptr += 10;

    cout << value << endl;
    return 0;
}`,
      explanation: `*ptr តំណាងឱ្យតម្លៃនៅ address ដែល ptr រក្សា។ ការសរសេរ *ptr += 10 កែតម្លៃ value ដើមដោយផ្ទាល់ ដូច្នេះនៅពេលបង្ហាញ value យើងឃើញ 25។`,
      expectedOutput: "25"
    },
    {
      id: "pointers-03",
      topicId: "pointers",
      title: "Quiz: Address and Dereference",
      difficulty: "beginner",
      type: "quiz",
      description: `ការយល់ពីភាពខុសគ្នារវាង address និងតម្លៃគឺជាមូលដ្ឋាននៃ pointer។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output ត្រឹមត្រូវ។`,
      requirements: ["ពិនិត្យថា p រក្សា address របស់ x។", "ពិនិត្យថា *p មានន័យដូចម្តេច។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int *p = &x;
    cout << *p << endl;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: [
        "5",
        "address របស់ x",
        "0",
        "មាន compile error ព្រោះ p ជា pointer។"
      ],
      correctIndex: 0,
      quizExplanation: "p រក្សា address របស់ x ហើយ *p dereference pointer ដើម្បីអានតម្លៃនៅ address នោះ។ ដូច្នេះ *p មានតម្លៃ 5 ដូច x។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សញ្ញា & យក address ឯសញ្ញា * dereference។ តើ *p ជាតម្លៃ ឬ address?",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int *p = &x;
    cout << *p << endl;
    return 0;
}`,
      explanation: `&x ជា address របស់ x ហើយ int *p ប្រកាស pointer ដែលរក្សា address នោះ។ *p មានន័យថាតម្លៃដែលនៅ address នោះ ដូច្នេះ output គឺ 5។ ប្រសិនបើយើងបង្ហាញ p ដោយផ្ទាល់ នោះនឹងជា address ដែលអាចខុសគ្នារាល់ការដំណើរការ។`,
      expectedOutput: "5"
    },
    {
      id: "pointers-04",
      topicId: "pointers",
      title: "Swap Using Pointers",
      difficulty: "beginner",
      type: "code",
      description: `ការបញ្ជូន address ទៅ function អនុញ្ញាតឱ្យ function កែ variable ដើមបាន។ អ្នកត្រូវសរសេរ function swapValues ដែលប្រើ pointer ដើម្បីប្តូរតម្លៃពីរ។`,
      requirements: [
        "បង្កើត function swapValues ដែលទទួល int* ពីរ។",
        "ប្រើ pointer ដើម្បីប្តូរតម្លៃដែលចង្អុលទៅ។",
        "អានចំនួនពីរ ហៅ function រួចបង្ហាញតម្លៃក្រោយប្តូរ។"
      ],
      input: "ចំនួនគត់ពីរ a និង b បំបែកដោយចន្លោះ។",
      output: "តម្លៃ b និង a ក្រោយប្តូរ បំបែកដោយចន្លោះ។",
      samples: [{ input: "3 8", output: "8 3" }],
      constraints: ["ត្រូវប្រើ pointer parameter។", "មិនត្រូវប្រើ std::swap ទេ។"],
      hint: "រក្សា temp = *a; បន្ទាប់មក *a = *b; និង *b = temp;។",
      solution: String.raw`#include <iostream>

using namespace std;

void swapValues(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;

    swapValues(&a, &b);
    cout << a << " " << b << endl;
    return 0;
}`,
      explanation: `function ទទួល address របស់ a និង b ដូច្នេះ *a និង *b តំណាងឱ្យ variable ដើម។ ការប្តូរតម្លៃតាម pointer មានប្រសិទ្ធភាពលើ variable នៅ main ដោយផ្ទាល់។`,
      expectedOutput: "8 3"
    },
    {
      id: "pointers-05",
      topicId: "pointers",
      title: "Sum Array with Pointer",
      difficulty: "intermediate",
      type: "code",
      description: `ឈ្មោះ array អាចប្រើដូច pointer ទៅ element ដំបូង។ អ្នកត្រូវប្រើ pointer ដើម្បីគណនាផលបូក element ទាំងអស់ក្នុង array។`,
      requirements: [
        "អាន n និង element ចំនួន n។",
        "បង្កើត pointer ដែលចង្អុលទៅ element ដំបូង។",
        "ប្រើ pointer arithmetic ដើម្បីបូក element ទាំងអស់។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "ផលបូក element ទាំងអស់។",
      samples: [{ input: "5\n1 2 3 4 5", output: "15" }],
      constraints: ["1 <= n <= 100។", "ត្រូវប្រើ pointer មិនមែន arr[i] ទេ។"],
      hint: "int *ptr = arr; បន្ទាប់មកប្រើ *(ptr + i) ក្នុង loop ដើម្បីអាន element។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int *ptr = arr;
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += *(ptr + i);
    }

    cout << sum << endl;
    return 0;
}`,
      explanation: `arr តំណាងឱ្យ address របស់ element ដំបូង។ *(ptr + i) គឺស្មើនឹង arr[i] ព្រោះ pointer arithmetic គណនាតាមទំហំនៃប្រភេទទិន្នន័យ។ ការប្រើ pointer បង្ហាញទំនាក់ទំនងជិតរវាង array និង memory។`,
      expectedOutput: "15"
    },
    {
      id: "pointers-06",
      topicId: "pointers",
      title: "Find Maximum with Pointer",
      difficulty: "intermediate",
      type: "code",
      description: `ការស្វែងរកតម្លៃធំបំផុតក្នុង array អាចធ្វើបានដោយដើរ pointer ពី element មួយទៅ element មួយ។ អ្នកត្រូវសរសេរ function ដែលទទួល pointer និងចំនួន element។`,
      requirements: [
        "បង្កើត function findMax ដែលទទួល const int* និង n។",
        "ប្រើ pointer arithmetic ដើម្បីរកតម្លៃធំបំផុត។",
        "អាន n និង element ចំនួន n រួចបង្ហាញតម្លៃធំបំផុត។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "តម្លៃធំបំផុតក្នុង array។",
      samples: [{ input: "4\n9 2 7 4", output: "9" }],
      constraints: ["1 <= n <= 100។", "function ត្រូវទទួល pointer parameter។"],
      hint: "ចាប់ផ្តើម max = *arr រួច loop i ពី 1 ដល់ n - 1 ដោយប្រៀបធៀប *(arr + i)។",
      solution: String.raw`#include <iostream>

using namespace std;

int findMax(const int *arr, int n) {
    int maxValue = *arr;
    for (int i = 1; i < n; i++) {
        if (*(arr + i) > maxValue) {
            maxValue = *(arr + i);
        }
    }
    return maxValue;
}

int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cout << findMax(arr, n) << endl;
    return 0;
}`,
      explanation: `function ទទួល pointer ទៅ element ដំបូង ដូច្នេះវាអាចអាន array ទាំងមូលតាម address។ ការប្រើ const int* បង្ហាញថា function មិនកែ element ទេ ដែលជាការអនុវត្តល្អសម្រាប់ការអានតែប៉ុណ្ណោះ។`,
      expectedOutput: "9"
    },
    {
      id: "pointers-07",
      topicId: "pointers",
      title: "Reverse Array via Pointers",
      difficulty: "intermediate",
      type: "code",
      description: `Pointer ពីរអាចដើរពីចុងទាំងពីរចូលរកគ្នាដើម្បីបញ្ច្រាស array។ អ្នកត្រូវប្រើ pointer ឆ្វេង និង pointer ស្តាំ ដើម្បីប្តូរ element ជាគូៗ។`,
      requirements: [
        "អាន n និង element ចំនួន n។",
        "បង្កើត pointer left នៅ element ដំបូង និង right នៅ element ចុងក្រោយ។",
        "ប្តូរតម្លៃ *left និង *right រួចរំកិលចូលគ្នារហូតជួបគ្នា។",
        "បង្ហាញ array ក្រោយបញ្ច្រាសដោយបំបែក element ដោយចន្លោះ។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "Array ដែលបានបញ្ច្រាស។",
      samples: [{ input: "5\n1 2 3 4 5", output: "5 4 3 2 1" }],
      constraints: ["1 <= n <= 100។", "ត្រូវប្រើ pointer ទាំងពីរ។"],
      hint: "while (left < right) { int temp = *left; *left = *right; *right = temp; left++; right--; }។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int *left = arr;
    int *right = arr + n - 1;
    while (left < right) {
        int temp = *left;
        *left = *right;
        *right = temp;
        left++;
        right--;
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
      explanation: `left ចាប់ផ្តើមនៅ element ដំបូង ហើយ right នៅ element ចុងក្រោយ។ រាល់ជុំ យើងប្តូរតម្លៃដែលពួកវាចង្អុលទៅ រួចរំកិល left ទៅមុខ និង right ថយក្រោយ។ នៅពេល left >= right array ត្រូវបានបញ្ច្រាសពេញលេញ។`,
      expectedOutput: "5 4 3 2 1"
    },
    {
      id: "pointers-08",
      topicId: "pointers",
      title: "Count Even and Odd via Pointer",
      difficulty: "advanced",
      type: "code",
      description: `Pointer parameter អាចប្រើដើម្បីបញ្ជូនលទ្ធផលច្រើនត្រឡប់ទៅ main។ អ្នកត្រូវសរសេរ function ដែលរាប់ចំនួនគូ និងសេស ហើយសរសេរលទ្ធផលតាម pointer។`,
      requirements: [
        "បង្កើត function countEvenOdd ដែលទទួល array, n, និង pointer ពីរសម្រាប់ even និង odd។",
        "ប្រើ pointer arithmetic ដើម្បីអាន element និងរាប់។",
        "អាន n និង element រួចបង្ហាញ Even និង Odd ជាពីរបន្ទាត់។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "បន្ទាត់ទីមួយ Even និងបន្ទាត់ទីពីរ Odd។",
      samples: [{ input: "6\n1 2 3 4 5 6", output: "Even: 3\nOdd: 3" }],
      constraints: ["1 <= n <= 100។", "ត្រូវប្រើ pointer សម្រាប់លទ្ធផល even និង odd។"],
      hint: "កំណត់ *even = 0 និង *odd = 0 បន្ទាប់មកបង្កើនតាមលក្ខខណ្ឌ n % 2 == 0។",
      solution: String.raw`#include <iostream>

using namespace std;

void countEvenOdd(const int *arr, int n, int *even, int *odd) {
    *even = 0;
    *odd = 0;
    for (int i = 0; i < n; i++) {
        if (*(arr + i) % 2 == 0) {
            (*even)++;
        } else {
            (*odd)++;
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

    int evenCount = 0;
    int oddCount = 0;
    countEvenOdd(arr, n, &evenCount, &oddCount);

    cout << "Even: " << evenCount << endl;
    cout << "Odd: " << oddCount << endl;
    return 0;
}`,
      explanation: `pointer even និង odd ចង្អុលទៅ variable ក្នុង main ដូច្នេះ function អាចកែតម្លៃពួកវាបាន។ ការប្រើ (*even)++ ត្រូវការវង់ក្រចកព្រោះ *even++ មានអត្ថន័យខុសគ្នា។ វិធីនេះអនុញ្ញាតឱ្យ function return លទ្ធផលច្រើនតាម pointer។`,
      expectedOutput: "Even: 3\nOdd: 3"
    },
    {
      id: "pointers-09",
      topicId: "pointers",
      title: "Dynamic Array Average",
      difficulty: "advanced",
      type: "code",
      description: `Dynamic memory អនុញ្ញាតឱ្យបង្កើត array នៅ runtime តាមទំហំដែលអ្នកប្រើបញ្ចូល។ អ្នកត្រូវប្រើ new និង delete[] ដើម្បីគណនាមធ្យមភាគ។`,
      requirements: [
        "អាន n និង element ចំនួន n។",
        "បង្កើត array ដោយ int *arr = new int[n];។",
        "គណនាមធ្យមភាគជា double ហើយបង្ហាញទសភាគពីរ។",
        "បញ្ចេញ memory ដោយ delete[] arr; នៅចុងបញ្ចប់។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "មធ្យមភាគដោយទសភាគពីរ។",
      samples: [{ input: "4\n10 20 30 40", output: "25.00" }],
      constraints: ["1 <= n <= 1000។", "ត្រូវប្រើ new និង delete[]។"],
      hint: "ប្រើ double sum = 0; បន្ទាប់មក sum += arr[i]; និង cout << fixed << setprecision(2) << sum / n;។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int n;
    cin >> n;

    int *arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    double sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }

    cout << fixed << setprecision(2) << sum / n << endl;
    delete[] arr;
    return 0;
}`,
      explanation: `new int[n] បង្កើត array នៅ heap ដែលមានទំហំដឹងនៅ runtime។ បន្ទាប់ពីប្រើរួច យើងត្រូវ delete[] arr ដើម្បីបញ្ចេញ memory និងជៀសវាង memory leak។ ការប្រើ double sum ធ្វើឱ្យការចែកមិនបាត់បង់ផ្នែកទសភាគ។`,
      expectedOutput: "25.00"
    },
    {
      id: "pointers-10",
      topicId: "pointers",
      title: "Quiz: Pointer Arithmetic",
      difficulty: "advanced",
      type: "quiz",
      description: `Pointer arithmetic រំកិល pointer តាមទំហំនៃប្រភេទទិន្នន័យដែលវាចង្អុលទៅ។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output ត្រឹមត្រូវ។`,
      requirements: ["ចងចាំថា arr តំណាងឱ្យ address របស់ element ដំបូង។", "គណនា *(p + 2) តាមលំដាប់ element។"],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    cout << *(p + 2) << endl;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: [
        "30",
        "20",
        "40",
        "address របស់ arr[2]"
      ],
      correctIndex: 0,
      quizExplanation: "p ចង្អុលទៅ arr[0]។ p + 2 រំកិលទៅ arr[2] ព្រោះ pointer arithmetic គណនាតាមចំនួន element មិនមែន byte ទេ។ *(p + 2) ដូច្នេះគឺ arr[2] ដែលមានតម្លៃ 30។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "p + 2 មានន័យថា element ទីបី ព្រោះ p ចាប់ផ្តើមនៅ index 0។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    cout << *(p + 2) << endl;
    return 0;
}`,
      explanation: `arr ត្រូវបានបំប្លែងទៅ pointer ទៅ element ដំបូង។ p + 2 ជា pointer ទៅ element ដែលមាន index 2។ dereference វាផ្តល់តម្លៃ 30។ ប្រសិនបើយើងបង្ហាញ p + 2 ដោយគ្មាន * នោះនឹងជា address។`,
      expectedOutput: "30"
    },
    {
      id: "pointers-11",
      topicId: "pointers",
      title: "Pointer-Based String Length",
      difficulty: "challenge",
      type: "code",
      description: `C-string បញ្ចប់ដោយ null character ហើយយើងអាចរាប់តួអក្សរដោយដើរ pointer រហូតជួប null។ អ្នកត្រូវសរសេរ function គណនាប្រវែង string ដោយប្រើ char pointer។`,
      requirements: [
        "អានពាក្យមួយដែលគ្មានចន្លោះ។",
        "បង្កើត const char *ptr = text.c_str();។",
        "រាប់តួអក្សរដោយប្រើ pointer រហូតដល់ *ptr ស្មើ null character។",
        "បង្ហាញប្រវែងដែលបានរាប់។"
      ],
      input: "ពាក្យមួយដែលគ្មានចន្លោះ។",
      output: "ប្រវែងនៃពាក្យ។",
      samples: [{ input: "pointer", output: "7" }],
      constraints: ["មិនត្រូវប្រើ text.size() ឬ strlen សម្រាប់ការរាប់ទេ។", "ត្រូវប្រើ char pointer។"],
      hint: "while (*(ptr + length) != '\\0') { length++; } បន្ទាប់មកបង្ហាញ length។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string text;
    cin >> text;

    const char *ptr = text.c_str();
    int length = 0;
    while (*(ptr + length) != '\0') {
        length++;
    }

    cout << length << endl;
    return 0;
}`,
      explanation: `c_str() ផ្តល់ pointer ទៅ array តួអក្សរដែលបញ្ចប់ដោយ null character។ យើងរំកិល pointer ម្តងមួយតួអក្សរ ហើយបង្កើន length រហូតជួប null។ តម្លៃ length នៅពេលនោះគឺជាប្រវែង string។`,
      expectedOutput: "7"
    },
    {
      id: "pointers-12",
      topicId: "pointers",
      title: "Second Largest via Pointers",
      difficulty: "challenge",
      type: "code",
      description: `ការស្វែងរកតម្លៃធំបំផុតទីពីរត្រូវការតាមដានតម្លៃពីរដាច់ដោយឡែក។ អ្នកត្រូវប្រើ pointer ដើម្បីអាន array និងរកតម្លៃធំបំផុតទីពីរដែលខុសពីតម្លៃធំបំផុត។`,
      requirements: [
        "អាន n និង element ចំនួន n។",
        "ប្រើ pointer ដើម្បីអាន element ទាំងអស់។",
        "រកតម្លៃធំបំផុត និងតម្លៃធំបំផុតទីពីរដែលខុសគ្នា។",
        "បង្ហាញតម្លៃធំបំផុតទីពីរ។"
      ],
      input: "បន្ទាត់ទីមួយ n និងបន្ទាត់ទីពីរ element ចំនួន n។",
      output: "តម្លៃធំបំផុតទីពីរ។",
      samples: [{ input: "5\n10 5 20 20 8", output: "10" }],
      constraints: ["2 <= n <= 100។", "មានតម្លៃខុសគ្នាយ៉ាងតិចពីរ។"],
      hint: "ចាប់ផ្តើម largest និង second ជា INT_MIN។ បើ v > largest ផ្លាស់ second = largest និង largest = v។ បើ v < largest និង v > second ផ្លាស់ second = v។",
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

    int *ptr = arr;
    int largest = INT_MIN;
    int second = INT_MIN;
    for (int i = 0; i < n; i++) {
        int value = *(ptr + i);
        if (value > largest) {
            second = largest;
            largest = value;
        } else if (value < largest && value > second) {
            second = value;
        }
    }

    cout << second << endl;
    return 0;
}`,
      explanation: `largest រក្សាតម្លៃធំបំផុត ហើយ second រក្សាតម្លៃធំបំផុតទីពីរដែលខុសពី largest។ នៅពេលឃើញតម្លៃធំជាង largest យើងផ្លាស់ largest ចាស់ទៅ second។ លក្ខខណ្ឌ value < largest ការពារការរាប់តម្លៃស្មើគ្នាជា second។`,
      expectedOutput: "10"
    },
    {
      id: "pointers-13",
      topicId: "pointers",
      title: "Dynamic Matrix Sum",
      difficulty: "challenge",
      type: "code",
      description: `Matrix អាចបង្កើតនៅ runtime ដោយប្រើ pointer ទៅ pointer។ អ្នកត្រូវបង្កើត matrix ពីរវិមាត្រ អានតម្លៃ គណនាផលបូក និងបញ្ចេញ memory ឱ្យបានត្រឹមត្រូវ។`,
      requirements: [
        "អាន rows, cols និងតម្លៃ matrix ទាំងអស់។",
        "បង្កើត int **matrix ដោយប្រើ new។",
        "គណនាផលបូកគ្រប់ element ដោយប្រើ pointer arithmetic។",
        "បញ្ចេញ memory ទាំង row និង matrix ដោយ delete[]។"
      ],
      input: "បន្ទាត់ទីមួយ rows និង cols បន្ទាប់មកតម្លៃ matrix តាមជួរ។",
      output: "ផលបូក element ទាំងអស់ក្នុង matrix។",
      samples: [{ input: "2 3\n1 2 3\n4 5 6", output: "21" }],
      constraints: ["1 <= rows, cols <= 50។", "ត្រូវប្រើ new និង delete[] សម្រាប់ matrix។"],
      hint: "ប្រើ *(*(matrix + i) + j) ដើម្បីអាន element ជួរ i ជួរ j។ កុំភ្លេច delete[] រាល់ row មុន delete[] matrix។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int rows, cols;
    cin >> rows >> cols;

    int **matrix = new int*[rows];
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }

    int sum = 0;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            sum += *(*(matrix + i) + j);
        }
    }

    cout << sum << endl;

    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];
    }
    delete[] matrix;
    return 0;
}`,
      explanation: `matrix ជា pointer ទៅ array នៃ pointer ដែល row នីមួយៗជា array ដាច់ដោយឡែកនៅ heap។ *(*(matrix + i) + j) គឺស្មើនឹង matrix[i][j]។ ការបញ្ចេញ memory ត្រូវធ្វើពី row មុន បន្ទាប់មក matrix ដើម្បីជៀសវាង memory leak។`,
      expectedOutput: "21"
    }
  ]);
})();
