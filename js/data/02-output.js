(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "output-01",
      topicId: "output",
      title: "Two-Line Report",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីតូចមួយត្រូវបង្ហាញរបាយការណ៍ពីរបន្ទាត់នៅលើ console។ លំហាត់នេះហាត់ការប្រើ cout ជាមួយ newline ដើម្បីបំបែកបន្ទាត់ឱ្យបានត្រឹមត្រូវ។`,
      requirements: [
        "បង្ហាញអត្ថបទ C++ Output Practice នៅបន្ទាត់ទីមួយ។",
        "បង្ហាញអត្ថបទ Line two uses a newline. នៅបន្ទាត់ទីពីរ។",
        "ប្រើ newline ឬ endl ដើម្បីបញ្ចប់បន្ទាត់ទីមួយ។"
      ],
      input: null,
      output: "អត្ថបទពីរបន្ទាត់ដូចឧទាហរណ៍។",
      samples: [{ input: "", output: "C++ Output Practice\nLine two uses a newline." }],
      constraints: ["មិនត្រូវប្រើ input ពី keyboard ទេ។", "ត្រូវប្រើ cout សម្រាប់បង្ហាញលទ្ធផល។"],
      hint: "សរសេរ cout ពីរដង ហើយបញ្ចប់បន្ទាត់ទីមួយដោយ newline ឬ endl។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "C++ Output Practice\n";
    cout << "Line two uses a newline." << endl;
    return 0;
}`,
      explanation: `cout បញ្ជូនអត្ថបទទៅ console។ សញ្ញា newline បំបែក output ជាពីរបន្ទាត់ ហើយ endl ធ្វើការងារដូចគ្នា ព្រមទាំង flush buffer ផងដែរ។`,
      expectedOutput: "C++ Output Practice\nLine two uses a newline."
    },
    {
      id: "output-02",
      topicId: "output",
      title: "Tabbed Grocery List",
      difficulty: "beginner",
      type: "code",
      description: `បញ្ជីទំនិញគួរតែមានជួរឈរតម្រង់គ្នាសម្រាប់ឈ្មោះ និងតម្លៃ។ អ្នកត្រូវប្រើ tab escape sequence ដើម្បីបង្កើតគម្លាតរវាងជួរឈរ។`,
      requirements: [
        "បង្ហាញបន្ទាត់ header ដែលមាន Item និង Price បំបែកដោយ tab។",
        "បង្ហាញ Apple និង 1.25 ក្នុងបន្ទាត់មួយ។",
        "បង្ហាញ Bread និង 2.40 ក្នុងបន្ទាត់មួយ។"
      ],
      input: null,
      output: "បញ្ជីទំនិញបីបន្ទាត់ដែលប្រើ tab។",
      samples: [{ input: "", output: "Item\tPrice\nApple\t1.25\nBread\t2.40" }],
      constraints: ["ត្រូវប្រើ tab escape sequence មិនមែន space ធម្មតាទេ។", "មិនត្រូវប្រើ input ទេ។"],
      hint: "ក្នុង C++ សរសេរ tab ជា backslash បន្ទាប់មក t ក្នុង string literal។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "Item\tPrice" << endl;
    cout << "Apple\t1.25" << endl;
    cout << "Bread\t2.40" << endl;
    return 0;
}`,
      explanation: `Tab escape sequence បង្កើតគម្លាតធំជាង space ធម្មតា ហើយជួយឱ្យជួរឈរមើលទៅតម្រង់គ្នា។ វាមានប្រយោជន៍សម្រាប់តារាងសាមញ្ញនៅលើ console។`,
      expectedOutput: "Item\tPrice\nApple\t1.25\nBread\t2.40"
    },
    {
      id: "output-03",
      topicId: "output",
      title: "Quote and Backslash",
      difficulty: "beginner",
      type: "code",
      description: `ពេលបង្ហាញអត្ថបទដែលមានសញ្ញាសម្រង់ ឬ backslash អ្នកត្រូវប្រើ escape sequence។ លំហាត់នេះសាកល្បងការបង្ហាញសញ្ញាទាំងនោះឱ្យដូចអត្ថបទពិត។`,
      requirements: [
        "បង្ហាញបន្ទាត់ទីមួយថា He said, \"C++ is fun.\" ដោយមានសញ្ញាសម្រង់ពីរ។",
        "បង្ហាញបន្ទាត់ទីពីរថា Path: C:\\Users\\student។",
        "ប្រើ escape sequence សម្រាប់សញ្ញាសម្រង់ និង backslash។"
      ],
      input: null,
      output: "អត្ថបទពីរបន្ទាត់ដែលមានសញ្ញាសម្រង់ និង backslash។",
      samples: [{ input: "", output: "He said, \"C++ is fun.\"\nPath: C:\\Users\\student" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ backslash escape មិនមែនបញ្ចូលសញ្ញាដោយផ្ទាល់ទេ។"],
      hint: "សញ្ញាសម្រង់ក្នុង string ត្រូវសរសេរជា backslash បន្ទាប់មក double quote។ Backslash ត្រូវសរសេរជាពីរដង។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "He said, \"C++ is fun.\"" << endl;
    cout << "Path: C:\\Users\\student" << endl;
    return 0;
}`,
      explanation: `ក្នុង string literal សញ្ញា backslash បង្ហាញថាតួអក្សរបន្ទាប់មានអត្ថន័យពិសេស។ ដូច្នេះ backslash បន្ទាប់មក double quote បង្ហាញសញ្ញាសម្រង់ ហើយ backslash ពីរដងបង្ហាញ backslash មួយ។`,
      expectedOutput: "He said, \"C++ is fun.\"\nPath: C:\\Users\\student"
    },
    {
      id: "output-04",
      topicId: "output",
      title: "Simple Progress Bar",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីបង្ហាញវឌ្ឍនភាពចង់មាន progress bar ខ្លីៗនៅលើ console។ អ្នកត្រូវប្រើ setw ដើម្បីរៀបចំទទឹងនៃផ្នែកដែលបានបំពេញ។`,
      requirements: [
        "ប្រើ #include <iomanip> និង setw។",
        "បង្ហាញផ្នែកខាងក្នុងទទឹង 10 តួអក្សរ ដែលមានសញ្ញា = ចំនួន 5 នៅខាងឆ្វេង។",
        "បង្ហាញលទ្ធផលជា [=====     ] 50%។"
      ],
      input: null,
      output: "Progress bar មួយបន្ទាត់។",
      samples: [{ input: "", output: "[=====     ] 50%" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ setw សម្រាប់ទទឹងផ្នែកខាងក្នុង។"],
      hint: "ប្រើ left និង setw(10) ជាមួយ string ដែលមាន = ប្រាំ។ បន្ទាប់មកបង្ហាញ ] និង 50%។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    cout << "[" << left << setw(10) << "=====" << "] 50%" << endl;
    return 0;
}`,
      explanation: `setw(10) កំណត់ទទឹងអប្បបរមានៃ field បន្ទាប់។ ដោយប្រើ left សញ្ញា = ប្រាំត្រូវតម្រង់ឆ្វេង ហើយចន្លោះដែលនៅសល់បំពេញដោយ space ធម្មតា។`,
      expectedOutput: "[=====     ] 50%"
    },
    {
      id: "output-05",
      topicId: "output",
      title: "Price Column Report",
      difficulty: "intermediate",
      type: "code",
      description: `ហាងមួយចង់បង្ហាញតារាងតម្លៃដែលឈ្មោះទំនិញតម្រង់ឆ្វេង ហើយតម្លៃតម្រង់ស្តាំ។ អ្នកត្រូវរៀបចំជួរឈរដោយ setw និងបង្ហាញតម្លៃដោយលេខទសភាគពីរ។`,
      requirements: [
        "បង្ហាញ header Item និង Price ដោយ Item តម្រង់ឆ្វេង និង Price តម្រង់ស្តាំ។",
        "បង្ហាញ Coffee 3.50, Notebook 2.25 និង Total 5.75។",
        "ប្រើ setw(10) សម្រាប់ឈ្មោះ និង setw(8) សម្រាប់តម្លៃ។",
        "ប្រើ fixed និង setprecision(2) សម្រាប់តម្លៃទាំងអស់។"
      ],
      input: null,
      output: "តារាងតម្លៃបួនបន្ទាត់ដែលមានជួរឈរតម្រង់គ្នា។",
      samples: [{ input: "", output: "Item         Price\nCoffee        3.50\nNotebook      2.25\nTotal         5.75" }],
      constraints: ["មិនត្រូវប្រើ tab ដោយផ្ទាល់ទេ។", "ត្រូវប្រើ setw និង iomanip។"],
      hint: "កំណត់ left សម្រាប់ឈ្មោះ បន្ទាប់មក right សម្រាប់តម្លៃ។ កុំភ្លេច fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    cout << left << setw(10) << "Item" << right << setw(8) << "Price" << endl;
    cout << left << setw(10) << "Coffee" << right << setw(8) << fixed << setprecision(2) << 3.5 << endl;
    cout << left << setw(10) << "Notebook" << right << setw(8) << 2.25 << endl;
    cout << left << setw(10) << "Total" << right << setw(8) << 5.75 << endl;
    return 0;
}`,
      explanation: `ការតម្រង់ជួរឈរជួយឱ្យតារាងអានងាយ។ left ធ្វើឱ្យអត្ថបទជាប់ខាងឆ្វេង ហើយ right ធ្វើឱ្យលេខជាប់ខាងស្តាំក្នុងទទឹងដែលកំណត់។ setprecision(2) រក្សាលេខទសភាគពីរខ្ទង់។`,
      expectedOutput: "Item         Price\nCoffee        3.50\nNotebook      2.25\nTotal         5.75"
    },
    {
      id: "output-06",
      topicId: "output",
      title: "Quiz: Newline Behavior",
      difficulty: "intermediate",
      type: "quiz",
      description: `សិស្សម្នាក់ចង់ដឹងថា បើប្រើ cout ពីរដងជាប់គ្នាដោយគ្មាន newline រវាង នោះ output នឹងមើលទៅដូចម្តេច។ សូមអាន snippet ហើយជ្រើសរើសចម្លើយត្រឹមត្រូវ។`,
      requirements: ["អាន snippet ដោយយកចិត្តទុកដាក់លើ newline។", "ជ្រើសរើសលទ្ធផលដែលកម្មវិធីបង្ហាញ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    cout << "First";
    cout << "Second";
    cout << endl;
    return 0;
}`,
      quizQuestion: "តើ output នៃ snippet នេះជាអ្វី?",
      options: [
        "FirstSecond នៅបន្ទាត់ដំបូង បន្ទាប់មក newline។",
        "First និង Second នៅបន្ទាត់ដាច់ដោយឡែកពីគ្នា។",
        "First បន្ទាប់មក Second នៅបន្ទាត់ទីពីរ ដោយស្វ័យប្រវត្តិ។",
        "កម្មវិធីមិនអាច compile បានទេ។"
      ],
      correctIndex: 0,
      quizExplanation: "cout បន្ថែមអត្ថបទដោយគ្មាន newline ស្វ័យប្រវត្តិ។ ដូច្នេះ First និង Second នឹងនៅជាប់គ្នាជា FirstSecond រួចទើប endl បង្កើតបន្ទាត់ថ្មី។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "cout មិនបន្ថែម newline ដោយខ្លួនឯងទេ។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    cout << "First";
    cout << "Second";
    cout << endl;
    return 0;
}`,
      explanation: `ការបង្ហាញអត្ថបទជាប់គ្នានឹងនៅលើបន្ទាត់តែមួយ លុះត្រាតែមាន newline ឬ endl រវាង។ នេះជាមូលហេតុដែលយើងត្រូវគ្រប់គ្រង newline ដោយខ្លួនឯង។`,
      expectedOutput: "FirstSecond"
    },
    {
      id: "output-07",
      topicId: "output",
      title: "Right-Aligned Countdown",
      difficulty: "intermediate",
      type: "code",
      description: `ការបង្ហាញលេខរាប់ថយក្រោយគួរតែតម្រង់ស្តាំក្នុងទទឹងស្មើគ្នា ដើម្បីឱ្យមើលទៅមានរបៀប។ អ្នកត្រូវប្រើ setw និង right alignment សម្រាប់លេខ 3, 2 និង 1។`,
      requirements: [
        "បង្ហាញលេខ 3, 2 និង 1 ក្នុងទទឹង 5 តួអក្សរ ហើយតម្រង់ស្តាំ។",
        "បង្ហាញពាក្យ Liftoff នៅបន្ទាត់ចុងក្រោយដោយមិនតម្រង់។",
        "ប្រើ setw(5) សម្រាប់លេខនីមួយៗ។"
      ],
      input: null,
      output: "Countdown បួនបន្ទាត់។",
      samples: [{ input: "", output: "    3\n    2\n    1\nLiftoff" }],
      constraints: ["មិនត្រូវប្រើ loop ទេ។", "ត្រូវប្រើ right និង setw។"],
      hint: "កំណត់ cout << right; ម្តង បន្ទាប់មកប្រើ setw(5) មុនលេខនីមួយៗ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    cout << right;
    cout << setw(5) << 3 << endl;
    cout << setw(5) << 2 << endl;
    cout << setw(5) << 1 << endl;
    cout << "Liftoff" << endl;
    return 0;
}`,
      explanation: `right ធ្វើឱ្យតម្លៃតម្រង់ទៅខាងស្តាំក្នុងទទឹងដែល setw កំណត់។ ដូច្នេះលេខមួយខ្ទង់នឹងមានចន្លោះនៅខាងឆ្វេងបួន ហើយបន្ទាត់ទាំងបីតម្រង់គ្នា។`,
      expectedOutput: "    3\n    2\n    1\nLiftoff"
    },
    {
      id: "output-08",
      topicId: "output",
      title: "Receipt Separator Styles",
      difficulty: "advanced",
      type: "code",
      description: `វិក្កយបត្រមួយត្រូវការបន្ទាត់បំបែកពីរបែប គឺបន្ទាត់ដាច់ៗ និងបន្ទាត់ស្មើៗ។ អ្នកត្រូវប្រើ setfill និង setw ដើម្បីបង្កើតបន្ទាត់ទាំងនោះឱ្យមានប្រវែង 30។`,
      requirements: [
        "បង្ហាញបន្ទាត់ដាច់ៗចំនួន 30 តួអក្សរនៅបន្ទាត់ទីមួយ។",
        "បង្ហាញអត្ថបទ ETEC Coffee នៅបន្ទាត់ទីពីរ។",
        "បង្ហាញបន្ទាត់សញ្ញា = ចំនួន 30 នៅបន្ទាត់ទីបី។",
        "ប្រើ setfill និង setw(30)។"
      ],
      input: null,
      output: "បន្ទាត់បំបែកពីរបែបដែលមានប្រវែង 30។",
      samples: [{ input: "", output: "------------------------------\nETEC Coffee\n==============================" }],
      constraints: ["មិនត្រូវប្រើ loop ទេ។", "ប្រវែងបន្ទាត់នីមួយៗត្រូវមាន 30 តួអក្សរ។"],
      hint: "ប្រើ setfill('-') ជាមួយ setw(30) សម្រាប់បន្ទាត់ដាច់ៗ ហើយ setfill('=') សម្រាប់បន្ទាត់ស្មើៗ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    cout << setfill('-') << setw(30) << "-" << endl;
    cout << setfill(' ') << "ETEC Coffee" << endl;
    cout << setfill('=') << setw(30) << "=" << endl;
    return 0;
}`,
      explanation: `setfill កំណត់តួអក្សរដែលប្រើបំពេញចន្លោះក្នុង field។ ពេលរួមជាមួយ setw(30) វាបង្កើតបន្ទាត់ដែលមានប្រវែងពេញលេញ 30 ដោយមិនចាំបាច់វាយសញ្ញាដដែលៗ។`,
      expectedOutput: "------------------------------\nETEC Coffee\n=============================="
    },
    {
      id: "output-09",
      topicId: "output",
      title: "Fruit Market Table",
      difficulty: "advanced",
      type: "code",
      description: `ផ្សារមួយចង់បង្ហាញតារាងផ្លែឈើដែលមានឈ្មោះ ចំនួន និងតម្លៃ។ អ្នកត្រូវរៀបចំជួរឈរបីឱ្យតម្រង់គ្នាដោយប្រើ iomanip។`,
      requirements: [
        "បង្ហាញ header Fruit, Qty និង Price។",
        "បង្ហាញ Apple ចំនួន 10 តម្លៃ 1.25។",
        "បង្ហាញ Mango ចំនួន 5 តម្លៃ 2.50។",
        "ឈ្មោះតម្រង់ឆ្វេងទទឹង 10, ចំនួនតម្រង់ស្តាំទទឹង 5 និងតម្លៃតម្រង់ស្តាំទទឹង 8។"
      ],
      input: null,
      output: "តារាងផ្លែឈើបីបន្ទាត់។",
      samples: [{ input: "", output: "Fruit       Qty   Price\nApple        10    1.25\nMango         5    2.50" }],
      constraints: ["មិនត្រូវប្រើ tab ដោយផ្ទាល់ទេ។", "ត្រូវប្រើ fixed និង setprecision(2) សម្រាប់តម្លៃ។"],
      hint: "កំណត់ left សម្រាប់ឈ្មោះ ហើយ right សម្រាប់ Qty និង Price។ ប្រើ setw ខុសៗគ្នាតាមប្រភេទជួរឈរ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    cout << fixed << setprecision(2);
    cout << left << setw(10) << "Fruit" << right << setw(5) << "Qty" << setw(8) << "Price" << endl;
    cout << left << setw(10) << "Apple" << right << setw(5) << 10 << setw(8) << 1.25 << endl;
    cout << left << setw(10) << "Mango" << right << setw(5) << 5 << setw(8) << 2.50 << endl;
    return 0;
}`,
      explanation: `តារាងដែលមានជួរឈរច្រើនត្រូវការការតម្រង់ដាច់ដោយឡែក។ យើងតម្រង់ឈ្មោះទៅឆ្វេង ហើយលេខទៅស្តាំ ដើម្បីឱ្យភ្នែកអានលេខបានងាយ។ setw អនុវត្តតែចំពោះតម្លៃបន្ទាប់ប៉ុណ្ណោះ។`,
      expectedOutput: "Fruit       Qty   Price\nApple        10    1.25\nMango         5    2.50"
    },
    {
      id: "output-10",
      topicId: "output",
      title: "Quiz: setw Scope",
      difficulty: "advanced",
      type: "quiz",
      description: `setw គឺជា manipulator ដែលមានឥទ្ធិពលត្រឹមតែ output បន្ទាប់ប៉ុណ្ណោះ។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output ត្រឹមត្រូវ។`,
      requirements: ["យល់ពីឥទ្ធិពលនៃ setw។", "ជ្រើសរើស output ដែលត្រូវនឹង snippet។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << setw(8) << "C++" << "OK";
    return 0;
}`,
      quizQuestion: "តើ output នៃ snippet នេះជាអ្វី?",
      options: [
        "     C++OK ដោយ C++ តម្រង់ស្តាំក្នុងទទឹង 8 ហើយ OK នៅជាប់ភ្លាម។",
        "     C++     OK ដោយ setw អនុវត្តលើទាំងពីរ។",
        "C++OK ដោយគ្មានចន្លោះ។",
        "កម្មវិធីមិនអាច compile បានទេ។"
      ],
      correctIndex: 0,
      quizExplanation: "setw(8) អនុវត្តលើ output បន្ទាប់តែមួយគត់ គឺ C++។ បន្ទាប់មក OK ត្រូវបញ្ចូលភ្លាមៗដោយគ្មាន padding បន្ថែមទេ។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "setw មានប្រសិទ្ធភាពត្រឹមតែ field បន្ទាប់ប៉ុណ្ណោះ។",
      solution: String.raw`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << setw(8) << "C++" << "OK";
    return 0;
}`,
      explanation: `Manipulator ខ្លះដូចជា fixed ឬ left នៅតែមានប្រសិទ្ធភាពបន្ត ប៉ុន្តែ setw អនុវត្តតែលើ output បន្ទាប់ម្តងប៉ុណ្ណោះ។ ដូច្នេះត្រូវហៅ setw ម្តងទៀតបើចង់រៀបចំ field បន្ទាប់។`,
      expectedOutput: "     C++OK"
    },
    {
      id: "output-11",
      topicId: "output",
      title: "Formatted Student Card",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីចុះឈ្មោះសិស្សត្រូវអានឈ្មោះ និងអាយុ រួចបង្ហាញជាកាតខ្លីៗដែល label តម្រង់គ្នា។ អ្នកត្រូវប្រើ setw ដើម្បីធ្វើឱ្យសញ្ញា : តម្រង់ជួរ។`,
      requirements: [
        "អានឈ្មោះជា string និងអាយុជា int ពី input។",
        "បង្ហាញ Name និង Age ដោយ label តម្រង់ឆ្វេងទទឹង 6។",
        "បង្ហាញទម្រង់ដូចឧទាហរណ៍ ដោយមានសញ្ញា : និង space បន្ទាប់ពី label។"
      ],
      input: "ឈ្មោះមួយពាក្យ និងអាយុជាចំនួនគត់ បំបែកដោយចន្លោះ។",
      output: "កាតសិស្សពីរបន្ទាត់។",
      samples: [{ input: "Dara 19", output: "Name  : Dara\nAge   : 19" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt មុនពេលអាន input ទេ។", "ត្រូវប្រើ setw(6) និង left។"],
      hint: "អានដោយ cin >> name >> age; បន្ទាប់មក cout << left << setw(6) << \"Name\" << \": \" << name;",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;
    int age;
    cin >> name >> age;

    cout << left << setw(6) << "Name" << ": " << name << endl;
    cout << left << setw(6) << "Age" << ": " << age << endl;
    return 0;
}`,
      explanation: `ការអាន input ដោយស្ងៀមស្ងាត់ធ្វើឱ្យ output ស្អាត និងងាយប្រៀបធៀប។ setw(6) ផ្តល់ទទឹងស្មើគ្នាដល់ label ទាំងពីរ ដូច្នេះសញ្ញា : និងតម្លៃនៅតម្រង់ជួរគ្នា។`,
      expectedOutput: "Name  : Dara\nAge   : 19"
    },
    {
      id: "output-12",
      topicId: "output",
      title: "Invoice Total Table",
      difficulty: "challenge",
      type: "code",
      description: `ហាងមួយត្រូវការគណនាវិក្កយបត្រពីតម្លៃទំនិញបី ហើយបង្ហាញ subtotal, tax និង total។ អ្នកត្រូវអានតម្លៃទាំងបី រួចបង្ហាញលទ្ធផលដោយលេខទសភាគពីរ។`,
      requirements: [
        "អានតម្លៃទំនិញបីជា double ពី input។",
        "គណនា subtotal ជាផលបូកតម្លៃទាំងបី។",
        "គណនា tax ស្មើ 10% នៃ subtotal និង total ស្មើ subtotal បូក tax។",
        "បង្ហាញ Price 1, Price 2, Price 3, Subtotal, Tax និង Total ដោយ setprecision(2)។"
      ],
      input: "តម្លៃទំនិញបីជា decimal បំបែកដោយចន្លោះ។",
      output: "វិក្កយបត្រប្រាំមួយបន្ទាត់។",
      samples: [{ input: "10.00 20.00 30.00", output: "Price 1: 10.00\nPrice 2: 20.00\nPrice 3: 30.00\nSubtotal: 60.00\nTax: 6.00\nTotal: 66.00" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ fixed និង setprecision(2)។"],
      hint: "អាន p1, p2, p3 ហើយគណនា subtotal = p1 + p2 + p3; tax = subtotal * 0.10; total = subtotal + tax។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double p1, p2, p3;
    cin >> p1 >> p2 >> p3;

    double subtotal = p1 + p2 + p3;
    double tax = subtotal * 0.10;
    double total = subtotal + tax;

    cout << fixed << setprecision(2);
    cout << "Price 1: " << p1 << endl;
    cout << "Price 2: " << p2 << endl;
    cout << "Price 3: " << p3 << endl;
    cout << "Subtotal: " << subtotal << endl;
    cout << "Tax: " << tax << endl;
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `ការគណនាវិក្កយបត្រចាប់ផ្តើមពី subtotal បន្ទាប់មកបន្ថែម tax ដើម្បីទទួល total។ fixed និង setprecision(2) ធានាថាតម្លៃទាំងអស់បង្ហាញពីរខ្ទង់ទសភាគ ដែលសមស្របសម្រាប់ប្រាក់។`,
      expectedOutput: "Price 1: 10.00\nPrice 2: 20.00\nPrice 3: 30.00\nSubtotal: 60.00\nTax: 6.00\nTotal: 66.00"
    },
    {
      id: "output-13",
      topicId: "output",
      title: "Dynamic Greeting Box",
      difficulty: "challenge",
      type: "code",
      description: `ប្រអប់ស្វាគមន៍គួរតែមានទំហំសមស្របនឹងប្រវែងឈ្មោះរបស់អ្នកប្រើ។ អ្នកត្រូវអានឈ្មោះមួយបន្ទាត់ រួចបង្ហាញប្រអប់ដែលមានស៊ុម +, - និង | ដោយគណនាទទឹងពីប្រវែងឈ្មោះ។`,
      requirements: [
        "អានឈ្មោះទាំងមូលដោយ getline។",
        "បង្ហាញបន្ទាត់កំពូល + បន្ទាប់មក - ចំនួន name.size() + 2 និង + បិទ។",
        "បង្ហាញបន្ទាត់កណ្តាល | space name space |។",
        "បង្ហាញបន្ទាត់ក្រោមដូចបន្ទាត់កំពូល។"
      ],
      input: "ឈ្មោះមួយបន្ទាត់ ដែលអាចមានចន្លោះ។",
      output: "ប្រអប់ស្វាគមន៍បីបន្ទាត់។",
      samples: [{ input: "Dara", output: "+------+\n| Dara |\n+------+" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ setfill និង setw ដើម្បីបង្កើតបន្ទាត់ស៊ុម។"],
      hint: "ប្រើ getline(cin, name); បន្ទាប់មកបង្ហាញ +, setfill('-') ជាមួយ setw(name.size() + 2) និង + ។ បន្ទាប់មកកំណត់ setfill ត្រឡប់ជា space។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;
    getline(cin, name);

    int border = name.size() + 2;
    cout << "+" << setfill('-') << setw(border) << "-" << "+" << endl;
    cout << setfill(' ') << "| " << name << " |" << endl;
    cout << "+" << setfill('-') << setw(border) << "-" << "+" << endl;
    return 0;
}`,
      explanation: `យើងគណនាទទឹងស៊ុមពីប្រវែងឈ្មោះ ដូច្នេះប្រអប់អាចបត់បែនបានតាម input។ setfill('-') និង setw(border) បង្កើតបន្ទាត់ដាច់ៗដែលមានប្រវែងត្រឹមត្រូវ ហើយការកំណត់ setfill ត្រឡប់ជា space ការពារកុំឱ្យបន្ទាត់កណ្តាលមានសញ្ញាដាច់ៗដោយអចេតនា។`,
      expectedOutput: "+------+\n| Dara |\n+------+"
    }
  ]);
})();
