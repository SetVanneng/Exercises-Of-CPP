(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "inheritance-01",
      topicId: "inheritance",
      title: "Basic Animal Inheritance",
      difficulty: "beginner",
      type: "code",
      description: `Inheritance អនុញ្ញាតឱ្យ class ថ្មីទទួលលក្ខណៈពី class ដែលមានស្រាប់។ អ្នកត្រូវបង្កើត class Dog ដែលទទួល method speak ពី Animal ហើយបន្ថែម method bark របស់ខ្លួនឯង។`,
      requirements: [
        "បង្កើត class Animal ដែលមាន method speak បង្ហាញ Animal makes a sound។",
        "បង្កើត class Dog ដែលទទួលមរតកពី Animal ដោយ public inheritance។",
        "បន្ថែម method bark ក្នុង Dog ដែលបង្ហាញ Dog barks។",
        "បង្កើត object Dog ហើយហៅទាំង speak និង bark។"
      ],
      input: null,
      output: "សារពី method ដែលទទួលមរតក និង method ថ្មី។",
      samples: [{ input: "", output: "Animal makes a sound\nDog barks" }],
      constraints: ["ត្រូវប្រើ : public Animal។", "មិនត្រូវសរសេរ speak ឡើងវិញក្នុង Dog ទេ។"],
      hint: "class Dog : public Animal { ... }; ធ្វើឱ្យ Dog អាចហៅ speak ដែលបានកំណត់ក្នុង Animal។",
      solution: String.raw`#include <iostream>

using namespace std;

class Animal {
public:
    void speak() const {
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() const {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Dog dog;
    dog.speak();
    dog.bark();
    return 0;
}`,
      explanation: `Dog ទទួល method speak ពី Animal ដោយសារ public inheritance។ យើងមិនចាំបាច់សរសេរ speak ម្តងទៀតទេ ដែលជួយកាត់បន្ថយការសរសេរកូដដដែលៗ។ Dog បន្ថែម method bark សម្រាប់លក្ខណៈពិសេសរបស់ខ្លួន។ ដូច្នេះ object Dog មានទាំងលក្ខណៈរបស់ Animal និងរបស់ Dog។`,
      expectedOutput: "Animal makes a sound\nDog barks"
    },
    {
      id: "inheritance-02",
      topicId: "inheritance",
      title: "Quiz: Base Constructor First",
      difficulty: "beginner",
      type: "quiz",
      description: `នៅពេលបង្កើត derived object constructor របស់ base និង derived ត្រូវបានហៅតាមលំដាប់ជាក់លាក់។ សូមអាន snippet ហើយកំណត់លទ្ធផល។`,
      requirements: ["តាមដានលំដាប់ការហៅ constructor។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

class Base {
public:
    Base() {
        cout << "Base" << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived" << endl;
    }
};

int main() {
    Derived d;
    return 0;
}`,
      quizQuestion: "តើ console បង្ហាញអ្វីតាមលំដាប់ណា?",
      options: [
        "Base\nDerived",
        "Derived\nBase",
        "Derived",
        "Base\nBase"
      ],
      correctIndex: 0,
      quizExplanation: "នៅពេលបង្កើត Derived object base part ត្រូវបានសាងសង់មុន។ ដូច្នេះ Base constructor ដំណើរការមុន បន្ទាប់មក Derived constructor។ លំដាប់នេះធានាថា derived អាចប្រើ base state ដែលត្រៀមរួចជាស្រេច។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "base class ត្រូវបានសាងសង់មុន derived class ជានិច្ច។",
      solution: String.raw`#include <iostream>

using namespace std;

class Base {
public:
    Base() {
        cout << "Base" << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived" << endl;
    }
};

int main() {
    Derived d;
    return 0;
}`,
      explanation: `derived object មាន base part នៅខាងក្នុង។ ដូច្នេះ C++ ត្រូវសាងសង់ base part មុន ទើបសាងសង់ derived part។ លំដាប់នេះផ្ទុយពី destructor ដែលដំណើរការបញ្ច្រាសគឺ derived មុន បន្ទាប់មក base។`,
      expectedOutput: "Base\nDerived"
    },
    {
      id: "inheritance-03",
      topicId: "inheritance",
      title: "Protected Wheel Count",
      difficulty: "beginner",
      type: "code",
      description: `protected member អាចចូលប្រើបានដោយ derived class ប៉ុន្តែមិនមែនដោយកូដខាងក្រៅ។ អ្នកត្រូវបង្កើត class Car ដែលកំណត់ចំនួនកង់ក្នុង class របស់ខ្លួន។`,
      requirements: [
        "បង្កើត class Vehicle ដែលមាន wheels ជា protected។",
        "បង្កើត class Car ដែលទទួលមរតកពី Vehicle ហើយកំណត់ wheels = 4 ក្នុង constructor។",
        "ផ្តល់ method getWheels ក្នុង Car ដើម្បីអានចំនួនកង់។",
        "បង្ហាញ Car wheels: 4។"
      ],
      input: null,
      output: "ចំនួនកង់របស់រថយន្ត។",
      samples: [{ input: "", output: "Car wheels: 4" }],
      constraints: ["wheels ត្រូវតែជា protected ក្នុង Vehicle។", "មិនត្រូវចូលប្រើ wheels ពី main ដោយផ្ទាល់ទេ។"],
      hint: "protected អនុញ្ញាតឱ្យ Car ចូលប្រើ wheels បាន។ កំណត់ wheels = 4 ក្នុង Car constructor ហើយបង្ហាញតាម getWheels។",
      solution: String.raw`#include <iostream>

using namespace std;

class Vehicle {
protected:
    int wheels;

public:
    Vehicle() : wheels(0) {
    }
};

class Car : public Vehicle {
public:
    Car() {
        wheels = 4;
    }

    int getWheels() const {
        return wheels;
    }
};

int main() {
    Car car;
    cout << "Car wheels: " << car.getWheels() << endl;
    return 0;
}`,
      explanation: `protected member ស្ថិតនៅចន្លោះ private និង public។ វាមិនអាចចូលប្រើពី main បានទេ ប៉ុន្តែ derived class ដូចជា Car អាចចូលប្រើ wheels បាន។ នេះជួយឱ្យ class មានទិន្នន័យរួមសម្រាប់គ្រួសារ class ដោយមិនបើកឱ្យកូដខាងក្រៅចូលប្រើដោយផ្ទាល់។`,
      expectedOutput: "Car wheels: 4"
    },
    {
      id: "inheritance-04",
      topicId: "inheritance",
      title: "Reusing Person Behavior",
      difficulty: "beginner",
      type: "code",
      description: `Student គឺជា Person ដែលមានព័ត៌មានឈ្មោះរួម។ អ្នកត្រូវប្រើ inheritance ដើម្បីឱ្យ Student អាចប្រើ method introduce ដែលសរសេរក្នុង Person។`,
      requirements: [
        "បង្កើត class Person ដែលមាន name ជា protected និង method setName ព្រមទាំង introduce។",
        "បង្កើត class Student ដែលទទួលមរតកពី Person។",
        "បន្ថែម method study ក្នុង Student ដែលបង្ហាញ Status: Studying។",
        "អានឈ្មោះមួយបន្ទាត់ កំណត់វា រួចបង្ហាញ Name និង Status។"
      ],
      input: "ឈ្មោះសិស្សមួយបន្ទាត់។",
      output: "ឈ្មោះ និងស្ថានភាពសិក្សា។",
      samples: [{ input: "Dara", output: "Name: Dara\nStatus: Studying" }],
      constraints: ["introduce ត្រូវសរសេរតែក្នុង Person ប៉ុណ្ណោះ។", "Student ត្រូវប្រើ setName ដែលទទួលមរតក។"],
      hint: "Student មិនចាំបាច់ប្រកាស name ម្តងទៀតទេ។ ប្រើ setName ពី Person រួចហៅ introduce និង study។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Person {
protected:
    string name;

public:
    void setName(const string &value) {
        name = value;
    }

    void introduce() const {
        cout << "Name: " << name << endl;
    }
};

class Student : public Person {
public:
    void study() const {
        cout << "Status: Studying" << endl;
    }
};

int main() {
    string name;
    getline(cin, name);

    Student student;
    student.setName(name);
    student.introduce();
    student.study();
    return 0;
}`,
      explanation: `Student ទទួល name, setName និង introduce ពី Person។ ដូច្នេះយើងមិនចាំបាច់សរសេរកូដសម្រាប់ឈ្មោះម្តងទៀតក្នុង Student ទេ។ Student បន្ថែមតែ method study ដែលជាអាកប្បកិរិយាពិសេសរបស់សិស្ស។ នេះជាការប្រើ inheritance ដើម្បីប្រើលក្ខណៈរួមឡើងវិញ។`,
      expectedOutput: "Name: Dara\nStatus: Studying"
    },
    {
      id: "inheritance-05",
      topicId: "inheritance",
      title: "Base Constructor Arguments",
      difficulty: "intermediate",
      type: "code",
      description: ` Derived class ត្រូវផ្តល់ argument ទៅ base constructor នៅក្នុង initializer list។ អ្នកត្រូវបង្កើត class Student ដែលហៅ Person(name) មុនពេលកំណត់ grade។`,
      requirements: [
        "បង្កើត class Person ដែលមាន name ជា protected និង constructor ទទួលឈ្មោះ។",
        "បង្កើត class Student ដែលទទួលមរតកពី Person និងមាន grade ជា private។",
        "Student constructor ត្រូវហៅ Person(name) ក្នុង initializer list។",
        "អានឈ្មោះ និងថ្នាក់ រួចបង្ហាញ Name និង Grade។"
      ],
      input: "ឈ្មោះសិស្សមួយបន្ទាត់ និងថ្នាក់ជាចំនួនគត់។",
      output: "ឈ្មោះ និងថ្នាក់របស់សិស្ស។",
      samples: [{ input: "Dara\n10", output: "Name: Dara\nGrade: 10" }],
      constraints: ["ត្រូវហៅ base constructor ក្នុង initializer list។", "name ត្រូវតែជា protected ដើម្បីឱ្យ Student អានបាន។"],
      hint: "Student(const string &n, int g) : Person(n), grade(g) { }។ បន្ទាប់មក method show បង្ហាញ name និង grade។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Person {
protected:
    string name;

public:
    Person(const string &n) : name(n) {
    }
};

class Student : public Person {
private:
    int grade;

public:
    Student(const string &n, int g) : Person(n), grade(g) {
    }

    void show() const {
        cout << "Name: " << name << endl;
        cout << "Grade: " << grade << endl;
    }
};

int main() {
    string name;
    int grade;

    getline(cin, name);
    cin >> grade;

    Student student(name, grade);
    student.show();
    return 0;
}`,
      explanation: `derived constructor ត្រូវធានាថា base part ត្រូវបានចាប់ផ្តើមយ៉ាងត្រឹមត្រូវ។ ការសរសេរ Person(n) ក្នុង initializer list ហៅ base constructor មុនពេល body របស់ Student ដំណើរការ។ បន្ទាប់មក grade ត្រូវបានកំណត់។ បើយើងមិនហៅ Person(n) ទេ base នឹងព្យាយាមប្រើ default constructor ដែលអាចមិនមាន។`,
      expectedOutput: "Name: Dara\nGrade: 10"
    },
    {
      id: "inheritance-06",
      topicId: "inheritance",
      title: "Savings Account Extension",
      difficulty: "intermediate",
      type: "code",
      description: `SavingsAccount គឺជា Account ដែលបន្ថែមមុខងារការប្រាក់។ អ្នកត្រូវបង្កើត derived class ដែលប្រើ balance ពី base class និងបន្ថែម method addInterest។`,
      requirements: [
        "បង្កើត class Account ដែលមាន balance ជា protected និង method deposit ព្រមទាំង getBalance។",
        "បង្កើត class SavingsAccount ដែលទទួលមរតកពី Account និងមាន rate។",
        "method addInterest ត្រូវបន្ថែមការប្រាក់ទៅ balance។",
        "អានសមតុល្យ និងអត្រាការប្រាក់ រួចបង្ហាញសមតុល្យបន្ទាប់ពីបន្ថែមការប្រាក់។"
      ],
      input: "សមតុល្យដំបូង និងអត្រាការប្រាក់ជាភាគរយ។",
      output: "សមតុល្យថ្មីដោយខ្ទង់ទសភាគពីរ។",
      samples: [{ input: "1000 5", output: "Balance: 1050.00" }],
      constraints: ["balance ត្រូវតែជា protected។", "addInterest ត្រូវប្រើ balance ដែលទទួលមរតក។"],
      hint: "addInterest គឺ balance += balance * rate / 100.0;។ SavingsAccount constructor ហៅ Account(b) ក្នុង initializer list។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Account {
protected:
    double balance;

public:
    Account(double initial) : balance(initial) {
    }

    void deposit(double amount) {
        if (amount > 0.0) {
            balance += amount;
        }
    }

    double getBalance() const {
        return balance;
    }
};

class SavingsAccount : public Account {
private:
    double rate;

public:
    SavingsAccount(double initial, double r) : Account(initial), rate(r) {
    }

    void addInterest() {
        balance += balance * rate / 100.0;
    }
};

int main() {
    double initial;
    double rate;
    cin >> initial >> rate;

    SavingsAccount account(initial, rate);
    account.addInterest();

    cout << fixed << setprecision(2);
    cout << "Balance: " << account.getBalance() << endl;
    return 0;
}`,
      explanation: `SavingsAccount ទទួល balance ពី Account ហើយបន្ថែម rate របស់ខ្លួន។ method addInterest អាចកែ balance បានព្រោះវាជា protected។ getBalance នៅតែជា public method ដែលអាចប្រើបានពី main។ នេះបង្ហាញពីការពង្រីក class ដែលមានស្រាប់ដោយមិនសរសេរកូដដដែលៗ។`,
      expectedOutput: "Balance: 1050.00"
    },
    {
      id: "inheritance-07",
      topicId: "inheritance",
      title: "Quiz: Is-A Relationship",
      difficulty: "intermediate",
      type: "quiz",
      description: `Inheritance សមស្របសម្រាប់ទំនាក់ទំនង is-a ដែល derived class គឺជាប្រភេទពិសេសនៃ base class។ សូមជ្រើសរើសឧទាហរណ៍ត្រឹមត្រូវបំផុត។`,
      requirements: ["ពិចារណាអត្ថន័យ is-a និង has-a។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`class Vehicle {
public:
    void move() {
    }
};

class Car : public Vehicle {
public:
    void openTrunk() {
    }
};`,
      quizQuestion: "តើទំនាក់ទំនងមួយណាសមស្របសម្រាប់ public inheritance?",
      options: [
        "Car គឺជា Vehicle ដូច្នេះ Car អាចទទួលមរតកពី Vehicle។",
        "Car មាន Engine ដូច្នេះ Car គួរទទួលមរតកពី Engine។",
        "Engine គឺជា Car ដូច្នេះ Engine គួរទទួលមរតកពី Car។",
        "Vehicle មាន Car ពីរគ្រឿង ដូច្នេះ Vehicle គួរទទួលមរតកពី Car។"
      ],
      correctIndex: 0,
      quizExplanation: "public inheritance តំណាងទំនាក់ទំនង is-a។ Car គឺជា Vehicle ដូច្នេះ Car : public Vehicle គឺសមស្រប។ ចំណែក Car មាន Engine គឺទំនាក់ទំនង has-a ដែលគួរប្រើ composition ដោយដាក់ Engine ជា member ក្នុង Car។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សួរខ្លួនឯងថា derived object គឺជា base object មែនទេ។",
      solution: String.raw`class Vehicle {
public:
    void move() {
    }
};

class Car : public Vehicle {
public:
    void openTrunk() {
    }
};`,
      explanation: `Inheritance គួរប្រើពេល derived class ជា specialization នៃ base class។ Car is-a Vehicle ដូច្នេះ Car អាចប្រើ move និងបន្ថែម openTrunk។ ប៉ុន្តែ Engine មិនមែនជា Car ទេ ដូច្នេះការប្រើ inheritance សម្រាប់ Engine នឹងធ្វើឱ្យ model មិនត្រឹមត្រូវ។`,
      expectedOutput: "Car is-a Vehicle, so Car can inherit from Vehicle."
    },
    {
      id: "inheritance-08",
      topicId: "inheritance",
      title: "Multilevel Vehicle Chain",
      difficulty: "advanced",
      type: "code",
      description: `Inheritance អាចមានច្រើនកម្រិតដូចជា Vehicle ទៅ Car ទៅ ElectricCar។ អ្នកត្រូវបង្កើត chain នេះ ហើយហៅ method ពីកម្រិតនីមួយៗតាម object ចុងក្រោយ។`,
      requirements: [
        "បង្កើត class Vehicle ដែលមាន method move បង្ហាញ Vehicle moves។",
        "បង្កើត class Car ដែលទទួលមរតកពី Vehicle និងមាន method drive បង្ហាញ Car drives។",
        "បង្កើត class ElectricCar ដែលទទួលមរតកពី Car និងមាន method charge បង្ហាញ Electric car charges។",
        "បង្កើត ElectricCar ហើយហៅ move, drive និង charge តាមលំដាប់។"
      ],
      input: null,
      output: "សារបីបន្ទាត់ពីបីកម្រិតនៃ inheritance។",
      samples: [{ input: "", output: "Vehicle moves\nCar drives\nElectric car charges" }],
      constraints: ["ត្រូវប្រើ multilevel inheritance ពិតប្រាកដ។", "ElectricCar មិនត្រូវទទួលមរតកពី Vehicle ដោយផ្ទាល់ទេ។"],
      hint: "ElectricCar : public Car ហើយ Car : public Vehicle។ បន្ទាប់មក object ElectricCar អាចហៅ method ទាំងបីបាន។",
      solution: String.raw`#include <iostream>

using namespace std;

class Vehicle {
public:
    void move() const {
        cout << "Vehicle moves" << endl;
    }
};

class Car : public Vehicle {
public:
    void drive() const {
        cout << "Car drives" << endl;
    }
};

class ElectricCar : public Car {
public:
    void charge() const {
        cout << "Electric car charges" << endl;
    }
};

int main() {
    ElectricCar car;
    car.move();
    car.drive();
    car.charge();
    return 0;
}`,
      explanation: `ElectricCar ទទួលមរតកពី Car ដែលទទួលមរតកពី Vehicle ទៀត។ ដូច្នេះ ElectricCar មាន method move និង drive ពីកម្រិតខាងលើ ហើយបន្ថែម charge របស់ខ្លួន។ multilevel inheritance ជួយបង្កើត hierarchy ដែលមានលក្ខណៈរួមនៅកម្រិតខ្ពស់ និងលក្ខណៈពិសេសនៅកម្រិតក្រោម។`,
      expectedOutput: "Vehicle moves\nCar drives\nElectric car charges"
    },
    {
      id: "inheritance-09",
      topicId: "inheritance",
      title: "Constructor and Destructor Chain",
      difficulty: "advanced",
      type: "code",
      description: `ការយល់ពីលំដាប់ constructor និង destructor ក្នុង inheritance ជួយឱ្យអ្នកគ្រប់គ្រង resource បានត្រឹមត្រូវ។ អ្នកត្រូវសង្កេតលំដាប់នៅពេលបង្កើត និងបំផ្លាញ derived object។`,
      requirements: [
        "បង្កើត class Base ដែល constructor បង្ហាញ Base created និង destructor បង្ហាញ Base destroyed។",
        "បង្កើត class Derived ដែលទទួលមរតកពី Base ហើយ constructor បង្ហាញ Derived created និង destructor បង្ហាញ Derived destroyed។",
        "ក្នុង main បង្កើត Derived object រួចបង្ហាញ In main។",
        "បង្ហាញលំដាប់ទាំងអស់ឱ្យត្រូវនឹងវដ្តជីវិតរបស់ object។"
      ],
      input: null,
      output: "លំដាប់ constructor, សារពី main និង destructor។",
      samples: [{ input: "", output: "Base created\nDerived created\nIn main\nDerived destroyed\nBase destroyed" }],
      constraints: ["មិនត្រូវប្រើ cin ទេ។", "ត្រូវបង្ហាញ In main មុនពេល object ចេញពី scope។"],
      hint: "Derived object ត្រូវបានបង្កើតក្នុង main ដូច្នេះ destructor ដំណើរការនៅចុងបញ្ចប់ main។ លំដាប់ destructor គឺផ្ទុយពី constructor។",
      solution: String.raw`#include <iostream>

using namespace std;

class Base {
public:
    Base() {
        cout << "Base created" << endl;
    }

    ~Base() {
        cout << "Base destroyed" << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived created" << endl;
    }

    ~Derived() {
        cout << "Derived destroyed" << endl;
    }
};

int main() {
    Derived object;
    cout << "In main" << endl;
    return 0;
}`,
      explanation: `constructor ត្រូវបានហៅពី base ទៅ derived ដូច្នេះ Base created មុន Derived created។ object នៅរស់កំឡុងពេល main ដំណើរការ ហើយ In main ត្រូវបង្ហាញ។ នៅពេល object ចេញពី scope destructor ដំណើរការបញ្ច្រាសពី derived ទៅ base ដូច្នេះ Derived destroyed មុន Base destroyed។`,
      expectedOutput: "Base created\nDerived created\nIn main\nDerived destroyed\nBase destroyed"
    },
    {
      id: "inheritance-10",
      topicId: "inheritance",
      title: "Function Hiding and Scope Resolution",
      difficulty: "advanced",
      type: "code",
      description: `បើ derived class ប្រកាស function ឈ្មោះដូច base នោះវានឹងបិទបាំង base version។ អ្នកត្រូវបង្ហាញពីរបៀបហៅ base version ដោយប្រើ scope resolution operator។`,
      requirements: [
        "បង្កើត class Animal ដែលមាន method show បង្ហាញ Animal show។",
        "បង្កើត class Dog ដែលទទួលមរតកពី Animal និងប្រកាស show ថ្មីបង្ហាញ Dog show។",
        "ក្នុង main ហៅ d.show() និង d.Animal::show()។",
        "បង្ហាញលទ្ធផលពីរ។"
      ],
      input: null,
      output: "សារពី derived show និង base show។",
      samples: [{ input: "", output: "Dog show\nAnimal show" }],
      constraints: ["ត្រូវប្រើ scope resolution operator :: ដើម្បីហៅ base version។", "មិនត្រូវប្រើ virtual function ទេ។"],
      hint: "d.show() ហៅ Dog version ដោយសារ it hides the base version។ ដើម្បីហៅ base version សរសេរ d.Animal::show()។",
      solution: String.raw`#include <iostream>

using namespace std;

class Animal {
public:
    void show() const {
        cout << "Animal show" << endl;
    }
};

class Dog : public Animal {
public:
    void show() const {
        cout << "Dog show" << endl;
    }
};

int main() {
    Dog d;
    d.show();
    d.Animal::show();
    return 0;
}`,
      explanation: `នៅពេល Dog ប្រកាស show ដោយខ្លួនឯង វាបិទបាំង show របស់ Animal សម្រាប់ការហៅធម្មតា។ ដូច្នេះ d.show() ហៅ Dog version។ យើងអាចហៅ version របស់ base ដោយបញ្ជាក់ class ដោយផ្ទាល់គឺ d.Animal::show()។ នេះខុសពី virtual function ដែលជ្រើសរើសនៅ runtime។`,
      expectedOutput: "Dog show\nAnimal show"
    },
    {
      id: "inheritance-11",
      topicId: "inheritance",
      title: "Manager Payroll Inheritance",
      difficulty: "challenge",
      type: "code",
      description: `ក្រុមហ៊ុនមួយមាន Employee ធម្មតា និង Manager ដែលទទួលប្រាក់ខែបន្ថែមប្រាក់រង្វាន់។ អ្នកត្រូវប្រើ inheritance ដើម្បីឱ្យ Manager ប្រើ name និង salary ពី Employee ហើយគណនាប្រាក់ខែសរុប។`,
      requirements: [
        "បង្កើត class Employee ដែលមាន name និង salary ជា protected និង constructor ទទួលតម្លៃទាំងពីរ។",
        "បង្កើត class Manager ដែលទទួលមរតកពី Employee និងមាន bonus។",
        "Manager constructor ត្រូវហៅ Employee(name, salary) ក្នុង initializer list។",
        "អានឈ្មោះ ប្រាក់ខែ និងប្រាក់រង្វាន់ រួចបង្ហាញ Name និង Total pay ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ឈ្មោះបុគ្គលិក ប្រាក់ខែ និងប្រាក់រង្វាន់។",
      output: "ឈ្មោះ និងប្រាក់ខែសរុបរបស់ manager។",
      samples: [{ input: "Dara\n800\n200", output: "Name: Dara\nTotal pay: 1000.00" }],
      constraints: ["Manager ត្រូវប្រើ salary ដែលទទួលមរតក។", "ត្រូវប្រើ initializer list ដើម្បីហៅ base constructor។"],
      hint: "Manager(const string &n, double s, double b) : Employee(n, s), bonus(b) { }។ Total pay គឺ salary + bonus។ ប្រើ fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Employee {
protected:
    string name;
    double salary;

public:
    Employee(const string &n, double s) : name(n), salary(s) {
    }
};

class Manager : public Employee {
private:
    double bonus;

public:
    Manager(const string &n, double s, double b) : Employee(n, s), bonus(b) {
    }

    void show() const {
        cout << "Name: " << name << endl;
        cout << fixed << setprecision(2);
        cout << "Total pay: " << salary + bonus << endl;
    }
};

int main() {
    string name;
    double salary;
    double bonus;

    getline(cin, name);
    cin >> salary >> bonus;

    Manager manager(name, salary, bonus);
    manager.show();
    return 0;
}`,
      explanation: `Manager ទទួល name និង salary ពី Employee ហើយបន្ថែម bonus របស់ខ្លួន។ ការហៅ Employee(n, s) ក្នុង initializer list ធានាថា base part ត្រូវបានចាប់ផ្តើមមុន។ method show អាចអាន name និង salary បានព្រោះពួកវាជា protected។ ប្រាក់ខែសរុបគឺ salary + bonus។`,
      expectedOutput: "Name: Dara\nTotal pay: 1000.00"
    },
    {
      id: "inheritance-12",
      topicId: "inheritance",
      title: "Virtual Inheritance Diamond",
      difficulty: "challenge",
      type: "code",
      description: `Multiple inheritance អាចបង្កើត diamond problem ដែល Person ត្រូវបានចម្លងពីរដង។ អ្នកត្រូវប្រើ virtual inheritance ដើម្បីឱ្យ TeachingAssistant មាន Person តែមួយគត់។`,
      requirements: [
        "បង្កើត class Person ដែលមាន name ជា protected និង constructor ទទួលឈ្មោះ។",
        "បង្កើត class Student និង class Teacher ដែលទទួលមរតកពី Person ដោយ virtual public។",
        "បង្កើត class TeachingAssistant ដែលទទួលមរតកពី Student និង Teacher។",
        "TeachingAssistant constructor ត្រូវហៅ Person(name) ហើយបង្ហាញ TA: name។"
      ],
      input: null,
      output: "ឈ្មោះរបស់ teaching assistant។",
      samples: [{ input: "", output: "TA: Dara" }],
      constraints: ["Student និង Teacher ត្រូវប្រើ virtual public Person។", "TeachingAssistant ត្រូវហៅ Person constructor ដោយផ្ទាល់។"],
      hint: "សរសេរ class Student : virtual public Person និង class Teacher : virtual public Person។ បន្ទាប់មក TeachingAssistant : public Student, public Teacher។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Person {
protected:
    string name;

public:
    Person(const string &n) : name(n) {
    }
};

class Student : virtual public Person {
public:
    Student(const string &n) : Person(n) {
    }
};

class Teacher : virtual public Person {
public:
    Teacher(const string &n) : Person(n) {
    }
};

class TeachingAssistant : public Student, public Teacher {
public:
    TeachingAssistant(const string &n) : Person(n), Student(n), Teacher(n) {
    }

    void show() const {
        cout << "TA: " << name << endl;
    }
};

int main() {
    TeachingAssistant assistant("Dara");
    assistant.show();
    return 0;
}`,
      explanation: `បើ Student និង Teacher ទទួលមរតក Person ធម្មតា TeachingAssistant នឹងមាន Person ពីរច្បាប់ ហើយ name អាចក្លាយជា ambiguous។ virtual inheritance ធ្វើឱ្យមាន Person base តែមួយគត់ដែលចែករំលែករវាង Student និង Teacher។ ក្នុងករណីនេះ class ចុងក្រោយ TeachingAssistant គឺជាអ្នកហៅ Person constructor ដោយផ្ទាល់។`,
      expectedOutput: "TA: Dara"
    },
    {
      id: "inheritance-13",
      topicId: "inheritance",
      title: "Perishable Item Status",
      difficulty: "challenge",
      type: "code",
      description: `ហាងលក់ទំនិញមួយចង់បន្ថែមព័ត៌មានថ្ងៃផុតកំណត់សម្រាប់ទំនិញខូចឆាប់។ អ្នកត្រូវបង្កើត class PerishableItem ដែលទទួលមរតកពី Item ហើយបន្ថែមស្ថានភាព Fresh ឬ Expired។`,
      requirements: [
        "បង្កើត class Item ដែលមាន name និង price ជា protected និង constructor ទទួលតម្លៃទាំងពីរ។",
        "បង្កើត class PerishableItem ដែលទទួលមរតកពី Item និងមាន daysUntilExpiry។",
        "PerishableItem constructor ត្រូវហៅ Item(name, price)។",
        "អានឈ្មោះ តម្លៃ និងចំនួនថ្ងៃ រួចបង្ហាញ Item, Price និង Status។",
        "Status គឺ Expired បើ daysUntilExpiry តូចជាង ឬស្មើ 0 បើមិនដូច្នេះ Fresh។"
      ],
      input: "ឈ្មោះទំនិញមួយបន្ទាត់ តម្លៃ និងចំនួនថ្ងៃរហូតផុតកំណត់។",
      output: "ឈ្មោះ តម្លៃ និងស្ថានភាពទំនិញ។",
      samples: [{ input: "Milk\n2.5\n0", output: "Item: Milk\nPrice: 2.50\nStatus: Expired" }],
      constraints: ["name និង price ត្រូវតែជា protected ក្នុង Item។", "ការគណនាស្ថានភាពត្រូវកើតឡើងក្នុង PerishableItem។"],
      hint: "PerishableItem(const string &n, double p, int d) : Item(n, p), daysUntilExpiry(d) { }។ បង្ហាញ status ដោយប្រើ daysUntilExpiry > 0 ? Fresh : Expired។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Item {
protected:
    string name;
    double price;

public:
    Item(const string &n, double p) : name(n), price(p) {
    }
};

class PerishableItem : public Item {
private:
    int daysUntilExpiry;

public:
    PerishableItem(const string &n, double p, int d) : Item(n, p), daysUntilExpiry(d) {
    }

    void show() const {
        cout << "Item: " << name << endl;
        cout << fixed << setprecision(2);
        cout << "Price: " << price << endl;
        cout << "Status: " << (daysUntilExpiry > 0 ? "Fresh" : "Expired") << endl;
    }
};

int main() {
    string name;
    double price;
    int days;
    getline(cin, name);
    cin >> price >> days;

    PerishableItem item(name, price, days);
    item.show();
    return 0;
}`,
      explanation: `PerishableItem បន្ថែមទិន្នន័យ daysUntilExpiry ទៅលើ Item ដែលមាន name និង price ស្រាប់។ Constructor ហៅ Item(n, p) ដើម្បីចាប់ផ្តើម base part មុន។ method show ប្រើទាំងទិន្នន័យពី base និង derived ដើម្បីបង្ហាញស្ថានភាព។ បើ daysUntilExpiry តូចជាង ឬស្មើ 0 ទំនិញត្រូវបានចាត់ថា Expired។`,
      expectedOutput: "Item: Milk\nPrice: 2.50\nStatus: Expired"
    }
  ]);
})();
