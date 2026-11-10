(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "constructors-01",
      topicId: "constructors",
      title: "Default Constructor Rectangle",
      difficulty: "beginner",
      type: "code",
      description: `យើងចង់បង្កើត class Rectangle ដែលពេលបង្កើត object ដោយគ្មាន argument នោះ constructor កំណត់ទទឹង និងកម្ពស់ឱ្យមានតម្លៃលំនាំដើមភ្លាមៗ។ លំហាត់នេះជួយឱ្យអ្នកយល់ពី default constructor និងការគណនាពី state ខាងក្នុង object។`,
      requirements: [
        "បង្កើត class Rectangle ដែលមាន member width និង height ជា private។",
        "សរសេរ default constructor កំណត់ width = 5 និង height = 3។",
        "បង្ហាញ width, height, area និង perimeter តាមទម្រង់ឧទាហរណ៍។"
      ],
      input: null,
      output: "ទទឹង កម្ពស់ ក្រឡាផ្ទៃ និងបរិមាត្ររបស់ rectangle។",
      samples: [{ input: "", output: "Width: 5\nHeight: 3\nArea: 15\nPerimeter: 16" }],
      constraints: ["មិនត្រូវប្រើ cin ទេ។", "ត្រូវប្រើ default constructor ដោយមិនបញ្ជូន argument។"],
      hint: "member width និង height ត្រូវកំណត់ក្នុង constructor។ area គឺ width * height ហើយ perimeter គឺ 2 * (width + height)។",
      solution: String.raw`#include <iostream>

using namespace std;

class Rectangle {
private:
    int width;
    int height;

public:
    Rectangle() {
        width = 5;
        height = 3;
    }

    int area() const {
        return width * height;
    }

    int perimeter() const {
        return 2 * (width + height);
    }

    int getWidth() const {
        return width;
    }

    int getHeight() const {
        return height;
    }
};

int main() {
    Rectangle rect;

    cout << "Width: " << rect.getWidth() << endl;
    cout << "Height: " << rect.getHeight() << endl;
    cout << "Area: " << rect.area() << endl;
    cout << "Perimeter: " << rect.perimeter() << endl;
    return 0;
}`,
      explanation: `default constructor ត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលយើងសរសេរ Rectangle rect;។ វាកំណត់ state ដំបូងរបស់ object ដូច្នេះ width និង height មិនមានតម្លៃចៃដន្យទេ។ methods area និង perimeter គណនាពីតម្លៃដែល constructor បានកំណត់។`,
      expectedOutput: "Width: 5\nHeight: 3\nArea: 15\nPerimeter: 16"
    },
    {
      id: "constructors-02",
      topicId: "constructors",
      title: "Book Parameterized Constructor",
      difficulty: "beginner",
      type: "code",
      description: `បណ្ណាល័យមួយចង់បង្កើត object Book ដែលទទួលចំណងជើង និងចំនួនទំព័រពីអ្នកប្រើ។ អ្នកត្រូវប្រើ parameterized constructor ដើម្បីផ្ទេរតម្លៃទាំងនោះចូលទៅក្នុង object នៅពេលបង្កើត។`,
      requirements: [
        "បង្កើត class Book ដែលមាន title និង pages ជា private។",
        "សរសេរ constructor ដែលទទួល parameter ពីរ ហើយកំណត់តម្លៃទៅ member ទាំងនោះ។",
        "អានចំណងជើងមួយបន្ទាត់ និងចំនួនទំព័រ រួចបង្ហាញជាពីរបន្ទាត់។"
      ],
      input: "ចំណងជើងសៀវភៅមួយបន្ទាត់ និងចំនួនទំព័រជាចំនួនគត់។",
      output: "ចំណងជើង និងចំនួនទំព័ររបស់សៀវភៅ។",
      samples: [{ input: "C++ Primer\n976", output: "Title: C++ Primer\nPages: 976" }],
      constraints: ["ត្រូវប្រើ getline សម្រាប់ចំណងជើង ព្រោះវាអាចមានចន្លោះ។", "មិនត្រូវបង្ហាញ prompt នៅលើ stdout ទេ។"],
      hint: "ប្រើ getline(cin, title) បន្ទាប់មក cin >> pages។ constructor មានទម្រង់ Book(const string &t, int p)។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Book {
private:
    string title;
    int pages;

public:
    Book(const string &t, int p) {
        title = t;
        pages = p;
    }

    string getTitle() const {
        return title;
    }

    int getPages() const {
        return pages;
    }
};

int main() {
    string title;
    int pages;

    getline(cin, title);
    cin >> pages;

    Book book(title, pages);
    cout << "Title: " << book.getTitle() << endl;
    cout << "Pages: " << book.getPages() << endl;
    return 0;
}`,
      explanation: `parameterized constructor អនុញ្ញាតឱ្យយើងផ្តល់តម្លៃដំបូងនៅពេលបង្កើត object។ យើងអាន title ដោយ getline ដើម្បីរក្សាចន្លោះក្នុងឈ្មោះ ហើយអាន pages ដោយ cin។ បន្ទាប់មក object book ត្រូវបានបង្កើតជាមួយតម្លៃទាំងនោះ។`,
      expectedOutput: "Title: C++ Primer\nPages: 976"
    },
    {
      id: "constructors-03",
      topicId: "constructors",
      title: "Quiz: Constructor Return Type",
      difficulty: "beginner",
      type: "quiz",
      description: `សិស្សម្នាក់ចង់សរសេរ constructor សម្រាប់ class Student ប៉ុន្តែកូដមិនដំណើរការដូចដែលរំពឹង។ សូមពិនិត្យ snippet ហើយជ្រើសរើសមូលហេតុត្រឹមត្រូវ។`,
      requirements: ["អាន snippet ដោយយកចិត្តទុកដាក់លើឈ្មោះ និង return type របស់ function។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
#include <string>

using namespace std;

class Student {
public:
    void Student() {
        name = "Unknown";
    }

private:
    string name;
};`,
      quizQuestion: "តើអ្វីជាបញ្ហាសំខាន់ក្នុង snippet នេះ?",
      options: [
        "Constructor មិនត្រូវមាន return type ដូច្នេះ void Student() មិនមែនជា constructor ទេ។",
        "Constructor ត្រូវតែប្រកាសជា private ជានិច្ច។",
        "class មិនអាចមាន function ឈ្មោះដូច class បានទេ។",
        "ត្រូវប្រើ struct ជំនួស class ទើបបង្កើត constructor បាន។"
      ],
      correctIndex: 0,
      quizExplanation: "constructor ក្នុង C++ មិនមាន return type ទេ។ ការសរសេរ void Student() បង្កើតជា member function ធម្មតាដែលមានឈ្មោះដូច class ដូច្នេះវាមិនដំណើរការជា constructor ទេ។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "constructor មានឈ្មោះដូច class ហើយមិនមាន type នៅមុខឈ្មោះទេ។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Student {
public:
    Student() {
        name = "Unknown";
    }

private:
    string name;
};`,
      explanation: `constructor ត្រូវសរសេរដោយគ្មាន return type ដូចជា Student() មិនមែន void Student()។ បើដាក់ void នោះ compiler នឹងចាត់ទុកវាជា function ធម្មតា ហើយ class នឹងមិនមាន constructor ដែលអ្នកចង់បានទេ។`,
      expectedOutput: "void Student() is not a constructor because constructors have no return type."
    },
    {
      id: "constructors-04",
      topicId: "constructors",
      title: "Destructor Lifecycle Message",
      difficulty: "beginner",
      type: "code",
      description: `ដើម្បីយល់ពីវដ្តជីវិតរបស់ object អ្នកត្រូវសង្កេតពេល constructor និង destructor ត្រូវបានហៅ។ លំហាត់នេះបង្ហាញសារនៅពេល object ចាប់ផ្តើម និងពេលវាត្រូវបានបញ្ចប់។`,
      requirements: [
        "បង្កើត class Session ដែល constructor បង្ហាញ Session started។",
        "destructor ត្រូវបង្ហាញ Session ended។",
        "method work បង្ហាញ Working...។",
        "នៅក្នុង main បង្កើត object ហើយហៅ work បន្ទាប់មកបញ្ចប់កម្មវិធី។"
      ],
      input: null,
      output: "សារបីបន្ទាត់តាមលំដាប់ constructor, work និង destructor។",
      samples: [{ input: "", output: "Session started\nWorking...\nSession ended" }],
      constraints: ["មិនត្រូវប្រើ cin ទេ។", "ត្រូវប្រើ destructor ដែលមាន ~ នៅមុខឈ្មោះ class។"],
      hint: "destructor មានទម្រង់ ~Session() ហើយត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេល object ចេញពី scope។",
      solution: String.raw`#include <iostream>

using namespace std;

class Session {
public:
    Session() {
        cout << "Session started" << endl;
    }

    ~Session() {
        cout << "Session ended" << endl;
    }

    void work() const {
        cout << "Working..." << endl;
    }
};

int main() {
    Session session;
    session.work();
    return 0;
}`,
      explanation: `constructor ត្រូវបានហៅភ្លាមៗនៅពេលបង្កើត session។ បន្ទាប់មក work បង្ហាញសារកំឡុងពេលប្រើ object។ នៅពេល main បញ្ចប់ object ចេញពី scope ហើយ destructor ត្រូវបានហៅដោយស្វ័យប្រវត្តិ ដូច្នេះ Session ended បង្ហាញចុងក្រោយ។`,
      expectedOutput: "Session started\nWorking...\nSession ended"
    },
    {
      id: "constructors-05",
      topicId: "constructors",
      title: "Student Initializer List",
      difficulty: "intermediate",
      type: "code",
      description: `class ល្អគួរចាប់ផ្តើម member នៅក្នុង constructor ឱ្យបានច្បាស់លាស់។ អ្នកត្រូវសរសេរ class Student ដែលប្រើ member initializer list សម្រាប់ name និង score រួចបង្ហាញលទ្ធផលសិក្សា។`,
      requirements: [
        "បង្កើត class Student ដែលមាន name និង score ជា private។",
        "ប្រើ member initializer list ក្នុង constructor ដើម្បីកំណត់ name និង score។",
        "អានឈ្មោះមួយបន្ទាត់ និងពិន្ទុមួយ រួចបង្ហាញ Student, Score និង Status។",
        "Status គឺ Pass បើ score ធំជាង ឬស្មើ 50 បើមិនដូច្នេះ Fail។"
      ],
      input: "ឈ្មោះសិស្សមួយបន្ទាត់ និងពិន្ទុជាចំនួនគត់។",
      output: "ឈ្មោះ ពិន្ទុ និងស្ថានភាពសិក្សា។",
      samples: [{ input: "Dara\n85", output: "Student: Dara\nScore: 85\nStatus: Pass" }],
      constraints: ["ត្រូវប្រើ initializer list ដូចជា Student(string n, int s) : name(n), score(s)។", "មិនត្រូវបង្ហាញ prompt នៅលើ stdout ទេ។"],
      hint: "initializer list សរសេរបន្ទាប់ពី parameter list ដោយចាប់ផ្តើមដោយ :។ បន្ទាប់មកគណនា status ក្នុង method show។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Student {
private:
    string name;
    int score;

public:
    Student(const string &n, int s) : name(n), score(s) {
    }

    void show() const {
        cout << "Student: " << name << endl;
        cout << "Score: " << score << endl;
        cout << "Status: " << (score >= 50 ? "Pass" : "Fail") << endl;
    }
};

int main() {
    string name;
    int score;

    getline(cin, name);
    cin >> score;

    Student student(name, score);
    student.show();
    return 0;
}`,
      explanation: `member initializer list កំណត់តម្លៃ member មុនពេល body របស់ constructor ដំណើរការ។ វាជាវិធីច្បាស់លាស់ និងមានប្រសិទ្ធភាពសម្រាប់ការចាប់ផ្តើម member។ បន្ទាប់មក method show ប្រើតម្លៃទាំងនោះដើម្បីបង្ហាញព័ត៌មាន និងស្ថានភាពសិក្សា។`,
      expectedOutput: "Student: Dara\nScore: 85\nStatus: Pass"
    },
    {
      id: "constructors-06",
      topicId: "constructors",
      title: "Copy Constructor Box",
      difficulty: "intermediate",
      type: "code",
      description: `នៅពេលយើងចម្លង object ទៅ object ថ្មី C++ អាចប្រើ copy constructor។ លំហាត់នេះឱ្យអ្នកសរសេរ copy constructor ដោយផ្ទាល់ ដើម្បីចម្លងទិន្នន័យពី Box មួយទៅ Box មួយទៀត។`,
      requirements: [
        "បង្កើត class Box ដែលមាន length ជា private។",
        "សរសេរ constructor ធម្មតា និង copy constructor ដែលទទួល const Box&។",
        "អានប្រវែងមួយ បង្កើត Box ដើម និង Box ចម្លង រួចបង្ហាញប្រវែងទាំងពីរ។"
      ],
      input: "ប្រវែងរបស់ box ជាចំនួនគត់។",
      output: "ប្រវែងរបស់ box ដើម និង box ចម្លង។",
      samples: [{ input: "7", output: "Original: 7\nCopy: 7" }],
      constraints: ["copy constructor ត្រូវមាន parameter ជា const Box&។", "មិនត្រូវបង្ហាញ prompt នៅលើ stdout ទេ។"],
      hint: "copy constructor មានទម្រង់ Box(const Box &other) ហើយចម្លង length ពី other.length។ បន្ទាប់មកប្រើ Box copy = original;",
      solution: String.raw`#include <iostream>

using namespace std;

class Box {
private:
    int length;

public:
    Box(int l) : length(l) {
    }

    Box(const Box &other) : length(other.length) {
    }

    int getLength() const {
        return length;
    }
};

int main() {
    int length;
    cin >> length;

    Box original(length);
    Box copy = original;

    cout << "Original: " << original.getLength() << endl;
    cout << "Copy: " << copy.getLength() << endl;
    return 0;
}`,
      explanation: `Box copy = original; ហៅ copy constructor ដើម្បីបង្កើត object ថ្មីពី object ដែលមានស្រាប់។ copy constructor របស់យើងចម្លង length ដោយផ្ទាល់ ដូច្នេះ Box ទាំងពីរមានប្រវែងដូចគ្នា ប៉ុន្តែជា object ដាច់ដោយឡែក។`,
      expectedOutput: "Original: 7\nCopy: 7"
    },
    {
      id: "constructors-07",
      topicId: "constructors",
      title: "Quiz: Destructor Order",
      difficulty: "intermediate",
      type: "quiz",
      description: `ការយល់ពីលំដាប់ constructor និង destructor ជួយឱ្យអ្នកគ្រប់គ្រង resource បានត្រឹមត្រូវ។ សូមអាន snippet ហើយកំណត់លទ្ធផលដែលនឹងបង្ហាញ។`,
      requirements: ["តាមដាន scope របស់ object នីមួយៗ។", "កំណត់ពេលដែល destructor ត្រូវបានហៅ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

class Logger {
public:
    Logger() {
        cout << "Create" << endl;
    }

    ~Logger() {
        cout << "Destroy" << endl;
    }
};

int main() {
    Logger a;
    {
        Logger b;
    }
    cout << "End" << endl;
    return 0;
}`,
      quizQuestion: "តើលទ្ធផលនៅលើ console តាមលំដាប់ណា?",
      options: [
        "Create\nCreate\nDestroy\nEnd\nDestroy",
        "Create\nDestroy\nCreate\nDestroy\nEnd",
        "Create\nCreate\nEnd\nDestroy\nDestroy",
        "Create\nDestroy\nEnd"
      ],
      correctIndex: 0,
      quizExplanation: "a ត្រូវបានបង្កើតមុន បន្ទាប់មក b ក្នុង scope ខាងក្នុង។ b ចេញពី scope មុន ដូច្នេះ Destroy ដំបូងជារបស់ b។ បន្ទាប់មក End ត្រូវបង្ហាញ ហើយចុងក្រោយ a ត្រូវបានបំផ្លាញនៅពេល main បញ្ចប់។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "object ដែលបង្កើតក្រោយគេក្នុង scope ត្រូវបានបំផ្លាញមុនគេ។",
      solution: String.raw`#include <iostream>

using namespace std;

class Logger {
public:
    Logger() {
        cout << "Create" << endl;
    }

    ~Logger() {
        cout << "Destroy" << endl;
    }
};

int main() {
    Logger a;
    {
        Logger b;
    }
    cout << "End" << endl;
    return 0;
}`,
      explanation: `constructor ដំណើរការតាមលំដាប់បង្កើត object គឺ a មុន បន្ទាប់មក b។ destructor ដំណើរការបញ្ច្រាសលំដាប់ក្នុង scope ដូច្នេះ b ត្រូវបំផ្លាញមុនពេលចេញពី block ខាងក្នុង។ a នៅរស់រហូតដល់ចុងបញ្ចប់ main។`,
      expectedOutput: "Create\nCreate\nDestroy\nEnd\nDestroy"
    },
    {
      id: "constructors-08",
      topicId: "constructors",
      title: "Bank Account Constructor Overloading",
      difficulty: "advanced",
      type: "code",
      description: `class មួយអាចមាន constructor ច្រើនដែលខុសគ្នាតាម parameter។ អ្នកត្រូវបង្កើត class BankAccount ដែលមានទាំង default constructor និង constructor សម្រាប់កំណត់ម្ចាស់គណនី និងសមតុល្យ។`,
      requirements: [
        "បង្កើត class BankAccount ដែលមាន owner និង balance ជា private។",
        "default constructor កំណត់ owner ជា Unknown និង balance ជា 0។",
        "parameterized constructor ទទួល owner និង balance។",
        "អានឈ្មោះម្ចាស់ និងសមតុល្យ រួចបង្ហាញគណនីលំនាំដើម និងគណនីដែលបានកំណត់។",
        "បង្ហាញសមតុល្យដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ឈ្មោះម្ចាស់គណនី និងសមតុល្យដំបូង។",
      output: "ព័ត៌មានគណនីលំនាំដើម និងគណនីដែលបានកំណត់។",
      samples: [{ input: "Sokha 150.5", output: "Owner: Unknown\nBalance: 0.00\nOwner: Sokha\nBalance: 150.50" }],
      constraints: ["ត្រូវប្រើ constructor overloading យ៉ាងហោចណាស់ពីរ constructor។", "ប្រើ fixed និង setprecision(2) សម្រាប់សមតុល្យ។"],
      hint: "បង្កើត BankAccount() និង BankAccount(string o, double b)។ បន្ទាប់មកបង្កើត object ពីរ ហើយហៅ method show ដូចគ្នា។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class BankAccount {
private:
    string owner;
    double balance;

public:
    BankAccount() : owner("Unknown"), balance(0.0) {
    }

    BankAccount(const string &o, double b) : owner(o), balance(b) {
    }

    void show() const {
        cout << "Owner: " << owner << endl;
        cout << fixed << setprecision(2);
        cout << "Balance: " << balance << endl;
    }
};

int main() {
    string owner;
    double balance;

    cin >> owner >> balance;

    BankAccount defaultAccount;
    BankAccount customAccount(owner, balance);

    defaultAccount.show();
    customAccount.show();
    return 0;
}`,
      explanation: `constructor overloading ជ្រើសរើស constructor តាម argument ដែលយើងផ្តល់។ BankAccount defaultAccount; ហៅ constructor គ្មាន parameter ខណៈ BankAccount customAccount(owner, balance); ហៅ constructor ដែលមាន parameter ពីរ។ object ទាំងពីរប្រើ method show ដូចគ្នា ប៉ុន្តែបង្ហាញ state ខុសគ្នា។`,
      expectedOutput: "Owner: Unknown\nBalance: 0.00\nOwner: Sokha\nBalance: 150.50"
    },
    {
      id: "constructors-09",
      topicId: "constructors",
      title: "Array of Item Objects",
      difficulty: "advanced",
      type: "code",
      description: `នៅពេលយើងរក្សាទុក object ច្រើនក្នុង vector constructor ត្រូវបានហៅសម្រាប់ object ថ្មីនីមួយៗ។ អ្នកត្រូវបង្កើត class Item ហើយបូកតម្លៃទំនិញទាំងអស់ដែលបានបញ្ចូល។`,
      requirements: [
        "បង្កើត class Item ដែលមាន price ជា private និង constructor ទទួលតម្លៃ។",
        "អានចំនួនទំនិញ បន្ទាប់មកអានតម្លៃនីមួយៗ ហើយបញ្ចូលទៅ vector<Item>។",
        "គណនាតម្លៃសរុប និងបង្ហាញចំនួនទំនិញ និងតម្លៃសរុប។",
        "បង្ហាញតម្លៃសរុបដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ចំនួនទំនិញ និងតម្លៃនីមួយៗ។",
      output: "ចំនួនទំនិញ និងតម្លៃសរុប។",
      samples: [{ input: "3\n2.5 4.0 1.5", output: "Items: 3\nTotal: 8.00" }],
      constraints: ["ត្រូវប្រើ vector<Item> ឬ array នៃ Item។", "រាល់ Item ត្រូវបង្កើតតាម constructor។"],
      hint: "ប្រើ vector<Item> items; ហើយនៅក្នុង loop អាន price រួច items.push_back(Item(price));។ បន្ថែម total += price;។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <vector>

using namespace std;

class Item {
private:
    double price;

public:
    Item(double p) : price(p) {
    }

    double getPrice() const {
        return price;
    }
};

int main() {
    int n;
    cin >> n;

    vector<Item> items;
    double total = 0.0;

    for (int i = 0; i < n; ++i) {
        double price;
        cin >> price;
        items.push_back(Item(price));
        total += price;
    }

    cout << "Items: " << items.size() << endl;
    cout << fixed << setprecision(2);
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `Item(price) បង្កើត object បណ្តោះអាសន្នដែល constructor កំណត់ price។ push_back ចម្លង ឬផ្លាស់ object នោះចូល vector។ យើងបូក total ក្នុងពេលអាន ដូច្នេះមិនចាំបាច់ឆ្លងកាត់ vector ម្តងទៀតទេ។ ចំនួន items គឺ items.size()។`,
      expectedOutput: "Items: 3\nTotal: 8.00"
    },
    {
      id: "constructors-10",
      topicId: "constructors",
      title: "Static Alive Counter",
      difficulty: "advanced",
      type: "code",
      description: `static member អាចរាប់ចំនួន object ដែលកំពុងមានជីវិត។ អ្នកត្រូវបង្កើត class Tracker ដែល constructor បង្កើន និង destructor បន្ថយចំនួន object ដែលនៅរស់។`,
      requirements: [
        "បង្កើត class Tracker ដែលមាន static int alive ជា private។",
        "constructor ត្រូវបង្កើន alive ហើយ destructor ត្រូវបន្ថយ alive។",
        "ផ្តល់ static method getAlive ដើម្បីអានចំនួន object ដែលនៅរស់។",
        "បង្ហាញចំនួនមុនបង្កើត object, ក្នុង scope និងបន្ទាប់ពី scope។"
      ],
      input: null,
      output: "ចំនួន object នៅរស់នៅបីចំណុច។",
      samples: [{ input: "", output: "Start: 0\nInside scope: 2\nAfter scope: 0" }],
      constraints: ["ត្រូវកំណត់ static member នៅខាងក្រៅ class ដោយ int Tracker::alive = 0;។", "មិនត្រូវប្រើ cin ទេ។"],
      hint: "ក្នុង scope បង្កើត Tracker a; និង Tracker b;។ នៅពេលចេញពី scope destructor របស់ពួកវាត្រូវបានហៅ ហើយ alive ត្រឡប់ទៅ 0។",
      solution: String.raw`#include <iostream>

using namespace std;

class Tracker {
private:
    static int alive;

public:
    Tracker() {
        ++alive;
    }

    ~Tracker() {
        --alive;
    }

    static int getAlive() {
        return alive;
    }
};

int Tracker::alive = 0;

int main() {
    cout << "Start: " << Tracker::getAlive() << endl;

    {
        Tracker a;
        Tracker b;
        cout << "Inside scope: " << Tracker::getAlive() << endl;
    }

    cout << "After scope: " << Tracker::getAlive() << endl;
    return 0;
}`,
      explanation: `static member alive ជារបស់ class ទាំងមូល មិនមែនរបស់ object ណាមួយទេ។ constructor បង្កើនវាពេល object ថ្មីកើត ហើយ destructor បន្ថយវាពេល object ត្រូវបំផ្លាញ។ ដូច្នេះក្នុង scope យើងឃើញ 2 ហើយបន្ទាប់ពី a និង b ចេញពី scope វាត្រឡប់ទៅ 0។`,
      expectedOutput: "Start: 0\nInside scope: 2\nAfter scope: 0"
    },
    {
      id: "constructors-11",
      topicId: "constructors",
      title: "RAII Integer Array",
      difficulty: "challenge",
      type: "code",
      description: `Class ដែលគ្រប់គ្រង dynamic memory គួរបញ្ចេញ memory ក្នុង destructor។ អ្នកត្រូវសរសេរ IntArray ដែលបង្កើត array ដោយ new ក្នុង constructor និងលុបវាដោយ delete[] ក្នុង destructor រួចគណនាផលបូក។`,
      requirements: [
        "បង្កើត class IntArray ដែលមាន int* data និង int size។",
        "constructor បង្កើត memory ដោយ new int[n] ហើយ destructor ប្រើ delete[] data។",
        "អានចំនួនគត់ n និងតម្លៃ n តម្លៃ រួចរក្សាទុកក្នុង object។",
        "បង្ហាញផលបូកនៃតម្លៃទាំងអស់។"
      ],
      input: "ចំនួនតម្លៃ និងតម្លៃនីមួយៗ។",
      output: "ផលបូកនៃតម្លៃទាំងអស់។",
      samples: [{ input: "4\n1 2 3 4", output: "Sum: 10" }],
      constraints: ["ត្រូវប្រើ new ក្នុង constructor និង delete[] ក្នុង destructor។", "មិនត្រូវបង្ហាញ prompt នៅលើ stdout ទេ។"],
      hint: "constructor អាចទទួល n រួច data = new int[n];។ បន្ទាប់មកប្រើ method set ដើម្បីដាក់តម្លៃ និង sum ដើម្បីបូក។",
      solution: String.raw`#include <iostream>

using namespace std;

class IntArray {
private:
    int* data;
    int size;

public:
    IntArray(int n) : size(n) {
        data = new int[n];
    }

    ~IntArray() {
        delete[] data;
    }

    void set(int index, int value) {
        data[index] = value;
    }

    int sum() const {
        int total = 0;
        for (int i = 0; i < size; ++i) {
            total += data[i];
        }
        return total;
    }
};

int main() {
    int n;
    cin >> n;

    IntArray values(n);

    for (int i = 0; i < n; ++i) {
        int value;
        cin >> value;
        values.set(i, value);
    }

    cout << "Sum: " << values.sum() << endl;
    return 0;
}`,
      explanation: `constructor បង្កើត memory នៅលើ heap ដោយ new int[n] ហើយ destructor បញ្ចេញវាដោយ delete[] ដើម្បីកុំឱ្យមាន memory leak។ នេះជាគំរូ RAII ដែល resource ត្រូវបានគ្រប់គ្រងដោយវដ្តជីវិតរបស់ object។ method sum គ្រាន់តែឆ្លងកាត់ array ខាងក្នុងប៉ុណ្ណោះ។`,
      expectedOutput: "Sum: 10"
    },
    {
      id: "constructors-12",
      topicId: "constructors",
      title: "Deep Copy Integer Array",
      difficulty: "challenge",
      type: "code",
      description: `Copy constructor ធម្មតាចម្លង pointer ដែលធ្វើឱ្យ object ពីរចែក memory តែមួយ។ អ្នកត្រូវសរសេរ deep copy constructor ដើម្បីឱ្យ object ចម្លងមាន memory ដាច់ដោយឡែក។`,
      requirements: [
        "បង្កើត class IntArray ដែលមាន int* data និង int size។",
        "សរសេរ copy constructor ដែលបង្កើត memory ថ្មី និងចម្លងតម្លៃមួយៗ។",
        "អាន n និងតម្លៃ n តម្លៃ បន្ទាប់មកបង្កើត copy និងកែតម្រូវតម្លៃទីមួយរបស់ copy ទៅ 99។",
        "បង្ហាញតម្លៃទីមួយរបស់ object ដើម តម្លៃទីមួយរបស់ copy និងផលបូករបស់ object ដើម។"
      ],
      input: "ចំនួនតម្លៃ និងតម្លៃនីមួយៗ។",
      output: "តម្លៃទីមួយរបស់ object ដើម និង copy ព្រមទាំងផលបូកដើម។",
      samples: [{ input: "3\n1 2 3", output: "Original first: 1\nCopy first: 99\nOriginal sum: 6" }],
      constraints: ["copy constructor ត្រូវចម្លង array មួយតម្លៃម្តងៗ។", "ការកែ copy មិនត្រូវប៉ះពាល់ object ដើមទេ។"],
      hint: "ក្នុង copy constructor ប្រើ data = new int[size]; រួច loop ដើម្បីចម្លង data[i] = other.data[i];។ បន្ទាប់មក copy.set(0, 99);។",
      solution: String.raw`#include <iostream>

using namespace std;

class IntArray {
private:
    int* data;
    int size;

public:
    IntArray(int n) : size(n) {
        data = new int[n];
    }

    IntArray(const IntArray &other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; ++i) {
            data[i] = other.data[i];
        }
    }

    ~IntArray() {
        delete[] data;
    }

    void set(int index, int value) {
        data[index] = value;
    }

    int get(int index) const {
        return data[index];
    }

    int sum() const {
        int total = 0;
        for (int i = 0; i < size; ++i) {
            total += data[i];
        }
        return total;
    }
};

int main() {
    int n;
    cin >> n;

    IntArray original(n);
    for (int i = 0; i < n; ++i) {
        int value;
        cin >> value;
        original.set(i, value);
    }

    IntArray copy = original;
    copy.set(0, 99);

    cout << "Original first: " << original.get(0) << endl;
    cout << "Copy first: " << copy.get(0) << endl;
    cout << "Original sum: " << original.sum() << endl;
    return 0;
}`,
      explanation: `deep copy constructor បង្កើត array ថ្មីសម្រាប់ object ចម្លង រួចចម្លងតម្លៃមួយៗ។ បើយើងគ្រាន់តែចម្លង pointer នោះ copy.set(0, 99) នឹងកែ object ដើមផងដែរ ដែលជាបញ្ហា។ ជាមួយ deep copy object ទាំងពីរមាន memory ដាច់ដោយឡែក ដូច្នេះ object ដើមនៅតែមានតម្លៃ 1 និងផលបូក 6។`,
      expectedOutput: "Original first: 1\nCopy first: 99\nOriginal sum: 6"
    },
    {
      id: "constructors-13",
      topicId: "constructors",
      title: "Normalized Fraction Constructor",
      difficulty: "challenge",
      type: "code",
      description: `Constructor អាចប្រើសម្រាប់ធានាថា object ចាប់ផ្តើមដោយ state ត្រឹមត្រូវ។ អ្នកត្រូវសរសេរ class Fraction ដែល constructor បង្រួមប្រភាគដោយចែកភាគយក និងភាគបែងនឹង gcd។`,
      requirements: [
        "បង្កើត class Fraction ដែលមាន num និង den ជា private។",
        "constructor ត្រូវធានាថា den មិនអវិជ្ជមាន ហើយបង្រួមប្រភាគដោយ gcd។",
        "អានភាគយក និងភាគបែង រួចបង្ហាញប្រភាគដែលបានបង្រួម។",
        "បង្ហាញក្នុងទម្រង់ num/den។"
      ],
      input: "ភាគយក និងភាគបែងជាចំនួនគត់។",
      output: "ប្រភាគដែលបានបង្រួម។",
      samples: [{ input: "8 12", output: "Fraction: 2/3" }],
      constraints: ["ត្រូវប្រើ gcd ក្នុង constructor ដើម្បីបង្រួមប្រភាគ។", "ត្រូវធានាថា denominator មិនអវិជ្ជមាន។"],
      hint: "សរសេរ method gcd(a, b) ដោយ Euclid algorithm។ បន្ទាប់មកចែក num និង den នឹង gcd នៅក្នុង constructor។",
      solution: String.raw`#include <iostream>

using namespace std;

class Fraction {
private:
    int num;
    int den;

    int gcd(int a, int b) const {
        while (b != 0) {
            int temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

public:
    Fraction(int n, int d) {
        if (d < 0) {
            n = -n;
            d = -d;
        }
        int divisor = gcd(n < 0 ? -n : n, d);
        num = n / divisor;
        den = d / divisor;
    }

    void show() const {
        cout << "Fraction: " << num << "/" << den << endl;
    }
};

int main() {
    int n;
    int d;
    cin >> n >> d;

    Fraction fraction(n, d);
    fraction.show();
    return 0;
}`,
      explanation: `constructor មិនគ្រាន់តែចម្លងតម្លៃទេ វាអាចធានាភាពត្រឹមត្រូវនៃ state។ យើងដោះស្រាយសញ្ញាអវិជ្ជមានជាមុន បន្ទាប់មកចែក num និង den នឹង gcd ដើម្បីបានប្រភាគសាមញ្ញបំផុត។ ដូច្នេះ 8/12 ក្លាយជា 2/3 ភ្លាមៗពេលបង្កើត object។`,
      expectedOutput: "Fraction: 2/3"
    }
  ]);
})();
