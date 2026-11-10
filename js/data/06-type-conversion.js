(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "type-conversion-01",
      topicId: "type-conversion",
      title: "Integer to Double",
      difficulty: "beginner",
      type: "code",
      description: `ពេលយើងដាក់ int ចូល double C++ ធ្វើ implicit conversion ដោយស្វ័យប្រវត្តិ។ អ្នកត្រូវបង្ហាញថាតម្លៃ int អាចក្លាយជា double ដោយមិនបាត់ព័ត៌មាន។`,
      requirements: [
        "ប្រកាស int value ដែលមានតម្លៃ 7។",
        "ប្រកាស double converted ដែលទទួលតម្លៃពី value។",
        "បង្ហាញ Value: និង converted ដោយលេខទសភាគពីរ។"
      ],
      input: null,
      output: "តម្លៃ int ដែលបំប្លែងជា double។",
      samples: [{ input: "", output: "Value: 7.00" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ fixed និង setprecision(2)។"],
      hint: "int value = 7; double converted = value; រួចបង្ហាញដោយ setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int value = 7;
    double converted = value;

    cout << fixed << setprecision(2);
    cout << "Value: " << converted << endl;
    return 0;
}`,
      explanation: `ការបំប្លែងពី int ទៅ double គឺសុវត្ថិភាព ព្រោះ double អាចរក្សាតម្លៃគត់បានទាំងអស់ក្នុងជួរដែលអាចប្រើបាន។ នេះជាឧទាហរណ៍នៃ implicit conversion ដែល compiler ធ្វើឱ្យដោយស្វ័យប្រវត្តិ។`,
      expectedOutput: "Value: 7.00"
    },
    {
      id: "type-conversion-02",
      topicId: "type-conversion",
      title: "Double to Integer Truncation",
      difficulty: "beginner",
      type: "code",
      description: `ការបំប្លែងពី double ទៅ int នឹងកាត់ផ្នែកទសភាគចោល មិនមែនបង្គត់ទេ។ អ្នកត្រូវបង្ហាញពីឥទ្ធិពលនេះដោយបំប្លែង 9.99 ទៅ int។`,
      requirements: [
        "ប្រកាស double value ដែលមានតម្លៃ 9.99។",
        "បំប្លែង value ទៅ int ដោយផ្ទាល់។",
        "បង្ហាញ Truncated: និងតម្លៃដែលទទួលបាន។"
      ],
      input: null,
      output: "តម្លៃ int ក្រោយកាត់ផ្នែកទសភាគ។",
      samples: [{ input: "", output: "Truncated: 9" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "មិនត្រូវប្រើ round ឬ function បង្គត់ទេ។"],
      hint: "double value = 9.99; int truncated = value; រួចបង្ហាញ truncated។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    double value = 9.99;
    int truncated = value;

    cout << "Truncated: " << truncated << endl;
    return 0;
}`,
      explanation: `ការបំប្លែង double ទៅ int បោះបង់ផ្នែកទសភាគទាំងស្រុង។ ដូច្នេះ 9.99 ក្លាយជា 9 មិនមែន 10 ទេ។ នេះជាចំណុចសំខាន់ដែលអាចបង្កកំហុសក្នុងការគណនា។`,
      expectedOutput: "Truncated: 9"
    },
    {
      id: "type-conversion-03",
      topicId: "type-conversion",
      title: "Character to ASCII",
      difficulty: "beginner",
      type: "code",
      description: `char និង int មានទំនាក់ទំនងជិតស្និទ្ធ ព្រោះ char ត្រូវបានរក្សាទុកជាលេខកូដ។ អ្នកត្រូវបំប្លែងតួអក្សរ B ទៅជាលេខ ASCII របស់វា។`,
      requirements: [
        "ប្រកាស char letter ដែលមានតម្លៃ 'B'។",
        "បំប្លែង letter ទៅ int ដោយប្រើ implicit conversion ឬ static_cast។",
        "បង្ហាញ ASCII: និងលេខដែលទទួលបាន។"
      ],
      input: null,
      output: "លេខ ASCII នៃតួអក្សរ B។",
      samples: [{ input: "", output: "ASCII: 66" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ char និងលេខ ASCII។"],
      hint: "char letter = 'B'; int code = letter; រួចបង្ហាញ code។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    char letter = 'B';
    int code = letter;

    cout << "ASCII: " << code << endl;
    return 0;
}`,
      explanation: `char មានតម្លៃជាលេខខាងក្នុងស្រាប់។ ពេលយើងដាក់ char ចូល int តម្លៃលេខនោះត្រូវបានយកមកប្រើ។ ដូច្នេះ 'B' មានលេខ ASCII 66។`,
      expectedOutput: "ASCII: 66"
    },
    {
      id: "type-conversion-04",
      topicId: "type-conversion",
      title: "ASCII to Character",
      difficulty: "beginner",
      type: "code",
      description: `យើងអាចបង្កើតតួអក្សរពីលេខ ASCII បានដោយបំប្លែង int ទៅ char។ អ្នកត្រូវបង្ហាញថាលេខ 65 ត្រូវនឹងតួអក្សរ A។`,
      requirements: [
        "ប្រកាស int code ដែលមានតម្លៃ 65។",
        "បំប្លែង code ទៅ char។",
        "បង្ហាញ Character: និងតួអក្សរដែលទទួលបាន។"
      ],
      input: null,
      output: "តួអក្សរដែលត្រូវនឹងលេខ ASCII 65។",
      samples: [{ input: "", output: "Character: A" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើការបំប្លែងពី int ទៅ char។"],
      hint: "int code = 65; char letter = code; រួចបង្ហាញ letter។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int code = 65;
    char letter = code;

    cout << "Character: " << letter << endl;
    return 0;
}`,
      explanation: `ការបំប្លែង int ទៅ char យកលេខនោះជាលេខកូដ ASCII។ ដូច្នេះ 65 ក្លាយជា 'A'។ នេះបង្ហាញថា char និង int អាចបំប្លែងគ្នាទៅវិញទៅមកបាន។`,
      expectedOutput: "Character: A"
    },
    {
      id: "type-conversion-05",
      topicId: "type-conversion",
      title: "Explicit static_cast",
      difficulty: "intermediate",
      type: "code",
      description: `នៅពេលអ្នកចង់បំប្លែងដោយច្បាស់លាស់ និងអានយល់បាន គួរប្រើ static_cast។ អ្នកត្រូវអាន double មួយ រួចបំប្លែងទៅ int ដោយ static_cast និងបង្ហាញទាំងតម្លៃដើម និងតម្លៃកាត់។`,
      requirements: [
        "អាន value ជា double ពី input។",
        "បំប្លែង value ទៅ int ដោយប្រើ static_cast<int>។",
        "បង្ហាញ Original: និង value ដោយលេខទសភាគពីរ។",
        "បង្ហាញ Truncated: និងតម្លៃ int ដែលទទួលបាន។"
      ],
      input: "លេខមួយដែលមានផ្នែកទសភាគ។",
      output: "តម្លៃដើម និងតម្លៃក្រោយបំប្លែង។",
      samples: [{ input: "12.75", output: "Original: 12.75\nTruncated: 12" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ static_cast មិនមែន C-style cast។"],
      hint: "int truncated = static_cast<int>(value); រួចបង្ហាញទាំង value និង truncated។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double value;
    cin >> value;

    int truncated = static_cast<int>(value);

    cout << fixed << setprecision(2);
    cout << "Original: " << value << endl;
    cout << "Truncated: " << truncated << endl;
    return 0;
}`,
      explanation: `static_cast<int>(value) ប្រាប់យ៉ាងច្បាស់ថាយើងចង់បំប្លែង value ទៅ int។ ការបំប្លែងនេះកាត់ផ្នែកទសភាគចោល ហើយការសរសេរបែបនេះអានយល់បានច្បាស់ជាង C-style cast។`,
      expectedOutput: "Original: 12.75\nTruncated: 12"
    },
    {
      id: "type-conversion-06",
      topicId: "type-conversion",
      title: "Quiz: Mixed Type Addition",
      difficulty: "intermediate",
      type: "quiz",
      description: `ពេល int និង double ត្រូវបូកគ្នា C++ ជ្រើសរើសប្រភេទដែលអាចរក្សាទិន្នន័យបានច្រើនជាង។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output។`,
      requirements: ["យល់ពី implicit conversion ក្នុងការគណនា។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int a = 5;
    double b = 2.5;
    double result = a + b;
    cout << result;
    return 0;
}`,
      quizQuestion: "តើ result មានតម្លៃអ្វី?",
      options: [
        "7.5 ព្រោះ a ត្រូវបំប្លែងទៅ double មុនពេលបូក។",
        "7 ព្រោះ b ត្រូវបំប្លែងទៅ int មុនពេលបូក។",
        "7.0 ព្រោះផ្នែកទសភាគត្រូវកាត់ចោល។",
        "Compile error ព្រោះ int និង double បូកគ្នាមិនបាន។"
      ],
      correctIndex: 0,
      quizExplanation: "C++ ធ្វើឱ្យ int ក្លាយជា double ដើម្បីរក្សាភាពត្រឹមត្រូវនៃការគណនា។ ដូច្នេះ 5 + 2.5 គឺ 7.5 ហើយលទ្ធផលជា double។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "double អាចរក្សាតម្លៃទសភាគ ដូច្នេះ int ត្រូវបំប្លែងទៅ double។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int a = 5;
    double b = 2.5;
    double result = a + b;
    cout << result;
    return 0;
}`,
      explanation: `ក្នុងការគណនាដែលមាន operands ប្រភេទខុសគ្នា C++ បំប្លែង operands ទៅប្រភេទដែលមានលំដាប់ខ្ពស់ជាង។ ក្នុងករណីនេះ double ខ្ពស់ជាង int ដូច្នេះ a ក្លាយជា double។`,
      expectedOutput: "7.5"
    },
    {
      id: "type-conversion-07",
      topicId: "type-conversion",
      title: "String to Integer",
      difficulty: "intermediate",
      type: "code",
      description: `ទិន្នន័យដែលអានជា string អាចត្រូវបំប្លែងទៅជាចំនួនគត់ដោយ stoi។ អ្នកត្រូវអានលេខជា string បន្ថែម 10 រួចបង្ហាញលទ្ធផល។`,
      requirements: [
        "អាន text ជា string ពី input។",
        "បំប្លែង text ទៅ int ដោយប្រើ stoi។",
        "បន្ថែម 10 ទៅចំនួនដែលទទួលបាន។",
        "បង្ហាញ Result: និងលទ្ធផល។"
      ],
      input: "លេខមួយក្នុងទម្រង់អត្ថបទ។",
      output: "លេខដែលបូកបន្ថែម 10។",
      samples: [{ input: "42", output: "Result: 52" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ stoi មិនមែនអានជា int ដោយផ្ទាល់។"],
      hint: "string text; cin >> text; int number = stoi(text); រួចបង្ហាញ number + 10។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    string text;
    cin >> text;

    int number = stoi(text);
    cout << "Result: " << number + 10 << endl;
    return 0;
}`,
      explanation: `stoi បំប្លែង string ដែលមានលេខទៅជា int។ វាមានប្រយោជន៍ពេលទិន្នន័យចូលមកជាអត្ថបទ ប៉ុន្តែយើងត្រូវការគណនាជាលេខ។ ប្រសិនបើ string មិនមែនលេខ stoi នឹង throw exception។`,
      expectedOutput: "Result: 52"
    },
    {
      id: "type-conversion-08",
      topicId: "type-conversion",
      title: "String to Double with Tax",
      difficulty: "advanced",
      type: "code",
      description: `តម្លៃដែលបានមកពីអត្ថបទអាចមានផ្នែកទសភាគ ដូច្នេះត្រូវប្រើ stod។ អ្នកត្រូវអានតម្លៃជា string គណនាពន្ធ 8% និងបង្ហាញតម្លៃសរុប។`,
      requirements: [
        "អាន text ជា string ពី input។",
        "បំប្លែង text ទៅ double ដោយប្រើ stod។",
        "គណនា tax ជា 8% នៃ price។",
        "បង្ហាញ Tax និង Total ដោយលេខទសភាគពីរ។"
      ],
      input: "តម្លៃមួយក្នុងទម្រង់អត្ថបទ។",
      output: "ពន្ធ និងតម្លៃសរុប។",
      samples: [{ input: "50.00", output: "Tax: 4.00\nTotal: 54.00" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ stod មិនមែន stoi ទេ។"],
      hint: "double price = stod(text); double tax = price * 0.08; double total = price + tax;",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string text;
    cin >> text;

    double price = stod(text);
    double tax = price * 0.08;
    double total = price + tax;

    cout << fixed << setprecision(2);
    cout << "Tax: " << tax << endl;
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `stod បំប្លែង string ទៅ double ដែលអាចរក្សាផ្នែកទសភាគបាន។ ការប្រើ stoi ជំនួសនឹងបាត់ផ្នែកទសភាគ ដូច្នេះត្រូវជ្រើសរើស function បំប្លែងឱ្យត្រូវនឹងប្រភេទទិន្នន័យ។`,
      expectedOutput: "Tax: 4.00\nTotal: 54.00"
    },
    {
      id: "type-conversion-09",
      topicId: "type-conversion",
      title: "Integer to String Concatenation",
      difficulty: "advanced",
      type: "code",
      description: `ពេលចង់បង្កើតអត្ថបទដែលរួមបញ្ចូលលេខ យើងអាចប្រើ to_string ដើម្បីបំប្លែងលេខទៅ string។ អ្នកត្រូវអានឆ្នាំជាចំនួនគត់ រួចបង្ហាញឆ្នាំ និងចំនួនខ្ទង់របស់វា។`,
      requirements: [
        "អាន year ជា int ពី input។",
        "បំប្លែង year ទៅ string ដោយប្រើ to_string។",
        "បង្ហាញ Year: និង string នោះ។",
        "បង្ហាញ Digits: និងចំនួនតួអក្សររបស់ string។"
      ],
      input: "ឆ្នាំមួយជាចំនួនគត់។",
      output: "ឆ្នាំ និងចំនួនខ្ទង់។",
      samples: [{ input: "2026", output: "Year: 2026\nDigits: 4" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ to_string និង length។"],
      hint: "string text = to_string(year); រួចបង្ហាញ text និង text.length()។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

int main() {
    int year;
    cin >> year;

    string text = to_string(year);
    cout << "Year: " << text << endl;
    cout << "Digits: " << text.length() << endl;
    return 0;
}`,
      explanation: `to_string បំប្លែងលេខទៅជា string ដែលអាចប្រើជាមួយ string operations បាន។ length បង្ហាញចំនួនតួអក្សរ ដូច្នេះឆ្នាំ 2026 មានបួនខ្ទង់។`,
      expectedOutput: "Year: 2026\nDigits: 4"
    },
    {
      id: "type-conversion-10",
      topicId: "type-conversion",
      title: "Quiz: Casting Double to Int",
      difficulty: "advanced",
      type: "quiz",
      description: `static_cast<int> មានឥទ្ធិពលកាត់ផ្នែកទសភាគ មិនមែនបង្គត់ទៅចំនួនជិតបំផុតទេ។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output។`,
      requirements: ["យល់ពីឥទ្ធិពលនៃ static_cast<int> លើ double។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    double value = 4.9;
    int result = static_cast<int>(value);
    cout << result;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញលេខអ្វី?",
      options: [
        "4 ព្រោះការបំប្លែងទៅ int កាត់ផ្នែកទសភាគចោល។",
        "5 ព្រោះ 4.9 ត្រូវបានបង្គត់ឡើង។",
        "4.9 ព្រោះ result នៅតែរក្សាទសភាគ។",
        "Compile error ព្រោះ double មិនអាច cast ទៅ int បានទេ។"
      ],
      correctIndex: 0,
      quizExplanation: "static_cast<int> បំប្លែងដោយកាត់ផ្នែកទសភាគចោល។ ដូច្នេះ 4.9 ក្លាយជា 4 មិនមែន 5 ទេ។ បើចង់បង្គត់ត្រូវប្រើ function ដូចជា round ឬបូក 0.5 ជាមុន។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "static_cast<int> មិនបង្គត់ទេ វាកាត់ចោល។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    double value = 4.9;
    int result = static_cast<int>(value);
    cout << result;
    return 0;
}`,
      explanation: `ការបំប្លែងពី floating point ទៅ integer មិនរក្សាផ្នែកទសភាគទេ។ តម្លៃត្រូវបានកាត់ចូលរកសូន្យ ដូច្នេះលេខវិជ្ជមាន 4.9 ក្លាយជា 4។ នេះជាមូលហេតុដែលត្រូវប្រុងប្រយ័ត្នពេលបំប្លែងប្រាក់ ឬពិន្ទុ។`,
      expectedOutput: "4"
    },
    {
      id: "type-conversion-11",
      topicId: "type-conversion",
      title: "Mixed String Parsing",
      difficulty: "challenge",
      type: "code",
      description: `ទិន្នន័យពីខាងក្រៅអាចមកជាអត្ថបទទាំងអស់ ទោះបីយើងត្រូវការគណនាជាលេខក៏ដោយ។ អ្នកត្រូវអានចំនួន និងតម្លៃជា string បំប្លែងដោយ stoi និង stod រួចគណនាតម្លៃសរុប។`,
      requirements: [
        "អាន quantityText និង priceText ជា string ពី input។",
        "បំប្លែង quantityText ទៅ int ដោយ stoi។",
        "បំប្លែង priceText ទៅ double ដោយ stod។",
        "គណនា total ជា quantity * price និងបង្ហាញដោយលេខទសភាគពីរ។"
      ],
      input: "ចំនួន និងតម្លៃក្នុងមួយឯកតា ជាអត្ថបទបំបែកដោយចន្លោះ។",
      output: "តម្លៃសរុប។",
      samples: [{ input: "3 4.50", output: "Total: 13.50" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើទាំង stoi និង stod។"],
      hint: "int quantity = stoi(quantityText); double price = stod(priceText); double total = quantity * price;",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string quantityText, priceText;
    cin >> quantityText >> priceText;

    int quantity = stoi(quantityText);
    double price = stod(priceText);
    double total = quantity * price;

    cout << fixed << setprecision(2);
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `stoi សម្រាប់អត្ថបទដែលជាចំនួនគត់ ហើយ stod សម្រាប់អត្ថបទដែលជាលេខទសភាគ។ ការជ្រើសរើស function បំប្លែងឱ្យត្រូវនឹងទម្រង់ទិន្នន័យ ជួយរក្សាភាពត្រឹមត្រូវនៃការគណនា។`,
      expectedOutput: "Total: 13.50"
    },
    {
      id: "type-conversion-12",
      topicId: "type-conversion",
      title: "Time Format from Seconds",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីកត់ត្រាពេលវេលាជាវិនាទី ប៉ុន្តែអ្នកប្រើចង់ឃើញជាទម្រង់ម៉ោង នាទី និងវិនាទី។ អ្នកត្រូវអានចំនួនវិនាទី រួចបំប្លែងជាទម្រង់ HH:MM:SS ដោយបំពេញលេខសូន្យខាងឆ្វេង។`,
      requirements: [
        "អាន totalSeconds ជា long long ពី input។",
        "គណនា hours, minutes និង seconds ដោយប្រើចែក និង modulus។",
        "បង្ហាញជាទម្រង់ HH:MM:SS ដោយលេខពីរខ្ទង់។",
        "ប្រើ setfill('0') និង setw(2)។"
      ],
      input: "ចំនួនវិនាទីសរុបជាចំនួនគត់ធំ។",
      output: "ពេលវេលាក្នុងទម្រង់ HH:MM:SS។",
      samples: [{ input: "3672", output: "01:01:12" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ long long និង iomanip។"],
      hint: "hours = totalSeconds / 3600; minutes = (totalSeconds % 3600) / 60; seconds = totalSeconds % 60;",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    long long totalSeconds;
    cin >> totalSeconds;

    long long hours = totalSeconds / 3600;
    long long minutes = (totalSeconds % 3600) / 60;
    long long seconds = totalSeconds % 60;

    cout << setfill('0');
    cout << setw(2) << hours << ":";
    cout << setw(2) << minutes << ":";
    cout << setw(2) << seconds << endl;
    return 0;
}`,
      explanation: `យើងបំប្លែងវិនាទីសរុបដោយចែកជា 3600 សម្រាប់ម៉ោង បន្ទាប់មកយកសំណល់មកចែក 60 សម្រាប់នាទី។ setfill('0') និង setw(2) ធានាថាលេខនីមួយៗមានពីរខ្ទង់ ដូចជា 01:01:12។`,
      expectedOutput: "01:01:12"
    },
    {
      id: "type-conversion-13",
      topicId: "type-conversion",
      title: "Safe Division with Casting",
      difficulty: "challenge",
      type: "code",
      description: `ការចែកចំនួនគត់ពីរនឹងបាត់ផ្នែកទសភាគ ប្រសិនបើយើងមិនបំប្លែងប្រភេទជាមុន។ អ្នកត្រូវអានចំនួនគត់ពីរ រួចបំប្លែងមួយក្នុងចំណោមនោះទៅ double ដើម្បីទទួលបានលទ្ធផលចែកត្រឹមត្រូវ។`,
      requirements: [
        "អាន a និង b ជា int ពី input។",
        "បំប្លែង a ទៅ double ដោយ static_cast<double> មុនពេលចែក។",
        "គណនា quotient ជា a / b។",
        "បង្ហាញ Quotient: និងលទ្ធផលដោយលេខទសភាគបីខ្ទង់។"
      ],
      input: "ចំនួនគត់ពីរ បំបែកដោយចន្លោះ។",
      output: "លទ្ធផលចែកជាលេខទសភាគ។",
      samples: [{ input: "7 2", output: "Quotient: 3.500" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ static_cast<double> ដើម្បីជៀសវាង integer division។"],
      hint: "double quotient = static_cast<double>(a) / b; រួចបង្ហាញដោយ setprecision(3)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    double quotient = static_cast<double>(a) / b;

    cout << fixed << setprecision(3);
    cout << "Quotient: " << quotient << endl;
    return 0;
}`,
      explanation: `បើ a និង b ជា int នោះ a / b គឺជា integer division ហើយផ្នែកទសភាគត្រូវបាត់។ ការបំប្លែង a ទៅ double ធ្វើឱ្យការចែកប្រើ floating point ដូច្នេះលទ្ធផលរក្សាផ្នែកទសភាគបានត្រឹមត្រូវ។`,
      expectedOutput: "Quotient: 3.500"
    }
  ]);
})();
