(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "strings-01",
      topicId: "strings",
      title: "String Length",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវរាប់ចំនួនតួអក្សរក្នុងអត្ថបទ។ លំហាត់នេះជាការណែនាំអំពី string និង function size ដែលផ្តល់ប្រវែងអត្ថបទ។`,
      requirements: [
        "អានអត្ថបទមួយបន្ទាត់ដោយ getline។",
        "គណនាចំនួនតួអក្សរក្នុងអត្ថបទ។",
        "បង្ហាញចំនួនតួអក្សរ។"
      ],
      input: "អត្ថបទមួយបន្ទាត់។",
      output: "ចំនួនតួអក្សរ។",
      samples: [{ input: "Hello", output: "5" }],
      constraints: ["ប្រវែងអត្ថបទមិនលើស 200 តួអក្សរ។", "ត្រូវប្រើ getline ដើម្បីអានអត្ថបទទាំងបន្ទាត់។"],
      hint: "ប្រើ #include <string> និង getline(cin, text); បន្ទាប់មកបង្ហាញ text.size()។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    cout << text.size() << endl;
    return 0;
}`,
      explanation: `getline អានអត្ថបទទាំងបន្ទាត់ រួមទាំងចន្លោះ ដែលខុសពី cin >> ដែលឈប់នៅចន្លោះដំបូង។ function size() ត្រឡប់ចំនួនតួអក្សរ។ សម្រាប់ Hello មាន H, e, l, l, o សរុប 5 តួ។`,
      expectedOutput: "5"
    },
    {
      id: "strings-02",
      topicId: "strings",
      title: "Reverse a String",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីមួយត្រូវបង្ហាញអត្ថបទតាមលំដាប់បញ្ច្រាស។ អ្នកត្រូវប្រើ index និង loop ដើម្បីអានតួអក្សរពីចុងទៅដើម។`,
      requirements: [
        "អានអត្ថបទមួយបន្ទាត់ដោយ getline។",
        "បង្ហាញតួអក្សរតាមលំដាប់បញ្ច្រាស។",
        "មិនត្រូវបន្ថែមចន្លោះរវាងតួអក្សរទេ។"
      ],
      input: "អត្ថបទមួយបន្ទាត់។",
      output: "អត្ថបទដែលបញ្ច្រាស។",
      samples: [{ input: "code", output: "edoc" }],
      constraints: ["ប្រវែងអត្ថបទមិនលើស 200 តួអក្សរ។", "ត្រូវប្រើ loop មិនមែន function reverse ទេ។"],
      hint: "កំណត់ int n = text.size(); ហើយ loop for (int i = n - 1; i >= 0; i--) cout << text[i];",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    int n = text.size();
    for (int i = n - 1; i >= 0; i--) {
        cout << text[i];
    }
    cout << endl;
    return 0;
}`,
      explanation: `string អាចចូលប្រើតួអក្សរដោយ index ដូច array។ index ចុងក្រោយគឺ size() - 1។ យើងចាប់ i ពីចុងក្រោយ ហើយថយរហូតដល់ 0 ដើម្បីបង្ហាញតួអក្សរបញ្ច្រាស។`,
      expectedOutput: "edoc"
    },
    {
      id: "strings-03",
      topicId: "strings",
      title: "Count Vowels",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីវិភាគអត្ថបទត្រូវរាប់ចំនួន vowel ក្នុងពាក្យ ឬប្រយោគ។ អ្នកត្រូវពិនិត្យតួអក្សរនីមួយៗ ដោយគិតទាំងអក្សរធំ និងអក្សរតូច។`,
      requirements: [
        "អានអត្ថបទមួយបន្ទាត់ដោយ getline។",
        "រាប់តួអក្សរដែលជា a, e, i, o ឬ u ទាំងអក្សរតូច និងធំ។",
        "បង្ហាញចំនួន vowel។"
      ],
      input: "អត្ថបទមួយបន្ទាត់។",
      output: "ចំនួន vowel។",
      samples: [{ input: "Programming", output: "3" }],
      constraints: ["ប្រវែងអត្ថបទមិនលើស 200 តួអក្សរ។", "ត្រូវប្រើ tolower ឬពិនិត្យទាំងអក្សរធំ និងតូច។"],
      hint: "ប្រើ char lower = tolower(text[i]); ហើយពិនិត្យថាវាជា a, e, i, o ឬ u។ កុំភ្លេច #include <cctype>។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    int count = 0;
    for (int i = 0; i < static_cast<int>(text.size()); i++) {
        char lower = static_cast<char>(tolower(text[i]));
        if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {
            count++;
        }
    }

    cout << count << endl;
    return 0;
}`,
      explanation: `tolower បំប្លែងអក្សរធំទៅជាអក្សរតូច ដើម្បីឱ្យការពិនិត្យមិនខកខានអក្សរធំ។ យើងពិនិត្យតួអក្សរនីមួយៗជាមួយ vowel ទាំងប្រាំ។ សម្រាប់ Programming មាន o, a និង i សរុប 3។`,
      expectedOutput: "3"
    },
    {
      id: "strings-04",
      topicId: "strings",
      title: "Uppercase a String",
      difficulty: "beginner",
      type: "code",
      description: `ប្រព័ន្ធបង្ហាញចំណងជើងត្រូវបំប្លែងអត្ថបទទាំងអស់ទៅជាអក្សរធំ។ អ្នកត្រូវប្រើ toupper លើតួអក្សរនីមួយៗ ហើយរក្សាចន្លោះដើម។`,
      requirements: [
        "អានអត្ថបទមួយបន្ទាត់ដោយ getline។",
        "បំប្លែងតួអក្សរអង់គ្លេសទាំងអស់ទៅជាអក្សរធំ។",
        "រក្សាចន្លោះ និងសញ្ញាផ្សេងៗដូចដើម។"
      ],
      input: "អត្ថបទមួយបន្ទាត់។",
      output: "អត្ថបទជាអក្សរធំ។",
      samples: [{ input: "hello world", output: "HELLO WORLD" }],
      constraints: ["ប្រវែងអត្ថបទមិនលើស 200 តួអក្សរ។", "ត្រូវ cast លទ្ធផល toupper ទៅ char មុនបង្ហាញ។"],
      hint: "loop តួអក្សរនីមួយៗ ហើយ cout << static_cast<char>(toupper(text[i]));។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    for (int i = 0; i < static_cast<int>(text.size()); i++) {
        cout << static_cast<char>(toupper(text[i]));
    }
    cout << endl;
    return 0;
}`,
      explanation: `toupper ត្រឡប់ជា int ដែលជា character code។ បើយើង cout ដោយផ្ទាល់ វាអាចបង្ហាញលេខ ដូច្នេះត្រូវ cast ទៅ char ជាមុន។ សម្រាប់ hello world លទ្ធផលគឺ HELLO WORLD ហើយចន្លោះនៅដើមដដែល។`,
      expectedOutput: "HELLO WORLD"
    },
    {
      id: "strings-05",
      topicId: "strings",
      title: "Palindrome Check",
      difficulty: "intermediate",
      type: "code",
      description: `ពាក្យ palindrome គឺពាក្យដែលអានទៅមុខ និងថយក្រោយដូចគ្នា។ អ្នកត្រូវប្រៀបធៀបតួអក្សរពីចុងទាំងពីរចូលរកកណ្តាល ដើម្បីពិនិត្យលក្ខណៈនេះ។`,
      requirements: [
        "អានពាក្យមួយដោយ getline។",
        "ប្រៀបធៀបតួអក្សរទី i និងទី n - 1 - i។",
        "បើស្មើគ្នាទាំងអស់ បង្ហាញ Palindrome។",
        "បើមិនស្មើ បង្ហាញ Not a palindrome។"
      ],
      input: "ពាក្យមួយបន្ទាត់។",
      output: "ពាក្យ Palindrome ឬ Not a palindrome។",
      samples: [{ input: "level", output: "Palindrome" }],
      constraints: ["ពាក្យមានតែអក្សរតូច ឬអក្សរធំស្របគ្នា។", "ត្រូវប្រើ loop ប្រៀបធៀបតួអក្សរ។"],
      hint: "loop i ពី 0 ដល់ n / 2 - 1។ បើ text[i] != text[n - 1 - i] នោះមិនមែន palindrome។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    int n = text.size();
    bool isPalindrome = true;
    for (int i = 0; i < n / 2; i++) {
        if (text[i] != text[n - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        cout << "Palindrome" << endl;
    } else {
        cout << "Not a palindrome" << endl;
    }
    return 0;
}`,
      explanation: `យើងប្រៀបធៀបតួអក្សរដំបូងជាមួយចុងក្រោយ ទីពីរជាមួយពីរពីចុង ហើយបន្តរហូតដល់កណ្តាល។ បើរកឃើញភាពខុសគ្នាមួយ យើងឈប់ភ្លាមដោយ break ព្រោះមិនចាំបាច់ពិនិត្យបន្ត។ បើ loop បញ្ចប់ដោយគ្មានភាពខុស នោះជា palindrome។`,
      expectedOutput: "Palindrome"
    },
    {
      id: "strings-06",
      topicId: "strings",
      title: "Count Words",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីវិភាគអត្ថបទត្រូវរាប់ចំនួនពាក្យក្នុងប្រយោគ។ ពាក្យត្រូវបានបំបែកដោយចន្លោះ ហើយអ្នកអាចប្រើ stringstream ដើម្បីអានពាក្យម្តងមួយៗ។`,
      requirements: [
        "អានប្រយោគមួយបន្ទាត់ដោយ getline។",
        "ប្រើ stringstream ដើម្បីបំបែកពាក្យ។",
        "រាប់ និងបង្ហាញចំនួនពាក្យ។"
      ],
      input: "ប្រយោគមួយបន្ទាត់។",
      output: "ចំនួនពាក្យ។",
      samples: [{ input: "I love C++", output: "3" }],
      constraints: ["ចំនួនពាក្យមិនលើស 100។", "ត្រូវប្រើ #include <sstream>។"],
      hint: "ប្រកាស stringstream ss(text); បន្ទាប់មក while (ss >> word) count++; ហើយបង្ហាញ count។",
      solution: String.raw`#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    stringstream ss(text);
    string word;
    int count = 0;
    while (ss >> word) {
        count++;
    }

    cout << count << endl;
    return 0;
}`,
      explanation: `stringstream អាចអានពី string ដូចជា cin។ operator >> រំលងចន្លោះ ហើយអានពាក្យមួយម្តង។ loop បន្តរហូតអស់ពាក្យ។ សម្រាប់ I love C++ មានពាក្យបី ដូច្នេះ count គឺ 3។`,
      expectedOutput: "3"
    },
    {
      id: "strings-07",
      topicId: "strings",
      title: "Quiz: Substring",
      difficulty: "intermediate",
      type: "quiz",
      description: `function substr ទាញយកផ្នែកមួយនៃ string ដោយផ្តល់ index ចាប់ផ្តើម និងចំនួនតួអក្សរ។ សូមអាន snippet ហើយកំណត់លទ្ធផល។`,
      requirements: [
        "អាន index ចាប់ផ្តើម និងចំនួនតួអក្សរក្នុង substr។",
        "រាប់ index ចាប់ពី 0។",
        "ជ្រើសរើសចម្លើយត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
#include <string>
using namespace std;

int main() {
    string word = "programming";
    cout << word.substr(3, 4);
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: ["gram", "ogra", "gramm", "prog"],
      correctIndex: 0,
      quizExplanation: "substr(3, 4) ចាប់ពី index 3 ហើយយក 4 តួអក្សរ។ ក្នុង programming index 3 គឺ g, បន្ទាប់មក r, a និង m។ ដូច្នេះលទ្ធផលគឺ gram។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សរសេរ index ក្រោមតួអក្សរនីមួយៗ ចាប់ពី 0 ហើយរាប់ 4 តួចាប់ពី index 3។",
      solution: String.raw`#include <iostream>
#include <string>
using namespace std;

int main() {
    string word = "programming";
    cout << word.substr(3, 4);
    return 0;
}`,
      explanation: `substr(start, length) ត្រឡប់ string ថ្មីដែលចាប់ពី index start និងមានប្រវែង length។ index 3 ក្នុង programming គឺ g ហើយបួនតួបន្ទាប់គឺ g, r, a, m ដូច្នេះលទ្ធផលគឺ gram។`,
      expectedOutput: "gram"
    },
    {
      id: "strings-08",
      topicId: "strings",
      title: "Remove Spaces",
      difficulty: "advanced",
      type: "code",
      description: `ប្រព័ន្ធបង្កើត hashtag ត្រូវលុបចន្លោះទាំងអស់ចេញពីអត្ថបទ។ អ្នកត្រូវ loop តួអក្សរនីមួយៗ ហើយបង្ហាញតែតួអក្សរដែលមិនមែនចន្លោះ។`,
      requirements: [
        "អានអត្ថបទមួយបន្ទាត់ដោយ getline។",
        "លុបចន្លោះទាំងអស់ចេញ។",
        "បង្ហាញអត្ថបទដែលនៅសល់ជាប់គ្នា។"
      ],
      input: "អត្ថបទមួយបន្ទាត់។",
      output: "អត្ថបទដោយគ្មានចន្លោះ។",
      samples: [{ input: "C++ is fun", output: "C++isfun" }],
      constraints: ["ប្រវែងអត្ថបទមិនលើស 200 តួអក្សរ។", "ត្រូវប្រើ isspace ឬប្រៀបធៀបនឹង ' '។"],
      hint: "loop តួអក្សរនីមួយៗ ហើយបើ !isspace(text[i]) បង្ហាញវា។ កុំភ្លេច #include <cctype>។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    for (int i = 0; i < static_cast<int>(text.size()); i++) {
        if (!isspace(text[i])) {
            cout << text[i];
        }
    }
    cout << endl;
    return 0;
}`,
      explanation: `isspace ត្រឡប់តម្លៃពិតសម្រាប់ចន្លោះ តាប និង newline។ ដោយប្រើ !isspace យើងបង្ហាញតែតួអក្សរដែលមិនមែនចន្លោះ។ សម្រាប់ C++ is fun លទ្ធផលគឺ C++isfun ដោយចន្លោះទាំងពីរត្រូវលុប។`,
      expectedOutput: "C++isfun"
    },
    {
      id: "strings-09",
      topicId: "strings",
      title: "Capitalize Each Word",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីបង្កើតចំណងជើងត្រូវធ្វើឱ្យអក្សរដំបូងនៃពាក្យនីមួយៗជាអក្សរធំ ហើយអក្សរដទៃជាអក្សរតូច។ អ្នកត្រូវតាមដានថាតើតួបច្ចុប្បន្នជាតួដំបូងនៃពាក្យថ្មី ឬអត់។`,
      requirements: [
        "អានអត្ថបទមួយបន្ទាត់ដោយ getline។",
        "ធ្វើឱ្យអក្សរដំបូងនៃពាក្យនីមួយៗជាអក្សរធំ។",
        "ធ្វើឱ្យអក្សរដទៃក្នុងពាក្យជាអក្សរតូច។",
        "រក្សាចន្លោះដើម។"
      ],
      input: "អត្ថបទមួយបន្ទាត់។",
      output: "អត្ថបទដែលអក្សរដំបូងនៃពាក្យនីមួយៗជាអក្សរធំ។",
      samples: [{ input: "hello world from c++", output: "Hello World From C++" }],
      constraints: ["ប្រវែងអត្ថបទមិនលើស 200 តួអក្សរ។", "ត្រូវប្រើ toupper និង tolower។"],
      hint: "រក្សា bool newWord = true;។ បើ isspace បង្ហាញចន្លោះ ហើយកំណត់ newWord = true។ បើមិនដូច្នេះ បើ newWord ប្រើ toupper បើមិនដូច្នេះប្រើ tolower។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    bool newWord = true;
    for (int i = 0; i < static_cast<int>(text.size()); i++) {
        char c = text[i];
        if (isspace(c)) {
            cout << c;
            newWord = true;
        } else if (newWord) {
            cout << static_cast<char>(toupper(c));
            newWord = false;
        } else {
            cout << static_cast<char>(tolower(c));
        }
    }
    cout << endl;
    return 0;
}`,
      explanation: `newWord ប្រាប់ថាតើតួបន្ទាប់ជាតួដំបូងនៃពាក្យថ្មីឬអត់។ បន្ទាប់ពីចន្លោះ យើងកំណត់វាជា true ដើម្បីធ្វើអក្សរបន្ទាប់ជាអក្សរធំ។ បន្ទាប់ពីបំប្លែងតួដំបូងរួច យើងកំណត់វាជា false ដើម្បីធ្វើអក្សរដទៃជាអក្សរតូច។`,
      expectedOutput: "Hello World From C++"
    },
    {
      id: "strings-10",
      topicId: "strings",
      title: "Anagram Check",
      difficulty: "advanced",
      type: "code",
      description: `ពាក្យពីរជា anagram បើវាមានតួអក្សរដូចគ្នា តែរៀបចំខុសគ្នា។ អ្នកត្រូវរៀបចំតួអក្សរនៃពាក្យទាំងពីរ ហើយប្រៀបធៀបគ្នា។`,
      requirements: [
        "អានពាក្យពីរដែលបំបែកដោយចន្លោះ ឬ newline។",
        "រៀបចំតួអក្សរនៃពាក្យនីមួយៗ។",
        "បើដូចគ្នា បង្ហាញ Anagram។",
        "បើខុសគ្នា បង្ហាញ Not anagram។"
      ],
      input: "ពាក្យពីរ។",
      output: "Anagram ឬ Not anagram។",
      samples: [{ input: "listen\nsilent", output: "Anagram" }],
      constraints: ["ពាក្យមានតួអក្សរតូច។", "ត្រូវប្រើ #include <algorithm> និង sort។"],
      hint: "sort(first.begin(), first.end()); និង sort(second.begin(), second.end()); បន្ទាប់មកប្រៀបធៀប string ទាំងពីរ។",
      solution: String.raw`#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    string first, second;
    cin >> first >> second;

    sort(first.begin(), first.end());
    sort(second.begin(), second.end());

    if (first == second) {
        cout << "Anagram" << endl;
    } else {
        cout << "Not anagram" << endl;
    }
    return 0;
}`,
      explanation: `បើពាក្យពីរជា anagram នោះនៅពេលរៀបចំតួអក្សរតាមលំដាប់អក្សរ ពួកវានឹងដូចគ្នា។ sort រៀបចំ string តាមតម្លៃតួអក្សរ។ បន្ទាប់មកយើងប្រៀបធៀប string ទាំងពីរដោយ ==។ listen និង silent មានតួអក្សរដូចគ្នា ដូច្នេះជា anagram។`,
      expectedOutput: "Anagram"
    },
    {
      id: "strings-11",
      topicId: "strings",
      title: "Longest Word",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីវិភាគអត្ថបទត្រូវរកពាក្យវែងបំផុតក្នុងប្រយោគ។ អ្នកត្រូវអានពាក្យម្តងមួយៗដោយ stringstream ហើយរក្សាពាក្យដែលមានប្រវែងច្រើនបំផុត។`,
      requirements: [
        "អានប្រយោគមួយបន្ទាត់ដោយ getline។",
        "រកពាក្យដែលមានប្រវែងច្រើនបំផុត។",
        "បើមានពាក្យវែងស្មើគ្នា យកពាក្យដែលបង្ហាញមុន។",
        "បង្ហាញពាក្យវែងបំផុត។"
      ],
      input: "ប្រយោគមួយបន្ទាត់។",
      output: "ពាក្យវែងបំផុត។",
      samples: [{ input: "I enjoy programming every day", output: "programming" }],
      constraints: ["ចំនួនពាក្យមិនលើស 100។", "ត្រូវប្រើ stringstream។"],
      hint: "កំណត់ string longest = \"\"; ហើយក្នុង while (ss >> word) បើ word.size() > longest.size() កំណត់ longest = word។",
      solution: String.raw`#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main() {
    string text;
    getline(cin, text);

    stringstream ss(text);
    string word;
    string longest = "";
    while (ss >> word) {
        if (word.size() > longest.size()) {
            longest = word;
        }
    }

    cout << longest << endl;
    return 0;
}`,
      explanation: `stringstream បំបែកប្រយោគជាពាក្យ។ យើងរក្សា longest ជាពាក្យវែងបំផុតដែលរកឃើញ។ លក្ខខណ្ឌ > មិនមែន >= ធានាថាបើវែងស្មើគ្នា ពាក្យដែលបង្ហាញមុននៅតែជាប់។ សម្រាប់ប្រយោគឧទាហរណ៍ programming មាន 11 តួ ហើយវែងជាងគេ។`,
      expectedOutput: "programming"
    },
    {
      id: "strings-12",
      topicId: "strings",
      title: "Caesar Cipher",
      difficulty: "challenge",
      type: "code",
      description: `Caesar cipher បង្វិលតួអក្សរនីមួយៗទៅមុខតាមចំនួនកំណត់។ អ្នកត្រូវអាន shift និងអត្ថបទ បន្ទាប់មកបំប្លែងតែអក្សរអង់គ្លេស ដោយរក្សាចន្លោះ និងសញ្ញាដើម។`,
      requirements: [
        "អានចំនួន shift នៅបន្ទាត់ដំបូង។",
        "អានអត្ថបទនៅបន្ទាត់បន្ទាប់ដោយ getline។",
        "បង្វិលតួអក្សរធំ និងតូចដោយរក្សាទម្រង់ដើម។",
        "បង្ហាញអត្ថបទដែលបានបំប្លែង។"
      ],
      input: "ចំនួន shift និងអត្ថបទ។",
      output: "អត្ថបទដែលបំប្លែងរួច។",
      samples: [{ input: "3\nabc xyz", output: "def abc" }],
      constraints: ["0 <= shift <= 25។", "ត្រូវរក្សាចន្លោះ និងសញ្ញាមិនមែនអក្សរដើម។"],
      hint: "សម្រាប់តួអក្សរ alpha កំណត់ base = isupper(c) ? 'A' : 'a'; បន្ទាប់មក c = (c - base + shift) % 26 + base។ ត្រូវ cin.ignore() បន្ទាប់ពីអាន shift។",
      solution: String.raw`#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main() {
    int shift;
    cin >> shift;
    cin.ignore();

    string text;
    getline(cin, text);

    for (int i = 0; i < static_cast<int>(text.size()); i++) {
        char c = text[i];
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            c = static_cast<char>((c - base + shift) % 26 + base);
        }
        cout << c;
    }
    cout << endl;
    return 0;
}`,
      explanation: `សម្រាប់អក្សរធំ base គឺ A ហើយសម្រាប់អក្សរតូច base គឺ a។ c - base ផ្តល់ទីតាំងពី 0 ដល់ 25។ បូក shift រួច mod 26 ធ្វើឱ្យវិលត្រឡប់ក្នុងអក្សរអង់គ្លេស។ បន្ថែម base ត្រឡប់ទៅ character ដើម។ cin.ignore() លុប newline ដែលនៅសល់មុន getline។`,
      expectedOutput: "def abc"
    },
    {
      id: "strings-13",
      topicId: "strings",
      title: "Quiz: string::npos",
      difficulty: "challenge",
      type: "quiz",
      description: `function find ត្រឡប់ string::npos នៅពេលរកមិនឃើញ substring។ សូមអាន snippet ហើយកំណត់លទ្ធផលនៃការប្រៀបធៀបនេះ។`,
      requirements: [
        "អានអត្ថបទ និង substring ដែលត្រូវរក។",
        "ដឹងថា find ត្រឡប់អ្វីនៅពេលរកមិនឃើញ។",
        "ជ្រើសរើស output ត្រឹមត្រូវ។"
      ],
      input: null,
      output: null,
      samples: [],
      snippet: String.raw`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "banana";
    cout << (text.find("xyz") == string::npos);
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: ["1", "0", "-1", "true"],
      correctIndex: 0,
      quizExplanation: "text គឺ banana ហើយ substring xyz មិនមានទេ ដូច្នេះ find ត្រឡប់ string::npos។ ការប្រៀបធៀប == ក្លាយជា true។ ពេលបង្ហាញ bool ដោយគ្មាន boolalpha C++ បង្ហាញ 1 សម្រាប់ true និង 0 សម្រាប់ false។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "string::npos គឺជាតម្លៃពិសេសដែលបង្ហាញថារកមិនឃើញ។ ការប្រៀបធៀបស្មើនឹង true ហើយ cout បង្ហាញ bool ជា 1 ឬ 0។",
      solution: String.raw`#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "banana";
    cout << (text.find("xyz") == string::npos);
    return 0;
}`,
      explanation: `find ត្រឡប់ index នៃការបង្ហាញដំបូង ឬ string::npos បើរកមិនឃើញ។ xyz មិនមានក្នុង banana ដូច្នេះការប្រៀបធៀបជាមួយ npos គឺ true។ នៅពេលបង្ហាញ bool ដោយ cout ដោយគ្មាន boolalpha លទ្ធផលគឺ 1។`,
      expectedOutput: "1"
    }
  ]);
})();
