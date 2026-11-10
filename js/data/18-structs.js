(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "structs-01",
      topicId: "structs",
      title: "Point Coordinates",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវបង្កើត struct តូចមួយសម្រាប់រក្សាទុកកូអរដោនេរបស់ចំណុចក្នុងប្លង់ពីរវិមាត្រ។ លំហាត់នេះហាត់ការប្រកាស struct និងការចូលប្រើ members ដោយផ្ទាល់។`,
      requirements: [
        "ប្រកាស struct Point ដែលមាន member x និង y ជា int។",
        "អានតម្លៃ x និង y ពី input។",
        "បង្ហាញលទ្ធផលជាទម្រង់ Point: (x, y)។"
      ],
      input: "ចំនួនគត់ពីរ x និង y បំបែកដោយចន្លោះ។",
      output: "ព័ត៌មានចំណុចក្នុងទម្រង់ Point: (x, y)។",
      samples: [{ input: "3 4", output: "Point: (3, 4)" }],
      constraints: ["x និង y ជាចំនួនគត់។", "មិនត្រូវបង្ហាញ prompt នៅមុនពេលអាន input ទេ។"],
      hint: "ប្រកាស Point p; បន្ទាប់មក cin >> p.x >> p.y; ហើយបង្ហាញដោយ cout។",
      solution: String.raw`#include <iostream>

using namespace std;

struct Point {
    int x;
    int y;
};

int main() {
    Point p;
    cin >> p.x >> p.y;
    cout << "Point: (" << p.x << ", " << p.y << ")" << endl;
    return 0;
}`,
      explanation: `struct អនុញ្ញាតឱ្យយើងចាត់ចែងទិន្នន័យដែលពាក់ព័ន្ធគ្នាជាកញ្ចប់តែមួយ។ Point មាន member ពីរគឺ x និង y ហើយយើងចូលប្រើពួកវាដោយប្រើចំណុច (.)។ ការអាន និងបង្ហាញធ្វើឡើងដូច variable ធម្មតា។`,
      expectedOutput: "Point: (3, 4)"
    },
    {
      id: "structs-02",
      topicId: "structs",
      title: "Rectangle Area and Perimeter",
      difficulty: "beginner",
      type: "code",
      description: `ហាងលក់ក្រដាសមួយចង់គណនាផ្ទៃក្រឡា និងបរិមាត្រនៃក្រដាសរាងចតុកោណ។ អ្នកត្រូវប្រើ struct សម្រាប់រក្សាទុកទទឹង និងកម្ពស់។`,
      requirements: [
        "ប្រកាស struct Rectangle ដែលមាន width និង height ជា int។",
        "អានទទឹង និងកម្ពស់ពី input។",
        "គណនា area និង perimeter។",
        "បង្ហាញ Area និង Perimeter តាមលំដាប់ឧទាហរណ៍។"
      ],
      input: "ចំនួនគត់ពីរ width និង height។",
      output: "ផ្ទៃក្រឡា និងបរិមាត្រ។",
      samples: [{ input: "4 5", output: "Area: 20\nPerimeter: 18" }],
      constraints: ["width និង height ជាចំនួនគត់វិជ្ជមាន។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "area = r.width * r.height; និង perimeter = 2 * (r.width + r.height);។",
      solution: String.raw`#include <iostream>

using namespace std;

struct Rectangle {
    int width;
    int height;
};

int main() {
    Rectangle r;
    cin >> r.width >> r.height;
    int area = r.width * r.height;
    int perimeter = 2 * (r.width + r.height);
    cout << "Area: " << area << endl;
    cout << "Perimeter: " << perimeter << endl;
    return 0;
}`,
      explanation: `បន្ទាប់ពីអានតម្លៃចូលក្នុង member រួច យើងអាចគណនាបានដូច variable ធម្មតា។ ការរក្សាទទឹង និងកម្ពស់ក្នុង struct ធ្វើឱ្យទិន្នន័យសម្រាប់រូបរាងមួយនៅជាមួយគ្នា។`,
      expectedOutput: "Area: 20\nPerimeter: 18"
    },
    {
      id: "structs-03",
      topicId: "structs",
      title: "Student Profile Record",
      difficulty: "beginner",
      type: "code",
      description: `សាលាមួយត្រូវការរក្សាទុកឈ្មោះ និងអាយុរបស់សិស្សម្នាក់ជាកំណត់ត្រាតែមួយ។ លំហាត់នេះបង្ហាញពីការប្រើ string និង int ក្នុង struct តែមួយ។`,
      requirements: [
        "ប្រកាស struct Student ដែលមាន name ជា string និង age ជា int។",
        "អានឈ្មោះ និងអាយុពី input។",
        "បង្ហាញ Name និង Age តាមទម្រង់ឧទាហរណ៍។"
      ],
      input: "ឈ្មោះមួយពាក្យ និងអាយុជាចំនួនគត់។",
      output: "ឈ្មោះ និងអាយុរបស់សិស្ស។",
      samples: [{ input: "Dara 19", output: "Name: Dara\nAge: 19" }],
      constraints: ["ឈ្មោះមិនមានចន្លោះទេ។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "អានដោយ cin >> s.name >> s.age; ហើយបង្ហាញពី member នីមួយៗ។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

struct Student {
    string name;
    int age;
};

int main() {
    Student s;
    cin >> s.name >> s.age;
    cout << "Name: " << s.name << endl;
    cout << "Age: " << s.age << endl;
    return 0;
}`,
      explanation: `struct អាចផ្ទុក member ប្រភេទផ្សេងៗគ្នាបាន។ ក្នុងករណីនេះ name ជា string សម្រាប់អត្ថបទ ហើយ age ជា int សម្រាប់ចំនួនគត់។ យើងចូលប្រើ member ដោយប្រើឈ្មោះ object និងសញ្ញាចំណុច។`,
      expectedOutput: "Name: Dara\nAge: 19"
    },
    {
      id: "structs-04",
      topicId: "structs",
      title: "Quiz: Movie Struct Output",
      difficulty: "beginner",
      type: "quiz",
      description: `សិស្សម្នាក់បានបង្កើត struct សម្រាប់ភាពយន្ត ហើយកំណត់តម្លៃឱ្យ members រួចបង្ហាញលទ្ធផល។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផលដែលកម្មវិធីបង្ហាញ។`,
      requirements: ["អាន snippet ដោយយកចិត្តទុកដាក់លើការចូលប្រើ member។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
#include <string>

using namespace std;

struct Movie {
    string title;
    int year;
};

int main() {
    Movie m;
    m.title = "Inception";
    m.year = 2010;
    cout << m.title << " (" << m.year << ")";
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីនេះបង្ហាញអ្វី?",
      options: [
        "Inception (2010)",
        "m.title (m.year)",
        "Error ព្រោះ struct មិនអាចមាន string បានទេ",
        "2010 (Inception)"
      ],
      correctIndex: 0,
      quizExplanation: "យើងចូលប្រើ member title និង year ដោយប្រើ m.title និង m.year។ cout បង្ហាញអត្ថបទតាមលំដាប់ដែលបានសរសេរ ដូច្នេះលទ្ធផលគឺ Inception (2010)។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "មើលលំដាប់នៃ cout។ តើ m.title មានតម្លៃអ្វី?",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

struct Movie {
    string title;
    int year;
};

int main() {
    Movie m;
    m.title = "Inception";
    m.year = 2010;
    cout << m.title << " (" << m.year << ")" << endl;
    return 0;
}`,
      explanation: `ការចូលប្រើ member ធ្វើឡើងដោយ object.member។ m.title មានតម្លៃ Inception ហើយ m.year មានតម្លៃ 2010។ cout ភ្ជាប់តម្លៃទាំងនោះតាមលំដាប់ដែលបានកំណត់។`,
      expectedOutput: "Inception (2010)"
    },
    {
      id: "structs-05",
      topicId: "structs",
      title: "Book Price Total",
      difficulty: "intermediate",
      type: "code",
      description: `បណ្ណាល័យតូចមួយចង់គណនាតម្លៃសរុបនៃសៀវភៅបីក្បាល។ អ្នកត្រូវប្រើ array នៃ struct ដើម្បីរក្សាទុកចំណងជើង និងតម្លៃសៀវភៅនីមួយៗ។`,
      requirements: [
        "ប្រកាស struct Book ដែលមាន title ជា string និង price ជា double។",
        "បង្កើត array នៃ Book ចំនួន 3 ធាតុ។",
        "អានចំណងជើង និងតម្លៃសម្រាប់សៀវភៅនីមួយៗ។",
        "គណនា និងបង្ហាញតម្លៃសរុបដោយលេខទសភាគពីរ។"
      ],
      input: "បីបន្ទាត់ ដែលបន្ទាត់នីមួយៗមានចំណងជើង និងតម្លៃ។",
      output: "តម្លៃសរុបក្នុងទម្រង់ Total: value។",
      samples: [{ input: "BookA 10.5\nBookB 8\nBookC 12.25", output: "Total: 30.75" }],
      constraints: ["ចំនួនសៀវភៅគឺ 3 ជានិច្ច។", "តម្លៃជាចំនួនវិជ្ជមាន។"],
      hint: "ប្រើ for loop អាន books[i].title និង books[i].price ហើយបូកតម្លៃទាំងអស់ចូល total។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct Book {
    string title;
    double price;
};

int main() {
    Book books[3];
    for (int i = 0; i < 3; i++) {
        cin >> books[i].title >> books[i].price;
    }
    double total = 0;
    for (int i = 0; i < 3; i++) {
        total += books[i].price;
    }
    cout << fixed << setprecision(2);
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `array នៃ struct អនុញ្ញាតឱ្យយើងរក្សាទុកកំណត់ត្រាច្រើនដែលមានរចនាសម្ព័ន្ធដូចគ្នា។ យើងប្រើ index ដើម្បីចូលប្រើសៀវភៅនីមួយៗ ហើយបូកតម្លៃចូល total។ setprecision(2) បង្ហាញលេខទសភាគពីរខ្ទង់។`,
      expectedOutput: "Total: 30.75"
    },
    {
      id: "structs-06",
      topicId: "structs",
      title: "Nested Date Record",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីចុះឈ្មោះសិស្សត្រូវការរក្សាទុកថ្ងៃខែឆ្នាំកំណើតជាផ្នែកមួយនៃព័ត៌មានសិស្ស។ លំហាត់នេះបង្ហាញពី struct ដែលមាន struct មួយទៀតនៅខាងក្នុង។`,
      requirements: [
        "ប្រកាស struct Date ដែលមាន day, month និង year ជា int។",
        "ប្រកាស struct Student ដែលមាន name និង birth ជា Date។",
        "អានឈ្មោះ និងថ្ងៃខែឆ្នាំកំណើតពី input។",
        "បង្ហាញ Name និង Birthdate ក្នុងទម្រង់ day/month/year។"
      ],
      input: "ឈ្មោះ បន្ទាប់មក day month year។",
      output: "ឈ្មោះ និងថ្ងៃខែឆ្នាំកំណើត។",
      samples: [{ input: "Dara 14 5 2000", output: "Name: Dara\nBirthdate: 14/5/2000" }],
      constraints: ["day, month និង year ជាចំនួនគត់។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ចូលប្រើថ្ងៃខែឆ្នាំដោយ s.birth.day, s.birth.month និង s.birth.year។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

struct Date {
    int day;
    int month;
    int year;
};

struct Student {
    string name;
    Date birth;
};

int main() {
    Student s;
    cin >> s.name >> s.birth.day >> s.birth.month >> s.birth.year;
    cout << "Name: " << s.name << endl;
    cout << "Birthdate: " << s.birth.day << "/" << s.birth.month << "/" << s.birth.year << endl;
    return 0;
}`,
      explanation: `struct អាចមាន member ជា struct មួយទៀតបាន។ Student មាន birth ជា Date ដូច្នេះយើងចូលប្រើ s.birth.day ដើម្បីទទួលបានថ្ងៃ។ ការបង្កប់បែបនេះជួយឱ្យទិន្នន័យដែលពាក់ព័ន្ធនៅជាមួយគ្នា។`,
      expectedOutput: "Name: Dara\nBirthdate: 14/5/2000"
    },
    {
      id: "structs-07",
      topicId: "structs",
      title: "Passing a Struct to a Function",
      difficulty: "intermediate",
      type: "code",
      description: `គ្រូម្នាក់ចង់ឱ្យកម្មវិធីសម្រេចថាសិស្សជាប់ ឬធ្លាក់ដោយផ្អែកលើពិន្ទុ។ អ្នកត្រូវបញ្ជូន struct ទៅ function ហើយឱ្យ function ត្រឡប់លទ្ធផល។`,
      requirements: [
        "ប្រកាស struct Student ដែលមាន name និង score។",
        "បង្កើត function isPassing ដែលទទួល Student និងត្រឡប់ bool។",
        "សិស្សជាប់នៅពេល score ធំជាង ឬស្មើ 50។",
        "បង្ហាញឈ្មោះ និង PASS ឬ FAIL។"
      ],
      input: "ឈ្មោះ និងពិន្ទុជាចំនួនគត់។",
      output: "ឈ្មោះ និងលទ្ធផល PASS ឬ FAIL។",
      samples: [{ input: "Dara 75", output: "Dara: PASS" }],
      constraints: ["score ជាចំនួនគត់ពី 0 ដល់ 100។", "function ត្រូវត្រឡប់ bool។"],
      hint: "bool isPassing(Student s) { return s.score >= 50; } ហើយប្រើ ternary operator ដើម្បីជ្រើស PASS ឬ FAIL។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

struct Student {
    string name;
    int score;
};

bool isPassing(Student s) {
    return s.score >= 50;
}

int main() {
    Student s;
    cin >> s.name >> s.score;
    cout << s.name << ": " << (isPassing(s) ? "PASS" : "FAIL") << endl;
    return 0;
}`,
      explanation: `struct អាចបញ្ជូនទៅ function បានដូចប្រភេទធម្មតា។ function isPassing ទទួល Student ហើយពិនិត្យ score។ ternary operator ជួយជ្រើសរើសអត្ថបទ PASS ឬ FAIL ក្នុងបន្ទាត់តែមួយ។`,
      expectedOutput: "Dara: PASS"
    },
    {
      id: "structs-08",
      topicId: "structs",
      title: "Sort Students by Score",
      difficulty: "advanced",
      type: "code",
      description: `គ្រូត្រូវការតារាងចំណាត់ថ្នាក់សិស្សតាមពិន្ទុពីខ្ពស់ទៅទាប។ អ្នកត្រូវរក្សាទុកសិស្សក្នុង array នៃ struct ហើយតម្រៀបពួកគេ។`,
      requirements: [
        "ប្រកាស struct Student ដែលមាន name និង score។",
        "អានចំនួនសិស្ស n បន្ទាប់មកអានឈ្មោះ និងពិន្ទុរបស់សិស្ស n នាក់។",
        "តម្រៀបសិស្សតាម score ពីខ្ពស់ទៅទាប។",
        "បង្ហាញឈ្មោះ និងពិន្ទុតាមលំដាប់ដែលបានតម្រៀប។"
      ],
      input: "n បន្ទាប់មក n បន្ទាត់ ដែលមានឈ្មោះ និងពិន្ទុ។",
      output: "បន្ទាត់ name: score តាមលំដាប់ពិន្ទុខ្ពស់ទៅទាប។",
      samples: [{ input: "3\nDara 85\nSok 92\nVanna 78", output: "Sok: 92\nDara: 85\nVanna: 78" }],
      constraints: ["n តិចជាង ឬស្មើ 100។", "ពិន្ទុអាចស្មើគ្នាបាន។"],
      hint: "ប្រើ bubble sort ពីរ loop ហើយប្តូរ students[j] និង students[j+1] នៅពេល score ខាងឆ្វេងតូចជាង។",
      solution: String.raw`#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

struct Student {
    string name;
    int score;
};

int main() {
    int n;
    cin >> n;
    Student students[100];
    for (int i = 0; i < n; i++) {
        cin >> students[i].name >> students[i].score;
    }
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (students[j].score < students[j + 1].score) {
                swap(students[j], students[j + 1]);
            }
        }
    }
    for (int i = 0; i < n; i++) {
        cout << students[i].name << ": " << students[i].score << endl;
    }
    return 0;
}`,
      explanation: `ការតម្រៀប struct ត្រូវកំណត់ថា member ណាជាគន្លឹះសម្រាប់ការប្រៀបធៀប។ នៅទីនេះយើងប្រៀបធៀប score ហើយប្តូរ struct ទាំងមូលដោយ swap។ ដូច្នេះឈ្មោះ និងពិន្ទុផ្លាស់ទីជាមួយគ្នា។`,
      expectedOutput: "Sok: 92\nDara: 85\nVanna: 78"
    },
    {
      id: "structs-09",
      topicId: "structs",
      title: "Inventory Value Report",
      difficulty: "advanced",
      type: "code",
      description: `ឃ្លាំងទំនិញមួយត្រូវការគណនាតម្លៃសរុបនៃផលិតផលដែលមាននៅក្នុងស្តុក។ ផលិតផលនីមួយៗមានឈ្មោះ ចំនួន និងតម្លៃក្នុងមួយឯកតា។`,
      requirements: [
        "ប្រកាស struct Product ដែលមាន name, qty និង price។",
        "អានចំនួនផលិតផល n បន្ទាប់មកអានព័ត៌មានផលិតផលនីមួយៗ។",
        "គណនាតម្លៃសរុបដោយគុណ qty នឹង price សម្រាប់ផលិតផលនីមួយៗ។",
        "បង្ហាញតម្លៃសរុបដោយលេខទសភាគពីរ។"
      ],
      input: "n បន្ទាប់មក n បន្ទាត់ ដែលមានឈ្មោះ qty និង price។",
      output: "តម្លៃសរុបក្នុងទម្រង់ Total inventory value: value។",
      samples: [{ input: "2\nPen 10 1.5\nBook 3 5.0", output: "Total inventory value: 30.00" }],
      constraints: ["n តិចជាង ឬស្មើ 100។", "qty ជាចំនួនគត់ និង price ជា double។"],
      hint: "total += products[i].qty * products[i].price; ហើយប្រើ fixed និង setprecision(2) សម្រាប់ការបង្ហាញ។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct Product {
    string name;
    int qty;
    double price;
};

int main() {
    int n;
    cin >> n;
    Product products[100];
    for (int i = 0; i < n; i++) {
        cin >> products[i].name >> products[i].qty >> products[i].price;
    }
    double total = 0;
    for (int i = 0; i < n; i++) {
        total += products[i].qty * products[i].price;
    }
    cout << fixed << setprecision(2);
    cout << "Total inventory value: " << total << endl;
    return 0;
}`,
      explanation: `តម្លៃនៃផលិតផលមួយគឺ qty គុណ price។ យើងបូកតម្លៃទាំងអស់ចូល total ហើយបង្ហាញជាលេខទសភាគពីរខ្ទង់។ struct ជួយឱ្យព័ត៌មានទាំងបីរបស់ផលិតផលនៅជាមួយគ្នា។`,
      expectedOutput: "Total inventory value: 30.00"
    },
    {
      id: "structs-10",
      topicId: "structs",
      title: "Quiz: Struct Copy Behavior",
      difficulty: "advanced",
      type: "quiz",
      description: `នៅពេលយើងចម្លង struct មួយទៅ struct មួយទៀត តម្លៃរបស់ members ត្រូវបានចម្លងដាច់ដោយឡែកពីគ្នា។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផល។`,
      requirements: ["ពិនិត្យការចម្លង Box b = a;។", "ស្មានតម្លៃដែលបង្ហាញនៅចុងបញ្ចប់។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

struct Box {
    int value;
};

int main() {
    Box a;
    a.value = 10;
    Box b = a;
    b.value = 20;
    cout << a.value << " " << b.value;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: [
        "10 20",
        "20 20",
        "10 10",
        "Error ព្រោះមិនអាចចម្លង struct បានទេ"
      ],
      correctIndex: 0,
      quizExplanation: "Box b = a; ចម្លងតម្លៃ value ទៅ b ជាច្បាប់ចម្លងថ្មី។ ការកែ b.value មិនប៉ះពាល់ a.value ទេ ដូច្នេះ a.value នៅ 10 ហើយ b.value ក្លាយជា 20។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "ការចម្លង struct បង្កើត object ថ្មី។ ការផ្លាស់ប្តូរ object មួយមិនផ្លាស់ប្តូរមួយទៀតទេ។",
      solution: String.raw`#include <iostream>

using namespace std;

struct Box {
    int value;
};

int main() {
    Box a;
    a.value = 10;
    Box b = a;
    b.value = 20;
    cout << a.value << " " << b.value << endl;
    return 0;
}`,
      explanation: `struct ត្រូវបានចម្លងដោយតម្លៃ (value copy) នៅពេលប្រើ = ឬពេលបញ្ជូនទៅ function តាមតម្លៃ។ ដូច្នេះ a និង b មាន value ដាច់ដោយឡែកពីគ្នា។`,
      expectedOutput: "10 20"
    },
    {
      id: "structs-11",
      topicId: "structs",
      title: "Add and Simplify Fractions",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីគណនាប្រភាគត្រូវការបូកប្រភាគពីរ ហើយបង្ហាញលទ្ធផលក្នុងទម្រង់សាមញ្ញបំផុត។ អ្នកត្រូវប្រើ struct សម្រាប់រក្សាទុកភាគយក និងភាគបែង។`,
      requirements: [
        "ប្រកាស struct Fraction ដែលមាន num និង den។",
        "អានប្រភាគពីរពី input។",
        "បូកប្រភាគទាំងពីរ។",
        "បង្រួមលទ្ធផលដោយប្រើ gcd ហើយបង្ហាញជា num/den។"
      ],
      input: "ពីរបន្ទាត់ ដែលបន្ទាត់នីមួយៗមាន num និង den។",
      output: "លទ្ធផលប្រភាគដែលបានបង្រួមក្នុងទម្រង់ num/den។",
      samples: [{ input: "1 2\n1 3", output: "5/6" }],
      constraints: ["den មិនស្មើ 0។", "ភាគយក និងភាគបែងជាចំនួនគត់វិជ្ជមាន។"],
      hint: "num = a.num * b.den + b.num * a.den; den = a.den * b.den; បន្ទាប់មកចែកទាំងពីរនឹង gcd។",
      solution: String.raw`#include <iostream>
#include <cmath>

using namespace std;

struct Fraction {
    int num;
    int den;
};

int gcd(int a, int b) {
    while (b != 0) {
        int temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

Fraction add(Fraction a, Fraction b) {
    Fraction result;
    result.num = a.num * b.den + b.num * a.den;
    result.den = a.den * b.den;
    int g = gcd(abs(result.num), abs(result.den));
    result.num /= g;
    result.den /= g;
    return result;
}

int main() {
    Fraction a;
    Fraction b;
    cin >> a.num >> a.den;
    cin >> b.num >> b.den;
    Fraction result = add(a, b);
    cout << result.num << "/" << result.den << endl;
    return 0;
}`,
      explanation: `ការបូកប្រភាគធ្វើឡើងដោយធ្វើឱ្យភាគបែងស្មើគ្នា។ បន្ទាប់មកយើងបង្រួមលទ្ធផលដោយចែកភាគយក និងភាគបែងនឹង gcd។ function gcd គណនាតម្លៃធំបំផុតដែលចែកតម្លៃទាំងពីរបានស្មើ។`,
      expectedOutput: "5/6"
    },
    {
      id: "structs-12",
      topicId: "structs",
      title: "Student Score Report",
      difficulty: "challenge",
      type: "code",
      description: `គ្រូត្រូវការរបាយការណ៍សង្ខេបសម្រាប់ថ្នាក់មួយ ដែលបង្ហាញពិន្ទុមធ្យម និងសិស្សដែលមានពិន្ទុខ្ពស់បំផុត។ អ្នកត្រូវរក្សាទុកសិស្សក្នុង array នៃ struct។`,
      requirements: [
        "អានចំនួនសិស្ស n និងព័ត៌មានសិស្សនីមួយៗ។",
        "គណនាពិន្ទុមធ្យមដោយលេខទសភាគពីរ។",
        "រកសិស្សដែលមានពិន្ទុខ្ពស់បំផុត។",
        "បង្ហាញ Average និង Top តាមទម្រង់ឧទាហរណ៍។"
      ],
      input: "n បន្ទាប់មក n បន្ទាត់ ដែលមានឈ្មោះ និងពិន្ទុ។",
      output: "ពិន្ទុមធ្យម និងសិស្សដែលមានពិន្ទុខ្ពស់បំផុត។",
      samples: [{ input: "3\nDara 80\nSok 90\nVanna 70", output: "Average: 80.00\nTop: Sok (90)" }],
      constraints: ["n ធំជាង 0។", "បើមានពិន្ទុស្មើគ្នា យកសិស្សដំបូងដែលជួប។"],
      hint: "ចាប់ផ្តើម top ដោយសិស្សទីមួយ បន្ទាប់មកប្រៀបធៀប score ជាមួយ top ក្នុង loop។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct Student {
    string name;
    int score;
};

int main() {
    int n;
    cin >> n;
    Student students[100];
    for (int i = 0; i < n; i++) {
        cin >> students[i].name >> students[i].score;
    }
    double sum = 0;
    for (int i = 0; i < n; i++) {
        sum += students[i].score;
    }
    Student top = students[0];
    for (int i = 1; i < n; i++) {
        if (students[i].score > top.score) {
            top = students[i];
        }
    }
    cout << fixed << setprecision(2);
    cout << "Average: " << sum / n << endl;
    cout << "Top: " << top.name << " (" << top.score << ")" << endl;
    return 0;
}`,
      explanation: `យើងបូកពិន្ទុទាំងអស់ ហើយចែកនឹង n ដើម្បីទទួលបានមធ្យមភាគ។ សម្រាប់សិស្សពូកែ យើងចាប់ផ្តើមពីសិស្សទីមួយ រួចធ្វើបច្ចុប្បន្នភាព top នៅពេលជួបពិន្ទុខ្ពស់ជាង។`,
      expectedOutput: "Average: 80.00\nTop: Sok (90)"
    },
    {
      id: "structs-13",
      topicId: "structs",
      title: "Add Two Times",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីកត់ត្រារយៈពេលត្រូវការបូកពេលវេលាពីរ ដែលមានម៉ោង នាទី និងវិនាទី។ លទ្ធផលត្រូវបានធ្វើឱ្យប្រក្រតី ដោយវិនាទី និងនាទីមិនលើស 59។`,
      requirements: [
        "ប្រកាស struct Time ដែលមាន h, m និង s។",
        "អានពេលវេលាពីរពី input។",
        "បូកវិនាទី បន្ទាប់មកបំប្លែងលើស 60 ទៅនាទី និងម៉ោង។",
        "បង្ហាញលទ្ធផលក្នុងទម្រង់ h:mm:ss ដោយបំពេញលេខ 0 នៅខាងមុខ។"
      ],
      input: "ពីរបន្ទាត់ ដែលបន្ទាត់នីមួយៗមាន h m s។",
      output: "ពេលវេលាសរុបក្នុងទម្រង់ h:mm:ss។",
      samples: [{ input: "1 45 30\n2 20 45", output: "4:06:15" }],
      constraints: ["0 <= m, s < 60។", "លទ្ធផលអាចឆ្លងកាត់ម៉ោង 24 បាន។"],
      hint: "បូកវិនាទីជាមុន បន្ទាប់មក m += totalSeconds / 60 និង s = totalSeconds % 60។ ធ្វើដូចគ្នាសម្រាប់ម៉ោង។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

struct Time {
    int h;
    int m;
    int s;
};

Time add(Time a, Time b) {
    Time result;
    result.s = a.s + b.s;
    result.m = a.m + b.m + result.s / 60;
    result.s %= 60;
    result.h = a.h + b.h + result.m / 60;
    result.m %= 60;
    return result;
}

int main() {
    Time a;
    Time b;
    cin >> a.h >> a.m >> a.s;
    cin >> b.h >> b.m >> b.s;
    Time result = add(a, b);
    cout << result.h << ":" << setfill('0') << setw(2) << result.m << ":" << setw(2) << result.s << endl;
    return 0;
}`,
      explanation: `ការបូកពេលវេលាត្រូវចាប់ផ្តើមពីឯកតាតូចបំផុតគឺវិនាទី។ បើវិនាទីលើស 59 យើងបំប្លែងទៅនាទី ហើយបើនាទីលើស 59 បំប្លែងទៅម៉ោង។ setfill('0') និង setw(2) ធានាថានាទី និងវិនាទីមានពីរខ្ទង់។`,
      expectedOutput: "4:06:15"
    }
  ]);
})();
