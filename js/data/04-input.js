(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "input-01",
      topicId: "input",
      title: "Read Two Integers",
      difficulty: "beginner",
      type: "code",
      description: `ការអានទិន្នន័យពី keyboard គឺជាជំហានសំខាន់បន្ទាប់បន្ទាប់ពីរៀន variables។ លំហាត់នេះឱ្យអ្នកប្រើ cin និង extraction operator >> ដើម្បីអានចំនួនគត់ពីរ រួចបង្ហាញផលបូករបស់វា។`,
      requirements: [
        `ប្រកាស int a និង int b។`,
        `អានតម្លៃទាំងពីរដោយ cin >> a >> b។`,
        `បង្ហាញផលបូកជា Sum: និងតម្លៃ។`
      ],
      input: `ចំនួនគត់ពីរ បំបែកដោយចន្លោះ។`,
      output: `ផលបូកនៃចំនួនទាំងពីរ។`,
      samples: [{ input: "7 8", output: "Sum: 15" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវអានតម្លៃដោយ cin។`],
      hint: `int a, b; cin >> a >> b; cout << "Sum: " << a + b << endl;`,
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    cout << "Sum: " << a + b << endl;
    return 0;
}`,
      explanation: `cin គឺជា object ស្តង់ដារសម្រាប់អាន input ហើយ >> គឺជា extraction operator។ នៅពេលអ្នកសរសេរ cin >> a >> b កម្មវិធីអានតម្លៃដំបូងចូល a និងតម្លៃបន្ទាប់ចូល b។`,
      expectedOutput: "Sum: 15",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-02",
      topicId: "input",
      title: "Read Name and Age",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីស្វាគមន៍ត្រូវអានឈ្មោះ និងអាយុរបស់សិស្សពី keyboard។ លំហាត់នេះហាត់ការអាន string មួយពាក្យ និងចំនួនគត់ក្នុងបន្ទាត់តែមួយ។`,
      requirements: [
        `ប្រកាស string name និង int age។`,
        `អាន name និង age ដោយ cin >> name >> age។`,
        `បង្ហាញឈ្មោះ និងអាយុជាពីរបន្ទាត់ដូចគំរូ។`
      ],
      input: `ឈ្មោះមួយពាក្យ និងអាយុ បំបែកដោយចន្លោះ។`,
      output: `ឈ្មោះ និងអាយុ។`,
      samples: [{ input: "Sokha 18", output: "Name: Sokha\nAge: 18" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ឈ្មោះជាពាក្យតែមួយដោយគ្មានចន្លោះ។`],
      hint: `string name; int age; cin >> name >> age; រួចបង្ហាញជា Name: និង Age:។`,
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string name;
    int age;
    cin >> name >> age;

    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    return 0;
}`,
      explanation: `cout ប្រើ << សម្រាប់បញ្ជូនទិន្នន័យចេញ ចំណែក cin ប្រើ >> សម្រាប់ទទួលទិន្នន័យចូល។ cin អាចអានតម្លៃជាច្រើនបន្តបន្ទាប់ដោយបំបែកតាមចន្លោះ ឬ newline។`,
      expectedOutput: "Name: Sokha\nAge: 18",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-03",
      topicId: "input",
      title: "Read a Decimal Price",
      difficulty: "beginner",
      type: "code",
      description: `ហាងមួយត្រូវអានតម្លៃទំនិញជាលេខទសភាគពី keyboard រួចបង្ហាញវាជាទម្រង់ប្រាក់ពីរខ្ទង់។ លំហាត់នេះហាត់ការអាន double និងការបង្ហាញដោយ setprecision។`,
      requirements: [
        `ប្រកាស double price។`,
        `អានតម្លៃដោយ cin >> price។`,
        `បង្ហាញ Price: និងតម្លៃដោយ fixed និង setprecision(2)។`
      ],
      input: `តម្លៃជាលេខទសភាគមួយ។`,
      output: `តម្លៃដែលបានអាន ជាលេខទសភាគពីរខ្ទង់។`,
      samples: [{ input: "19.5", output: "Price: 19.50" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវប្រើ #include <iomanip>។`],
      hint: `cin >> price; រួច cout << fixed << setprecision(2) << "Price: " << price << endl;`,
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double price;
    cin >> price;

    cout << fixed << setprecision(2);
    cout << "Price: " << price << endl;
    return 0;
}`,
      explanation: `cin >> price អានលេខទសភាគចូល variable ប្រភេទ double។ fixed និង setprecision(2) ធានាថា output មានលេខទសភាគពីរខ្ទង់ជានិច្ច។`,
      expectedOutput: "Price: 19.50",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-04",
      topicId: "input",
      title: "Average of Three Scores",
      difficulty: "beginner",
      type: "code",
      description: `គ្រូម្នាក់ចង់គណនាពិន្ទុមធ្យមភាគពីពិន្ទុបីដែលបញ្ចូលពី keyboard។ លំហាត់នេះហាត់ការអានតម្លៃច្រើនជាមួយ cin ក្នុង statement តែមួយ។`,
      requirements: [
        `ប្រកាស double s1, s2 និង s3។`,
        `អានពិន្ទុទាំងបីដោយ cin >> s1 >> s2 >> s3។`,
        `គណនាមធ្យមភាគ និងបង្ហាញ Average: ដោយលេខទសភាគពីរ។`
      ],
      input: `ពិន្ទុបីជាលេខទសភាគ បំបែកដោយចន្លោះ។`,
      output: `មធ្យមភាគនៃពិន្ទុទាំងបី។`,
      samples: [{ input: "80 85 90", output: "Average: 85.00" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវចែកនឹង 3.0។`],
      hint: `double average = (s1 + s2 + s3) / 3.0; រួចបង្ហាញដោយ fixed និង setprecision(2)។`,
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double s1, s2, s3;
    cin >> s1 >> s2 >> s3;

    double average = (s1 + s2 + s3) / 3.0;

    cout << fixed << setprecision(2);
    cout << "Average: " << average << endl;
    return 0;
}`,
      explanation: `cin អាចអានតម្លៃជាច្រើនបន្តបន្ទាប់គ្នាតាមលំដាប់ដែលអ្នកសរសេរ។ ការចែកនឹង 3.0 ធ្វើឱ្យលទ្ធផលជា double មិនមែន integer division។`,
      expectedOutput: "Average: 85.00",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-05",
      topicId: "input",
      title: "Character and ASCII Code",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីមួយត្រូវអានតួអក្សរមួយពី keyboard រួចបង្ហាញទាំងតួអក្សរ និងលេខ ASCII របស់វា។ លំហាត់នេះបង្ហាញថា char អាចត្រូវបានបំប្លែងទៅ int។`,
      requirements: [
        `ប្រកាស char ch។`,
        `អានតួអក្សរដោយ cin >> ch។`,
        `បង្ហាញ Character: និងតួអក្សរ។`,
        `បង្ហាញ ASCII: និង int(ch)។`
      ],
      input: `តួអក្សរមួយ។`,
      output: `តួអក្សរ និងលេខ ASCII របស់វា។`,
      samples: [{ input: "A", output: "Character: A\nASCII: 65" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវប្រើ char សម្រាប់ input។`],
      hint: `char ch; cin >> ch; cout << int(ch) << endl; បង្ហាញលេខ ASCII របស់ char។`,
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    char ch;
    cin >> ch;

    cout << "Character: " << ch << endl;
    cout << "ASCII: " << int(ch) << endl;
    return 0;
}`,
      explanation: `char រក្សាទុកតួអក្សរមួយ ប៉ុន្តែខាងក្នុងវាជាលេខ ASCII។ ការប្រើ int(ch) បង្ហាញលេខនោះ ដែលអាចជួយពេលយើងចង់ដឹងកូដរបស់តួអក្សរ។`,
      expectedOutput: "Character: A\nASCII: 65",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-06",
      topicId: "input",
      title: "Quiz: cin and Whitespace",
      difficulty: "intermediate",
      type: "quiz",
      description: `សិស្សម្នាក់ចង់អានឈ្មោះពេញដោយប្រើ cin ធម្មតា។ សូមពិនិត្យ snippet ហើយកំណត់ថាតើកម្មវិធីនឹងបង្ហាញអ្វី។`,
      requirements: [`អាន snippet ដោយយកចិត្តទុកដាក់លើចន្លោះក្នុង input។`, `ជ្រើសរើសចម្លើយតែមួយ។`],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string fullName;
    cin >> fullName;
    cout << fullName << endl;
    return 0;
}`,
      quizQuestion: `បើ input គឺ John Doe តើ output ជាអ្វី?`,
      options: ["John Doe", "John", "Doe", "Compile error"],
      correctIndex: 1,
      quizExplanation: `cin >> string ឈប់អាននៅពេលជួបចន្លោះ ដូច្នេះវារក្សាទុកតែ John។ ដើម្បីអានអត្ថបទមានចន្លោះ ត្រូវប្រើ getline(cin, fullName)។`,
      constraints: [`ជ្រើសរើសចម្លើយតែមួយ។`],
      hint: `cin ចាត់ទុកចន្លោះជាចំណុចបញ្ចប់នៃការអាន string។`,
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string fullName;
    getline(cin, fullName);
    cout << fullName << endl;
    return 0;
}`,
      explanation: `cin >> fullName អានបានតែពាក្យដំបូងប៉ុណ្ណោះ ព្រោះ whitespace បញ្ចប់ការអាន string។ ការប្រើ getline គឺជាវិធីត្រឹមត្រូវសម្រាប់ឈ្មោះពេញ ឬអត្ថបទដែលមានចន្លោះ។`,
      expectedOutput: "John",
      reference: {
        label: "W3Schools - C++ User Input Strings",
        url: "https://www.w3schools.com/cpp/cpp_strings_input.asp"
      }
    },
    {
      id: "input-07",
      topicId: "input",
      title: "Read Full Name with getline",
      difficulty: "intermediate",
      type: "code",
      description: `ឈ្មោះពេញអាចមានចន្លោះ ដូច្នេះ cin ធម្មតាមិនគ្រប់គ្រាន់ទេ។ លំហាត់នេះឱ្យអ្នកប្រើ getline ដើម្បីអានអត្ថបទទាំងបន្ទាត់ រួចបង្ហាញវាក្នុងប្រយោគស្វាគមន៍។`,
      requirements: [
        `ប្រកាស string fullName។`,
        `អានអត្ថបទទាំងបន្ទាត់ដោយ getline(cin, fullName)។`,
        `បង្ហាញ Hello, ឈ្មោះ និងសញ្ញា !។`
      ],
      input: `ឈ្មោះពេញដែលអាចមានចន្លោះ។`,
      output: `ប្រយោគស្វាគមន៍ដែលមានឈ្មោះពេញ។`,
      samples: [{ input: "Sokha Dara", output: "Hello, Sokha Dara!" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវប្រើ getline មិនមែន cin >> fullName។`],
      hint: `getline(cin, fullName); រួច cout << "Hello, " << fullName << "!" << endl;`,
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string fullName;
    getline(cin, fullName);

    cout << "Hello, " << fullName << "!" << endl;
    return 0;
}`,
      explanation: `getline(cin, fullName) អានតួអក្សរទាំងអស់រហូតដល់ newline ដូច្នេះចន្លោះនៅក្នុងឈ្មោះមិនបញ្ចប់ការអានទេ។ នេះខុសពី cin >> fullName ដែលឈប់នៅ whitespace ដំបូង។`,
      expectedOutput: "Hello, Sokha Dara!",
      reference: {
        label: "W3Schools - C++ User Input Strings",
        url: "https://www.w3schools.com/cpp/cpp_strings_input.asp"
      }
    },
    {
      id: "input-08",
      topicId: "input",
      title: "Circle Area from Input",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីគណនាផ្ទៃក្រឡារង្វង់ត្រូវទទួលកាំពីអ្នកប្រើ។ លំហាត់នេះរួមបញ្ចូល input ជាមួយ constexpr និងការបង្ហាញលទ្ធផលជាលេខទសភាគ។`,
      requirements: [
        `ប្រកាស constexpr double PI = 3.14159។`,
        `អាន radius ជា double ពី input។`,
        `គណនា area ជា PI * radius * radius។`,
        `បង្ហាញ Area: ដោយលេខទសភាគពីរ។`
      ],
      input: `កាំរង្វង់ជាលេខទសភាគ។`,
      output: `ផ្ទៃក្រឡារង្វង់។`,
      samples: [{ input: "2", output: "Area: 12.57" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `PI ត្រូវជា constexpr។`],
      hint: `cin >> radius; double area = PI * radius * radius; រួចបង្ហាញដោយ fixed និង setprecision(2)។`,
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    constexpr double PI = 3.14159;
    double radius;
    cin >> radius;

    double area = PI * radius * radius;

    cout << fixed << setprecision(2);
    cout << "Area: " << area << endl;
    return 0;
}`,
      explanation: `radius ត្រូវប្រកាសមុនពេលប្រើ cin ដើម្បីរក្សាតម្លៃដែលអានបាន។ constexpr PI នៅថេរ ហើយរូបមន្ត PI * radius * radius គណនាផ្ទៃក្រឡារង្វង់។`,
      expectedOutput: "Area: 12.57",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-09",
      topicId: "input",
      title: "Read Coordinates and Distance",
      difficulty: "advanced",
      type: "code",
      description: `កម្មវិធីធរណីមាត្រត្រូវអានកូអរដោនេពីរចំណុចពី keyboard រួចគណនាចម្ងាយរវាងពួកវា។ លំហាត់នេះហាត់ការអានតម្លៃបួនក្នុង statement តែមួយ។`,
      requirements: [
        `អាន x1, y1, x2 និង y2 ជា double។`,
        `គណនា dx និង dy។`,
        `គណនា distance ដោយ sqrt(dx * dx + dy * dy)។`,
        `បង្ហាញ Distance: ដោយលេខទសភាគពីរ។`
      ],
      input: `កូអរដោនេ x1 y1 x2 y2 បំបែកដោយចន្លោះ។`,
      output: `ចម្ងាយរវាងចំណុចទាំងពីរ។`,
      samples: [{ input: "0 0 3 4", output: "Distance: 5.00" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវប្រើ #include <cmath>។`],
      hint: `cin >> x1 >> y1 >> x2 >> y2; រួចប្រើ sqrt(dx * dx + dy * dy)។`,
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    double x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;

    double dx = x2 - x1;
    double dy = y2 - y1;
    double distance = sqrt(dx * dx + dy * dy);

    cout << fixed << setprecision(2);
    cout << "Distance: " << distance << endl;
    return 0;
}`,
      explanation: `cin អានតម្លៃតាមលំដាប់ x1, y1, x2, y2។ បន្ទាប់មកយើងគណនាភាពខុសគ្នានៃកូអរដោនេ ហើយប្រើទ្រឹស្តីបទ Pythagoras ដើម្បីរកចម្ងាយ។`,
      expectedOutput: "Distance: 5.00",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-10",
      topicId: "input",
      title: "Shopping Total from Input",
      difficulty: "advanced",
      type: "code",
      description: `ហាងមួយត្រូវគណនាតម្លៃសរុបពីចំនួនទំនិញ និងតម្លៃក្នុងមួយឯកតា។ លំហាត់នេះហាត់ការអាន int និង double បន្តបន្ទាប់គ្នា។`,
      requirements: [
        `អាន quantity ជា int និង unitPrice ជា double។`,
        `គណនា total ជា quantity * unitPrice។`,
        `បង្ហាញ Total: ដោយលេខទសភាគពីរ។`
      ],
      input: `ចំនួនទំនិញ និងតម្លៃក្នុងមួយឯកតា។`,
      output: `តម្លៃសរុប។`,
      samples: [{ input: "3 2.5", output: "Total: 7.50" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវអាន int និង double តាមលំដាប់។`],
      hint: `int quantity; double unitPrice; cin >> quantity >> unitPrice; double total = quantity * unitPrice;`,
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int quantity;
    double unitPrice;
    cin >> quantity >> unitPrice;

    double total = quantity * unitPrice;

    cout << fixed << setprecision(2);
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `cin អានតម្លៃតាមប្រភេទ variable ដែលអ្នកផ្តល់។ quantity ជា int សម្រាប់ចំនួនឯកតា ហើយ unitPrice ជា double សម្រាប់តម្លៃទសភាគ។ ការគុណរវាង int និង double ផ្តល់លទ្ធផលជា double។`,
      expectedOutput: "Total: 7.50",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-11",
      topicId: "input",
      title: "Quiz: Mixing cin and getline",
      difficulty: "challenge",
      type: "quiz",
      description: `ការលាយ cin ជាមួយ getline អាចបង្កបញ្ហាដែលមើលមិនឃើញ។ សូមអាន snippet ហើយកំណត់ថាតើ name នឹងមានតម្លៃអ្វី។`,
      requirements: [`ពិនិត្យលំដាប់នៃការអាន input។`, `គិតពី newline ដែលនៅសល់ក្នុង input buffer។`],
      input: null,
      output: null,
      snippet: String.raw`int age;
string name;

cin >> age;
getline(cin, name);`,
      quizQuestion: `បើ input គឺ 18 បន្ទាប់មក Sokha Dara នៅបន្ទាត់ថ្មី តើ name មានតម្លៃអ្វី?`,
      options: ["Sokha Dara", "អត្ថបទទទេ", "18", "Compile error"],
      correctIndex: 1,
      quizExplanation: `បន្ទាប់ពី cin >> age សញ្ញា newline នៅសល់ក្នុង buffer។ getline អានឃើញ newline នោះភ្លាម ដូច្នេះវាទទួលបាន string ទទេ។ ដំណោះស្រាយគឺប្រើ cin.ignore() មុន getline។`,
      constraints: [`ជ្រើសរើសចម្លើយតែមួយ។`],
      hint: `getline អានរហូតដល់ newline។ តើ newline ពី cin >> age នៅសល់នៅឯណា?`,
      solution: String.raw`cin.ignore();
getline(cin, name);`,
      explanation: `cin >> age អានលេខ ប៉ុន្តែទុក newline ដែលបញ្ចប់បន្ទាត់នៅក្នុង buffer។ getline បន្ទាប់អាន newline នោះជាបន្ទាត់ទទេ។ ការហៅ cin.ignore() មុន getline លុប newline នោះចេញ ដើម្បីឱ្យ getline អានឈ្មោះពិតប្រាកដ។`,
      expectedOutput: "អត្ថបទទទេ",
      reference: {
        label: "W3Schools - C++ User Input Strings",
        url: "https://www.w3schools.com/cpp/cpp_strings_input.asp"
      }
    },
    {
      id: "input-12",
      topicId: "input",
      title: "Student Input Report",
      difficulty: "challenge",
      type: "code",
      description: `ប្រព័ន្ធសាលាត្រូវការទទួលព័ត៌មានសិស្សពី keyboard រួចបង្ហាញរបាយការណ៍ខ្លី។ អ្នកត្រូវអានឈ្មោះ អាយុ និងពិន្ទុ រួចរៀបចំ output ឱ្យមានទម្រង់ច្បាស់លាស់។`,
      requirements: [
        `អាន name (ពាក្យតែមួយ), age និង score។`,
        `បង្ហាញ Student: និងឈ្មោះ។`,
        `បង្ហាញ Age: និងអាយុ។`,
        `បង្ហាញ Score: និងពិន្ទុដោយលេខទសភាគពីរ។`
      ],
      input: `ឈ្មោះមួយពាក្យ អាយុ និងពិន្ទុ។`,
      output: `របាយការណ៍សិស្សបីបន្ទាត់។`,
      samples: [{ input: "Dara 19 88.5", output: "Student: Dara\nAge: 19\nScore: 88.50" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ឈ្មោះជាពាក្យតែមួយ។`],
      hint: `string name; int age; double score; cin >> name >> age >> score; រួចបង្ហាញដោយ fixed និង setprecision(2)។`,
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;
    int age;
    double score;
    cin >> name >> age >> score;

    cout << "Student: " << name << endl;
    cout << "Age: " << age << endl;
    cout << fixed << setprecision(2);
    cout << "Score: " << score << endl;
    return 0;
}`,
      explanation: `ការអានទិន្នន័យច្រើនប្រភេទក្នុង statement តែមួយធ្វើការតាមលំដាប់ variable។ បន្ទាប់មកយើងរៀបចំ output ជាបន្ទាត់ដាច់ដោយឡែក ដើម្បីឱ្យរបាយការណ៍អានងាយ។`,
      expectedOutput: "Student: Dara\nAge: 19\nScore: 88.50",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    },
    {
      id: "input-13",
      topicId: "input",
      title: "Temperature Converter from Input",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីបម្លែងសីតុណ្ហភាពត្រូវអានអង្សាសេពី keyboard រួចបង្ហាញអង្សាហ្វារិនហៃ។ លំហាត់នេះរួមបញ្ចូល input ជាមួយរូបមន្តគណនា និងការបង្ហាញទសភាគ។`,
      requirements: [
        `អាន celsius ជា double។`,
        `គណនា fahrenheit = celsius * 9.0 / 5.0 + 32.0។`,
        `បង្ហាញ Fahrenheit: ដោយលេខទសភាគពីរ។`
      ],
      input: `សីតុណ្ហភាពជាអង្សាសេ។`,
      output: `សីតុណ្ហភាពជាអង្សាហ្វារិនហៃ។`,
      samples: [{ input: "25", output: "Fahrenheit: 77.00" }],
      constraints: [`មិនត្រូវបង្ហាញ prompt ទេ។`, `ត្រូវប្រើ 9.0 និង 5.0 ដើម្បីរក្សា decimal division។`],
      hint: `double fahrenheit = celsius * 9.0 / 5.0 + 32.0; រួចបង្ហាញដោយ fixed និង setprecision(2)។`,
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double celsius;
    cin >> celsius;

    double fahrenheit = celsius * 9.0 / 5.0 + 32.0;

    cout << fixed << setprecision(2);
    cout << "Fahrenheit: " << fahrenheit << endl;
    return 0;
}`,
      explanation: `យើងអាន celsius មុនពេលគណនា ហើយប្រើ 9.0 និង 5.0 ដើម្បីធានាថាការចែកជា decimal division។ បន្ទាប់មកបូក 32.0 ដើម្បីបានអង្សាហ្វារិនហៃ។`,
      expectedOutput: "Fahrenheit: 77.00",
      reference: {
        label: "W3Schools - C++ User Input",
        url: "https://www.w3schools.com/cpp/cpp_user_input.asp"
      }
    }
  ]);
})();
