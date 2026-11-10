(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "oop-01",
      topicId: "oop",
      title: "Dog Object Speaks",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវចាប់ផ្តើមជាមួយ class និង object ដំបូង។ class មួយដូចជា Dog មាន state គឺឈ្មោះ និង behavior គឺការបង្ហាញសំឡេង។`,
      requirements: [
        "ប្រកាស class Dog ដែលមាន member name ជា string។",
        "បន្ថែម method speak ដែលបង្ហាញ name និង says Woof។",
        "អានឈ្មោះពី input ហើយបង្កើត object Dog។",
        "ហៅ method speak ដើម្បីបង្ហាញលទ្ធផល។"
      ],
      input: "ឈ្មោះឆ្កែមួយពាក្យ។",
      output: "ឈ្មោះ និងសំឡេងរបស់ឆ្កែ។",
      samples: [{ input: "Rex", output: "Rex says Woof" }],
      constraints: ["name មិនមានចន្លោះ។", "ត្រូវប្រើ class និង object មិនមែន struct ធម្មតាទេ។"],
      hint: "បង្កើត Dog d; d.name = name; ហើយហៅ d.speak();។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Dog {
public:
    string name;

    void speak() {
        cout << name << " says Woof" << endl;
    }
};

int main() {
    string name;
    cin >> name;
    Dog d;
    d.name = name;
    d.speak();
    return 0;
}`,
      explanation: `class គឺជាគំរូសម្រាប់បង្កើត object។ Dog មាន attribute name ដែលជា state និង method speak ដែលជា behavior។ យើងបង្កើត object d កំណត់ name ហើយហៅ speak ដើម្បីបង្ហាញសារ។`,
      expectedOutput: "Rex says Woof"
    },
    {
      id: "oop-02",
      topicId: "oop",
      title: "Counter Object",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Counter ដែលរក្សាតម្លៃរាប់ និងអាចបង្កើនតម្លៃបាន។ លំហាត់នេះបង្ហាញថា object មាន state ផ្ទាល់ខ្លួន និង method សម្រាប់ផ្លាស់ប្តូរ state។`,
      requirements: [
        "ប្រកាស class Counter ដែលមាន value ជា int នៅក្នុង private។",
        "បន្ថែម constructor ដែលកំណត់ value ជា 0។",
        "បន្ថែម method increment និង getValue។",
        "អានចំនួនដង n ហើយហៅ increment n ដង រួចបង្ហាញ Count: value។"
      ],
      input: "ចំនួនគត់ n ជាចំនួនដងត្រូវបង្កើន។",
      output: "តម្លៃរាប់ក្នុងទម្រង់ Count: value។",
      samples: [{ input: "5", output: "Count: 5" }],
      constraints: ["n ជាចំនួនគត់មិនអវិជ្ជមាន។", "value ត្រូវនៅ private។"],
      hint: "ប្រើ loop for (int i = 0; i < n; i++) c.increment(); ហើយបង្ហាញ c.getValue()។",
      solution: String.raw`#include <iostream>

using namespace std;

class Counter {
private:
    int value;

public:
    Counter() {
        value = 0;
    }

    void increment() {
        value++;
    }

    int getValue() const {
        return value;
    }
};

int main() {
    int n;
    cin >> n;
    Counter c;
    for (int i = 0; i < n; i++) {
        c.increment();
    }
    cout << "Count: " << c.getValue() << endl;
    return 0;
}`,
      explanation: `object រក្សា state របស់ខ្លួននៅក្នុង member variables។ Counter មាន value ជា private ដូច្នេះខាងក្រៅមិនអាចកែដោយផ្ទាល់បានទេ។ method increment បង្កើន value ម្តងមួយ ហើយ getValue អានតម្លៃបច្ចុប្បន្ន។`,
      expectedOutput: "Count: 5"
    },
    {
      id: "oop-03",
      topicId: "oop",
      title: "Bank Account Deposit",
      difficulty: "beginner",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class BankAccount សាមញ្ញដែលមាន balance និង method សម្រាប់ដាក់ប្រាក់។ លំហាត់នេះបង្ហាញ behavior ដែលផ្លាស់ប្តូរ state របស់ object។`,
      requirements: [
        "ប្រកាស class BankAccount ដែលមាន balance ជា double នៅ private។",
        "បន្ថែម constructor ដែលទទួល balance ដំបូង។",
        "បន្ថែម method deposit និង getBalance។",
        "អាន balance ដំបូង និងចំនួនដាក់បន្ថែម រួចបង្ហាញ Balance ដោយលេខទសភាគពីរ។"
      ],
      input: "balance ដំបូង និងចំនួនដាក់បន្ថែម។",
      output: "balance ថ្មីក្នុងទម្រង់ Balance: value។",
      samples: [{ input: "100 50", output: "Balance: 150.00" }],
      constraints: ["ចំនួនទាំងអស់មិនអវិជ្ជមាន។", "balance ត្រូវនៅ private។"],
      hint: "constructor កំណត់ balance = initial; ហើយ deposit បន្ថែម amount ចូល balance។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount(double initial) {
        balance = initial;
    }

    void deposit(double amount) {
        balance += amount;
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    double initial;
    double amount;
    cin >> initial >> amount;
    BankAccount account(initial);
    account.deposit(amount);
    cout << fixed << setprecision(2);
    cout << "Balance: " << account.getBalance() << endl;
    return 0;
}`,
      explanation: `constructor កំណត់ state ដំបូងនៅពេល object ត្រូវបានបង្កើត។ deposit ផ្លាស់ប្តូរ balance ខាងក្នុង object ដោយសុវត្ថិភាព ព្រោះ balance ជា private។ getBalance អនុញ្ញាតឱ្យយើងអានតម្លៃបច្ចុប្បន្នដោយមិនកែវាដោយផ្ទាល់។`,
      expectedOutput: "Balance: 150.00"
    },
    {
      id: "oop-04",
      topicId: "oop",
      title: "Quiz: Class and Object",
      difficulty: "beginner",
      type: "quiz",
      description: `class គឺជាគំរូ ហើយ object គឺជាធាតុពិតដែលបង្កើតពី class។ សូមពិនិត្យ snippet ហើយជ្រើសរើសសេចក្តីថ្លែងការណ៍ត្រឹមត្រូវ។`,
      requirements: ["មើលបន្ទាត់ Car myCar;។", "បែងចែកឱ្យបានរវាង class និង object។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>
#include <string>

using namespace std;

class Car {
public:
    string model;
};

int main() {
    Car myCar;
    myCar.model = "Toyota";
    return 0;
}`,
      quizQuestion: "តើសេចក្តីថ្លែងការណ៍ណាត្រឹមត្រូវ?",
      options: [
        "Car myCar; បង្កើត object ឈ្មោះ myCar ពី class Car",
        "Car គឺជា object ហើយ myCar គឺជា class",
        "myCar.model បង្កើត class ថ្មី",
        "class Car មិនអាចមាន member ប្រភេទ string បានទេ"
      ],
      correctIndex: 0,
      quizExplanation: "Car គឺជា class ដែលកំណត់រចនាសម្ព័ន្ធ។ Car myCar; បង្កើត object មួយឈ្មោះ myCar ដែលមាន member model ផ្ទាល់ខ្លួន។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "class ជាគំរូ ហើយ object ជាការបង្កើតជាក់ស្តែងពីគំរូនោះ។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Car {
public:
    string model;
};

int main() {
    Car myCar;
    myCar.model = "Toyota";
    cout << myCar.model << endl;
    return 0;
}`,
      explanation: `class កំណត់ attributes និង methods ដែល object នីមួយៗនឹងមាន។ object ត្រូវបានបង្កើតដោយសរសេរ class name និង variable name ដូចជា Car myCar;។ បន្ទាប់មកយើងចូលប្រើ member ដោយ myCar.model។`,
      expectedOutput: "Toyota"
    },
    {
      id: "oop-05",
      topicId: "oop",
      title: "Student Average Method",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Student ដែលរក្សាឈ្មោះ និងពិន្ទុបី ហើយមាន method គណនាមធ្យមភាគ។ លំហាត់នេះបង្ហាញការដាក់ logic នៅក្នុង class។`,
      requirements: [
        "ប្រកាស class Student ដែលមាន name, s1, s2 និង s3។",
        "បន្ថែម constructor សម្រាប់កំណត់តម្លៃទាំងអស់។",
        "បន្ថែម method average ដែលត្រឡប់មធ្យមភាគជា double។",
        "អានឈ្មោះ និងពិន្ទុបី រួចបង្ហាញឈ្មោះ និងមធ្យមភាគដោយលេខទសភាគពីរ។"
      ],
      input: "ឈ្មោះ និងពិន្ទុបី។",
      output: "ឈ្មោះ និងមធ្យមភាគក្នុងទម្រង់ name average: value។",
      samples: [{ input: "Dara 80 90 80", output: "Dara average: 83.33" }],
      constraints: ["ពិន្ទុជាចំនួនគត់ពី 0 ដល់ 100។", "method average ត្រូវត្រឡប់ double។"],
      hint: "return (s1 + s2 + s3) / 3.0; ហើយបង្ហាញដោយ fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Student {
private:
    string name;
    int s1;
    int s2;
    int s3;

public:
    Student(string n, int a, int b, int c) {
        name = n;
        s1 = a;
        s2 = b;
        s3 = c;
    }

    double average() const {
        return (s1 + s2 + s3) / 3.0;
    }

    string getName() const {
        return name;
    }
};

int main() {
    string name;
    int a;
    int b;
    int c;
    cin >> name >> a >> b >> c;
    Student student(name, a, b, c);
    cout << fixed << setprecision(2);
    cout << student.getName() << " average: " << student.average() << endl;
    return 0;
}`,
      explanation: `method អាចចូលប្រើ member variables របស់ object បានដោយផ្ទាល់។ average គណនាផលបូកពិន្ទុ ហើយចែកនឹង 3.0 ដើម្បីទទួលបានលទ្ធផលទសភាគ។ ការដាក់ការគណនាក្នុង class ធ្វើឱ្យ object មាន behavior ដែលពាក់ព័ន្ធនឹង state របស់វា។`,
      expectedOutput: "Dara average: 83.33"
    },
    {
      id: "oop-06",
      topicId: "oop",
      title: "Temperature Conversion Object",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Temperature ដែលរក្សាសីតុណ្ហភាពជា Celsius និងមាន method បំប្លែងទៅ Fahrenheit។ លំហាត់នេះបង្ហាញ method ដែលគណនាតម្លៃថ្មីពី state។`,
      requirements: [
        "ប្រកាស class Temperature ដែលមាន celsius ជា double។",
        "បន្ថែម constructor សម្រាប់កំណត់ celsius។",
        "បន្ថែម method toFahrenheit ដែលត្រឡប់ celsius * 9 / 5 + 32។",
        "អាន celsius រួចបង្ហាញ Fahrenheit ដោយលេខទសភាគមួយ។"
      ],
      input: "សីតុណ្ហភាពជា Celsius។",
      output: "សីតុណ្ហភាពជា Fahrenheit។",
      samples: [{ input: "25", output: "Fahrenheit: 77.0" }],
      constraints: ["ប្រើ 9.0 និង 5.0 ដើម្បីឱ្យការចែកជា double។", "បង្ហាញលេខទសភាគមួយ។"],
      hint: "return celsius * 9.0 / 5.0 + 32.0; ហើយប្រើ fixed និង setprecision(1)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Temperature {
private:
    double celsius;

public:
    Temperature(double c) {
        celsius = c;
    }

    double toFahrenheit() const {
        return celsius * 9.0 / 5.0 + 32.0;
    }
};

int main() {
    double c;
    cin >> c;
    Temperature temp(c);
    cout << fixed << setprecision(1);
    cout << "Fahrenheit: " << temp.toFahrenheit() << endl;
    return 0;
}`,
      explanation: `class Temperature រក្សា state តែមួយគឺ celsius។ method toFahrenheit ប្រើរូបមន្តបំប្លែង ហើយមិនផ្លាស់ប្តូរ state ដើមទេ។ ការប្រើ 9.0 និង 5.0 ធានាថាការចែកធ្វើឡើងជា floating point មិនមែន integer division។`,
      expectedOutput: "Fahrenheit: 77.0"
    },
    {
      id: "oop-07",
      topicId: "oop",
      title: "Wallet Add and Spend",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Wallet ដែលអាចទទួលប្រាក់ និងចំណាយប្រាក់បាន។ ការចំណាយត្រូវអនុញ្ញាតតែនៅពេលមានប្រាក់គ្រប់គ្រាន់។`,
      requirements: [
        "ប្រកាស class Wallet ដែលមាន balance ជា double នៅ private។",
        "បន្ថែម constructor, method add, method spend និង getBalance។",
        "spend ត្រូវកាត់ប្រាក់តែនៅពេល amount តិចជាង ឬស្មើ balance។",
        "អាន balance ដំបូង, ចំនួនបន្ថែម និងចំនួនចំណាយ រួចបង្ហាញ balance ចុងក្រោយ។"
      ],
      input: "balance ដំបូង, ចំនួនបន្ថែម និងចំនួនចំណាយ។",
      output: "balance ចុងក្រោយក្នុងទម្រង់ Balance: value។",
      samples: [{ input: "100 40 25", output: "Balance: 115.00" }],
      constraints: ["balance មិនត្រូវធ្លាក់ក្រោម 0។", "បង្ហាញលេខទសភាគពីរ។"],
      hint: "spend ពិនិត្យ if (amount <= balance) មុនពេល balance -= amount;។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Wallet {
private:
    double balance;

public:
    Wallet(double b) {
        balance = b;
    }

    void add(double amount) {
        balance += amount;
    }

    void spend(double amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    double initial;
    double added;
    double spent;
    cin >> initial >> added >> spent;
    Wallet wallet(initial);
    wallet.add(added);
    wallet.spend(spent);
    cout << fixed << setprecision(2);
    cout << "Balance: " << wallet.getBalance() << endl;
    return 0;
}`,
      explanation: `class អាចការពារ state ដោយពិនិត្យលក្ខខណ្ឌនៅក្នុង method។ spend មិនកាត់ប្រាក់បើចំនួនចំណាយលើស balance ដែលជួយរក្សា balance ឱ្យមិនអវិជ្ជមាន។ add និង spend ធ្វើឱ្យ object មាន behavior ដែលគ្រប់គ្រង state របស់វា។`,
      expectedOutput: "Balance: 115.00"
    },
    {
      id: "oop-08",
      topicId: "oop",
      title: "Shopping Cart Total",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class ShoppingCart ដែលអាចបន្ថែមទំនិញតាមតម្លៃ និងរក្សាតម្លៃសរុប។ លំហាត់នេះបង្ហាញ object ដែលបូកសរុបទិន្នន័យពី method ហៅច្រើនដង។`,
      requirements: [
        "ប្រកាស class ShoppingCart ដែលមាន total និង items។",
        "បន្ថែម constructor កំណត់ total និង items ជា 0។",
        "បន្ថែម method addItem ដែលបន្ថែមតម្លៃ និងបង្កើនចំនួនទំនិញ។",
        "អានចំនួនទំនិញ n និងតម្លៃ n តម្លៃ រួចបង្ហាញ Items និង Total ដោយលេខទសភាគពីរ។"
      ],
      input: "n បន្ទាប់មក n តម្លៃទំនិញ។",
      output: "ចំនួនទំនិញ និងតម្លៃសរុប។",
      samples: [{ input: "3\n10.5 5.25 4.25", output: "Items: 3\nTotal: 20.00" }],
      constraints: ["n ជាចំនួនគត់មិនអវិជ្ជមាន។", "តម្លៃជាចំនួនមិនអវិជ្ជមាន។"],
      hint: "method addItem(double price) ធ្វើ total += price; និង items++;។ បង្ហាញដោយ setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class ShoppingCart {
private:
    double total;
    int items;

public:
    ShoppingCart() {
        total = 0;
        items = 0;
    }

    void addItem(double price) {
        total += price;
        items++;
    }

    double getTotal() const {
        return total;
    }

    int getItems() const {
        return items;
    }
};

int main() {
    int n;
    cin >> n;
    ShoppingCart cart;
    for (int i = 0; i < n; i++) {
        double price;
        cin >> price;
        cart.addItem(price);
    }
    cout << fixed << setprecision(2);
    cout << "Items: " << cart.getItems() << endl;
    cout << "Total: " << cart.getTotal() << endl;
    return 0;
}`,
      explanation: `object អាចបូកសរុបទិន្នន័យពីការហៅ method ច្រើនដង។ addItem ទាំងពីរបន្ថែមតម្លៃចូល total និងបង្កើនចំនួនទំនិញ។ ដូច្នេះ cart រក្សា state សរុបដោយមិនចាំបាច់រក្សា array នៃតម្លៃទាំងអស់។`,
      expectedOutput: "Items: 3\nTotal: 20.00"
    },
    {
      id: "oop-09",
      topicId: "oop",
      title: "Employee Salary Raise",
      difficulty: "advanced",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Employee ដែលរក្សាឈ្មោះ និងប្រាក់ខែ ហើយអាចទទួលការដំឡើងប្រាក់ខែជាភាគរយ។ លំហាត់នេះបង្ហាញ method ដែលផ្លាស់ប្តូរ state ដោយផ្អែកលើ input។`,
      requirements: [
        "ប្រកាស class Employee ដែលមាន name និង salary។",
        "បន្ថែម constructor សម្រាប់ name និង salary។",
        "បន្ថែម method giveRaise ដែលបន្ថែម salary * percent / 100។",
        "អានឈ្មោះ, salary និង percent រួចបង្ហាញប្រាក់ខែថ្មីដោយលេខទសភាគពីរ។"
      ],
      input: "ឈ្មោះ, salary និងភាគរយដំឡើង។",
      output: "ឈ្មោះ និងប្រាក់ខែថ្មី។",
      samples: [{ input: "Dara 500 10", output: "Dara new salary: 550.00" }],
      constraints: ["percent មិនអវិជ្ជមាន។", "salary ជា double។"],
      hint: "salary += salary * percent / 100.0; ហើយបង្ហាញដោយ fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Employee {
private:
    string name;
    double salary;

public:
    Employee(string n, double s) {
        name = n;
        salary = s;
    }

    void giveRaise(double percent) {
        salary += salary * percent / 100.0;
    }

    string getName() const {
        return name;
    }

    double getSalary() const {
        return salary;
    }
};

int main() {
    string name;
    double salary;
    double percent;
    cin >> name >> salary >> percent;
    Employee employee(name, salary);
    employee.giveRaise(percent);
    cout << fixed << setprecision(2);
    cout << employee.getName() << " new salary: " << employee.getSalary() << endl;
    return 0;
}`,
      explanation: `giveRaise គណនាចំនួនដំឡើងពី salary បច្ចុប្បន្ន ហើយបន្ថែមចូល salary ដើម។ ព្រោះ salary ជា state ខាងក្នុង object ការផ្លាស់ប្តូរកើតឡើងដោយផ្ទាល់លើ object នោះ។ getSalary បន្ទាប់មកអានតម្លៃថ្មីសម្រាប់ការបង្ហាញ។`,
      expectedOutput: "Dara new salary: 550.00"
    },
    {
      id: "oop-10",
      topicId: "oop",
      title: "Quiz: Object State",
      difficulty: "advanced",
      type: "quiz",
      description: `object នីមួយៗមាន state ផ្ទាល់ខ្លួន ទោះបីជាបង្កើតពី class ដូចគ្នាក៏ដោយ។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផល។`,
      requirements: ["ពិនិត្យតម្លៃ value របស់ a និង b។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

class Lamp {
public:
    bool on;

    void toggle() {
        on = !on;
    }
};

int main() {
    Lamp lamp;
    lamp.on = false;
    lamp.toggle();
    cout << lamp.on;
    return 0;
}`,
      quizQuestion: "តើ cout បង្ហាញអ្វី?",
      options: ["1", "0", "true", "Compile error"],
      correctIndex: 0,
      quizExplanation: "lamp.on ចាប់ផ្តើមជា false។ toggle ប្តូរវាទៅ true។ នៅពេលបង្ហាញ bool ដោយ cout តម្លៃ true បង្ហាញជា 1។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "bool true បង្ហាញជា 1 ហើយ false បង្ហាញជា 0 នៅពេលប្រើ cout ធម្មតា។",
      solution: String.raw`#include <iostream>

using namespace std;

class Lamp {
public:
    bool on;

    void toggle() {
        on = !on;
    }
};

int main() {
    Lamp lamp;
    lamp.on = false;
    lamp.toggle();
    cout << lamp.on << endl;
    return 0;
}`,
      explanation: `method toggle ផ្លាស់ប្តូរ state របស់ object ដោយប្រើ logical NOT។ បន្ទាប់ពី toggle លើ false តម្លៃក្លាយជា true។ cout បង្ហាញ bool ជាលេខ 1 សម្រាប់ true និង 0 សម្រាប់ false បើមិនបានកំណត់ boolalpha។`,
      expectedOutput: "1"
    },
    {
      id: "oop-11",
      topicId: "oop",
      title: "Bank Operations with Rejection",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវសាងសង់ class BankAccount ដែលគាំទ្រការដាក់ប្រាក់ និងការដកប្រាក់។ ការដកប្រាក់ដែលលើស balance ត្រូវបដិសេធ និងរាប់ចំនួនបដិសេធ។`,
      requirements: [
        "ប្រកាស class BankAccount ដែលមាន balance និង rejected នៅ private។",
        "បន្ថែម method deposit, withdraw, getBalance និង getRejected។",
        "withdraw ត្រូវបដិសេធបើ amount លើស balance ហើយបង្កើន rejected។",
        "អាន balance ដំបូង, ចំនួនប្រតិបត្តិការ n បន្ទាប់មកអាន op និង amount។",
        "បង្ហាញ Balance និង Rejected ដោយលេខទសភាគពីរ។"
      ],
      input: "balance ដំបូង, n, បន្ទាប់មក n បន្ទាត់ ដែលមាន d ឬ w និង amount។",
      output: "balance ចុងក្រោយ និងចំនួនប្រតិបត្តិការដែលបដិសេធ។",
      samples: [{ input: "100\n4\nd 50\nw 30\nw 200\nd 10", output: "Balance: 130.00\nRejected: 1" }],
      constraints: ["op ជា d សម្រាប់ deposit ឬ w សម្រាប់ withdraw។", "amount មិនអវិជ្ជមាន។"],
      hint: "for loop អាន char op និង double amount។ បើ op == 'd' ហៅ deposit បើមិនដូច្នេះហៅ withdraw។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class BankAccount {
private:
    double balance;
    int rejected;

public:
    BankAccount(double b) {
        balance = b;
        rejected = 0;
    }

    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            rejected++;
        }
    }

    double getBalance() const {
        return balance;
    }

    int getRejected() const {
        return rejected;
    }
};

int main() {
    double initial;
    int n;
    cin >> initial >> n;
    BankAccount account(initial);
    for (int i = 0; i < n; i++) {
        char op;
        double amount;
        cin >> op >> amount;
        if (op == 'd') {
            account.deposit(amount);
        } else {
            account.withdraw(amount);
        }
    }
    cout << fixed << setprecision(2);
    cout << "Balance: " << account.getBalance() << endl;
    cout << "Rejected: " << account.getRejected() << endl;
    return 0;
}`,
      explanation: `class អាចរក្សា state ជាច្រើន ដូចជា balance និងចំនួនប្រតិបត្តិការដែលបដិសេធ។ withdraw ពិនិត្យលក្ខខណ្ឌមុនពេលកែ balance ហើយបង្កើន rejected នៅពេលបដិសេធ។ ការប្រើ method ធ្វើឱ្យការគ្រប់គ្រង state មានលក្ខណៈច្បាស់លាស់ និងមិនអាចកែ balance ដោយផ្ទាល់ពីខាងក្រៅ។`,
      expectedOutput: "Balance: 130.00\nRejected: 1"
    },
    {
      id: "oop-12",
      topicId: "oop",
      title: "Vector Addition and Dot Product",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class Vector2D សម្រាប់វ៉ិចទ័រពីរវិមាត្រ ដែលគាំទ្រការបូកវ៉ិចទ័រ និង dot product។ លំហាត់នេះបង្ហាញ object ដែលធ្វើការជាមួយ object ផ្សេងទៀត។`,
      requirements: [
        "ប្រកាស class Vector2D ដែលមាន x និង y។",
        "បន្ថែម constructor, method add និង method dot។",
        "method add ត្រឡប់ Vector2D ថ្មីដែលជាផលបូក។",
        "method dot ត្រឡប់ x * other.x + y * other.y។",
        "អានវ៉ិចទ័រពីរ រួចបង្ហាញ Sum និង Dot។"
      ],
      input: "x1 y1 x2 y2។",
      output: "Sum ក្នុងទម្រង់ (x, y) និង Dot។",
      samples: [{ input: "1 2\n3 4", output: "Sum: (4, 6)\nDot: 11" }],
      constraints: ["x និង y ជាចំនួនគត់។", "method add ត្រូវត្រឡប់ object ថ្មី។"],
      hint: "add បង្កើត Vector2D(x + other.x, y + other.y) ហើយ dot គណនា x * other.x + y * other.y។",
      solution: String.raw`#include <iostream>

using namespace std;

class Vector2D {
private:
    int x;
    int y;

public:
    Vector2D(int a, int b) {
        x = a;
        y = b;
    }

    Vector2D add(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }

    int dot(const Vector2D& other) const {
        return x * other.x + y * other.y;
    }

    int getX() const {
        return x;
    }

    int getY() const {
        return y;
    }
};

int main() {
    int x1;
    int y1;
    int x2;
    int y2;
    cin >> x1 >> y1 >> x2 >> y2;
    Vector2D a(x1, y1);
    Vector2D b(x2, y2);
    Vector2D sum = a.add(b);
    cout << "Sum: (" << sum.getX() << ", " << sum.getY() << ")" << endl;
    cout << "Dot: " << a.dot(b) << endl;
    return 0;
}`,
      explanation: `object អាចទទួល object ផ្សេងទៀតជា parameter ហើយធ្វើការជាមួយវា។ add បង្កើត Vector2D ថ្មីដែលមានផលបូកនៃ components ហើយ dot គណនាផលគុណ និងផលបូកតាមរូបមន្ត dot product។ ការប្រើ const reference ជួយឱ្យ method អាន object ផ្សេងដោយមិនចម្លង និងមិនកែវា។`,
      expectedOutput: "Sum: (4, 6)\nDot: 11"
    },
    {
      id: "oop-13",
      topicId: "oop",
      title: "Parking Lot Simulation",
      difficulty: "challenge",
      type: "code",
      description: `អ្នកត្រូវបង្កើត class ParkingLot ដែលតាមដានចំនួនកន្លែងចតដែលកំពុងប្រើ។ ប្រតិបត្តិការចត ឬចាកចេញដែលមិនត្រឹមត្រូវត្រូវបដិសេធ។`,
      requirements: [
        "ប្រកាស class ParkingLot ដែលមាន capacity, occupied និង rejected។",
        "បន្ថែម method park, leave, getOccupied និង getRejected។",
        "park បរាជ័យបើ occupied ពេញ ហើយ leave បរាជ័យបើ occupied ទទេ។",
        "អាន capacity, ចំនួន event n បន្ទាប់មកអាន P ឬ L សម្រាប់ event នីមួយៗ។",
        "បង្ហាញ Occupied និង Rejected។"
      ],
      input: "capacity, n, បន្ទាប់មក n បន្ទាត់ ដែលមាន P ឬ L។",
      output: "ចំនួនកន្លែងដែលកំពុងប្រើ និងចំនួន event ដែលបដិសេធ។",
      samples: [{ input: "2\n5\nP\nP\nP\nL\nP", output: "Occupied: 2\nRejected: 1" }],
      constraints: ["capacity ធំជាង 0។", "P មានន័យថាចត ហើយ L មានន័យថាចាកចេញ។"],
      hint: "park ពិនិត្យ if (occupied < capacity) ហើយ leave ពិនិត្យ if (occupied > 0)។ បើមិនបាន បង្កើន rejected។",
      solution: String.raw`#include <iostream>

using namespace std;

class ParkingLot {
private:
    int capacity;
    int occupied;
    int rejected;

public:
    ParkingLot(int c) {
        capacity = c;
        occupied = 0;
        rejected = 0;
    }

    void park() {
        if (occupied < capacity) {
            occupied++;
        } else {
            rejected++;
        }
    }

    void leave() {
        if (occupied > 0) {
            occupied--;
        } else {
            rejected++;
        }
    }

    int getOccupied() const {
        return occupied;
    }

    int getRejected() const {
        return rejected;
    }
};

int main() {
    int capacity;
    int n;
    cin >> capacity >> n;
    ParkingLot lot(capacity);
    for (int i = 0; i < n; i++) {
        char event;
        cin >> event;
        if (event == 'P') {
            lot.park();
        } else {
            lot.leave();
        }
    }
    cout << "Occupied: " << lot.getOccupied() << endl;
    cout << "Rejected: " << lot.getRejected() << endl;
    return 0;
}`,
      explanation: `class ParkingLot គ្រប់គ្រង state បីគឺ capacity, occupied និង rejected។ park និង leave ពិនិត្យលក្ខខណ្ឌមុនពេលផ្លាស់ប្តូរ occupied។ ប្រតិបត្តិការដែលមិនអាចធ្វើបានត្រូវរាប់ចូល rejected ដើម្បីឱ្យយើងដឹងពីបញ្ហាក្នុងការក្លែងធ្វើ។`,
      expectedOutput: "Occupied: 2\nRejected: 1"
    }
  ]);
})();
