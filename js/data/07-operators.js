(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "operators-01",
      topicId: "operators",
      title: "Basic Arithmetic",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីគណនាមូលដ្ឋានត្រូវប្រើ arithmetic operators សម្រាប់បូក ដក និងគុណ។ អ្នកត្រូវអានចំនួនគត់ពីរ រួចបង្ហាញផលបូក ផលដក និងផលគុណ។`,
      requirements: [
        "អាន a និង b ជា int ពី input។",
        "គណនាផលបូកដោយប្រើ +។",
        "គណនាផលដកដោយប្រើ -។",
        "គណនាផលគុណដោយប្រើ *។",
        "បង្ហាញ Sum, Difference និង Product តាមលំដាប់។"
      ],
      input: "ចំនួនគត់ពីរ បំបែកដោយចន្លោះ។",
      output: "ផលបូក ផលដក និងផលគុណ។",
      samples: [{ input: "7 3", output: "Sum: 10\nDifference: 4\nProduct: 21" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ arithmetic operators មិនមែន hardcode លទ្ធផល។"],
      hint: "ប្រើ a + b, a - b និង a * b រួចបង្ហាញដោយ cout។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    cout << "Sum: " << a + b << endl;
    cout << "Difference: " << a - b << endl;
    cout << "Product: " << a * b << endl;
    return 0;
}`,
      explanation: `Arithmetic operators +, - និង * ធ្វើការគណនាតាមលំដាប់ធម្មតា។ ក្នុងកន្សោម cout ការគណនាត្រូវបានធ្វើមុនពេលតម្លៃត្រូវបានបង្ហាញ ដូច្នេះយើងអាចសរសេរ a + b ដោយផ្ទាល់បាន។`,
      expectedOutput: "Sum: 10\nDifference: 4\nProduct: 21"
    },
    {
      id: "operators-02",
      topicId: "operators",
      title: "Modulus Remainder",
      difficulty: "beginner",
      type: "code",
      description: `Modulus operator % ផ្តល់សំណល់នៃការចែកចំនួនគត់។ អ្នកត្រូវអានចំនួនគត់ពីរ រួចបង្ហាញសំណល់នៅពេលចែកចំនួនទីមួយនឹងចំនួនទីពីរ។`,
      requirements: [
        "អាន a និង b ជា int ពី input។",
        "គណនាសំណល់ដោយប្រើ a % b។",
        "បង្ហាញ Remainder: និងសំណល់។"
      ],
      input: "ចំនួនគត់ពីរ បំបែកដោយចន្លោះ។",
      output: "សំណល់នៃការចែក។",
      samples: [{ input: "17 5", output: "Remainder: 2" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "b មិនសូន្យក្នុងករណីសាកល្បង។"],
      hint: "int remainder = a % b; រួចបង្ហាញ remainder។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    int remainder = a % b;
    cout << "Remainder: " << remainder << endl;
    return 0;
}`,
      explanation: `% ផ្តល់សំណល់បន្ទាប់ពីចែកចំនួនគត់។ ឧទាហរណ៍ 17 / 5 បាន 3 ហើយសល់ 2 ដូច្នេះ 17 % 5 គឺ 2។ Modulus មានប្រយោជន៍សម្រាប់ពិនិត្យភាពស្មើ និងការវិលជុំ។`,
      expectedOutput: "Remainder: 2"
    },
    {
      id: "operators-03",
      topicId: "operators",
      title: "Rectangle Measurements",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីគណនាផ្ទៃក្រឡា និងបរិមាត្រនៃចតុកោណកែងត្រូវប្រើផលគុណ និងផលបូក។ អ្នកត្រូវអានទទឹង និងកម្ពស់ រួចបង្ហាញលទ្ធផលទាំងពីរ។`,
      requirements: [
        "អាន width និង height ជា int ពី input។",
        "គណនា area ជា width * height។",
        "គណនា perimeter ជា 2 * (width + height)។",
        "បង្ហាញ Area និង Perimeter។"
      ],
      input: "ទទឹង និងកម្ពស់ជាចំនួនគត់ បំបែកដោយចន្លោះ។",
      output: "ផ្ទៃក្រឡា និងបរិមាត្រ។",
      samples: [{ input: "5 3", output: "Area: 15\nPerimeter: 16" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ parentheses ឱ្យបានត្រឹមត្រូវក្នុងការគណនា perimeter។"],
      hint: "area = width * height; perimeter = 2 * (width + height);",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int width, height;
    cin >> width >> height;

    int area = width * height;
    int perimeter = 2 * (width + height);

    cout << "Area: " << area << endl;
    cout << "Perimeter: " << perimeter << endl;
    return 0;
}`,
      explanation: `ផ្ទៃក្រឡាគឺជាផលគុណនៃទទឹង និងកម្ពស់។ បរិមាត្រគឺជាពីរដងនៃផលបូកទទឹង និងកម្ពស់ ដូច្នេះត្រូវប្រើ parentheses ដើម្បីឱ្យការបូកត្រូវបានធ្វើមុនពេលគុណ។`,
      expectedOutput: "Area: 15\nPerimeter: 16"
    },
    {
      id: "operators-04",
      topicId: "operators",
      title: "Increment and Decrement",
      difficulty: "beginner",
      type: "code",
      description: `Increment និង decrement operators បង្កើន ឬបន្ថយតម្លៃមួយជាន់។ អ្នកត្រូវបង្ហាញតម្លៃដំបូង បន្ទាប់មកបង្កើន និងបន្ថយវា ដោយប្រើ ++ និង --។`,
      requirements: [
        "ប្រកាស int value ដែលមានតម្លៃ 5។",
        "បង្ហាញ Initial: និង value។",
        "ប្រើ ++ ដើម្បីបង្កើន value រួចបង្ហាញ After increment។",
        "ប្រើ -- ដើម្បីបន្ថយ value រួចបង្ហាញ After decrement។"
      ],
      input: null,
      output: "តម្លៃបីដំណាក់កាល។",
      samples: [{ input: "", output: "Initial: 5\nAfter increment: 6\nAfter decrement: 5" }],
      constraints: ["មិនត្រូវប្រើ input ទេ។", "ត្រូវប្រើ ++ និង -- មិនមែន value = value + 1 ដោយផ្ទាល់ទេ។"],
      hint: "ប្រើ value++; សម្រាប់ increment និង value--; សម្រាប់ decrement។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int value = 5;
    cout << "Initial: " << value << endl;

    value++;
    cout << "After increment: " << value << endl;

    value--;
    cout << "After decrement: " << value << endl;
    return 0;
}`,
      explanation: `++ បង្កើនតម្លៃមួយ ហើយ -- បន្ថយតម្លៃមួយ។ នៅពេលប្រើជា statement ដោយឡែក វាមិនមានភាពខុសគ្នារវាង prefix និង postfix ទេ ប៉ុន្តែភាពខុសគ្នានឹងមាននៅពេលប្រើក្នុង expression។`,
      expectedOutput: "Initial: 5\nAfter increment: 6\nAfter decrement: 5"
    },
    {
      id: "operators-05",
      topicId: "operators",
      title: "Compound Assignment",
      difficulty: "intermediate",
      type: "code",
      description: `Compound assignment operators ធ្វើឱ្យការធ្វើបច្ចុប្បន្នភាពតម្លៃខ្លី និងអានយល់បានងាយ។ អ្នកត្រូវអានតម្លៃមួយ រួចអនុវត្ត +=, *= និង -= តាមលំដាប់។`,
      requirements: [
        "អាន value ជា int ពី input។",
        "បន្ថែម 10 ដោយប្រើ +=។",
        "គុណនឹង 2 ដោយប្រើ *=។",
        "ដក 5 ដោយប្រើ -=។",
        "បង្ហាញ Final: និងតម្លៃចុងក្រោយ។"
      ],
      input: "ចំនួនគត់ចាប់ផ្តើមមួយ។",
      output: "តម្លៃក្រោយការអនុវត្តទាំងបី។",
      samples: [{ input: "20", output: "Final: 55" }],
      constraints: ["ត្រូវប្រើ compound assignment operators។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "value += 10; value *= 2; value -= 5; រួចបង្ហាញ value។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int value;
    cin >> value;

    value += 10;
    value *= 2;
    value -= 5;

    cout << "Final: " << value << endl;
    return 0;
}`,
      explanation: `value += 10 គឺស្មើនឹង value = value + 10។ ដូចគ្នាចំពោះ *= និង -=។ លំដាប់មានសារៈសំខាន់ ព្រោះលទ្ធផលអាចខុសគ្នាបើយើងប្តូរលំដាប់ operation។`,
      expectedOutput: "Final: 55"
    },
    {
      id: "operators-06",
      topicId: "operators",
      title: "Quiz: Post-Increment",
      difficulty: "intermediate",
      type: "quiz",
      description: `Post-increment យកតម្លៃចាស់មកប្រើមុន រួចទើបបង្កើន។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output ត្រឹមត្រូវ។`,
      requirements: ["យល់ពីភាពខុសគ្នារវាង prefix និង postfix increment។", "ជ្រើសរើស output ត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = a++;
    cout << a << " " << b;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: [
        "6 5 ព្រោះ b ទទួលតម្លៃចាស់ 5 មុន រួច a កើនជា 6។",
        "5 5 ព្រោះ a មិនផ្លាស់ប្តូរទេ។",
        "6 6 ព្រោះទាំង a និង b កើនជា 6។",
        "5 6 ព្រោះ b ទទួលតម្លៃក្រោយ increment។"
      ],
      correctIndex: 0,
      quizExplanation: "a++ គឺ post-increment ដែលផ្តល់តម្លៃចាស់ (5) ទៅ b មុន រួចទើបបង្កើន a ទៅ 6។ ដូច្នេះ output គឺ 6 5។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "Postfix ប្រើតម្លៃចាស់មុន រួចទើបបង្កើន។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = a++;
    cout << a << " " << b;
    return 0;
}`,
      explanation: `ក្នុង a++ តម្លៃចាស់របស់ a ត្រូវបានយកទៅប្រើក្នុង expression មុន ហើយ a ត្រូវបានបង្កើននៅពេលបន្ទាប់។ បើជា ++a នោះ a នឹងកើនមុន ហើយ b នឹងទទួលបាន 6។`,
      expectedOutput: "6 5"
    },
    {
      id: "operators-07",
      topicId: "operators",
      title: "Ternary Maximum",
      difficulty: "intermediate",
      type: "code",
      description: `Ternary operator ?: អាចជ្រើសរើសតម្លៃមួយពីពីរតាមលក្ខខណ្ឌ។ អ្នកត្រូវអានចំនួនគត់ពីរ រួចបង្ហាញចំនួនធំជាងដោយប្រើ ternary operator។`,
      requirements: [
        "អាន a និង b ជា int ពី input។",
        "ប្រកាស max ដោយប្រើ (a > b) ? a : b។",
        "បង្ហាញ Max: និងតម្លៃ max។"
      ],
      input: "ចំនួនគត់ពីរ បំបែកដោយចន្លោះ។",
      output: "ចំនួនធំជាង។",
      samples: [{ input: "12 27", output: "Max: 27" }],
      constraints: ["មិនត្រូវប្រើ if ទេ។", "ត្រូវប្រើ ternary operator ?:។"],
      hint: "int max = (a > b) ? a : b; រួចបង្ហាញ max។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    int max = (a > b) ? a : b;
    cout << "Max: " << max << endl;
    return 0;
}`,
      explanation: `Ternary operator មានទម្រង់ condition ? valueIfTrue : valueIfFalse។ វាជ្រើសរើសតម្លៃមួយដោយផ្អែកលើ condition ហើយសមស្របសម្រាប់ការជ្រើសរើសខ្លីៗជំនួស if-else។`,
      expectedOutput: "Max: 27"
    },
    {
      id: "operators-08",
      topicId: "operators",
      title: "Even or Odd with Modulus",
      difficulty: "advanced",
      type: "code",
      description: `ចំនួនគត់គឺជាចំនួនស្មើ ប្រសិនបើចែកនឹង 2 ហើយសល់ 0។ អ្នកត្រូវប្រើ modulus និង comparison ដើម្បីបង្កើត bool ដែលបង្ហាញថាចំនួននោះស្មើ ឬអត់។`,
      requirements: [
        "អាន number ជា int ពី input។",
        "ប្រកាស bool isEven ដែលពិនិត្យ number % 2 == 0។",
        "បង្ហាញ Even: និងតម្លៃ isEven ដោយប្រើ boolalpha។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "លទ្ធផលថាតើចំនួននោះស្មើ ឬអត់។",
      samples: [{ input: "14", output: "Even: true" }],
      constraints: ["មិនត្រូវប្រើ if ទេ។", "ត្រូវប្រើ modulus និង boolalpha។"],
      hint: "bool isEven = number % 2 == 0; រួច cout << boolalpha << \"Even: \" << isEven;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int number;
    cin >> number;

    bool isEven = number % 2 == 0;
    cout << boolalpha;
    cout << "Even: " << isEven << endl;
    return 0;
}`,
      explanation: `number % 2 ផ្តល់សំណល់នៃការចែកនឹង 2។ ប្រសិនបើសំណល់ស្មើ 0 នោះចំនួននោះជាចំនួនស្មើ។ Comparison == បង្កើត bool ដែលយើងអាចបង្ហាញជា true ឬ false។`,
      expectedOutput: "Even: true"
    },
    {
      id: "operators-09",
      topicId: "operators",
      title: "Logical Eligibility Check",
      difficulty: "advanced",
      type: "code",
      description: `ការពិនិត្យសិទ្ធិចូលរួមអាចត្រូវការលក្ខខណ្ឌច្រើនក្នុងពេលតែមួយ។ អ្នកត្រូវអានអាយុ និងពិន្ទុ រួចប្រើ logical AND ដើម្បីពិនិត្យថាអ្នកប្រើមានលក្ខណៈគ្រប់គ្រាន់ឬអត់។`,
      requirements: [
        "អាន age និង score ជា int ពី input។",
        "ប្រកាស bool eligible ដែលពិនិត្យ age >= 18 && score >= 50។",
        "បង្ហាញ Eligible: និងតម្លៃ eligible ដោយ boolalpha។"
      ],
      input: "អាយុ និងពិន្ទុ បំបែកដោយចន្លោះ។",
      output: "លទ្ធផលសិទ្ធិចូលរួម។",
      samples: [{ input: "20 65", output: "Eligible: true" }],
      constraints: ["មិនត្រូវប្រើ if ទេ។", "ត្រូវប្រើ && និង boolalpha។"],
      hint: "bool eligible = age >= 18 && score >= 50; រួចបង្ហាញដោយ boolalpha។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int age, score;
    cin >> age >> score;

    bool eligible = age >= 18 && score >= 50;
    cout << boolalpha;
    cout << "Eligible: " << eligible << endl;
    return 0;
}`,
      explanation: `Logical AND && ផ្តល់លទ្ធផល true លុះត្រាតែលក្ខខណ្ឌទាំងពីរពិត។ ក្នុងករណីនេះ អ្នកប្រើត្រូវមានអាយុយ៉ាងហោចណាស់ 18 និងពិន្ទុយ៉ាងហោចណាស់ 50 ទើប eligible ជា true។`,
      expectedOutput: "Eligible: true"
    },
    {
      id: "operators-10",
      topicId: "operators",
      title: "Quiz: Integer Division",
      difficulty: "advanced",
      type: "quiz",
      description: `ការចែកចំនួនគត់ពីរនឹងបាត់ផ្នែកទសភាគ ប្រសិនបើ operands ទាំងពីរជា int។ សូមពិនិត្យ snippet ហើយជ្រើសរើស output។`,
      requirements: ["យល់ពី integer division។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
using namespace std;

int main() {
    int result = 7 / 2;
    cout << result;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញលេខអ្វី?",
      options: [
        "3 ព្រោះការចែក int ដោយ int កាត់ផ្នែកទសភាគចោល។",
        "3.5 ព្រោះ 7 / 2 គឺ 3.5។",
        "4 ព្រោះលទ្ធផលត្រូវបានបង្គត់ឡើង។",
        "Compile error ព្រោះ 7 មិនអាចចែកនឹង 2 បានទេ។"
      ],
      correctIndex: 0,
      quizExplanation: "7 និង 2 ជា int ដូច្នេះ 7 / 2 គឺ integer division ហើយផ្នែកទសភាគ 0.5 ត្រូវបាត់។ លទ្ធផលគឺ 3 មិនមែន 3.5 ឬ 4 ទេ។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ប្រភេទរបស់ operands កំណត់ថាតើការចែកជា integer ឬ floating point។",
      solution: String.raw`#include <iostream>
using namespace std;

int main() {
    double result = 7.0 / 2;
    cout << result;
    return 0;
}`,
      explanation: `Integer division ផ្តល់តែផ្នែកគត់នៃលទ្ធផល។ បើចង់បាន 3.5 ត្រូវធ្វើឱ្យ operand យ៉ាងហោចណាស់មួយជា double ដូចជា 7.0 / 2 ឬ static_cast<double>(7) / 2។`,
      expectedOutput: "3"
    },
    {
      id: "operators-11",
      topicId: "operators",
      title: "Bitwise Flags",
      difficulty: "challenge",
      type: "code",
      description: `Bitwise operators ធ្វើការលើប៊ីតរបស់ចំនួនគត់។ អ្នកត្រូវអានចំនួនគត់មួយ រួចបង្ហាញលទ្ធផលនៃ AND, OR, XOR និងការផ្លាស់ប៊ីតទៅឆ្វេង និងស្តាំ។`,
      requirements: [
        "អាន n ជា int ពី input។",
        "បង្ហាញ AND 1: និង n & 1។",
        "បង្ហាញ OR 8: និង n | 8។",
        "បង្ហាញ XOR 3: និង n ^ 3។",
        "បង្ហាញ Left shift: និង n << 1។",
        "បង្ហាញ Right shift: និង n >> 1។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "លទ្ធផល bitwise ប្រាំបន្ទាត់។",
      samples: [{ input: "5", output: "AND 1: 1\nOR 8: 13\nXOR 3: 6\nLeft shift: 10\nRight shift: 2" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ bitwise operators ដោយផ្ទាល់។"],
      hint: "ប្រើ n & 1, n | 8, n ^ 3, n << 1 និង n >> 1 ក្នុង cout។",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    cout << "AND 1: " << (n & 1) << endl;
    cout << "OR 8: " << (n | 8) << endl;
    cout << "XOR 3: " << (n ^ 3) << endl;
    cout << "Left shift: " << (n << 1) << endl;
    cout << "Right shift: " << (n >> 1) << endl;
    return 0;
}`,
      explanation: `Bitwise AND, OR និង XOR ប្រៀបធៀបប៊ីតនីមួយៗ។ ការផ្លាស់ទៅឆ្វេងមួយប៊ីតស្មើនឹងគុណនឹង 2 ហើយការផ្លាស់ទៅស្តាំស្មើនឹងចែកនឹង 2 សម្រាប់ចំនួនគត់វិជ្ជមាន។`,
      expectedOutput: "AND 1: 1\nOR 8: 13\nXOR 3: 6\nLeft shift: 10\nRight shift: 2"
    },
    {
      id: "operators-12",
      topicId: "operators",
      title: "Simple Interest Calculator",
      difficulty: "challenge",
      type: "code",
      description: `ធនាគារចង់គណនាការប្រាក់សាមញ្ញលើប្រាក់ដើម។ អ្នកត្រូវអានប្រាក់ដើម អត្រាការប្រាក់ និងចំនួនឆ្នាំ រួចគណនាការប្រាក់ និងចំនួនសរុបដោយប្រើ arithmetic operators។`,
      requirements: [
        "អាន principal, rate និង years ជា double ពី input។",
        "គណនា interest ជា principal * rate * years / 100.0។",
        "គណនា total ជា principal + interest។",
        "បង្ហាញ Interest និង Total ដោយលេខទសភាគពីរ។"
      ],
      input: "ប្រាក់ដើម អត្រាភាគរយ និងចំនួនឆ្នាំ បំបែកដោយចន្លោះ។",
      output: "ការប្រាក់ និងចំនួនសរុប។",
      samples: [{ input: "1000 5 2", output: "Interest: 100.00\nTotal: 1100.00" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវប្រើ setprecision(2)។"],
      hint: "interest = principal * rate * years / 100.0; total = principal + interest;",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double principal, rate, years;
    cin >> principal >> rate >> years;

    double interest = principal * rate * years / 100.0;
    double total = principal + interest;

    cout << fixed << setprecision(2);
    cout << "Interest: " << interest << endl;
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `ការប្រាក់សាមញ្ញគណនាពីប្រាក់ដើម គុណអត្រាជាភាគរយ គុណចំនួនឆ្នាំ រួចចែកនឹង 100។ ការប្រើ 100.0 ធ្វើឱ្យការចែកជា floating point ដូច្នេះលទ្ធផលរក្សាផ្នែកទសភាគត្រឹមត្រូវ។`,
      expectedOutput: "Interest: 100.00\nTotal: 1100.00"
    },
    {
      id: "operators-13",
      topicId: "operators",
      title: "Operator Precedence Puzzle",
      difficulty: "challenge",
      type: "code",
      description: `លំដាប់នៃ operators មានឥទ្ធិពលលើលទ្ធផល។ អ្នកត្រូវអានចំនួនគត់បី រួចបង្ហាញលទ្ធផលនៃ a + b * c និង (a + b) * c ដើម្បីប្រៀបធៀបភាពខុសគ្នា។`,
      requirements: [
        "អាន a, b និង c ជា int ពី input។",
        "គណនា defaultResult ជា a + b * c។",
        "គណនា groupedResult ជា (a + b) * c។",
        "បង្ហាញ Default និង Grouped តាមលំដាប់។"
      ],
      input: "ចំនួនគត់បី បំបែកដោយចន្លោះ។",
      output: "លទ្ធផលពីរបែប។",
      samples: [{ input: "2 3 4", output: "Default: 14\nGrouped: 20" }],
      constraints: ["មិនត្រូវបង្ហាញ prompt ទេ។", "ត្រូវរក្សា expression ទាំងពីរដូចដែលបានកំណត់។"],
      hint: "int defaultResult = a + b * c; int groupedResult = (a + b) * c;",
      solution: String.raw`#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    int defaultResult = a + b * c;
    int groupedResult = (a + b) * c;

    cout << "Default: " << defaultResult << endl;
    cout << "Grouped: " << groupedResult << endl;
    return 0;
}`,
      explanation: `ការគុណមានអាទិភាពខ្ពស់ជាងការបូក ដូច្នេះ a + b * c គណនា b * c មុន។ Parentheses បង្ខំឱ្យការបូកត្រូវបានធ្វើមុន ដូច្នេះ (a + b) * c ផ្តល់លទ្ធផលខុសគ្នា។`,
      expectedOutput: "Default: 14\nGrouped: 20"
    }
  ]);
})();
