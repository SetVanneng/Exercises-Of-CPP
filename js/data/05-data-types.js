(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "data-types-01",
      topicId: "data-types",
      title: "Integer Age",
      difficulty: "beginner",
      type: "code",
      description: `អាយុគឺជាចំនួនគត់ ដូច្នេះប្រភេទទិន្នន័យសមស្របគឺ int។ អ្នកត្រូវប្រកាស variable ប្រភេទ int សម្រាប់អាយុ រួចបង្ហាញវានៅលើ console។`,
      requirements: [
        "ប្រកាស int age ដែលមានតម្លៃ 20។",
        "បង្ហាញ Age: និងតម្លៃ age។",
        "ប្រើ cout សម្រាប់ output។"
      ],
      input: null,
      output: "អាយុជាចំនួនគត់។",
      samples: [{ input: "", output: "Age: 20" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ int មិនមែន double ឬ string។"],
      hint: "int age = 20; រួច cout << \"Age: \" << age << endl;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int age = 20;
    cout << "Age: " << age << endl;
    return 0;
}`,
      explanation: `int សម្រាប់រក្សាទុកចំនួនគត់ដែលគ្មានផ្នែកទសភាគ។ ការជ្រើសរើសប្រភេទទិន្នន័យឱ្យត្រូវនឹងអត្ថន័យនៃទិន្នន័យ ជួយឱ្យកូដច្បាស់លាស់ និងសន្សំ memory។`,
      expectedOutput: "Age: 20"
    },
    {
      id: "data-types-02",
      topicId: "data-types",
      title: "Price with Decimals",
      difficulty: "beginner",
      type: "code",
      description: `តម្លៃទំនិញអាចមានផ្នែកទសភាគ ដូច្នេះ double គឺជាប្រភេទសមស្រប។ អ្នកត្រូវរក្សាទុកតម្លៃ 12.75 ក្នុង double រួចបង្ហាញវាជាមួយលេខទសភាគពីរ។`,
      requirements: [
        "ប្រកាស double price ដែលមានតម្លៃ 12.75។",
        "បង្ហាញ Price: និងតម្លៃដោយប្រើ fixed និង setprecision(2)។",
        "រួមបញ្ចូល iomanip។"
      ],
      input: null,
      output: "តម្លៃជាលេខទសភាគពីរខ្ទង់។",
      samples: [{ input: "", output: "Price: 12.75" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ double មិនមែន int។"],
      hint: "double price = 12.75; រួច cout << fixed << setprecision(2) << \"Price: \" << price;",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double price = 12.75;
    cout << fixed << setprecision(2);
    cout << "Price: " << price << endl;
    return 0;
}`,
      explanation: `double អាចរក្សាទុកលេខដែលមានផ្នែកទសភាគ។ fixed និង setprecision(2) ធានាថា output មានលេខទសភាគពីរខ្ទង់ ទោះបីតម្លៃមានសូន្យនៅខាងចុងក៏ដោយ។`,
      expectedOutput: "Price: 12.75"
    },
    {
      id: "data-types-03",
      topicId: "data-types",
      title: "Grade Letter",
      difficulty: "beginner",
      type: "code",
      description: `និទ្ទេសរបស់សិស្សជាអក្សរតែមួយ ដូចជា A, B ឬ C។ អ្នកត្រូវប្រើប្រភេទ char ដើម្បីរក្សាទុកនិទ្ទេស រួចបង្ហាញវា។`,
      requirements: [
        "ប្រកាស char grade ដែលមានតម្លៃ 'A'។",
        "បង្ហាញ Grade: និងតម្លៃ grade។",
        "ប្រើ single quotes សម្រាប់តម្លៃ char។"
      ],
      input: null,
      output: "និទ្ទេសជាអក្សរមួយ។",
      samples: [{ input: "", output: "Grade: A" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ char មិនមែន string។"],
      hint: "char grade = 'A'; រួច cout << \"Grade: \" << grade << endl;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    char grade = 'A';
    cout << "Grade: " << grade << endl;
    return 0;
}`,
      explanation: `char រក្សាទុកតួអក្សរតែមួយ ហើយត្រូវសរសេរតម្លៃក្នុង single quotes។ ប្រសិនបើប្រើ double quotes ដូចជា \"A\" នោះវានឹងក្លាយជា string literal មិនមែន char ទេ។`,
      expectedOutput: "Grade: A"
    },
    {
      id: "data-types-04",
      topicId: "data-types",
      title: "Is Passed Boolean",
      difficulty: "beginner",
      type: "code",
      description: `លទ្ធផលប្រឡងអាចជាការពិត ឬមិនពិត ដូចជាការឆ្លងកាត់ ឬមិនឆ្លងកាត់។ អ្នកត្រូវប្រើប្រភេទ bool និង boolalpha ដើម្បីបង្ហាញ true ឬ false ជាអក្សរ។`,
      requirements: [
        "ប្រកាស bool passed ដែលមានតម្លៃ true។",
        "បង្ហាញ Passed: និងតម្លៃ passed ដោយប្រើ boolalpha។",
        "កុំបង្ហាញជាលេខ 1 ឬ 0។"
      ],
      input: null,
      output: "លទ្ធផលប្រឡងជា true។",
      samples: [{ input: "", output: "Passed: true" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ boolalpha។"],
      hint: "bool passed = true; រួច cout << boolalpha << \"Passed: \" << passed;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    bool passed = true;
    cout << boolalpha;
    cout << "Passed: " << passed << endl;
    return 0;
}`,
      explanation: `bool មានតម្លៃតែពីរ គឺ true និង false។ តាមលំនាំដើម cout បង្ហាញ bool ជា 1 ឬ 0 ប៉ុន្តែ boolalpha ធ្វើឱ្យវាបង្ហាញជា true ឬ false ដែលអានយល់បានងាយជាង។`,
      expectedOutput: "Passed: true"
    },
    {
      id: "data-types-05",
      topicId: "data-types",
      title: "Sum of Large Numbers",
      difficulty: "intermediate",
      type: "code",
      description: `លេខធំៗអាចលើសពីជួរតម្លៃរបស់ int ធម្មតា។ អ្នកត្រូវអានចំនួនគត់ធំពីរ រួចបង្ហាញផលបូកដោយប្រើ long long ដើម្បីជៀសវាង overflow។`,
      requirements: [
        "អានចំនួនគត់ពីរជា long long ពី input។",
        "គណនាផលបូករបស់វា។",
        "បង្ហាញ Sum: និងផលបូក។"
      ],
      input: "ចំនួនគត់ធំពីរ បំបែកដោយចន្លោះ។",
      output: "ផលបូកនៃចំនួនទាំងពីរ។",
      samples: [{ input: "1000000000 2000000000", output: "Sum: 3000000000" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ long long មិនមែន int។"],
      hint: "long long a, b; cin >> a >> b; cout << \"Sum: \" << a + b;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    long long sum = a + b;
    cout << "Sum: " << sum << endl;
    return 0;
}`,
      explanation: `long long មានជួរតម្លៃធំជាង int ធម្មតា ដូច្នេះវាអាចរក្សាទុកលេខរាប់ពាន់លានបាន។ ការជ្រើសរើសប្រភេទឱ្យធំល្មម ការពារការបាត់ទិន្នន័យដោយសារ overflow។`,
      expectedOutput: "Sum: 3000000000"
    },
    {
      id: "data-types-06",
      topicId: "data-types",
      title: "Quiz: Char with Double Quotes",
      difficulty: "intermediate",
      type: "quiz",
      description: `ការសរសេរតម្លៃ char ដោយ double quotes គឺជាកំហុសទូទៅ។ សូមពិនិត្យ snippet ហើយជ្រើសរើសមូលហេតុដែលធ្វើឱ្យ compile មិនបាន។`,
      requirements: ["អាន snippet ដោយយកចិត្តទុកដាក់លើ quotes។", "ជ្រើសរើសចម្លើយដែលពន្យល់កំហុសបានត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    char grade = "A";
    cout << grade;
    return 0;
}`,
      quizQuestion: "តើហេតុអ្វីកូដនេះមិនអាច compile បាន?",
      options: [
        "ព្រោះ \"A\" ជា string literal ប៉ុន្តែ char ត្រូវការតម្លៃក្នុង single quotes។",
        "ព្រោះ char មិនអាចរក្សាទុកអក្សរ A បានទេ។",
        "ព្រោះ grade ត្រូវតែជា const។",
        "ព្រោះត្រូវប្រើ #include <string> សម្រាប់ char។"
      ],
      correctIndex: 0,
      quizExplanation: "char រក្សាទុកតួអក្សរតែមួយ ហើយត្រូវប្រើ single quotes ដូចជា 'A'។ Double quotes បង្កើត string literal ដែលមានប្រភេទខុសពី char។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "char ប្រើ single quotes សម្រាប់តួអក្សរតែមួយ។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    char grade = 'A';
    cout << grade;
    return 0;
}`,
      explanation: `ការប្រើ quotes ខុសប្រភេទគឺជាកំហុស syntax ដែលឃើញញឹកញាប់។ Single quotes សម្រាប់ char និង double quotes សម្រាប់ string។ ការចងចាំភាពខុសគ្នានេះជួយឱ្យកូដ compile បានត្រឹមត្រូវ។`,
      expectedOutput: "Compilation error"
    },
    {
      id: "data-types-07",
      topicId: "data-types",
      title: "ASCII Value",
      difficulty: "intermediate",
      type: "code",
      description: `តួអក្សរនៅក្នុង C++ មានតម្លៃជាលេខតាម ASCII។ អ្នកត្រូវអានតួអក្សរមួយ រួចបង្ហាញលេខ ASCII របស់វាដោយប្រើ static_cast។`,
      requirements: [
        "អាន char មួយពី input។",
        "បំប្លែង char ទៅ int ដោយប្រើ static_cast<int>។",
        "បង្ហាញ ASCII: និងលេខដែលទទួលបាន។"
      ],
      input: "តួអក្សរមួយ។",
      output: "លេខ ASCII នៃតួអក្សរ។",
      samples: [{ input: "A", output: "ASCII: 65" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ static_cast។"],
      hint: "char letter; cin >> letter; int code = static_cast<int>(letter);",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    char letter;
    cin >> letter;

    int code = static_cast<int>(letter);
    cout << "ASCII: " << code << endl;
    return 0;
}`,
      explanation: `char ត្រូវបានរក្សាទុកជាលេខខាងក្នុងរួចហើយ។ static_cast<int> បង្ហាញតម្លៃលេខនោះឱ្យយើងមើលឃើញ ដូច្នេះ A មានតម្លៃ ASCII 65។`,
      expectedOutput: "ASCII: 65"
    },
    {
      id: "data-types-08",
      topicId: "data-types",
      title: "Size of Types",
      difficulty: "advanced",
      type: "code",
      description: `ប្រភេទទិន្នន័យផ្សេងៗប្រើចំនួន byte ខុសគ្នាក្នុង memory។ អ្នកត្រូវប្រើ sizeof ដើម្បីបង្ហាញទំហំរបស់ int, double, char និង bool។`,
      requirements: [
        "បង្ហាញទំហំរបស់ int ជា int: និងចំនួន byte។",
        "បង្ហាញទំហំរបស់ double ជា double: និងចំនួន byte។",
        "បង្ហាញទំហំរបស់ char ជា char: និងចំនួន byte។",
        "បង្ហាញទំហំរបស់ bool ជា bool: និងចំនួន byte។"
      ],
      input: null,
      output: "របាយការណ៍ទំហំបួនបន្ទាត់។",
      samples: [{ input: "", output: "int: 4 bytes\ndouble: 8 bytes\nchar: 1 byte\nbool: 1 byte" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ sizeof សម្រាប់ប្រភេទនីមួយៗ។"],
      hint: "cout << \"int: \" << sizeof(int) << \" bytes\" << endl; ធ្វើដូចគ្នាសម្រាប់ប្រភេទផ្សេងទៀត។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    cout << "char: " << sizeof(char) << " byte" << endl;
    cout << "bool: " << sizeof(bool) << " byte" << endl;
    return 0;
}`,
      explanation: `sizeof បង្ហាញចំនួន byte ដែលប្រភេទទិន្នន័យកាន់កាប់។ ចំនួននេះអាចខុសគ្នាតាម platform ប៉ុន្តែនៅលើប្រព័ន្ធ 64-bit ទូទៅ int មាន 4 byte និង double មាន 8 byte។`,
      expectedOutput: "int: 4 bytes\ndouble: 8 bytes\nchar: 1 byte\nbool: 1 byte"
    },
    {
      id: "data-types-09",
      topicId: "data-types",
      title: "Type Range Check",
      difficulty: "advanced",
      type: "code",
      description: `លេខមួយអាចធំលើសពីជួរតម្លៃរបស់ int។ អ្នកត្រូវអាន long long មួយ រួចពិនិត្យថាតើវាស្ថិតក្នុងជួរតម្លៃរបស់ int ឬអត់ ដោយប្រើ INT_MIN និង INT_MAX។`,
      requirements: [
        "អានតម្លៃមួយជា long long ពី input។",
        "ប្រកាស bool fits ដែលពិនិត្យ value >= INT_MIN និង value <= INT_MAX។",
        "បង្ហាញ Fits int: និងតម្លៃ fits ដោយប្រើ boolalpha។"
      ],
      input: "ចំនួនគត់ធំមួយ។",
      output: "លទ្ធផលថាតើតម្លៃស្ថិតក្នុងជួរ int ឬអត់។",
      samples: [{ input: "3000000000", output: "Fits int: false" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ #include <climits>។"],
      hint: "bool fits = value >= INT_MIN && value <= INT_MAX; រួច cout << boolalpha << \"Fits int: \" << fits;",
      solution: String.raw`#include <iostream>
#include <climits>

using namespace std;

int main() {
    long long value;
    cin >> value;

    bool fits = value >= INT_MIN && value <= INT_MAX;
    cout << boolalpha;
    cout << "Fits int: " << fits << endl;
    return 0;
}`,
      explanation: `INT_MIN និង INT_MAX កំណត់ជួរតម្លៃអប្បបរមា និងអតិបរមារបស់ int។ ការពិនិត្យជាមុនជួយការពារការបំប្លែងដែលបាត់ទិន្នន័យ នៅពេលតម្លៃធំជាង int។`,
      expectedOutput: "Fits int: false"
    },
    {
      id: "data-types-10",
      topicId: "data-types",
      title: "Quiz: Integer Division",
      difficulty: "advanced",
      type: "quiz",
      description: `ប្រភេទទិន្នន័យមានឥទ្ធិពលលើលទ្ធផលនៃការចែក។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output ត្រឹមត្រូវ។`,
      requirements: ["យល់ពីភាពខុសគ្នារវាង int និង double ក្នុងការចែក។", "ជ្រើសរើស output ត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    double result = 1 / 3;
    cout << result;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញលេខអ្វី?",
      options: [
        "0 ព្រោះ 1 និង 3 ជា int ដូច្នេះការចែកជា integer division។",
        "0.333333 ព្រោះ result ជា double។",
        "1 ព្រោះ 1 / 3 ត្រូវបានបង្គត់ឡើង។",
        "Compile error ព្រោះ double មិនអាចរក្សាលទ្ធផលបានទេ។"
      ],
      correctIndex: 0,
      quizExplanation: "1 និង 3 ជា int ដូច្នេះ 1 / 3 គឺជា integer division ដែលបានលទ្ធផល 0។ បន្ទាប់មក 0 ត្រូវបានរក្សាក្នុង double ជា 0។ ដើម្បីបាន 0.3333 ត្រូវសរសេរ 1.0 / 3។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ប្រភេទរបស់ operands កំណត់ប្រភេទលទ្ធផលមុនពេល assign។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    double result = 1.0 / 3;
    cout << result;
    return 0;
}`,
      explanation: `ការចែក int ដោយ int ផ្តល់លទ្ធផលជា int ដោយកាត់ផ្នែកទសភាគចោល។ ដើម្បីទទួលបានលទ្ធផលទសភាគ ត្រូវធ្វើឱ្យ operand យ៉ាងហោចណាស់មួយជា double ដូចជា 1.0 / 3។`,
      expectedOutput: "0"
    },
    {
      id: "data-types-11",
      topicId: "data-types",
      title: "Student Record",
      difficulty: "challenge",
      type: "code",
      description: `កំណត់ត្រាសិស្សមួយមានទិន្នន័យច្រើនប្រភេទ ដូចជាឈ្មោះ អាយុ GPA និងនិទ្ទេស។ អ្នកត្រូវអានទិន្នន័យទាំងនោះ ដោយជ្រើសរើសប្រភេទទិន្នន័យឱ្យត្រូវនឹងអត្ថន័យ រួចបង្ហាញជារបាយការណ៍។`,
      requirements: [
        "អាន name ជា string, age ជា int, gpa ជា double និង grade ជា char។",
        "បង្ហាញ Name: និង name ។",
        "បង្ហាញ Age: និង age ។",
        "បង្ហាញ GPA: និង gpa ដោយលេខទសភាគពីរ។",
        "បង្ហាញ Grade: និង grade ។"
      ],
      input: "ឈ្មោះ អាយុ GPA និងនិទ្ទេស បំបែកដោយចន្លោះ។",
      output: "របាយការណ៍សិស្សបួនបន្ទាត់។",
      samples: [{ input: "Dara 19 3.75 A", output: "Name: Dara\nAge: 19\nGPA: 3.75\nGrade: A" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវជ្រើសរើសប្រភេទទិន្នន័យសមស្របសម្រាប់ field នីមួយៗ។"],
      hint: "ប្រកាស string name; int age; double gpa; char grade; រួចអានតាមលំដាប់ដែលបានកំណត់។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;
    int age;
    double gpa;
    char grade;
    cin >> name >> age >> gpa >> grade;

    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << fixed << setprecision(2);
    cout << "GPA: " << gpa << endl;
    cout << "Grade: " << grade << endl;
    return 0;
}`,
      explanation: `ការជ្រើសរើសប្រភេទទិន្នន័យត្រឹមត្រូវធ្វើឱ្យតម្លៃនីមួយៗត្រូវបានរក្សាទុកដោយគ្មានការបាត់បង់។ string សម្រាប់ឈ្មោះ int សម្រាប់អាយុ double សម្រាប់ GPA និង char សម្រាប់និទ្ទេស។`,
      expectedOutput: "Name: Dara\nAge: 19\nGPA: 3.75\nGrade: A"
    },
    {
      id: "data-types-12",
      topicId: "data-types",
      title: "Inventory Value",
      difficulty: "challenge",
      type: "code",
      description: `ហាងស្តុកទំនិញចង់គណនាតម្លៃសរុបនៃទំនិញមួយប្រភេទ។ អ្នកត្រូវអានឈ្មោះទំនិញ ចំនួន និងតម្លៃក្នុងមួយឯកតា រួចគណនាតម្លៃសរុបដោយប្រើប្រភេទទិន្នន័យសមស្រប។`,
      requirements: [
        "អាន item ជា string, quantity ជា int និង unitPrice ជា double។",
        "គណនា total ជា quantity * unitPrice។",
        "បង្ហាញ Item, Quantity, Unit Price និង Total។",
        "បង្ហាញ Unit Price និង Total ដោយលេខទសភាគពីរ។"
      ],
      input: "ឈ្មោះទំនិញ ចំនួន និងតម្លៃក្នុងមួយឯកតា បំបែកដោយចន្លោះ។",
      output: "របាយការណ៍ស្តុកទំនិញបួនបន្ទាត់។",
      samples: [{ input: "Pen 250 1.25", output: "Item: Pen\nQuantity: 250\nUnit Price: 1.25\nTotal: 312.50" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "Quantity ត្រូវជា int និង Unit Price ត្រូវជា double។"],
      hint: "double total = quantity * unitPrice; រួចបង្ហាញដោយ fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string item;
    int quantity;
    double unitPrice;
    cin >> item >> quantity >> unitPrice;

    double total = quantity * unitPrice;

    cout << "Item: " << item << endl;
    cout << "Quantity: " << quantity << endl;
    cout << fixed << setprecision(2);
    cout << "Unit Price: " << unitPrice << endl;
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `Quantity ជាចំនួនឯកតាដែលជាចំនួនគត់ ហើយ unitPrice ជាតម្លៃដែលអាចមានទសភាគ។ ការគុណ int ជាមួយ double ផ្តល់លទ្ធផលជា double ដែលសមស្របសម្រាប់តម្លៃសរុបជាប្រាក់។`,
      expectedOutput: "Item: Pen\nQuantity: 250\nUnit Price: 1.25\nTotal: 312.50"
    },
    {
      id: "data-types-13",
      topicId: "data-types",
      title: "Shift Character Code",
      difficulty: "challenge",
      type: "code",
      description: `តួអក្សរមានលេខកូដខាងក្នុង ដូច្នេះយើងអាចផ្លាស់ប្តូរតួអក្សរដោយកែលេខកូដរបស់វា។ អ្នកត្រូវអានតួអក្សរ និងចំនួន shift រួចបង្ហាញកូដដើម និងតួអក្សរថ្មី។`,
      requirements: [
        "អាន letter ជា char និង shift ជា int ពី input។",
        "បំប្លែង letter ទៅលេខកូដដោយ static_cast<int>។",
        "បន្ថែម shift ទៅលេខកូដ រួចបំប្លែងត្រឡប់ជា char។",
        "បង្ហាញ Original: តួអក្សរ និងលេខកូដ និង Shifted: តួអក្សរថ្មី និងលេខកូដថ្មី។"
      ],
      input: "តួអក្សរមួយ និងចំនួន shift បំបែកដោយចន្លោះ។",
      output: "កូដដើម និងកូដក្រោយ shift។",
      samples: [{ input: "A 2", output: "Original: A (65)\nShifted: C (67)" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ static_cast ទាំងពីរទិស។"],
      hint: "int code = static_cast<int>(letter); int shiftedCode = code + shift; char shifted = static_cast<char>(shiftedCode);",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    char letter;
    int shift;
    cin >> letter >> shift;

    int code = static_cast<int>(letter);
    int shiftedCode = code + shift;
    char shifted = static_cast<char>(shiftedCode);

    cout << "Original: " << letter << " (" << code << ")" << endl;
    cout << "Shifted: " << shifted << " (" << shiftedCode << ")" << endl;
    return 0;
}`,
      explanation: `char អាចបំប្លែងទៅ int ដើម្បីទទួលបានលេខកូដ ASCII ហើយ int អាចបំប្លែងត្រឡប់ទៅ char វិញ។ ការផ្លាស់ប្តូរតួអក្សរដោយកែលេខកូដគឺជាឧទាហរណ៍នៃការភ្ជាប់គ្នារវាង char និង int។`,
      expectedOutput: "Original: A (65)\nShifted: C (67)"
    }
  ]);
})();
