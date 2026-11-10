(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "classes-objects-01",
      topicId: "classes-objects",
      title: "Book Display Card",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវរចនា class Book ដែលមានចំណងជើង និងតម្លៃ ហើយមាន method សម្រាប់បង្ហាញព័ត៌មាន។ លំហាត់នេះហាត់ការបង្កើត class ដែលមាន attributes និង behavior សមស្រប។`,
      requirements: [
        "ប្រកាស class Book ដែលមាន title និង price នៅ private។",
        "បន្ថែម method setData សម្រាប់កំណត់ title និង price។",
        "បន្ថែម method display ដែលបង្ហាញ Book និង Price ដោយលេខទសភាគពីរ។",
        "អានចំណងជើង និងតម្លៃ រួចបង្ហាញព័ត៌មានសៀវភៅ។"
      ],
      input: "ចំណងជើង និងតម្លៃ។",
      output: "ចំណងជើង និងតម្លៃសៀវភៅ។",
      samples: [{ input: "CleanCode 45.5", output: "Book: CleanCode\nPrice: 45.50" }],
      constraints: ["ចំណងជើងមិនមានចន្លោះ។", "តម្លៃជា double។"],
      hint: "setData កំណត់ title និង price។ display ប្រើ fixed និង setprecision(2) សម្រាប់ price។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Book {
private:
    string title;
    double price;

public:
    void setData(string t, double p) {
        title = t;
        price = p;
    }

    void display() const {
        cout << "Book: " << title << endl;
        cout << fixed << setprecision(2);
        cout << "Price: " << price << endl;
    }
};

int main() {
    string title;
    double price;
    cin >> title >> price;
    Book book;
    book.setData(title, price);
    book.display();
    return 0;
}`,
      explanation: `class Book រក្សា state ពីរគឺ title និង price។ setData ផ្តល់វិធីកំណត់ state តាម input ហើយ display បង្ហាញ state នោះក្នុងទម្រង់ដែលបានកំណត់។ ការដាក់ attributes នៅ private ជួយឱ្យការកែប្រែ state កើតឡើងតាម method ដែលយើងគ្រប់គ្រង។`,
      expectedOutput: "Book: CleanCode\nPrice: 45.50"
    },
    {
      id: "classes-objects-02",
      topicId: "classes-objects",
      title: "Person Greeting",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Person ដែលមានឈ្មោះ និងអាយុ ហើយមាន method សម្រាប់ណែនាំខ្លួន។ លំហាត់នេះបង្ហាញ constructor និង method ដែលបង្ហាញព័ត៌មានពី object។`,
      requirements: [
        "ប្រកាស class Person ដែលមាន name និង age នៅ private។",
        "បន្ថែម constructor ដែលទទួល name និង age។",
        "បន្ថែម method greet ដែលបង្ហាញប្រយោគណែនាំខ្លួន។",
        "អានឈ្មោះ និងអាយុ រួចបង្កើត object និងហៅ greet។"
      ],
      input: "ឈ្មោះ និងអាយុ។",
      output: "ប្រយោគណែនាំខ្លួន។",
      samples: [{ input: "Dara 20", output: "Hi, I am Dara and I am 20 years old." }],
      constraints: ["ឈ្មោះមិនមានចន្លោះ។", "age ជាចំនួនគត់មិនអវិជ្ជមាន។"],
      hint: "constructor Person(string n, int a) កំណត់ name និង age។ greet បង្ហាញប្រយោគដោយប្រើ member ទាំងពីរ។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Person {
private:
    string name;
    int age;

public:
    Person(string n, int a) {
        name = n;
        age = a;
    }

    void greet() const {
        cout << "Hi, I am " << name << " and I am " << age << " years old." << endl;
    }
};

int main() {
    string name;
    int age;
    cin >> name >> age;
    Person person(name, age);
    person.greet();
    return 0;
}`,
      explanation: `constructor ត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលបង្កើត object។ Person person(name, age); បញ្ជូនតម្លៃចូល constructor ដើម្បីកំណត់ state។ greet បន្ទាប់មកអាន name និង age ពី object ហើយបង្ហាញប្រយោគណែនាំខ្លួន។`,
      expectedOutput: "Hi, I am Dara and I am 20 years old."
    },
    {
      id: "classes-objects-03",
      topicId: "classes-objects",
      title: "Car Acceleration",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Car ដែលរក្សាល្បឿន និងអាចបង្កើនល្បឿនបាន។ លំហាត់នេះបង្ហាញ object ដែលមាន behavior ផ្លាស់ប្តូរ state តាម method។`,
      requirements: [
        "ប្រកាស class Car ដែលមាន speed នៅ private។",
        "បន្ថែម constructor សម្រាប់ speed ដំបូង។",
        "បន្ថែម method accelerate ដែលបន្ថែម amount ចូល speed។",
        "បន្ថែម method getSpeed និងបង្ហាញល្បឿនថ្មីក្នុងទម្រង់ Speed: value។"
      ],
      input: "ល្បឿនដំបូង និងចំនួនបង្កើនល្បឿន។",
      output: "ល្បឿនថ្មី។",
      samples: [{ input: "40 25", output: "Speed: 65" }],
      constraints: ["ល្បឿនជាចំនួនគត់មិនអវិជ្ជមាន។", "speed ត្រូវនៅ private។"],
      hint: "accelerate(int amount) ធ្វើ speed += amount; ហើយ getSpeed ត្រឡប់ speed។",
      solution: String.raw`#include <iostream>

using namespace std;

class Car {
private:
    int speed;

public:
    Car(int s) {
        speed = s;
    }

    void accelerate(int amount) {
        speed += amount;
    }

    int getSpeed() const {
        return speed;
    }
};

int main() {
    int initial;
    int increase;
    cin >> initial >> increase;
    Car car(initial);
    car.accelerate(increase);
    cout << "Speed: " << car.getSpeed() << endl;
    return 0;
}`,
      explanation: `Car រក្សា state តែមួយគឺ speed។ accelerate ផ្លាស់ប្តូរ state ដោយបន្ថែមចំនួនដែលបានផ្តល់។ getSpeed អនុញ្ញាតឱ្យយើងអាន state បច្ចុប្បន្នដោយមិនកែវាដោយផ្ទាល់។ នេះជាគំរូមូលដ្ឋាននៃ state និង behavior ក្នុង OOP។`,
      expectedOutput: "Speed: 65"
    },
    {
      id: "classes-objects-04",
      topicId: "classes-objects",
      title: "Quiz: Object Creation",
      difficulty: "beginner",
      type: "quiz",
      description: `ការបង្កើត object គឺជាជំហានដំបូងនៃការប្រើ class។ សូមពិនិត្យ snippet ហើយជ្រើសរើសសេចក្តីថ្លែងការណ៍ត្រឹមត្រូវ។`,
      requirements: ["មើលការប្រកាស Student s1;។", "យល់ពីភាពខុសគ្នារវាង class និង object។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
#include <string>

using namespace std;

class Student {
public:
    string name;
    int age;
};

int main() {
    Student s1;
    s1.name = "Dara";
    s1.age = 20;
    cout << s1.name << " " << s1.age;
    return 0;
}`,
      quizQuestion: "តើសេចក្តីថ្លែងការណ៍ណាត្រឹមត្រូវ?",
      options: [
        "s1 គឺជា object របស់ class Student",
        "Student គឺជា object ហើយ s1 គឺជា class",
        "s1.name បង្កើត class ថ្មី",
        "class Student មិនអាចមាន member ពីរបានទេ"
      ],
      correctIndex: 0,
      quizExplanation: "Student គឺជា class ដែលកំណត់ attributes name និង age។ Student s1; បង្កើត object មួយឈ្មោះ s1 ដែលមាន attributes ទាំងនោះផ្ទាល់ខ្លួន។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "class ជាគំរូ ហើយ object ជាការបង្កើតជាក់ស្តែងពីគំរូ។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Student {
public:
    string name;
    int age;
};

int main() {
    Student s1;
    s1.name = "Dara";
    s1.age = 20;
    cout << s1.name << " " << s1.age << endl;
    return 0;
}`,
      explanation: `object ត្រូវបានបង្កើតដោយប្រើឈ្មោះ class និងឈ្មោះ variable ដូចជា Student s1;។ បន្ទាប់មកយើងចូលប្រើ member ដោយ s1.name និង s1.age។ class ខ្លួនវាមិនមែនជា object ទេ វាគ្រាន់តែជាគំរូសម្រាប់បង្កើត object។`,
      expectedOutput: "Dara 20"
    },
    {
      id: "classes-objects-05",
      topicId: "classes-objects",
      title: "Circle Area Method",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Circle ដែលរក្សាកាំ ហើយមាន method គណនាផ្ទៃក្រឡា។ លំហាត់នេះបង្ហាញ class ដែលបង្កប់ការគណនាទាក់ទងនឹង state របស់វា។`,
      requirements: [
        "ប្រកាស class Circle ដែលមាន radius នៅ private។",
        "បន្ថែម constructor សម្រាប់ radius។",
        "បន្ថែម method area ដែលត្រឡប់ 3.14159 * radius * radius។",
        "អានកាំ រួចបង្ហាញ Area ដោយលេខទសភាគពីរ។"
      ],
      input: "កាំរង្វង់។",
      output: "ផ្ទៃក្រឡារង្វង់។",
      samples: [{ input: "2", output: "Area: 12.57" }],
      constraints: ["radius ធំជាង 0។", "បង្ហាញលេខទសភាគពីរ។"],
      hint: "method area() const ត្រឡប់ 3.14159 * radius * radius; ហើយបង្ហាញដោយ fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Circle {
private:
    double radius;

public:
    Circle(double r) {
        radius = r;
    }

    double area() const {
        return 3.14159 * radius * radius;
    }
};

int main() {
    double r;
    cin >> r;
    Circle circle(r);
    cout << fixed << setprecision(2);
    cout << "Area: " << circle.area() << endl;
    return 0;
}`,
      explanation: `class Circle រក្សា radius ជា state ហើយ area គណនាផ្ទៃក្រឡាពី radius នោះ។ method មិនផ្លាស់ប្តូរ state ដូច្នេះយើងអាចកំណត់វាជា const។ ការដាក់រូបមន្តនៅក្នុង class ធ្វើឱ្យ object មាន behavior ដែលពាក់ព័ន្ធនឹងទិន្នន័យរបស់វា។`,
      expectedOutput: "Area: 12.57"
    },
    {
      id: "classes-objects-06",
      topicId: "classes-objects",
      title: "Count Passed Students",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Student ដែលមាន method ពិនិត្យថាសិស្សជាប់ ឬធ្លាក់។ បន្ទាប់មកអានសិស្សជាច្រើន និងរាប់ចំនួនអ្នកជាប់។`,
      requirements: [
        "ប្រកាស class Student ដែលមាន name និង score។",
        "បន្ថែម constructor សម្រាប់ name និង score។",
        "បន្ថែម method isPassed ដែលត្រឡប់ score >= 50។",
        "អានចំនួនសិស្ស n និងព័ត៌មានសិស្សនីមួយៗ រួចបង្ហាញ Passed: count។"
      ],
      input: "n បន្ទាប់មក n បន្ទាត់ ដែលមានឈ្មោះ និងពិន្ទុ។",
      output: "ចំនួនសិស្សដែលជាប់។",
      samples: [{ input: "3\nDara 75\nSok 45\nVanna 60", output: "Passed: 2" }],
      constraints: ["score ស្ថិតក្នុងចន្លោះ 0 ដល់ 100។", "ជាប់នៅពេល score >= 50។"],
      hint: "ក្នុង loop បង្កើត Student s(name, score); ហើយបើ s.isPassed() បង្កើន passed។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Student {
private:
    string name;
    int score;

public:
    Student(string n, int s) {
        name = n;
        score = s;
    }

    bool isPassed() const {
        return score >= 50;
    }
};

int main() {
    int n;
    cin >> n;
    int passed = 0;
    for (int i = 0; i < n; i++) {
        string name;
        int score;
        cin >> name >> score;
        Student student(name, score);
        if (student.isPassed()) {
            passed++;
        }
    }
    cout << "Passed: " << passed << endl;
    return 0;
}`,
      explanation: `class Student បង្កប់លក្ខខណ្ឌសម្រេចថាសិស្សជាប់ ឬធ្លាក់នៅក្នុង method isPassed។ យើងបង្កើត object ថ្មីសម្រាប់សិស្សម្នាក់ៗក្នុង loop ហើយហៅ method ដើម្បីពិនិត្យ។ ការរាប់ចំនួនធ្វើឡើងដោយ variable passed នៅខាងក្រៅ object។`,
      expectedOutput: "Passed: 2"
    },
    {
      id: "classes-objects-07",
      topicId: "classes-objects",
      title: "Add Two Distances",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Distance ដែលរក្សាទីតាំងជា feet និង inches ហើយអាចបូកចម្ងាយពីរបាន។ លទ្ធផលត្រូវធ្វើឱ្យ inches តិចជាង 12។`,
      requirements: [
        "ប្រកាស class Distance ដែលមាន feet និង inches។",
        "បន្ថែម constructor សម្រាប់ feet និង inches។",
        "បន្ថែម method add ដែលបូកចម្ងាយពីរ និងធ្វើឱ្យ inches តិចជាង 12។",
        "អានចម្ងាយពីរ រួចបង្ហាញលទ្ធផលក្នុងទម្រង់ feet និង inches។"
      ],
      input: "feet1 inches1 និង feet2 inches2។",
      output: "ចម្ងាយសរុបក្នុងទម្រង់ X feet Y inches។",
      samples: [{ input: "5 8\n3 6", output: "9 feet 2 inches" }],
      constraints: ["inches ចាប់ផ្តើមតិចជាង 12។", "បើ inches លើស 11 ត្រូវបំប្លែងទៅ feet។"],
      hint: "បូក inches ជាមុន បន្ទាប់មក feet += totalInches / 12 និង inches = totalInches % 12។",
      solution: String.raw`#include <iostream>

using namespace std;

class Distance {
private:
    int feet;
    int inches;

public:
    Distance(int f, int i) {
        feet = f;
        inches = i;
    }

    Distance add(const Distance& other) const {
        int totalInches = inches + other.inches;
        int totalFeet = feet + other.feet + totalInches / 12;
        int newInches = totalInches % 12;
        return Distance(totalFeet, newInches);
    }

    int getFeet() const {
        return feet;
    }

    int getInches() const {
        return inches;
    }
};

int main() {
    int f1;
    int i1;
    int f2;
    int i2;
    cin >> f1 >> i1 >> f2 >> i2;
    Distance a(f1, i1);
    Distance b(f2, i2);
    Distance result = a.add(b);
    cout << result.getFeet() << " feet " << result.getInches() << " inches" << endl;
    return 0;
}`,
      explanation: `method add ត្រូវដោះស្រាយការបំប្លែងឯកតា ដោយបូក inches ទាំងអស់ជាមុន បន្ទាប់មកបំប្លែងផ្នែកដែលលើស 12 ទៅ feet។ ការប្រើ constructor ក្នុង method add បង្កើត object លទ្ធផលថ្មីដោយមិនកែ object ដើមទាំងពីរ។`,
      expectedOutput: "9 feet 2 inches"
    },
    {
      id: "classes-objects-08",
      topicId: "classes-objects",
      title: "Product Static Counter",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Product ដែលរាប់ចំនួន object ដែលបានបង្កើតដោយប្រើ static member។ លំហាត់នេះបង្ហាញថា static member ជាកម្មសិទ្ធិរបស់ class មិនមែន object តែមួយ។`,
      requirements: [
        "ប្រកាស class Product ដែលមាន name, price និង static count។",
        "constructor ត្រូវបង្កើន count រាល់ពេលបង្កើត object។",
        "បន្ថែម method getPrice និង static method getCount។",
        "អានចំនួនផលិតផល n និងព័ត៌មាននីមួយៗ រួចបង្ហាញចំនួនផលិតផល និងតម្លៃសរុប។"
      ],
      input: "n បន្ទាប់មក n បន្ទាត់ ដែលមានឈ្មោះ និងតម្លៃ។",
      output: "ចំនួនផលិតផល និងតម្លៃសរុបដោយលេខទសភាគពីរ។",
      samples: [{ input: "3\nPen 1.5\nBook 5\nBag 10", output: "Products: 3\nTotal: 16.50" }],
      constraints: ["ត្រូវកំណត់ Product::count = 0; នៅខាងក្រៅ class។", "តម្លៃជា double។"],
      hint: "static int count; នៅក្នុង class ហើយ int Product::count = 0; ខាងក្រៅ។ constructor ធ្វើ count++;។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Product {
private:
    string name;
    double price;
    static int count;

public:
    Product(string n, double p) {
        name = n;
        price = p;
        count++;
    }

    double getPrice() const {
        return price;
    }

    static int getCount() {
        return count;
    }
};

int Product::count = 0;

int main() {
    int n;
    cin >> n;
    double total = 0;
    for (int i = 0; i < n; i++) {
        string name;
        double price;
        cin >> name >> price;
        Product product(name, price);
        total += product.getPrice();
    }
    cout << fixed << setprecision(2);
    cout << "Products: " << Product::getCount() << endl;
    cout << "Total: " << total << endl;
    return 0;
}`,
      explanation: `static member ជាកម្មសិទ្ធិរបស់ class ទាំងមូល ដូច្នេះ object ទាំងអស់ចែករំលែក count តែមួយ។ constructor បង្កើន count រាល់ពេលបង្កើត Product ថ្មី។ static method getCount អាចហៅបានដោយឈ្មោះ class ដោយមិនចាំបាច់មាន object។`,
      expectedOutput: "Products: 3\nTotal: 16.50"
    },
    {
      id: "classes-objects-09",
      topicId: "classes-objects",
      title: "Distance Between Points",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Point ដែលមាន method គណនាចម្ងាយរវាងចំណុចពីរ។ លំហាត់នេះបង្ហាញ object ដែលទទួល object ផ្សេងជា parameter និងប្រើរូបមន្តគណនា។`,
      requirements: [
        "ប្រកាស class Point ដែលមាន x និង y ជា double។",
        "បន្ថែម constructor សម្រាប់ x និង y។",
        "បន្ថែម method distanceTo ដែលត្រឡប់ចម្ងាយរវាងចំណុចពីរ។",
        "អានចំណុចពីរ រួចបង្ហាញ Distance ដោយលេខទសភាគពីរ។"
      ],
      input: "x1 y1 x2 y2។",
      output: "ចម្ងាយរវាងចំណុចទាំងពីរ។",
      samples: [{ input: "0 0\n3 4", output: "Distance: 5.00" }],
      constraints: ["ប្រើ sqrt ពី <cmath>។", "បង្ហាញលេខទសភាគពីរ។"],
      hint: "dx = x - other.x; dy = y - other.y; return sqrt(dx * dx + dy * dy);។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

class Point {
private:
    double x;
    double y;

public:
    Point(double a, double b) {
        x = a;
        y = b;
    }

    double distanceTo(const Point& other) const {
        double dx = x - other.x;
        double dy = y - other.y;
        return sqrt(dx * dx + dy * dy);
    }
};

int main() {
    double x1;
    double y1;
    double x2;
    double y2;
    cin >> x1 >> y1 >> x2 >> y2;
    Point a(x1, y1);
    Point b(x2, y2);
    cout << fixed << setprecision(2);
    cout << "Distance: " << a.distanceTo(b) << endl;
    return 0;
}`,
      explanation: `distanceTo គណនាភាពខុសគ្នានៃ x និង y រវាង object បច្ចុប្បន្ន និង object ដែលបញ្ជូនមក។ បន្ទាប់មកប្រើទ្រឹស្តីបទ Pythagoras ដើម្បីរកចម្ងាយ។ ការប្រើ const reference ជួយឱ្យ method អាន object ផ្សេងដោយមិនចម្លង និងមិនកែវា។`,
      expectedOutput: "Distance: 5.00"
    },
    {
      id: "classes-objects-10",
      topicId: "classes-objects",
      title: "Quiz: Independent Object State",
      difficulty: "advanced",
      type: "quiz",
      description: `object ពីរដែលបង្កើតពី class ដូចគ្នាមាន state ដាច់ដោយឡែកពីគ្នា។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផល។`,
      requirements: ["ពិនិត្យការកំណត់ a.value និង b.value។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

class Counter {
public:
    int value;

    Counter() {
        value = 0;
    }
};

int main() {
    Counter a;
    Counter b;
    a.value = 5;
    cout << a.value << " " << b.value;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: ["5 0", "5 5", "0 0", "Compile error"],
      correctIndex: 0,
      quizExplanation: "a និង b គឺជា object ពីរដែលមាន value ផ្ទាល់ខ្លួន។ constructor កំណត់ value របស់ b ជា 0 ហើយការកំណត់ a.value = 5 មិនប៉ះពាល់ b.value ទេ។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "object នីមួយៗមាន copy ផ្ទាល់ខ្លួននៃ member variables ដែលមិនមែន static។",
      solution: String.raw`#include <iostream>

using namespace std;

class Counter {
public:
    int value;

    Counter() {
        value = 0;
    }
};

int main() {
    Counter a;
    Counter b;
    a.value = 5;
    cout << a.value << " " << b.value << endl;
    return 0;
}`,
      explanation: `member variables ធម្មតាមានច្បាប់ចម្លងដាច់ដោយឡែកសម្រាប់ object នីមួយៗ។ constructor ត្រូវបានហៅសម្រាប់ a និង b ដូច្នេះ value ទាំងពីរចាប់ផ្តើមជា 0។ ការកែ a.value បន្ទាប់មកប៉ះពាល់តែ a ប៉ុណ្ណោះ។`,
      expectedOutput: "5 0"
    },
    {
      id: "classes-objects-11",
      topicId: "classes-objects",
      title: "Inventory Sell Operations",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Product សម្រាប់គ្រប់គ្រងស្តុក និងប្រតិបត្តិការលក់។ ការលក់ដែលលើសស្តុកត្រូវបដិសេធ ហើយរាប់ចំនួនបដិសេធ។`,
      requirements: [
        "ប្រកាស class Product ដែលមាន name និង stock។",
        "បន្ថែម method setData, getName, getStock និង sell។",
        "sell ត្រូវត្រឡប់ bool និងកាត់ stock តែនៅពេលមានស្តុកគ្រប់គ្រាន់។",
        "អានចំនួនផលិតផល n បន្ទាប់មកព័ត៌មានផលិតផល។",
        "អានចំនួនប្រតិបត្តិការ m និងឈ្មោះផលិតផលជាមួយចំនួនលក់ រួចបង្ហាញស្តុកចុងក្រោយ និងចំនួនបដិសេធ។"
      ],
      input: "n, ព័ត៌មានផលិតផល n, m, បន្ទាប់មក m បន្ទាត់ ដែលមានឈ្មោះ និងចំនួនលក់។",
      output: "ស្តុករបស់ផលិតផលនីមួយៗ បន្ទាប់មក Rejected: count។",
      samples: [{ input: "3\nPen 10\nBook 5\nEraser 8\n2\nPen 3\nBook 6", output: "Pen: 7\nBook: 5\nEraser: 8\nRejected: 1" }],
      constraints: ["n តិចជាង ឬស្មើ 100។", "ឈ្មោះផលិតផលមិនមានចន្លោះ។"],
      hint: "រកផលិតផលដោយប្រៀបធៀប getName() ជាមួយឈ្មោះដែលអាន។ បើ sell ត្រឡប់ false ឬរកមិនឃើញ បង្កើន rejected។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Product {
private:
    string name;
    int stock;

public:
    Product() {
        name = "";
        stock = 0;
    }

    void setData(string n, int s) {
        name = n;
        stock = s;
    }

    string getName() const {
        return name;
    }

    int getStock() const {
        return stock;
    }

    bool sell(int quantity) {
        if (quantity <= stock) {
            stock -= quantity;
            return true;
        }
        return false;
    }
};

int main() {
    int n;
    cin >> n;
    Product products[100];
    for (int i = 0; i < n; i++) {
        string name;
        int stock;
        cin >> name >> stock;
        products[i].setData(name, stock);
    }
    int m;
    cin >> m;
    int rejected = 0;
    for (int i = 0; i < m; i++) {
        string target;
        int quantity;
        cin >> target >> quantity;
        bool found = false;
        for (int j = 0; j < n; j++) {
            if (products[j].getName() == target) {
                found = true;
                if (!products[j].sell(quantity)) {
                    rejected++;
                }
                break;
            }
        }
        if (!found) {
            rejected++;
        }
    }
    for (int i = 0; i < n; i++) {
        cout << products[i].getName() << ": " << products[i].getStock() << endl;
    }
    cout << "Rejected: " << rejected << endl;
    return 0;
}`,
      explanation: `object នីមួយៗរក្សាស្តុកផ្ទាល់ខ្លួន ហើយ method sell ការពារមិនឱ្យស្តុកធ្លាក់ក្រោម 0។ យើងស្វែងរកផលិតផលតាមឈ្មោះ ហើយបើការលក់មិនជោគជ័យ ឬរកមិនឃើញផលិតផល យើងបង្កើន rejected។ បន្ទាប់ពីប្រតិបត្តិការទាំងអស់ យើងបង្ហាញស្តុកចុងក្រោយតាមលំដាប់ដើម។`,
      expectedOutput: "Pen: 7\nBook: 5\nEraser: 8\nRejected: 1"
    },
    {
      id: "classes-objects-12",
      topicId: "classes-objects",
      title: "Multiply 2x2 Matrices",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Matrix សម្រាប់ matrix 2x2 ដែលអាចគុណ matrix ពីរ។ លំហាត់នេះបង្ហាញ object ដែលរក្សា array ខាងក្នុង និង method គណនាលទ្ធផលថ្មី។`,
      requirements: [
        "ប្រកាស class Matrix ដែលមាន data[2][2] នៅ private។",
        "បន្ថែម method read សម្រាប់អានធាតុ 4 របស់ matrix។",
        "បន្ថែម method multiply ដែលត្រឡប់ Matrix លទ្ធផល។",
        "បន្ថែម method print សម្រាប់បង្ហាញ matrix។",
        "អាន matrix ពីរ គុណវា ហើយបង្ហាញលទ្ធផល។"
      ],
      input: "ធាតុ 4 របស់ matrix ទីមួយ បន្ទាប់មកធាតុ 4 របស់ matrix ទីពីរ។",
      output: "Matrix លទ្ធផល 2 បន្ទាត់ ដែលមានតម្លៃ 2 ក្នុងមួយបន្ទាត់។",
      samples: [{ input: "1 2\n3 4\n5 6\n7 8", output: "19 22\n43 50" }],
      constraints: ["matrix ទាំងពីរមានទំហំ 2x2។", "បង្ហាញតម្លៃបំបែកដោយចន្លោះ។"],
      hint: "result.data[i][j] = data[i][0] * other.data[0][j] + data[i][1] * other.data[1][j]; សម្រាប់ i និង j ពី 0 ដល់ 1។",
      solution: String.raw`#include <iostream>

using namespace std;

class Matrix {
private:
    int data[2][2];

public:
    void read() {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                cin >> data[i][j];
            }
        }
    }

    Matrix multiply(const Matrix& other) const {
        Matrix result;
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                result.data[i][j] = data[i][0] * other.data[0][j] + data[i][1] * other.data[1][j];
            }
        }
        return result;
    }

    void print() const {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                cout << data[i][j];
                if (j < 1) {
                    cout << " ";
                }
            }
            cout << endl;
        }
    }
};

int main() {
    Matrix a;
    Matrix b;
    a.read();
    b.read();
    Matrix result = a.multiply(b);
    result.print();
    return 0;
}`,
      explanation: `class Matrix រក្សាទិន្នន័យ 2x2 នៅក្នុង array ខាងក្នុង។ multiply ប្រើរូបមន្តគុណ matrix ដោយបូកផលគុណនៃ row របស់ matrix ទីមួយ និង column របស់ matrix ទីពីរ។ method read និង print ជួយបំបែកការអាន និងការបង្ហាញចេញពី logic គណនា។`,
      expectedOutput: "19 22\n43 50"
    },
    {
      id: "classes-objects-13",
      topicId: "classes-objects",
      title: "Bank Transfers Between Accounts",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class BankAccount និងគ្រប់គ្រងគណនីជាច្រើនដើម្បីធ្វើការផ្ទេរប្រាក់រវាងគណនី។ ការផ្ទេរត្រូវបរាជ័យបើគណនីដើមមិនមានប្រាក់គ្រប់គ្រាន់។`,
      requirements: [
        "ប្រកាស class BankAccount ដែលមាន balance និង method deposit, withdraw និង getBalance។",
        "អានចំនួនគណនី n និង balance ដំបូងរបស់គណនីនីមួយៗ។",
        "អានចំនួនការផ្ទេរ m និងព័ត៌មាន from, to, amount។",
        "ផ្ទេរប្រាក់តែនៅពេល withdraw ពីគណនីដើមជោគជ័យ។",
        "បង្ហាញ balance របស់គណនីនីមួយៗដោយលេខទសភាគពីរ។"
      ],
      input: "n, balance n, m, បន្ទាប់មក m បន្ទាត់ ដែលមាន from to amount។",
      output: "balance នៃគណនីនីមួយៗក្នុងទម្រង់ Account i: value។",
      samples: [{ input: "3\n100 200 300\n2\n0 1 50\n1 2 25", output: "Account 0: 50.00\nAccount 1: 225.00\nAccount 2: 325.00" }],
      constraints: ["index គណនីចាប់ផ្តើមពី 0។", "amount មិនអវិជ្ជមាន។"],
      hint: "ប្រើ BankAccount accounts[100]; ហើយសម្រាប់ការផ្ទេរ បើ accounts[from].withdraw(amount) ជោគជ័យ ទើប accounts[to].deposit(amount)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount(double b = 0) {
        balance = b;
    }

    void deposit(double amount) {
        balance += amount;
    }

    bool withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    int n;
    cin >> n;
    BankAccount accounts[100];
    for (int i = 0; i < n; i++) {
        double balance;
        cin >> balance;
        accounts[i].deposit(balance);
    }
    int m;
    cin >> m;
    for (int i = 0; i < m; i++) {
        int from;
        int to;
        double amount;
        cin >> from >> to >> amount;
        if (accounts[from].withdraw(amount)) {
            accounts[to].deposit(amount);
        }
    }
    cout << fixed << setprecision(2);
    for (int i = 0; i < n; i++) {
        cout << "Account " << i << ": " << accounts[i].getBalance() << endl;
    }
    return 0;
}`,
      explanation: `array នៃ object អនុញ្ញាតឱ្យយើងគ្រប់គ្រងគណនីជាច្រើនក្នុង program តែមួយ។ withdraw ត្រឡប់ bool ដើម្បីប្រាប់ថាការដកប្រាក់ជោគជ័យឬអត់។ ការផ្ទេរធ្វើឡើងដោយដកពីគណនីដើមមុន ហើយដាក់ចូលគណនីគោលដៅតែនៅពេលការដកជោគជ័យ។ ដូច្នេះប្រាក់មិនអាចបាត់ ឬបង្កើតចេញពីគ្មានបានទេ។`,
      expectedOutput: "Account 0: 50.00\nAccount 1: 225.00\nAccount 2: 325.00"
    }
  ]);
})();
