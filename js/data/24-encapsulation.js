(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "encapsulation-01",
      topicId: "encapsulation",
      title: "Private Balance With Getter",
      difficulty: "beginner",
      type: "code",
      description: `ធនាគារមួយមិនចង់ឱ្យកូដខាងក្រៅផ្លាស់ប្តូរសមតុល្យដោយផ្ទាល់ទេ។ អ្នកត្រូវបង្កើត class BankAccount ដែលរក្សា balance ជា private ហើយផ្តល់ setter និង getter សម្រាប់ចូលប្រើប្រកបដោយសុវត្ថិភាព។`,
      requirements: [
        "បង្កើត class BankAccount ដែលមាន balance ជា private។",
        "សរសេរ setBalance ដែលទទួលតែតម្លៃមិនអវិជ្ជមាន។",
        "សរសេរ getBalance ជា const method។",
        "អានសមតុល្យមួយ កំណត់វា រួចបង្ហាញដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "សមតុល្យជាចំនួនទសភាគ។",
      output: "សមតុល្យដែលបានរក្សាទុក។",
      samples: [{ input: "250.5", output: "Balance: 250.50" }],
      constraints: ["balance ត្រូវតែជា private។", "ការអានតម្លៃត្រូវធ្វើតាម getBalance។"],
      hint: "setter ពិនិត្យ if (amount >= 0) មុនពេលកំណត់ balance។ បន្ទាប់មកប្រើ fixed និង setprecision(2) ពេលបង្ហាញ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount() : balance(0.0) {
    }

    void setBalance(double amount) {
        if (amount >= 0.0) {
            balance = amount;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    double amount;
    cin >> amount;

    BankAccount account;
    account.setBalance(amount);

    cout << fixed << setprecision(2);
    cout << "Balance: " << account.getBalance() << endl;
    return 0;
}`,
      explanation: `balance ជា private ដូច្នេះ main មិនអាចសរសេរ account.balance ដោយផ្ទាល់បានទេ។ ការផ្លាស់ប្តូរត្រូវឆ្លងកាត់ setBalance ដែលពិនិត្យតម្លៃជាមុន។ getBalance ជា const method ព្រោះវាគ្រាន់តែអាន state ហើយមិនកែប្រែ object។`,
      expectedOutput: "Balance: 250.50"
    },
    {
      id: "encapsulation-02",
      topicId: "encapsulation",
      title: "Quiz: Private Member Access",
      difficulty: "beginner",
      type: "quiz",
      description: `សិស្សម្នាក់ព្យាយាមកំណត់ age របស់ Student ដោយផ្ទាល់ពី main ប៉ុន្តែ compiler មិនព្រម។ សូមពិនិត្យ snippet ហើយកំណត់មូលហេតុ។`,
      requirements: ["ពិនិត្យ access specifier របស់ age។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

class Student {
private:
    int age;

public:
    Student() {
        age = 18;
    }
};

int main() {
    Student s;
    s.age = 20;
    cout << s.age << endl;
    return 0;
}`,
      quizQuestion: "តើ compiler នឹងរាយការណ៍អ្វី?",
      options: [
        "Error ព្រោះ age ជា private ហើយ main មិនអាចចូលប្រើដោយផ្ទាល់បានទេ។",
        "កម្មវិធីដំណើរការធម្មតា ហើយបង្ហាញ 20។",
        "Error ព្រោះ Student មិនមាន constructor។",
        "កម្មវិធីបង្ហាញ 18 ដោយសារ age មិនអាចផ្លាស់ប្តូរបាន។"
      ],
      correctIndex: 0,
      quizExplanation: "member ដែលប្រកាសជា private អាចចូលប្រើបានតែពីក្នុង class ប៉ុណ្ណោះ។ main ជា function ខាងក្រៅ ដូច្នេះការសរសេរ s.age បង្កើត compile error។ ដំណោះស្រាយគឺបន្ថែម public method ដូចជា setAge។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "private member មិនអាចចូលប្រើពីក្រៅ class បានទេ។",
      solution: String.raw`#include <iostream>

using namespace std;

class Student {
private:
    int age;

public:
    Student() {
        age = 18;
    }

    void setAge(int value) {
        if (value >= 0) {
            age = value;
        }
    }

    int getAge() const {
        return age;
    }
};

int main() {
    Student s;
    s.setAge(20);
    cout << s.getAge() << endl;
    return 0;
}`,
      explanation: `Encapsulation ការពារ state ខាងក្នុងដោយ private។ ដើម្បីអាន ឬផ្លាស់ប្តូរ age យើងត្រូវប្រើ public methods ដូចជា getAge និង setAge។ វិធីនេះអនុញ្ញាតឱ្យ class ពិនិត្យតម្លៃមុនពេលផ្លាស់ប្តូរ state។`,
      expectedOutput: "Compile error: age is private."
    },
    {
      id: "encapsulation-03",
      topicId: "encapsulation",
      title: "Validated Age Setter",
      difficulty: "beginner",
      type: "code",
      description: `Setter ល្អមិនត្រឹមតែកំណត់តម្លៃទេ វាក៏ការពារ object ពីតម្លៃមិនសមហេតុផល។ អ្នកត្រូវបង្កើត class Person ដែលមិនអនុញ្ញាត age អវិជ្ជមាន។`,
      requirements: [
        "បង្កើត class Person ដែលមាន age ជា private។",
        "constructor កំណត់ age ដំបូងជា 0។",
        "setAge ត្រូវកំណត់ age ទៅ 0 បើតម្លៃអវិជ្ជមាន បើមិនដូច្នេះកំណត់តាមតម្លៃដែលបានផ្តល់។",
        "អានអាយុមួយ កំណត់វា រួចបង្ហាញ Age។"
      ],
      input: "អាយុជាចំនួនគត់។",
      output: "អាយុដែលបានរក្សាទុកបន្ទាប់ពីការពិនិត្យ។",
      samples: [{ input: "-5", output: "Age: 0" }],
      constraints: ["age ត្រូវតែជា private។", "ការកែតម្រូវត្រូវធ្វើក្នុង setAge។"],
      hint: "ក្នុង setAge ប្រើ if (value >= 0) age = value; else age = 0;។",
      solution: String.raw`#include <iostream>

using namespace std;

class Person {
private:
    int age;

public:
    Person() : age(0) {
    }

    void setAge(int value) {
        if (value >= 0) {
            age = value;
        } else {
            age = 0;
        }
    }

    int getAge() const {
        return age;
    }
};

int main() {
    int value;
    cin >> value;

    Person person;
    person.setAge(value);

    cout << "Age: " << person.getAge() << endl;
    return 0;
}`,
      explanation: `setAge ជាច្រកចូលតែមួយសម្រាប់ផ្លាស់ប្តូរ age។ ដោយពិនិត្យតម្លៃនៅទីនោះ object មិនអាចមានអាយុអវិជ្ជមានទេ ទោះបីអ្នកប្រើបញ្ចូល -5 ក៏ដោយ។ នេះជាគំរូនៃការរក្សា invariant ក្នុង class។`,
      expectedOutput: "Age: 0"
    },
    {
      id: "encapsulation-04",
      topicId: "encapsulation",
      title: "Read-Only Circle Radius",
      difficulty: "beginner",
      type: "code",
      description: `ខ្លះៗ object គួរផ្តល់ការអានទិន្នន័យ ប៉ុន្តែមិនគួរឱ្យផ្លាស់ប្តូរដោយផ្ទាល់។ អ្នកត្រូវបង្កើត class Circle ដែលកំណត់ radius តាម constructor ហើយគណនាក្រឡាផ្ទៃតាម method ជំនួសការបង្ហាញ radius ដោយផ្ទាល់។`,
      requirements: [
        "បង្កើត class Circle ដែលមាន radius ជា private។",
        "constructor ទទួល radius ហើយ getRadius ជា const method។",
        "សរសេរ method area ដែលប្រើ 3.14159។",
        "អាន radius រួចបង្ហាញ Radius និង Area ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "កាំរង្វង់ជាចំនួនទសភាគ។",
      output: "កាំ និងក្រឡាផ្ទៃរង្វង់។",
      samples: [{ input: "7", output: "Radius: 7.00\nArea: 153.94" }],
      constraints: ["radius ត្រូវតែជា private។", "មិនត្រូវផ្តល់ setter សម្រាប់ radius ទេ។"],
      hint: "area គឺ 3.14159 * radius * radius។ ប្រើ fixed និង setprecision(2) មុនពេលបង្ហាញ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Circle {
private:
    double radius;

public:
    Circle(double r) : radius(r) {
    }

    double getRadius() const {
        return radius;
    }

    double area() const {
        return 3.14159 * radius * radius;
    }
};

int main() {
    double radius;
    cin >> radius;

    Circle circle(radius);

    cout << fixed << setprecision(2);
    cout << "Radius: " << circle.getRadius() << endl;
    cout << "Area: " << circle.area() << endl;
    return 0;
}`,
      explanation: `radius ត្រូវបានកំណត់តែពេលបង្កើត object ហើយមិនមាន setter ទេ ដូច្នេះវាដូចជា read-only ពីខាងក្រៅ។ getRadius និង area ជា const methods ព្រោះវាមិនកែ object។ ការគណនាក្រឡាផ្ទៃកើតឡើងក្នុង class ដែលជួយលាក់រូបមន្តពីអ្នកប្រើ។`,
      expectedOutput: "Radius: 7.00\nArea: 153.94"
    },
    {
      id: "encapsulation-05",
      topicId: "encapsulation",
      title: "Temperature Range Validation",
      difficulty: "intermediate",
      type: "code",
      description: `class Temperature ត្រូវការការពារតម្លៃក្រោម absolute zero។ អ្នកត្រូវសរសេរ setter ដែលបដិសេធតម្លៃតូចជាង -273.15 ហើយរក្សាតម្លៃចាស់ដើមទុក។`,
      requirements: [
        "បង្កើត class Temperature ដែលមាន celsius ជា private។",
        "constructor កំណត់ celsius ជា 0។",
        "setCelsius ត្រឡប់ bool ដើម្បីប្រាប់ថាតើការកំណត់ជោគជ័យឬអត់។",
        "អានសីតុណ្ហភាពមួយ ហើយបើតម្លៃតូចជាង -273.15 បង្ហាញ Rejected: below absolute zero។",
        "បង្ហាញ Celsius ជាបន្ទាត់បន្ទាប់ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "សីតុណ្ហភាពជាអង្សាសេ។",
      output: "សារបដិសេធ បើចាំបាច់ និងតម្លៃដែលនៅសល់។",
      samples: [{ input: "-300", output: "Rejected: below absolute zero\nCelsius: 0.00" }],
      constraints: ["ត្រូវពិនិត្យតម្លៃនៅក្នុង setCelsius។", "តម្លៃមិនត្រឹមត្រូវមិនត្រូវផ្លាស់ប្តូរ state ទេ។"],
      hint: "setCelsius ត្រូវ return false មុនពេលកំណត់ celsius បើ c < -273.15។ បន្ទាប់មកក្នុង main ពិនិត្យលទ្ធផលដែលត្រឡប់មកវិញ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Temperature {
private:
    double celsius;

public:
    Temperature() : celsius(0.0) {
    }

    bool setCelsius(double value) {
        if (value < -273.15) {
            return false;
        }
        celsius = value;
        return true;
    }

    double getCelsius() const {
        return celsius;
    }
};

int main() {
    double value;
    cin >> value;

    Temperature temperature;
    if (!temperature.setCelsius(value)) {
        cout << "Rejected: below absolute zero" << endl;
    }

    cout << fixed << setprecision(2);
    cout << "Celsius: " << temperature.getCelsius() << endl;
    return 0;
}`,
      explanation: `setter ត្រូវធានាថា object មិនចូលទៅកាន់ state មិនត្រឹមត្រូវ។ បើ value តូចជាង -273.15 វា return false ហើយមិនកែ celsius ទេ។ ដូច្នេះ main អាចដឹងពីការបដិសេធ ហើយ celsius នៅតែ 0.00។ នេះបង្ហាញថា encapsulation មិនត្រឹមតែលាក់ data ប៉ុណ្ណោះ តែថែរក្សាភាពត្រឹមត្រូវផងដែរ។`,
      expectedOutput: "Rejected: below absolute zero\nCelsius: 0.00"
    },
    {
      id: "encapsulation-06",
      topicId: "encapsulation",
      title: "Bank Deposit and Withdraw Methods",
      difficulty: "intermediate",
      type: "code",
      description: `គណនីធនាគារគួរផ្លាស់ប្តូរសមតុល្យតែតាម method ដែលបានកំណត់។ អ្នកត្រូវបង្កើត class Account ដែលមាន deposit និង withdraw ហើយការពារការដកលើសសមតុល្យ។`,
      requirements: [
        "បង្កើត class Account ដែលមាន balance ជា private។",
        "constructor ទទួលសមតុល្យដំបូង។",
        "deposit បន្ថែមតែចំនួនវិជ្ជមាន។",
        "withdraw ដកតែពេលចំនួនវិជ្ជមាន និងមិនលើសសមតុល្យ។",
        "អានសមតុល្យដំបូង ចំនួនដាក់ និងចំនួនដក រួចបង្ហាញសមតុល្យចុងក្រោយ។"
      ],
      input: "សមតុល្យដំបូង ចំនួនដាក់ និងចំនួនដក។",
      output: "សមតុល្យចុងក្រោយដោយខ្ទង់ទសភាគពីរ។",
      samples: [{ input: "100\n50\n30", output: "Balance: 120.00" }],
      constraints: ["balance ត្រូវតែជា private។", "withdraw មិនត្រូវធ្វើឱ្យសមតុល្យធ្លាក់ក្រោម 0 ទេ។"],
      hint: "deposit ពិនិត្យ amount > 0។ withdraw ពិនិត្យ amount > 0 && amount <= balance មុនពេលដក។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Account {
private:
    double balance;

public:
    Account(double initial) : balance(initial) {
    }

    void deposit(double amount) {
        if (amount > 0.0) {
            balance += amount;
        }
    }

    void withdraw(double amount) {
        if (amount > 0.0 && amount <= balance) {
            balance -= amount;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    double initial;
    double depositAmount;
    double withdrawAmount;

    cin >> initial >> depositAmount >> withdrawAmount;

    Account account(initial);
    account.deposit(depositAmount);
    account.withdraw(withdrawAmount);

    cout << fixed << setprecision(2);
    cout << "Balance: " << account.getBalance() << endl;
    return 0;
}`,
      explanation: `deposit និង withdraw គឺជា operations ដែលគ្រប់គ្រង state ខាងក្នុង។ កូដខាងក្រៅមិនអាចកំណត់ balance ដោយផ្ទាល់បានទេ ដូច្នេះវាមិនអាចបង្កើតសមតុល្យអវិជ្ជមានដោយចៃដន្យ។ លំដាប់ operation ក្នុង main គឺដាក់ប្រាក់មុន បន្ទាប់មកដកប្រាក់។`,
      expectedOutput: "Balance: 120.00"
    },
    {
      id: "encapsulation-07",
      topicId: "encapsulation",
      title: "Quiz: Benefit of Private State",
      difficulty: "intermediate",
      type: "quiz",
      description: `class Temperature ខាងក្រោមរក្សា celsius ជា private ហើយអនុញ្ញាតការកែប្រែតែតាម setter។ សូមជ្រើសរើសអត្ថប្រយោជន៍សំខាន់នៃការរចនានេះ។`,
      requirements: ["ពិនិត្យ access specifier និង setter។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`class Temperature {
private:
    double celsius;

public:
    void setCelsius(double value) {
        if (value >= -273.15) {
            celsius = value;
        }
    }

    double getCelsius() const {
        return celsius;
    }
};`,
      quizQuestion: "តើការធ្វើឱ្យ celsius ជា private ផ្តល់អត្ថប្រយោជន៍ចម្បងអ្វី?",
      options: [
        "វាការពារ state ពីតម្លៃមិនត្រឹមត្រូវ ហើយអនុញ្ញាតការកែប្រែតែតាម setter ដែលមានការពិនិត្យ។",
        "វាធ្វើឱ្យ object បង្កើតបានលឿនជាងមុន។",
        "វាលុបតម្រូវការសម្រាប់ constructor។",
        "វាធ្វើឱ្យ method ទាំងអស់ក្លាយជា static។"
      ],
      correctIndex: 0,
      quizExplanation: "private រារាំងការចូលប្រើដោយផ្ទាល់ពីខាងក្រៅ។ ដោយអនុញ្ញាតតែ setCelsius ដែលពិនិត្យដែនកំណត់ class អាចរក្សា invariant ថា celsius មិនតូចជាង absolute zero បាន។ នេះជាខ្លឹមសារសំខាន់នៃ encapsulation។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "Encapsulation មិនមែនគ្រាន់តែលាក់ data ទេ វាក៏គ្រប់គ្រងរបៀបដែល data អាចផ្លាស់ប្តូរ។",
      solution: String.raw`class Temperature {
private:
    double celsius;

public:
    void setCelsius(double value) {
        if (value >= -273.15) {
            celsius = value;
        }
    }

    double getCelsius() const {
        return celsius;
    }
};`,
      explanation: `បើ celsius ជា public នោះកូដណាមួយក៏អាចកំណត់តម្លៃមិនត្រឹមត្រូវបាន។ ការរក្សាវាជា private និងផ្តល់ setCelsius ជាច្រកចូលតែមួយ ធ្វើឱ្យ class អាចធានាភាពត្រឹមត្រូវនៃ state បានគ្រប់ពេល។`,
      expectedOutput: "Private state is protected from invalid values and can only change through validated methods."
    },
    {
      id: "encapsulation-08",
      topicId: "encapsulation",
      title: "Clock Invariant Normalization",
      difficulty: "advanced",
      type: "code",
      description: `class Clock ត្រូវរក្សា hours និង minutes ឱ្យស្ថិតក្នុងដែនកំណត់ត្រឹមត្រូវ។ បើអ្នកប្រើបញ្ចូល 1 ម៉ោង 75 នាទី class ត្រូវបម្លែងវាទៅ 2:15 ដោយស្វ័យប្រវត្តិ។`,
      requirements: [
        "បង្កើត class Clock ដែលមាន hours និង minutes ជា private។",
        "setTime ត្រូវបម្លែងចំនួននាទីលើស 59 ទៅម៉ោង និងរក្សា minutes ក្នុង 0 ដល់ 59។",
        "ម៉ោងត្រូវវិលជុំក្នុង 24 ម៉ោង។",
        "បង្ហាញពេលវេលាក្នុងទម្រង់ H:MM ដោយបំពេញលេខ 0 នៅខាងមុខនាទីតែមួយខ្ទង់។"
      ],
      input: "ម៉ោង និងនាទីជាចំនួនគត់។",
      output: "ពេលវេលាដែលបានបម្លែងត្រឹមត្រូវ។",
      samples: [{ input: "1 75", output: "Time: 2:15" }],
      constraints: ["minutes ត្រូវតែស្ថិតក្នុង 0 ដល់ 59 បន្ទាប់ពី setTime។", "hours ត្រូវវិលជុំក្នុង 0 ដល់ 23។"],
      hint: "គណនា total = hours * 60 + minutes រួចយក total ម៉ូឌុល 1440។ បន្ទាប់មក hours = total / 60 និង minutes = total % 60។",
      solution: String.raw`#include <iostream>

using namespace std;

class Clock {
private:
    int hours;
    int minutes;

public:
    Clock() : hours(0), minutes(0) {
    }

    void setTime(int h, int m) {
        int totalMinutes = h * 60 + m;
        totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;
        hours = totalMinutes / 60;
        minutes = totalMinutes % 60;
    }

    void show() const {
        cout << "Time: " << hours << ":";
        if (minutes < 10) {
            cout << "0";
        }
        cout << minutes << endl;
    }
};

int main() {
    int h;
    int m;
    cin >> h >> m;

    Clock clock;
    clock.setTime(h, m);
    clock.show();
    return 0;
}`,
      explanation: `setTime ធានាថា object មិនអាចមាន minutes 75 ឬ hours 25 បានទេ។ យើងបម្លែងគ្រប់ពេលទៅជាចំនួននាទីសរុប រួចវិលជុំក្នុង 24 ម៉ោងដោយ modulo 1440។ បន្ទាប់មកបំបែកត្រឡប់ទៅ hours និង minutes។ ការបង្ហាញបន្ថែម 0 ខាងមុខធ្វើឱ្យទម្រង់មើលទៅត្រឹមត្រូវដូច 2:05។`,
      expectedOutput: "Time: 2:15"
    },
    {
      id: "encapsulation-09",
      topicId: "encapsulation",
      title: "Friend Function Distance Addition",
      difficulty: "advanced",
      type: "code",
      description: `ពេល class ចង់អនុញ្ញាតឱ្យ function ខាងក្រៅចូលប្រើ private member ដោយគ្មាន getter ច្រើន វាអាចប្រើ friend function។ អ្នកត្រូវបង្កើត class Distance និង friend function សម្រាប់បូកចម្ងាយពីរ។`,
      requirements: [
        "បង្កើត class Distance ដែលមាន feet និង inches ជា private។",
        "ប្រកាស friend Distance add(const Distance&, const Distance&) ក្នុង class។",
        "function add បូកចម្ងាយ និងបម្លែង 12 inches ទៅ 1 foot។",
        "អានចម្ងាយពីរ រួចបង្ហាញផលបូកក្នុងទម្រង់ feet និង inches។"
      ],
      input: "feet និង inches របស់ចម្ងាយទីមួយ បន្ទាប់មកចម្ងាយទីពីរ។",
      output: "ចម្ងាយសរុបដែលបានបម្លែងត្រឹមត្រូវ។",
      samples: [{ input: "5 10\n3 5", output: "Distance: 9 feet 3 inches" }],
      constraints: ["ត្រូវប្រើ friend function សម្រាប់ការបូក។", "inches ត្រូវតែតូចជាង 12 បន្ទាប់ពីបូក។"],
      hint: "បម្លែងចម្ងាយទាំងពីរទៅជាចំនួន inches សរុប រួចបង្កើត Distance(total / 12, total % 12)។",
      solution: String.raw`#include <iostream>

using namespace std;

class Distance {
private:
    int feet;
    int inches;

public:
    Distance(int f, int i) : feet(f), inches(i) {
    }

    friend Distance add(const Distance &a, const Distance &b);

    void show() const {
        cout << "Distance: " << feet << " feet " << inches << " inches" << endl;
    }
};

Distance add(const Distance &a, const Distance &b) {
    int totalInches = a.feet * 12 + a.inches + b.feet * 12 + b.inches;
    return Distance(totalInches / 12, totalInches % 12);
}

int main() {
    int feet1;
    int inches1;
    int feet2;
    int inches2;
    cin >> feet1 >> inches1 >> feet2 >> inches2;

    Distance first(feet1, inches1);
    Distance second(feet2, inches2);
    Distance result = add(first, second);

    result.show();
    return 0;
}`,
      explanation: `friend function មិនមែនជា member របស់ class ទេ ប៉ុន្តែ class អនុញ្ញាតឱ្យវាចូលប្រើ private members។ function add អាន a.feet, a.inches, b.feet និង b.inches បានដោយផ្ទាល់។ វាបម្លែងគ្រប់ចម្ងាយទៅ inches សរុប បន្ទាប់មកបំបែកត្រឡប់ទៅ feet និង inches ដែលធ្វើឱ្យ 15 inches ក្លាយជា 1 foot 3 inches។`,
      expectedOutput: "Distance: 9 feet 3 inches"
    },
    {
      id: "encapsulation-10",
      topicId: "encapsulation",
      title: "Encapsulated Shopping Cart",
      difficulty: "advanced",
      type: "code",
      description: `កន្ត្រកទំនិញគួរគណនាចំនួនទំនិញ និងតម្លៃសរុបដោយខ្លួនឯង។ អ្នកត្រូវបង្កើត class Cart ដែលអនុញ្ញាតតែការបន្ថែមទំនិញតាម method addItem។`,
      requirements: [
        "បង្កើត class Cart ដែលមាន itemCount និង total ជា private។",
        "constructor កំណត់ itemCount និង total ជា 0។",
        "addItem បន្ថែមតែតម្លៃវិជ្ជមាន ហើយធ្វើបច្ចុប្បន្នភាពចំនួនទំនិញ និងតម្លៃសរុប។",
        "អានចំនួនទំនិញ និងតម្លៃនីមួយៗ រួចបង្ហាញ Items និង Total។"
      ],
      input: "ចំនួនទំនិញ និងតម្លៃនីមួយៗ។",
      output: "ចំនួនទំនិញ និងតម្លៃសរុបដោយខ្ទង់ទសភាគពីរ។",
      samples: [{ input: "3\n19.5 5.25 10", output: "Items: 3\nTotal: 34.75" }],
      constraints: ["itemCount និង total ត្រូវតែជា private។", "ការគណនាត្រូវកើតឡើងក្នុង addItem។"],
      hint: "ក្នុង addItem ពិនិត្យ price > 0 រួច ++itemCount; total += price;។ បន្ទាប់មកផ្តល់ getItemCount និង getTotal។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Cart {
private:
    int itemCount;
    double total;

public:
    Cart() : itemCount(0), total(0.0) {
    }

    void addItem(double price) {
        if (price > 0.0) {
            ++itemCount;
            total += price;
        }
    }

    int getItemCount() const {
        return itemCount;
    }

    double getTotal() const {
        return total;
    }
};

int main() {
    int n;
    cin >> n;

    Cart cart;
    for (int i = 0; i < n; ++i) {
        double price;
        cin >> price;
        cart.addItem(price);
    }

    cout << "Items: " << cart.getItemCount() << endl;
    cout << fixed << setprecision(2);
    cout << "Total: " << cart.getTotal() << endl;
    return 0;
}`,
      explanation: `Cart គ្រប់គ្រង state ពីរគឺ itemCount និង total ហើយធ្វើបច្ចុប្បន្នភាពពួកវាជាមួយគ្នាក្នុង addItem។ ដោយសារកូដខាងក្រៅមិនអាចកែ itemCount ឬ total ដោយផ្ទាល់បាន តម្លៃទាំងពីរមិនអាចមិនស៊ីគ្នាបានទេ។ នេះជាការរក្សា invariant របស់ object។`,
      expectedOutput: "Items: 3\nTotal: 34.75"
    },
    {
      id: "encapsulation-11",
      topicId: "encapsulation",
      title: "Secure Withdrawal With PIN",
      difficulty: "challenge",
      type: "code",
      description: `គណនីធនាគារត្រូវការការពារសមតុល្យ និងលេខ PIN ពីការចូលប្រើខាងក្រៅ។ អ្នកត្រូវសរសេរ method withdraw ដែលពិនិត្យ PIN និងចំនួនទឹកប្រាក់ មុនពេលកែសមតុល្យ។`,
      requirements: [
        "បង្កើត class Account ដែលមាន balance និង pin ជា private។",
        "constructor ទទួល balance ដំបូង និង pin។",
        "withdraw(int enteredPin, double amount) ត្រូវជោគជ័យតែពេល PIN ត្រឹមត្រូវ ចំនួនវិជ្ជមាន និងមិនលើសសមតុល្យ។",
        "អាន balance, pin, PIN ដែលបញ្ចូល និងចំនួនដក។",
        "បើជោគជ័យ បង្ហាញ Withdrawn និង Balance ថ្មី។ បើមិនជោគជ័យ បង្ហាញ Transaction failed និង Balance ចាស់។"
      ],
      input: "សមតុល្យដំបូង PIN ដែលបញ្ចូល ព្រមទាំងចំនួនដក។",
      output: "លទ្ធផលប្រតិបត្តិការ និងសមតុល្យ។",
      samples: [{ input: "500 1234 1234 120", output: "Withdrawn: 120.00\nBalance: 380.00" }],
      constraints: ["pin ត្រូវតែជា private ហើយមិនត្រូវបង្ហាញវាទេ។", "ការផ្លាស់ប្តូរ balance ត្រូវកើតឡើងតែក្នុង withdraw។"],
      hint: "withdraw ពិនិត្យ enteredPin != pin មុនគេ បន្ទាប់មក amount > 0 && amount <= balance។ ប្រើ fixed និង setprecision(2) ពេលបង្ហាញ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Account {
private:
    double balance;
    int pin;

public:
    Account(double initial, int p) : balance(initial), pin(p) {
    }

    bool withdraw(int enteredPin, double amount) {
        if (enteredPin != pin) {
            return false;
        }
        if (amount <= 0.0 || amount > balance) {
            return false;
        }
        balance -= amount;
        return true;
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    double balance;
    int pin;
    int enteredPin;
    double amount;
    cin >> balance >> pin >> enteredPin >> amount;

    Account account(balance, pin);
    cout << fixed << setprecision(2);

    if (account.withdraw(enteredPin, amount)) {
        cout << "Withdrawn: " << amount << endl;
    } else {
        cout << "Transaction failed" << endl;
    }
    cout << "Balance: " << account.getBalance() << endl;
    return 0;
}`,
      explanation: `PIN និង balance ជា private ដូច្នេះ main មិនអាចអាន ឬកែពួកវាដោយផ្ទាល់បានទេ។ withdraw ពិនិត្យលក្ខខណ្ឌទាំងអស់មុនពេលកែ balance។ ប្រសិនបើ PIN ខុស ឬចំនួនមិនត្រឹមត្រូវ method ត្រឡប់ false ហើយ state មិនផ្លាស់ប្តូរ។ នេះបង្ហាញថា encapsulation ការពារទាំង data និងច្បាប់នៃការផ្លាស់ប្តូរ data។`,
      expectedOutput: "Withdrawn: 120.00\nBalance: 380.00"
    },
    {
      id: "encapsulation-12",
      topicId: "encapsulation",
      title: "Playlist Capacity Control",
      difficulty: "challenge",
      type: "code",
      description: `Playlist មួយមានចំណុះកំណត់ ហើយមិនគួរឱ្យកូដខាងក្រៅបន្ថែមចម្រៀងលើសចំណុះបានទេ។ អ្នកត្រូវបង្កើត class Playlist ដែលគ្រប់គ្រងបញ្ជីចម្រៀងដោយខ្លួនឯង។`,
      requirements: [
        "បង្កើត class Playlist ដែលមាន vector<string> songs និង capacity ជា private។",
        "constructor ទទួលចំណុះអតិបរមា។",
        "addSong ត្រឡប់ true បើបន្ថែមបាន និង false បើ playlist ពេញ។",
        "អានចំនួនចម្រៀងដែលត្រូវបន្ថែម និងឈ្មោះចម្រៀងនីមួយៗ។",
        "បង្ហាញ Added ឬ Playlist full សម្រាប់ចម្រៀងនីមួយៗ ហើយបង្ហាញ Count ចុងក្រោយ។"
      ],
      input: "ចំនួនចម្រៀងដែលត្រូវបន្ថែម និងឈ្មោះចម្រៀងនីមួយៗ។",
      output: "ស្ថានភាពនៃការបន្ថែម និងចំនួនចម្រៀងសរុប។",
      samples: [{ input: "4\nSong A\nSong B\nSong C\nSong D", output: "Added: Song A\nAdded: Song B\nAdded: Song C\nPlaylist full: Song D\nCount: 3" }],
      constraints: ["capacity ត្រូវកំណត់ជា 3 ក្នុង main។", "songs ត្រូវតែជា private ហើយបន្ថែមបានតែតាម addSong។"],
      hint: "ក្នុង addSong ពិនិត្យ songs.size() >= capacity ជាមុន។ បើពេញ return false បើមិនដូច្នេះ push_back ហើយ return true។",
      solution: String.raw`#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Playlist {
private:
    vector<string> songs;
    size_t capacity;

public:
    Playlist(size_t cap) : capacity(cap) {
    }

    bool addSong(const string &song) {
        if (songs.size() >= capacity) {
            return false;
        }
        songs.push_back(song);
        return true;
    }

    size_t size() const {
        return songs.size();
    }
};

int main() {
    int n;
    cin >> n;
    cin.ignore();

    Playlist playlist(3);
    for (int i = 0; i < n; ++i) {
        string song;
        getline(cin, song);

        if (playlist.addSong(song)) {
            cout << "Added: " << song << endl;
        } else {
            cout << "Playlist full: " << song << endl;
        }
    }

    cout << "Count: " << playlist.size() << endl;
    return 0;
}`,
      explanation: `Playlist រក្សា songs និង capacity ជា private ដូច្នេះកូដខាងក្រៅមិនអាចបន្ថែម element ដោយផ្ទាល់បានទេ។ addSong ពិនិត្យចំនួនបច្ចុប្បន្នប្រឆាំងនឹងចំណុះ ហើយបដិសេធពេលពេញ។ ដូច្នេះ capacity គឺជា invariant ដែល class ធានាដោយខ្លួនឯង។`,
      expectedOutput: "Added: Song A\nAdded: Song B\nAdded: Song C\nPlaylist full: Song D\nCount: 3"
    },
    {
      id: "encapsulation-13",
      topicId: "encapsulation",
      title: "Validated Grade Book",
      difficulty: "challenge",
      type: "code",
      description: `Grade book មួយគួរទទួលតែពិន្ទុក្នុងដែន 0 ដល់ 100 ហើយគណនាមធ្យមភាគពីតែពិន្ទុត្រឹមត្រូវ។ អ្នកត្រូវបង្កើត class GradeBook ដែលការពារ vector នៃពិន្ទុ និងផ្តល់ method addScore និង average។`,
      requirements: [
        "បង្កើត class GradeBook ដែលមាន vector<int> scores ជា private។",
        "addScore ទទួលតែពិន្ទុចាប់ពី 0 ដល់ 100 ប៉ុណ្ណោះ។",
        "អានចំនួនពិន្ទុ និងពិន្ទុនីមួយៗ ដោយមិនរាប់ពិន្ទុមិនត្រឹមត្រូវ។",
        "បង្ហាញចំនួនពិន្ទុត្រឹមត្រូវ និងមធ្យមភាគដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ចំនួនពិន្ទុ និងពិន្ទុនីមួយៗ។",
      output: "ចំនួនពិន្ទុត្រឹមត្រូវ និងមធ្យមភាគ។",
      samples: [{ input: "4\n80\n105\n90\n70", output: "Valid scores: 3\nAverage: 80.00" }],
      constraints: ["scores ត្រូវតែជា private។", "ពិន្ទុក្រៅដែន 0 ដល់ 100 មិនត្រូវបញ្ចូលទេ។"],
      hint: "addScore ពិនិត្យ if (score >= 0 && score <= 100) scores.push_back(score);។ average បូក scores រួចចែកនឹង scores.size() បើមិនទទេ។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <vector>

using namespace std;

class GradeBook {
private:
    vector<int> scores;

public:
    void addScore(int score) {
        if (score >= 0 && score <= 100) {
            scores.push_back(score);
        }
    }

    int count() const {
        return static_cast<int>(scores.size());
    }

    double average() const {
        if (scores.empty()) {
            return 0.0;
        }
        int total = 0;
        for (int score : scores) {
            total += score;
        }
        return static_cast<double>(total) / scores.size();
    }
};

int main() {
    int n;
    cin >> n;

    GradeBook book;
    for (int i = 0; i < n; ++i) {
        int score;
        cin >> score;
        book.addScore(score);
    }

    cout << "Valid scores: " << book.count() << endl;
    cout << fixed << setprecision(2);
    cout << "Average: " << book.average() << endl;
    return 0;
}`,
      explanation: `GradeBook គ្រប់គ្រង collection ខាងក្នុងដោយខ្លួនឯង។ addScore ត្រួតពិនិត្យដែនកំណត់ ដូច្នេះ 105 មិនត្រូវបានបញ្ចូលទេ។ average គណនាពីតែពិន្ទុដែលឆ្លងកាត់ការផ្ទៀងផ្ទាត់។ ការប្រើ static_cast<double> ធ្វើឱ្យការចែកជា floating-point ដើម្បីទទួលបាន 80.00 ជំនួសឱ្យការបាត់ខ្ទង់ទសភាគ។`,
      expectedOutput: "Valid scores: 3\nAverage: 80.00"
    }
  ]);
})();
