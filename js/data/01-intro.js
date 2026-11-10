(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "intro-01",
      topicId: "intro",
      title: "Hello, C++!",
      difficulty: "beginner",
      type: "code",
      description: `ចាប់ផ្តើមដំណើររបស់អ្នកជាមួយកម្មវិធី C++ ដំបូង។ លំហាត់នេះសាកល្បងថាតើអ្នកយល់ពីរចនាសម្ព័ន្ធមូលដ្ឋាននៃកម្មវិធី និងអាចបង្ហាញអត្ថបទដោយ cout បានឬយ៉ាងណា។`,
      requirements: [
        "បង្ហាញអត្ថបទ Hello, World! នៅបន្ទាត់ទីមួយ។",
        "បង្ហាញអត្ថបទ Welcome to C++ Practice Hub. នៅបន្ទាត់ទីពីរ។",
        "ត្រូវមាន function main និង return 0 ឱ្យបានត្រឹមត្រូវ។"
      ],
      input: null,
      output: "អត្ថបទពីរបន្ទាត់ដូចឧទាហរណ៍។",
      samples: [{ input: "", output: "Hello, World!\nWelcome to C++ Practice Hub." }],
      constraints: ["មិនត្រូវប្រើ input ពី keyboard ទេ។", "សរសេរកូដ C++ ធម្មតា ដែលអាច compile បាន។"],
      hint: "ប្រើ #include <iostream> សម្រាប់ cout, បន្ទាប់មកបង្ហាញអត្ថបទដោយ cout << ... << endl;។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Welcome to C++ Practice Hub." << endl;
    return 0;
}`,
      explanation: `កម្មវិធី C++ ត្រូវការ function main ជាចំណុចចាប់ផ្តើម។ cout ប្រើសម្រាប់បញ្ជូនអត្ថបទទៅ console ហើយ endl បង្កើតបន្ទាត់ថ្មី។ បន្ទាប់ពីបញ្ហាត្រូវបានដោះស្រាយ យើង return 0 ដើម្បីប្រាប់ថាកម្មវិធីបញ្ចប់ដោយជោគជ័យ។`,
      expectedOutput: "Hello, World!\nWelcome to C++ Practice Hub."
    },
    {
      id: "intro-02",
      topicId: "intro",
      title: "Student ID Card",
      difficulty: "beginner",
      type: "code",
      description: `សាលាមួយចង់បង្កើតកាតសិស្សសាមញ្ញនៅលើ console ដែលមានឈ្មោះ លេខសម្គាល់ និងថ្នាក់រៀន។ ទិន្នន័យទាំងអស់ត្រូវកំណត់ជា string នៅក្នុងកម្មវិធីដោយផ្ទាល់។`,
      requirements: [
        "ប្រកាស string សម្រាប់ឈ្មោះ លេខសម្គាល់ និងថ្នាក់រៀន។",
        "បង្ហាញព័ត៌មានជាបីបន្ទាត់ ដោយប្រើ label ដូចឧទាហរណ៍។",
        "ប្រើទិន្នន័យ Sokha Dara, ETEC-2026-015 និង C++ Evening 01។"
      ],
      input: null,
      output: "កាតសិស្សដែលមានឈ្មោះ លេខសម្គាល់ និងថ្នាក់រៀន។",
      samples: [{ input: "", output: "Name: Sokha Dara\nStudent ID: ETEC-2026-015\nClass: C++ Evening 01" }],
      constraints: ["តម្លៃទាំងអស់ត្រូវកំណត់ក្នុងកូដ មិនត្រូវប្រើ cin ទេ។"],
      hint: "ប្រើ #include <string> និងប្រកាស string name = \"...\"; បន្ទាប់មក cout ជាមួយ label។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string name = "Sokha Dara";
    string studentId = "ETEC-2026-015";
    string className = "C++ Evening 01";

    cout << "Name: " << name << endl;
    cout << "Student ID: " << studentId << endl;
    cout << "Class: " << className << endl;
    return 0;
}`,
      explanation: `string អាចរក្សាទុកអត្ថបទច្រើនតួអក្សរ។ យើងប្រកាស variable បី ហើយភ្ជាប់ពួកវាជាមួយ label ក្នុង cout។ ការប្រើ variable ធ្វើឱ្យកូដងាយកែប្រែជាងការសរសេរអត្ថបទដដែលៗ។`,
      expectedOutput: "Name: Sokha Dara\nStudent ID: ETEC-2026-015\nClass: C++ Evening 01"
    },
    {
      id: "intro-03",
      topicId: "intro",
      title: "First Program Checklist",
      difficulty: "beginner",
      type: "code",
      description: `មុនពេលសរសេរកម្មវិធី C++ ធំៗ អ្នកត្រូវដឹងពីធាតុចាំបាច់នៅក្នុងកម្មវិធីដំបូង។ លំហាត់នេះស្នើឱ្យបង្ហាញ checklist នៃជំហានសំខាន់ៗជាអត្ថបទ។`,
      requirements: [
        "បង្ហាញបន្ទាត់ទីមួយថា [OK] Include iostream។",
        "បង្ហាញបន្ទាត់ទីពីរថា [OK] Declare main function។",
        "បង្ហាញបន្ទាត់ទីបីថា [OK] Print output with cout។",
        "បង្ហាញបន្ទាត់ទីបួនថា [OK] Return 0។"
      ],
      input: null,
      output: "Checklist បួនបន្ទាត់។",
      samples: [{ input: "", output: "[OK] Include iostream\n[OK] Declare main function\n[OK] Print output with cout\n[OK] Return 0" }],
      constraints: ["មិនត្រូវប្រើ loop ទេ។", "ប្រើ cout តែម្តងក្នុងមួយបន្ទាត់ output។"],
      hint: "សរសេរ cout បួនដង ហើយបញ្ចប់បន្ទាត់ដោយ endl ឬ \\n។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "[OK] Include iostream" << endl;
    cout << "[OK] Declare main function" << endl;
    cout << "[OK] Print output with cout" << endl;
    cout << "[OK] Return 0" << endl;
    return 0;
}`,
      explanation: `Checklist នេះរំលឹកពីរចនាសម្ព័ន្ធអប្បបរមានៃកម្មវិធី C++។ iostream ផ្តល់ cout, main ជាចំណុចចាប់ផ្តើម, cout បង្ហាញលទ្ធផល ហើយ return 0 បញ្ចប់ main ដោយជោគជ័យ។`,
      expectedOutput: "[OK] Include iostream\n[OK] Declare main function\n[OK] Print output with cout\n[OK] Return 0"
    },
    {
      id: "intro-04",
      topicId: "intro",
      title: "Predefined Score Summary",
      difficulty: "beginner",
      type: "code",
      description: `គ្រូម្នាក់ចង់គណនាពិន្ទុសរុប និងមធ្យមភាគរបស់សិស្សម្នាក់ពីមុខវិជ្ជាបី។ ពិន្ទុទាំងបីត្រូវកំណត់ក្នុងកូដ ហើយបង្ហាញលទ្ធផលជាមួយចំនួនទសភាគមួយ។`,
      requirements: [
        "កំណត់ពិន្ទុ 80, 90 និង 70 ជា variable។",
        "គណនាពិន្ទុសរុប និងមធ្យមភាគ។",
        "បង្ហាញ Total និង Average ដោយ Average មានលេខទសភាគមួយ។"
      ],
      input: null,
      output: "Total: 240 និង Average: 80.0។",
      samples: [{ input: "", output: "Total: 240\nAverage: 80.0" }],
      constraints: ["ប្រើ double សម្រាប់មធ្យមភាគ។", "ពិន្ទុត្រូវកំណត់ក្នុងកូដ មិនត្រូវប្រើ cin ទេ។"],
      hint: "គណនា total = a + b + c; average = total / 3.0; ហើយប្រើ fixed និង setprecision(1) ដើម្បីបង្ហាញទសភាគមួយ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int score1 = 80;
    int score2 = 90;
    int score3 = 70;
    int total = score1 + score2 + score3;
    double average = total / 3.0;

    cout << "Total: " << total << endl;
    cout << fixed << setprecision(1);
    cout << "Average: " << average << endl;
    return 0;
}`,
      explanation: `ពិន្ទុសរុបគឺជាផលបូកធម្មតា។ សម្រាប់មធ្យមភាគ យើងចែកនឹង 3.0 ដើម្បីឱ្យការចែកជា double មិនមែន integer division។ setprecision(1) បង្ហាញលេខទសភាគមួយខ្ទង់។`,
      expectedOutput: "Total: 240\nAverage: 80.0"
    },
    {
      id: "intro-05",
      topicId: "intro",
      title: "Console Receipt Header",
      difficulty: "intermediate",
      type: "code",
      description: `ហាងកាហ្វេតូចមួយចង់បង្ហាញក្បាលវិក្កយបត្រនៅលើ console មុនពេលបញ្ជីទំនិញ។ អ្នកត្រូវបង្កើតទម្រង់ដែលមានឈ្មោះហាង លេខវិក្កយបត្រ កាលបរិច្ឆេទ និងបន្ទាត់បំបែក។`,
      requirements: [
        "ប្រើ string សម្រាប់ឈ្មោះហាង លេខវិក្កយបត្រ និងកាលបរិច្ឆេទ។",
        "បង្ហាញឈ្មោះហាងនៅកណ្តាលជួរដោយប្រហែល 30 តួអក្សរ។",
        "បង្ហាញលេខវិក្កយបត្រ និងកាលបរិច្ឆេទនៅបន្ទាត់ដាច់ដោយឡែក។",
        "បន្ថែមបន្ទាត់បំបែកដោយសញ្ញា = ចំនួន 30។"
      ],
      input: null,
      output: "ក្បាលវិក្កយបត្រដែលមានទម្រង់ច្បាស់លាស់។",
      samples: [{ input: "", output: "        ETEC Coffee\n==============================\nReceipt: INV-2026-001\nDate: 08 Nov 2026\n==============================" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ចំនួនសញ្ញា = ក្នុងបន្ទាត់បំបែកត្រូវមាន 30។"],
      hint: "ប្រើ string និង cout ច្រើនបន្ទាត់។ អ្នកអាចដាក់ space នៅដើមអត្ថបទដើម្បីធ្វើឱ្យវានៅកណ្តាល។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string shop = "ETEC Coffee";
    string receipt = "INV-2026-001";
    string date = "08 Nov 2026";

    cout << "        " << shop << endl;
    cout << "==============================" << endl;
    cout << "Receipt: " << receipt << endl;
    cout << "Date: " << date << endl;
    cout << "==============================" << endl;
    return 0;
}`,
      explanation: `ការរៀបចំ output គឺជាផ្នែកមួយនៃ UX។ យើងប្រើ string ដើម្បីរក្សាទិន្នន័យ ហើយ cout ដើម្បីបង្ហាញតាមលំដាប់ដែលបានកំណត់។ ចន្លោះនៅដើមជួរជួយឱ្យឈ្មោះហាងមើលទៅនៅកណ្តាល។`,
      expectedOutput: "        ETEC Coffee\n==============================\nReceipt: INV-2026-001\nDate: 08 Nov 2026\n=============================="
    },
    {
      id: "intro-06",
      topicId: "intro",
      title: "Quiz: Missing Semicolon",
      difficulty: "intermediate",
      type: "quiz",
      description: `សិស្សម្នាក់សរសេរកម្មវិធី C++ ប៉ុន្តែ compiler បដិសេធ។ សូមពិនិត្យ snippet ខាងក្រោម ហើយជ្រើសរើសមូលហេតុដែលធ្វើឱ្យកូដមិនអាច compile បាន។`,
      requirements: ["អាន code snippet ដោយយកចិត្តទុកដាក់លើ syntax។", "ជ្រើសរើសចម្លើយមួយដែលពន្យល់បញ្ហាបានត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl
    return 0;
}`,
      quizQuestion: "តើអ្វីជាបញ្ហាសំខាន់នៅក្នុង snippet នេះ?",
      options: [
        "ខ្វះសញ្ញា ; បន្ទាប់ពី endl នៅបន្ទាត់ cout។",
        "មិនអាចប្រើ using namespace std; បានទេ។",
        "function main ត្រូវតែជា void ជានិច្ច។",
        "ត្រូវលុប #include <iostream> ចេញ។"
      ],
      correctIndex: 0,
      quizExplanation: "Statement cout ត្រូវបញ្ចប់ដោយ semicolon។ បើខ្វះ ; compiler នឹងរាយការណ៍ error នៅបន្ទាត់បន្ទាប់។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ពិនិត្យចុងបញ្ចប់នៃបន្ទាត់ cout នីមួយៗ។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}`,
      explanation: `បន្ទាត់ cout ត្រូវបញ្ចប់ដោយ semicolon។ បើខ្វះ ; compiler នឹងរាយការណ៍ error នៅបន្ទាត់បន្ទាប់។ ការអាន error message និងពិនិត្យ syntax ជួយឱ្យយើងរកបញ្ហាបានលឿន។`,
      expectedOutput: "Hello"
    },
    {
      id: "intro-07",
      topicId: "intro",
      title: "Study Session Summary",
      difficulty: "intermediate",
      type: "code",
      description: `សិស្សម្នាក់បានរៀន C++ រយៈពេល 2 ម៉ោង 35 នាទីលើប្រធានបទ Loops។ អ្នកត្រូវបង្ហាញសេចក្តីសង្ខេបនៃវគ្គរៀននេះ និងគណនាចំនួននាទីសរុប។`,
      requirements: [
        "កំណត់ topic ជា string, hours និង minutes ជា integer។",
        "គណនាចំនួននាទីសរុប។",
        "បង្ហាញ Topic, Duration និង Total minutes តាមទម្រង់ឧទាហរណ៍។"
      ],
      input: null,
      output: "សេចក្តីសង្ខេបវគ្គរៀន។",
      samples: [{ input: "", output: "Topic: Loops\nDuration: 2h 35m\nTotal minutes: 155" }],
      constraints: ["hours = 2 និង minutes = 35។", "មិនត្រូវប្រើ input ទេ។"],
      hint: "ចំនួននាទីសរុប = hours * 60 + minutes។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string topic = "Loops";
    int hours = 2;
    int minutes = 35;
    int totalMinutes = hours * 60 + minutes;

    cout << "Topic: " << topic << endl;
    cout << "Duration: " << hours << "h " << minutes << "m" << endl;
    cout << "Total minutes: " << totalMinutes << endl;
    return 0;
}`,
      explanation: `យើងបំប្លែងម៉ោងទៅជានាទីដោយគុណនឹង 60 រួចបូកនាទីដែលនៅសល់។ នេះជាគំរូគណនាដែលអ្នកនឹងប្រើញឹកញាប់នៅពេលធ្វើការជាមួយពេលវេលា។`,
      expectedOutput: "Topic: Loops\nDuration: 2h 35m\nTotal minutes: 155"
    },
    {
      id: "intro-08",
      topicId: "intro",
      title: "ASCII Frame",
      difficulty: "advanced",
      type: "code",
      description: `សិស្សក្លឹប C++ ចង់បង្កើតប្រអប់ ASCII សាមញ្ញដែលមានអក្សរ CPP នៅខាងក្នុង។ លំហាត់នេះហាត់ការរៀបចំ output ឱ្យមានទម្រង់ស៊ីមេទ្រី។`,
      requirements: [
        "បង្ហាញប្រអប់ដែលមានទទឹង 15 តួអក្សរ និងកម្ពស់ 5 បន្ទាត់។",
        "អក្សរ CPP ត្រូវនៅកណ្តាលបន្ទាត់ទីបី។",
        "ប្រើសញ្ញា +, - និង | សម្រាប់ស៊ុម។"
      ],
      input: null,
      output: "ប្រអប់ ASCII មានអក្សរ CPP។",
      samples: [{ input: "", output: "+-------------+\n|             |\n|     CPP     |\n|             |\n+-------------+" }],
      constraints: ["មិនត្រូវប្រើ loop ទេ។", "ចំនួន - ក្នុងបន្ទាត់ខាងលើ និងខាងក្រោមត្រូវស្មើគ្នា។"],
      hint: "រាប់ចន្លោះឱ្យបានត្រឹមត្រូវ។ បន្ទាត់កំពូលប្រើ + បើក បន្ទាប់មក - ចំនួន 13 និង + បិទ។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "+-------------+" << endl;
    cout << "|             |" << endl;
    cout << "|     CPP     |" << endl;
    cout << "|             |" << endl;
    cout << "+-------------+" << endl;
    return 0;
}`,
      explanation: `ASCII art ត្រូវការការរាប់ចន្លោះ និងតួអក្សរឱ្យបានត្រឹមត្រូវ។ បន្ទាត់នីមួយៗមានទទឹងស្មើគ្នា ដើម្បីឱ្យស៊ុមមើលទៅជាប្រអប់ពិតប្រាកដ។`,
      expectedOutput: "+-------------+\n|             |\n|     CPP     |\n|             |\n+-------------+"
    },
    {
      id: "intro-09",
      topicId: "intro",
      title: "Welcome Menu Screen",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីគ្រប់គ្រងសាលាមួយត្រូវការអេក្រង់ស្វាគមន៍មុនពេលចូលប្រើ។ អ្នកត្រូវបង្ហាញចំណងជើង និងជម្រើសម៉ឺនុយឱ្យមានទម្រង់ច្បាស់លាស់។`,
      requirements: [
        "បង្ហាញចំណងជើង ETEC Student Portal នៅកណ្តាល។",
        "បង្ហាញជម្រើស 1. View profile, 2. Check scores, 3. Exit។",
        "បង្ហាញបន្ទាត់បំបែក 40 តួអក្សរមុន និងក្រោយម៉ឺនុយ។",
        "បង្ហាញប្រយោគស្វាគមន៍នៅខាងក្រោម។"
      ],
      input: null,
      output: "ម៉ឺនុយស្វាគមន៍ដែលបានរៀបចំ។",
      samples: [{ input: "", output: "========================================\n          ETEC Student Portal\n========================================\n1. View profile\n2. Check scores\n3. Exit\n========================================\nWelcome! Please choose an option." }],
      constraints: ["មិនត្រូវប្រើ input ឬ switch ទេ។", "ប្រវែងបន្ទាត់បំបែកត្រូវមាន 40 តួអក្សរ។"],
      hint: "បង្កើត string menu ឬប្រើ cout ច្រើនបន្ទាត់។ ចន្លោះមុនចំណងជើងជួយឱ្យវាមើលទៅកណ្តាល។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "========================================" << endl;
    cout << "          ETEC Student Portal" << endl;
    cout << "========================================" << endl;
    cout << "1. View profile" << endl;
    cout << "2. Check scores" << endl;
    cout << "3. Exit" << endl;
    cout << "========================================" << endl;
    cout << "Welcome! Please choose an option." << endl;
    return 0;
}`,
      explanation: `ម៉ឺនុយ console ល្អត្រូវមានចំណងជើង បន្ទាត់បំបែក និងជម្រើសដែលអានងាយ។ ការរៀបចំឱ្យស្មើគ្នាជួយឱ្យអ្នកប្រើយល់ភ្លាមៗថាត្រូវធ្វើអ្វីបន្ទាប់។`,
      expectedOutput: "========================================\n          ETEC Student Portal\n========================================\n1. View profile\n2. Check scores\n3. Exit\n========================================\nWelcome! Please choose an option."
    },
    {
      id: "intro-10",
      topicId: "intro",
      title: "Aligned Profile Card",
      difficulty: "advanced",
      type: "code",
      description: `ផ្នែករដ្ឋបាលចង់បង្ហាញព័ត៌មានសិស្សជាតារាងខ្លីៗ ដែល label ត្រូវតម្រង់ជួរស្មើគ្នា។ លំហាត់នេះប្រើ iomanip ដើម្បីរៀបចំទទឹងជួរ។`,
      requirements: [
        "ប្រើ #include <iomanip> និង setw។",
        "បង្ហាញ label Name, Student ID និង Major ជាជួរតម្រង់ឆ្វេងទទឹង 12។",
        "បង្ហាញតម្លៃ Sokha Dara, ETEC-2026-015 និង Software Engineering។"
      ],
      input: null,
      output: "តារាង Profile ដែល label តម្រង់ជួរ។",
      samples: [{ input: "", output: "Name        : Sokha Dara\nStudent ID  : ETEC-2026-015\nMajor       : Software Engineering" }],
      constraints: ["មិនត្រូវប្រើ tab ដោយផ្ទាល់ទេ។", "ត្រូវប្រើ left និង setw(12)។"],
      hint: "cout << left << setw(12) << \"Name\" << \": \" << value << endl;",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name = "Sokha Dara";
    string studentId = "ETEC-2026-015";
    string major = "Software Engineering";

    cout << left;
    cout << setw(12) << "Name" << ": " << name << endl;
    cout << setw(12) << "Student ID" << ": " << studentId << endl;
    cout << setw(12) << "Major" << ": " << major << endl;
    return 0;
}`,
      explanation: `setw(12) កំណត់ទទឹងអប្បបរមានៃ field បន្ទាប់។ left ធ្វើឱ្យអត្ថបទតម្រង់ឆ្វេងក្នុងទទឹងនោះ។ ដូច្នេះ label ទាំងបីមានទទឹងស្មើគ្នា ហើយសញ្ញា : តម្រង់ជួរ។`,
      expectedOutput: "Name        : Sokha Dara\nStudent ID  : ETEC-2026-015\nMajor       : Software Engineering"
    },
    {
      id: "intro-11",
      topicId: "intro",
      title: "Three-Day Learning Plan",
      difficulty: "challenge",
      type: "code",
      description: `សិស្សម្នាក់ចង់មានផែនការរៀន C++ រយៈពេលបីថ្ងៃនៅលើ console។ អ្នកត្រូវបង្ហាញផែនការដែលមានថ្ងៃ ប្រធានបទ និងពេលវេលារៀន ដោយរៀបចំឱ្យអានងាយ។`,
      requirements: [
        "ប្រើ string សម្រាប់ថ្ងៃ និងប្រធានបទ។",
        "បង្ហាញផែនការបីថ្ងៃ៖ Day 1 Variables, Day 2 Loops, Day 3 Functions។",
        "បង្ហាញរយៈពេល 60 នាទីសម្រាប់ថ្ងៃនីមួយៗ។",
        "គណនា និងបង្ហាញចំនួននាទីសរុបនៅចុងបញ្ចប់។"
      ],
      input: null,
      output: "ផែនការរៀនបីថ្ងៃ និងចំនួននាទីសរុប។",
      samples: [{ input: "", output: "C++ Learning Plan\n-----------------\nDay 1: Variables (60 minutes)\nDay 2: Loops (60 minutes)\nDay 3: Functions (60 minutes)\n-----------------\nTotal: 180 minutes" }],
      constraints: ["មិនត្រូវប្រើ array ឬ loop ទេ។", "បង្ហាញផែនការតាមលំដាប់ដែលបានកំណត់។"],
      hint: "ប្រកាស variable ដាច់ដោយឡែកសម្រាប់ថ្ងៃនីមួយៗ ឬប្រើ string ដែលមានឈ្មោះប្រធានបទ។ បន្ទាប់មកគណនា total = 3 * 60។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string day1 = "Variables";
    string day2 = "Loops";
    string day3 = "Functions";
    int minutesPerDay = 60;
    int total = minutesPerDay * 3;

    cout << "C++ Learning Plan" << endl;
    cout << "-----------------" << endl;
    cout << "Day 1: " << day1 << " (" << minutesPerDay << " minutes)" << endl;
    cout << "Day 2: " << day2 << " (" << minutesPerDay << " minutes)" << endl;
    cout << "Day 3: " << day3 << " (" << minutesPerDay << " minutes)" << endl;
    cout << "-----------------" << endl;
    cout << "Total: " << total << " minutes" << endl;
    return 0;
}`,
      explanation: `ការប្រើ variable សម្រាប់ថ្ងៃ និងពេលវេលាធ្វើឱ្យកូដអាចកែប្រែបានយ៉ាងងាយ។ យើងគណនាចំនួននាទីសរុបដោយគុណពេលវេលាក្នុងមួយថ្ងៃនឹងចំនួនថ្ងៃ។`,
      expectedOutput: "C++ Learning Plan\n-----------------\nDay 1: Variables (60 minutes)\nDay 2: Loops (60 minutes)\nDay 3: Functions (60 minutes)\n-----------------\nTotal: 180 minutes"
    },
    {
      id: "intro-12",
      topicId: "intro",
      title: "Console Dashboard",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីតាមដានការរៀនចង់បង្ហាញ dashboard ខ្លីមួយនៅលើ console ដែលមានចំណងជើង ឈ្មោះសិស្ស ចំនួនលំហាត់បានបញ្ចប់ និងភាគរយវឌ្ឍនភាព។ ទិន្នន័យត្រូវកំណត់ក្នុងកូដ។`,
      requirements: [
        "កំណត់ឈ្មោះ Dara, completed = 18 និង total = 24។",
        "គណនាភាគរយវឌ្ឍនភាពជា integer។",
        "បង្ហាញ dashboard ដែលមានចំណងជើង C++ Practice Dashboard និងបន្ទាត់បំបែក។",
        "បង្ហាញចំនួនលំហាត់ និងភាគរយ។"
      ],
      input: null,
      output: "Dashboard ខ្លីៗដែលមានវឌ្ឍនភាព។",
      samples: [{ input: "", output: "C++ Practice Dashboard\n----------------------\nStudent: Dara\nCompleted: 18 / 24\nProgress: 75%" }],
      constraints: ["ប្រើ integer arithmetic សម្រាប់ភាគរយ។", "ភាគរយត្រូវបង្ហាញដោយគ្មានលេខទសភាគ។"],
      hint: "ភាគរយ = completed * 100 / total។ ប្រើ integer ទាំងអស់ ដើម្បីទទួលបាន 75។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string student = "Dara";
    int completed = 18;
    int total = 24;
    int progress = completed * 100 / total;

    cout << "C++ Practice Dashboard" << endl;
    cout << "----------------------" << endl;
    cout << "Student: " << student << endl;
    cout << "Completed: " << completed << " / " << total << endl;
    cout << "Progress: " << progress << "%" << endl;
    return 0;
}`,
      explanation: `យើងគណនាភាគរយដោយគុណចំនួនដែលបានបញ្ចប់នឹង 100 រួចចែកនឹងចំនួនសរុប។ ការប្រើ integer ធ្វើឱ្យលទ្ធផលជាចំនួនគត់ ដែលសមស្របសម្រាប់ការបង្ហាញភាគរយសាមញ្ញ។`,
      expectedOutput: "C++ Practice Dashboard\n----------------------\nStudent: Dara\nCompleted: 18 / 24\nProgress: 75%"
    },
    {
      id: "intro-13",
      topicId: "intro",
      title: "Course Banner Generator",
      difficulty: "challenge",
      type: "code",
      description: `មជ្ឈមណ្ឌលបណ្តុះបណ្តាលចង់បង្កើត banner សម្រាប់វគ្គ C++ ថ្មី។ អ្នកត្រូវបង្ហាញ banner ដែលមានឈ្មោះវគ្គ រយៈពេល និងពាក្យស្លោក ដោយប្រើទិន្នន័យដែលបានកំណត់។`,
      requirements: [
        "កំណត់ឈ្មោះវគ្គ C++ Fundamentals, រយៈពេល 8 weeks និង slogan Learn by building។",
        "បង្ហាញ banner ដែលមានស៊ុមផ្កាយ (*) ពីរបន្ទាត់។",
        "បង្ហាញព័ត៌មានទាំងបីនៅកណ្តាលដោយប្រហែល 40 តួអក្សរ។",
        "បង្ហាញបន្ទាត់បញ្ចប់ថា Enroll today!។"
      ],
      input: null,
      output: "Banner វគ្គសិក្សាដែលមានស៊ុម និងព័ត៌មាន។",
      samples: [{ input: "", output: "****************************************\n*         C++ Fundamentals             *\n*            8 weeks                   *\n*        Learn by building             *\n****************************************\nEnroll today!" }],
      constraints: ["មិនត្រូវប្រើ loop ទេ។", "ត្រូវរក្សាទទឹង 40 តួអក្សរសម្រាប់បន្ទាត់ស៊ុម។"],
      hint: "បង្ហាញបន្ទាត់ស៊ុមដោយ * 40 ដង។ បន្ទាត់ព័ត៌មានត្រូវចាប់ផ្តើមដោយ * និងបញ្ចប់ដោយ * ដោយរាប់ចន្លោះឱ្យបានត្រឹមត្រូវ។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string course = "C++ Fundamentals";
    string duration = "8 weeks";
    string slogan = "Learn by building";

    cout << "****************************************" << endl;
    cout << "*         " << course << "             *" << endl;
    cout << "*            " << duration << "                   *" << endl;
    cout << "*        " << slogan << "             *" << endl;
    cout << "****************************************" << endl;
    cout << "Enroll today!" << endl;
    return 0;
}`,
      explanation: `Banner គឺជាការរួមបញ្ចូល string និងការរៀបចំចន្លោះ។ បន្ទាត់ស៊ុមកំណត់ទទឹង ហើយចន្លោះខាងក្នុងជួយឱ្យអត្ថបទមើលទៅនៅកណ្តាល។ បើប្រវែងអត្ថបទផ្លាស់ប្តូរ អ្នកគួរកែចន្លោះឱ្យសមស្រប។`,
      expectedOutput: "****************************************\n*         C++ Fundamentals             *\n*            8 weeks                   *\n*        Learn by building             *\n****************************************\nEnroll today!"
    }
  ]);
})();
