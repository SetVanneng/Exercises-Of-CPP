(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "abstraction-01",
      topicId: "abstraction",
      title: "Abstract Shape Area",
      difficulty: "beginner",
      type: "code",
      description: `Abstraction អនុញ្ញាតឱ្យ base class កំណត់ interface ដោយមិនផ្តល់ implementation ពេញលេញ។ អ្នកត្រូវបង្កើត abstract class Shape ដែលមាន pure virtual area ហើយឱ្យ Circle អនុវត្តវា។`,
      requirements: [
        "បង្កើត class Shape ដែលមាន pure virtual method area និង virtual destructor។",
        "បង្កើត class Circle ដែលទទួលមរតកពី Shape និង override area។",
        "អានកាំរង្វង់មួយ បង្កើត Circle រួចគណនា area។",
        "បង្ហាញ Area ដោយខ្ទង់ទសភាគពីរ ដោយប្រើ 3.14159។"
      ],
      input: "កាំរង្វង់ជាចំនួនទសភាគ។",
      output: "ក្រឡាផ្ទៃរង្វង់។",
      samples: [{ input: "2", output: "Area: 12.57" }],
      constraints: ["Shape ត្រូវមាន pure virtual function ដោយប្រើ = 0។", "មិនត្រូវបង្កើត Shape object ដោយផ្ទាល់ទេ។"],
      hint: "pure virtual function មានទម្រង់ virtual double area() const = 0;។ Circle ត្រូវ override វា បើមិនដូច្នេះ Circle ក៏ក្លាយជា abstract ដែរ។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Shape {
public:
    virtual double area() const = 0;

    virtual ~Shape() {
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {
    }

    double area() const override {
        return 3.14159 * radius * radius;
    }
};

int main() {
    double radius;
    cin >> radius;

    Circle circle(radius);
    cout << fixed << setprecision(2);
    cout << "Area: " << circle.area() << endl;
    return 0;
}`,
      explanation: `pure virtual function កំណត់ថា derived class ត្រូវផ្តល់ implementation។ Shape មាន area = 0 ដូច្នេះវាជា abstract class ហើយមិនអាចបង្កើត object បានទេ។ Circle ផ្តល់រូបមន្តជាក់លាក់ ដូច្នេះវាក្លាយជា concrete class ដែលអាចបង្កើត object បាន។ នេះជាមូលដ្ឋាននៃ abstraction។`,
      expectedOutput: "Area: 12.57"
    },
    {
      id: "abstraction-02",
      topicId: "abstraction",
      title: "Quiz: Pure Virtual Function",
      difficulty: "beginner",
      type: "quiz",
      description: `Abstraction ក្នុង C++ ជារឿយៗចាប់ផ្តើមដោយ pure virtual function។ សូមពិនិត្យ snippet ហើយជ្រើសរើសចម្លើយដែលពន្យល់ថាអ្វីធ្វើឱ្យ class ក្លាយជា abstract។`,
      requirements: ["ពិនិត្យទម្រង់ = 0 ក្នុង method។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`class Shape {
public:
    virtual double area() const = 0;

    virtual ~Shape() {
    }
};`,
      quizQuestion: "តើអ្វីធ្វើឱ្យ class មួយក្លាយជា abstract class ក្នុង C++?",
      options: [
        "ការមាន pure virtual function យ៉ាងហោចណាស់មួយ។",
        "ការមាន constructor ជា private។",
        "ការប្រើ keyword abstract មុនឈ្មោះ class។",
        "ការមាន member variable ច្រើនជាងពីរ។"
      ],
      correctIndex: 0,
      quizExplanation: "C++ កំណត់ abstract class ដោយការមាន pure virtual function យ៉ាងហោចណាស់មួយ ដែលសរសេរជា virtual ... = 0។ class ដែលមាន function បែបនេះមិនអាចបង្កើត object ដោយផ្ទាល់បានទេ។ derived class ត្រូវ implement function ទាំងអស់ទើបក្លាយជា concrete class។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "សញ្ញា = 0 បន្ទាប់ពីការប្រកាស virtual function គឺជាការសំគាល់សំខាន់។",
      solution: String.raw`class Shape {
public:
    virtual double area() const = 0;

    virtual ~Shape() {
    }
};`,
      explanation: `pure virtual function មានការប្រកាសដោយ = 0 និងមិនមាន body ក្នុង base class។ វាកំណត់ contract ថា derived class ត្រូវផ្តល់ implementation។ Shape ក្នុង snippet ជា abstract class ដូច្នេះ Shape shape; នឹងបង្កើត compile error។`,
      expectedOutput: "A pure virtual function makes a class abstract."
    },
    {
      id: "abstraction-03",
      topicId: "abstraction",
      title: "Playable Interface",
      difficulty: "beginner",
      type: "code",
      description: `Interface ក្នុង C++ ជាញឹកញាប់ត្រូវបានបង្កើតដោយ class ដែលមានតែ pure virtual functions។ អ្នកត្រូវបង្កើត Playable ហើយឱ្យ Guitar អនុវត្ត method play។`,
      requirements: [
        "បង្កើត class Playable ដែលមាន pure virtual method play និង virtual destructor។",
        "បង្កើត class Guitar ដែលទទួលមរតកពី Playable និង override play។",
        "Guitar::play ត្រូវបង្ហាញ Playing guitar។",
        "បង្កើត Guitar object ហើយហៅ play។"
      ],
      input: null,
      output: "សារពីការលេងហ្គីតា។",
      samples: [{ input: "", output: "Playing guitar" }],
      constraints: ["Playable ត្រូវមាន pure virtual function។", "Guitar ត្រូវ override play។"],
      hint: "class Playable { public: virtual void play() const = 0; virtual ~Playable() {} };។ បន្ទាប់មក Guitar : public Playable និង void play() const override។",
      solution: String.raw`#include <iostream>

using namespace std;

class Playable {
public:
    virtual void play() const = 0;

    virtual ~Playable() {
    }
};

class Guitar : public Playable {
public:
    void play() const override {
        cout << "Playing guitar" << endl;
    }
};

int main() {
    Guitar guitar;
    guitar.play();
    return 0;
}`,
      explanation: `Playable កំណត់ contract ថាអ្វីៗដែលអាចលេងបានត្រូវមាន method play។ វាមិនផ្តល់ implementation ទេ ដូច្នេះវាដើរតួជា interface។ Guitar អនុវត្ត play តាមរបៀបរបស់ខ្លួន។ បើយើងបន្ថែម Piano ក៏អាច implement Playable ដោយមិនកែ Playable ដែរ។`,
      expectedOutput: "Playing guitar"
    },
    {
      id: "abstraction-04",
      topicId: "abstraction",
      title: "Coffee Machine Hidden Steps",
      difficulty: "beginner",
      type: "code",
      description: `Abstraction មិនមែនត្រឹមតែ abstract class ទេ វាក៏មានន័យថាលាក់ជំហានខាងក្នុងដែលអ្នកប្រើមិនចាំបាច់ដឹង។ អ្នកត្រូវបង្កើត CoffeeMachine ដែលបង្ហាញតែ method makeCoffee ឯកសាធារណៈ។`,
      requirements: [
        "បង្កើត class CoffeeMachine ដែលមាន method private grindBeans បង្ហាញ Grinding beans។",
        "មាន method private brew បង្ហាញ Brewing coffee។",
        "មាន method public makeCoffee ដែលហៅ grindBeans និង brew តាមលំដាប់ រួចបង្ហាញ Coffee ready។",
        "ក្នុង main ហៅតែ makeCoffee។"
      ],
      input: null,
      output: "ជំហានទាំងបីរបស់ម៉ាស៊ីនកាហ្វេ។",
      samples: [{ input: "", output: "Grinding beans\nBrewing coffee\nCoffee ready" }],
      constraints: ["grindBeans និង brew ត្រូវតែជា private។", "main មិនត្រូវហៅជំហានខាងក្នុងដោយផ្ទាល់ទេ។"],
      hint: "makeCoffee ជា public method ដែលហៅ private methods ខាងក្នុង។ កូដខាងក្រៅមិនអាចហៅ grindBeans ឬ brew បានទេ។",
      solution: String.raw`#include <iostream>

using namespace std;

class CoffeeMachine {
private:
    void grindBeans() const {
        cout << "Grinding beans" << endl;
    }

    void brew() const {
        cout << "Brewing coffee" << endl;
    }

public:
    void makeCoffee() const {
        grindBeans();
        brew();
        cout << "Coffee ready" << endl;
    }
};

int main() {
    CoffeeMachine machine;
    machine.makeCoffee();
    return 0;
}`,
      explanation: `makeCoffee ជា interface ងាយស្រួលសម្រាប់អ្នកប្រើ ខណៈជំហានខាងក្នុងដូចជា grindBeans និង brew ត្រូវបានលាក់ជា private។ អ្នកប្រើគ្រាន់តែដឹងថាត្រូវហៅ makeCoffee ដើម្បីទទួលកាហ្វេ។ ការលាក់ជំហាននេះជួយឱ្យកូដខាងក្រៅមិនពឹងផ្អែកលើរបៀបធ្វើការខាងក្នុង ហើយយើងអាចកែជំហានបានដោយមិនប៉ះពាល់អ្នកប្រើ។`,
      expectedOutput: "Grinding beans\nBrewing coffee\nCoffee ready"
    },
    {
      id: "abstraction-05",
      topicId: "abstraction",
      title: "Abstract Payment Method",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រព័ន្ធទូទាត់មួយគួរកំណត់ interface រួមសម្រាប់វិធីទូទាត់ផ្សេងៗ។ អ្នកត្រូវបង្កើត abstract class Payment និង CardPayment ដែលអនុវត្ត method pay។`,
      requirements: [
        "បង្កើត class Payment ដែលមាន pure virtual method pay(double) និង virtual destructor។",
        "បង្កើត class CardPayment ដែល override pay និងបង្ហាញ Paid by card ជាមួយចំនួនទឹកប្រាក់។",
        "អានចំនួនទឹកប្រាក់មួយ ហើយហៅ pay តាម Payment pointer ឬ reference។",
        "បង្ហាញចំនួនទឹកប្រាក់ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ចំនួនទឹកប្រាក់ដែលត្រូវទូទាត់។",
      output: "សារបញ្ជាក់ការទូទាត់ដោយកាត។",
      samples: [{ input: "100", output: "Paid by card: 100.00" }],
      constraints: ["Payment ត្រូវមាន pure virtual pay។", "ការហៅ pay ត្រូវធ្វើតាម base class។"],
      hint: "បង្កើត Payment* payment = new CardPayment(); រួច payment->pay(amount);។ ក្នុង CardPayment::pay ប្រើ fixed និង setprecision(2)។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Payment {
public:
    virtual void pay(double amount) const = 0;

    virtual ~Payment() {
    }
};

class CardPayment : public Payment {
public:
    void pay(double amount) const override {
        cout << fixed << setprecision(2);
        cout << "Paid by card: " << amount << endl;
    }
};

int main() {
    double amount;
    cin >> amount;

    Payment* payment = new CardPayment();
    payment->pay(amount);
    delete payment;
    return 0;
}`,
      explanation: `Payment កំណត់ contract ថាវិធីទូទាត់ទាំងអស់ត្រូវមាន method pay។ CardPayment ផ្តល់ implementation ជាក់លាក់សម្រាប់កាត។ main ធ្វើការជាមួយ Payment* ដូច្នេះវាមិនពឹងផ្អែកលើរបៀបទូទាត់ជាក់លាក់ទេ។ បើយើងបន្ថែម CashPayment ឬ WalletPayment យើងអាចប្រើ interface ដូចគ្នាបាន។`,
      expectedOutput: "Paid by card: 100.00"
    },
    {
      id: "abstraction-06",
      topicId: "abstraction",
      title: "Template Method Meal Preparation",
      difficulty: "intermediate",
      type: "code",
      description: `Template method pattern កំណត់លំដាប់ជំហានក្នុង base class ប៉ុន្តែទុកឱ្យ derived class អនុវត្តជំហានលម្អិត។ អ្នកត្រូវបង្កើត Meal និង Pasta ដែលបំពេញជំហានទាំងនោះ។`,
      requirements: [
        "បង្កើត abstract class Meal ដែលមាន pure virtual prepareIngredients និង cook ជា protected។",
        "បន្ថែម public method prepare ដែលហៅ prepareIngredients, cook រួចបង្ហាញ Meal ready។",
        "បង្កើត class Pasta ដែល override ជំហានទាំងពីរ។",
        "បង្កើត Pasta object ហើយហៅ prepare។"
      ],
      input: null,
      output: "លំដាប់ជំហានរៀបចំម្ហូប និងសារបញ្ចប់។",
      samples: [{ input: "", output: "Boiling water\nCooking pasta\nMeal ready" }],
      constraints: ["prepare ត្រូវកំណត់លំដាប់ជំហានក្នុង base class។", "Pasta មិនត្រូវ override prepare ទេ។"],
      hint: "prepare ជា public និងមិន virtual។ វាហៅ virtual protected methods ដែល Pasta override។ នេះជា template method pattern។",
      solution: String.raw`#include <iostream>

using namespace std;

class Meal {
protected:
    virtual void prepareIngredients() const = 0;

    virtual void cook() const = 0;

public:
    void prepare() const {
        prepareIngredients();
        cook();
        cout << "Meal ready" << endl;
    }

    virtual ~Meal() {
    }
};

class Pasta : public Meal {
protected:
    void prepareIngredients() const override {
        cout << "Boiling water" << endl;
    }

    void cook() const override {
        cout << "Cooking pasta" << endl;
    }
};

int main() {
    Pasta pasta;
    pasta.prepare();
    return 0;
}`,
      explanation: `Meal កំណត់ algorithm រួមនៅក្នុង prepare គឺរៀបចំគ្រឿងផ្សំ បន្ទាប់មកចម្អិន ហើយបង្ហាញថារួចរាល់។ ជំហានលម្អិតត្រូវបានទុកឱ្យ derived class ដូចជា Pasta។ ដូច្នេះរចនាសម្ព័ន្ធរួមនៅតែដូចគ្នា ប៉ុន្តែរបៀបធ្វើអាចខុសគ្នាតាមម្ហូប។ នេះជាគំរូនៃ abstraction ដែលលាក់លំដាប់ការងាររួម។`,
      expectedOutput: "Boiling water\nCooking pasta\nMeal ready"
    },
    {
      id: "abstraction-07",
      topicId: "abstraction",
      title: "Quiz: Instantiating Abstract Class",
      difficulty: "intermediate",
      type: "quiz",
      description: `class ដែលមាន pure virtual function មិនអាចបង្កើត object ដោយផ្ទាល់បានទេ។ សូមពិនិត្យ snippet ហើយជ្រើសរើសបញ្ហាដែលកើតឡើង។`,
      requirements: ["ពិនិត្យថា Shape មាន pure virtual function ឬអត់។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`class Shape {
public:
    virtual double area() const = 0;
};

int main() {
    Shape s;
    return 0;
}`,
      quizQuestion: "តើមានបញ្ហាអ្វីកើតឡើងពេល compile?",
      options: [
        "មិនអាចបង្កើត object ពី abstract class Shape បានទេ។",
        "ត្រូវបន្ថែម return type ទៅ area។",
        "Shape ត្រូវការ destructor ជា static។",
        "main ត្រូវ return 1 ជំនួស 0។"
      ],
      correctIndex: 0,
      quizExplanation: "Shape មាន pure virtual function area = 0 ដូច្នេះវាជា abstract class។ C++ មិនអនុញ្ញាតឱ្យបង្កើត object ពី abstract class ដោយផ្ទាល់ទេ។ ត្រូវបង្កើត derived class ដែល implement area ទាំងអស់ រួចបង្កើត object ពី derived class នោះវិញ។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "abstract class មាន pure virtual function ហើយមិនអាច instantiate បានទេ។",
      solution: String.raw`#include <iostream>

using namespace std;

class Shape {
public:
    virtual double area() const = 0;

    virtual ~Shape() {
    }
};

class Square : public Shape {
private:
    double side;

public:
    Square(double s) : side(s) {
    }

    double area() const override {
        return side * side;
    }
};

int main() {
    Square s(3.0);
    cout << s.area() << endl;
    return 0;
}`,
      explanation: `abstract class ដើរតួជា blueprint សម្រាប់ derived classes។ ការបង្កើត Shape s; មិនត្រឹមត្រូវទេ ព្រោះ Shape មិនមាន implementation សម្រាប់ area។ យើងត្រូវបង្កើត concrete derived class ដូចជា Square ដែល implement area រួចបង្កើត object ពី Square វិញ។`,
      expectedOutput: "Cannot instantiate an abstract class."
    },
    {
      id: "abstraction-08",
      topicId: "abstraction",
      title: "Multiple Interface Report",
      difficulty: "advanced",
      type: "code",
      description: `class មួយអាចអនុវត្ត interface ច្រើនក្នុង time តែមួយ។ អ្នកត្រូវបង្កើត Printable និង Storable ហើយឱ្យ Report អនុវត្តទាំងពីរ។`,
      requirements: [
        "បង្កើត interface Printable ដែលមាន pure virtual print។",
        "បង្កើត interface Storable ដែលមាន pure virtual storageKey ត្រឡប់ string។",
        "បង្កើត class Report ដែលទទួលមរតកពីទាំងពីរ និងមាន title។",
        "Report::print បង្ហាញ Report: title ហើយ storageKey ត្រឡប់ report_ ភ្ជាប់ជាមួយ title។",
        "បង្កើត Report ជាមួយ Monthly រួចបង្ហាញលទ្ធផលទាំងពីរ។"
      ],
      input: null,
      output: "សារពី print និង storage key។",
      samples: [{ input: "", output: "Report: Monthly\nKey: report_Monthly" }],
      constraints: ["ត្រូវប្រើ multiple inheritance សម្រាប់ interfaces។", "Printable និង Storable ត្រូវមាន virtual destructors។"],
      hint: "class Report : public Printable, public Storable។ ក្នុង main បង្កើត Report report(\"Monthly\"); រួច report.print(); និង report.storageKey();។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Printable {
public:
    virtual void print() const = 0;

    virtual ~Printable() {
    }
};

class Storable {
public:
    virtual string storageKey() const = 0;

    virtual ~Storable() {
    }
};

class Report : public Printable, public Storable {
private:
    string title;

public:
    Report(const string &t) : title(t) {
    }

    void print() const override {
        cout << "Report: " << title << endl;
    }

    string storageKey() const override {
        return "report_" + title;
    }
};

int main() {
    Report report("Monthly");
    report.print();
    cout << "Key: " << report.storageKey() << endl;
    return 0;
}`,
      explanation: `Printable និង Storable កំណត់ contracts ដាច់ដោយឡែកសម្រាប់ការបង្ហាញ និងការរក្សាទុក។ Report អនុវត្តទាំងពីរ ដូច្នេះវាអាចប្រើបានគ្រប់កន្លែងដែលត្រូវការ Printable ឬ Storable។ ការប្រើ interface តូចៗជួយឱ្យ class មិនពឹងផ្អែកលើមុខងារដែលវាមិនចាំបាច់។ នេះជាគំរូនៃ abstraction តាម interface។`,
      expectedOutput: "Report: Monthly\nKey: report_Monthly"
    },
    {
      id: "abstraction-09",
      topicId: "abstraction",
      title: "Abstract Shape Factory",
      difficulty: "advanced",
      type: "code",
      description: `Factory function អាចបង្កើត object តាម abstract interface ដោយលាក់ class ជាក់លាក់ពីអ្នកហៅ។ អ្នកត្រូវសរសេរ createShape ដែលត្រឡប់ unique_ptr<Shape> តាមប្រភេទដែលបានអាន។`,
      requirements: [
        "បង្កើត abstract class Shape ដែលមាន pure virtual area និង name។",
        "បង្កើត class Circle និង Rectangle ដែល implement methods ទាំងពីរ។",
        "សរសេរ unique_ptr<Shape> createShape(char type) ដែលអានទិន្នន័យបន្ថែមតាម type។",
        "អាន type C ឬ R ហើយបង្ហាញ name និង area ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ប្រភេទ C ឬ R និងទិន្នន័យរបស់ shape។",
      output: "ឈ្មោះ shape និងក្រឡាផ្ទៃ។",
      samples: [{ input: "C 2", output: "Circle area: 12.57" }],
      constraints: ["createShape ត្រូវត្រឡប់ unique_ptr<Shape>។", "main មិនត្រូវដឹង class ជាក់លាក់ដែលបានបង្កើតទេ។"],
      hint: "ក្នុង createShape បើ type == 'C' អាន radius រួច return make_unique<Circle>(radius);។ បើមិនដូច្នេះអាន width និង height រួច return make_unique<Rectangle>(width, height);។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <memory>
#include <string>

using namespace std;

class Shape {
public:
    virtual double area() const = 0;

    virtual string name() const = 0;

    virtual ~Shape() {
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {
    }

    double area() const override {
        return 3.14159 * radius * radius;
    }

    string name() const override {
        return "Circle";
    }
};

class Rectangle : public Shape {
private:
    double width;
    double height;

public:
    Rectangle(double w, double h) : width(w), height(h) {
    }

    double area() const override {
        return width * height;
    }

    string name() const override {
        return "Rectangle";
    }
};

unique_ptr<Shape> createShape(char type) {
    if (type == 'C') {
        double radius;
        cin >> radius;
        return make_unique<Circle>(radius);
    }

    double width;
    double height;
    cin >> width >> height;
    return make_unique<Rectangle>(width, height);
}

int main() {
    char type;
    cin >> type;

    unique_ptr<Shape> shape = createShape(type);
    cout << fixed << setprecision(2);
    cout << shape->name() << " area: " << shape->area() << endl;
    return 0;
}`,
      explanation: `createShape ជា factory function ដែលសម្រេចថាត្រូវបង្កើត Circle ឬ Rectangle ហើយត្រឡប់ជា unique_ptr<Shape>។ main ធ្វើការតែជាមួយ Shape interface ដូច្នេះវាមិនចាំបាច់ដឹង class ជាក់លាក់ទេ។ unique_ptr គ្រប់គ្រង memory ដោយស្វ័យប្រវត្តិ ដូច្នេះមិនចាំបាច់ delete ដោយដៃ។ នេះជាការរួមបញ្ចូល abstraction ជាមួយ resource management។`,
      expectedOutput: "Circle area: 12.57"
    },
    {
      id: "abstraction-10",
      topicId: "abstraction",
      title: "Logger Dependency Injection",
      difficulty: "advanced",
      type: "code",
      description: `Abstraction ជួយឱ្យ class ពឹងផ្អែកលើ interface ជំនួស implementation ជាក់លាក់។ អ្នកត្រូវបង្កើត abstract Logger ហើយឱ្យ OrderService ទទួល Logger តាម reference។`,
      requirements: [
        "បង្កើត abstract class Logger ដែលមាន pure virtual log(const string&) និង virtual destructor។",
        "បង្កើត ConsoleLogger ដែល override log ដោយបង្ហាញ LOG: message។",
        "បង្កើត OrderService ដែលមាន reference ទៅ Logger និង method process(int orderId)។",
        "process ត្រូវ log Service started និង Processing order ជាមួយ orderId ដោយប្រើ to_string។",
        "បង្ហាញ Service done បន្ទាប់ពី process។"
      ],
      input: null,
      output: "សារ log ពីរ និងសារបញ្ចប់។",
      samples: [{ input: "", output: "LOG: Service started\nLOG: Processing order 42\nService done" }],
      constraints: ["OrderService ត្រូវទទួល Logger& មិនមែន ConsoleLogger โดยផ្ទាល់ទេ។", "ត្រូវប្រើ to_string សម្រាប់ orderId។"],
      hint: "OrderService(const Logger &l) : logger(l) { }។ ក្នុង process ហៅ logger.log(\"Service started\"); និង logger.log(\"Processing order \" + to_string(orderId));។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Logger {
public:
    virtual void log(const string &message) const = 0;

    virtual ~Logger() {
    }
};

class ConsoleLogger : public Logger {
public:
    void log(const string &message) const override {
        cout << "LOG: " << message << endl;
    }
};

class OrderService {
private:
    const Logger &logger;

public:
    OrderService(const Logger &l) : logger(l) {
    }

    void process(int orderId) {
        logger.log("Service started");
        logger.log("Processing order " + to_string(orderId));
    }
};

int main() {
    ConsoleLogger logger;
    OrderService service(logger);
    service.process(42);
    cout << "Service done" << endl;
    return 0;
}`,
      explanation: `OrderService មិនបង្កើត logger ដោយខ្លួនឯងទេ វាទទួល Logger& ពីខាងក្រៅ។ ដូច្នេះយើងអាចផ្តល់ ConsoleLogger, FileLogger ឬ TestLogger ដោយមិនកែ OrderService។ នេះជា dependency injection ដែលផ្អែកលើ abstraction។ វាធ្វើឱ្យកូដងាយសាកល្បង និងងាយផ្លាស់ប្តូរ implementation។`,
      expectedOutput: "LOG: Service started\nLOG: Processing order 42\nService done"
    },
    {
      id: "abstraction-11",
      topicId: "abstraction",
      title: "Abstract Account Withdrawal Fee",
      difficulty: "challenge",
      type: "code",
      description: `គណនីប្រភេទផ្សេងៗគិតថ្លៃដកប្រាក់ខុសគ្នា។ អ្នកត្រូវបង្កើត abstract Account ដែលកំណត់ method withdrawFee ហើយឱ្យ SavingsAccount និង CheckingAccount គណនាថ្លៃតាមរបៀបរៀងៗខ្លួន។`,
      requirements: [
        "បង្កើត abstract class Account ដែលមាន balance ជា protected និង pure virtual withdrawFee(double)។",
        "SavingsAccount គិតថ្លៃ 1% នៃចំនួនដក ហើយ CheckingAccount គិតថ្លៃថេរ 2.0។",
        "method withdraw ត្រូវគណនាថ្លៃ ហើយដកទាំងចំនួន និងថ្លៃ បើសមតុល្យគ្រប់គ្រាន់។",
        "អានប្រភេទ S/C សមតុល្យ និងចំនួនដក។",
        "បង្ហាញ Fee និង Balance ថ្មីដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ប្រភេទគណនី S/C សមតុល្យ និងចំនួនដក។",
      output: "ថ្លៃដកប្រាក់ និងសមតុល្យដែលនៅសល់។",
      samples: [{ input: "S 1000 100", output: "Fee: 1.00\nBalance: 899.00" }],
      constraints: ["Account ត្រូវមាន pure virtual withdrawFee។", "withdraw ត្រូវប្រើ withdrawFee ដែល override ក្នុង derived class។"],
      hint: "SavingsAccount::withdrawFee return amount * 0.01;។ CheckingAccount::withdrawFee return 2.0;។ withdraw គណនា fee = withdrawFee(amount); រួចបើ amount + fee <= balance សូមដកទាំងពីរ។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <memory>

using namespace std;

class Account {
protected:
    double balance;

public:
    Account(double initial) : balance(initial) {
    }

    virtual double withdrawFee(double amount) const = 0;

    double withdraw(double amount) {
        double fee = withdrawFee(amount);
        if (amount + fee <= balance) {
            balance -= amount + fee;
        }
        return fee;
    }

    double getBalance() const {
        return balance;
    }

    virtual ~Account() {
    }
};

class SavingsAccount : public Account {
public:
    SavingsAccount(double initial) : Account(initial) {
    }

    double withdrawFee(double amount) const override {
        return amount * 0.01;
    }
};

class CheckingAccount : public Account {
public:
    CheckingAccount(double initial) : Account(initial) {
    }

    double withdrawFee(double amount) const override {
        return 2.0;
    }
};

int main() {
    char type;
    double balance;
    double amount;
    cin >> type >> balance >> amount;

    unique_ptr<Account> account;
    if (type == 'S') {
        account = make_unique<SavingsAccount>(balance);
    } else {
        account = make_unique<CheckingAccount>(balance);
    }

    double fee = account->withdraw(amount);
    cout << fixed << setprecision(2);
    cout << "Fee: " << fee << endl;
    cout << "Balance: " << account->getBalance() << endl;
    return 0;
}`,
      explanation: `Account កំណត់រចនាសម្ព័ន្ធរួមនៃការដកប្រាក់ ប៉ុន្តែទុកឱ្យ derived class កំណត់ថ្លៃដក។ withdraw ហៅ withdrawFee តាម virtual dispatch ដូច្នេះ SavingsAccount គិត 1% ខណៈ CheckingAccount គិត 2.0។ main ប្រើ unique_ptr<Account> ដូច្នេះមិនចាំបាច់ដឹង type ជាក់លាក់ ហើយ memory ត្រូវបានគ្រប់គ្រងដោយស្វ័យប្រវត្តិ។`,
      expectedOutput: "Fee: 1.00\nBalance: 899.00"
    },
    {
      id: "abstraction-12",
      topicId: "abstraction",
      title: "Document Renderer Interface",
      difficulty: "challenge",
      type: "code",
      description: `ប្រព័ន្ធបង្កើតឯកសារគួរអាចប្តូរ format បានដោយមិនកែកូដអ្នកហៅ។ អ្នកត្រូវបង្កើត abstract Document និង derived MarkdownDocument ព្រមទាំង HtmlDocument ដែល render ខុសគ្នា។`,
      requirements: [
        "បង្កើត abstract class Document ដែលមាន title ជា protected និង pure virtual render ត្រឡប់ string។",
        "MarkdownDocument::render ត្រឡប់ # ភ្ជាប់ជាមួយ title។",
        "HtmlDocument::render ត្រឡប់ <h1>title</h1>។",
        "អានប្រភេទ M/H និងចំណងជើងមួយបន្ទាត់។",
        "បង្កើត document តាម type ហើយបង្ហាញលទ្ធផល render។"
      ],
      input: "ប្រភេទ M ឬ H និងចំណងជើងឯកសារមួយបន្ទាត់។",
      output: "ខ្លឹមសារដែលបាន render តាម format។",
      samples: [{ input: "M\nC++ Guide", output: "# C++ Guide" }],
      constraints: ["Document ត្រូវមាន pure virtual render។", "ត្រូវប្រើ unique_ptr<Document> ឬ pointer ដែល delete ត្រឹមត្រូវ។"],
      hint: "អាន type ជា char បន្ទាប់មក cin.ignore() និង getline(cin, title)។ បើ type == 'M' បង្កើត MarkdownDocument បើមិនដូច្នេះ HtmlDocument។ បន្ទាប់មក cout << document->render()។",
      solution: String.raw`#include <iostream>
#include <memory>
#include <string>

using namespace std;

class Document {
protected:
    string title;

public:
    Document(const string &t) : title(t) {
    }

    virtual string render() const = 0;

    virtual ~Document() {
    }
};

class MarkdownDocument : public Document {
public:
    MarkdownDocument(const string &t) : Document(t) {
    }

    string render() const override {
        return "# " + title;
    }
};

class HtmlDocument : public Document {
public:
    HtmlDocument(const string &t) : Document(t) {
    }

    string render() const override {
        return "<h1>" + title + "</h1>";
    }
};

int main() {
    char type;
    cin >> type;
    cin.ignore();

    string title;
    getline(cin, title);

    unique_ptr<Document> document;
    if (type == 'M') {
        document = make_unique<MarkdownDocument>(title);
    } else {
        document = make_unique<HtmlDocument>(title);
    }

    cout << document->render() << endl;
    return 0;
}`,
      explanation: `Document កំណត់ interface render ដែលគ្រប់ format ត្រូវអនុវត្ត។ MarkdownDocument និង HtmlDocument ផ្តល់របៀប render ខុសគ្នា។ main បង្កើត document តាម type ហើយហៅ render តាម base pointer។ ដូច្នេះការបន្ថែម format ថ្មីដូចជា PdfDocument មិនតម្រូវឱ្យកែ logic សំខាន់របស់ main ទេ។`,
      expectedOutput: "# C++ Guide"
    },
    {
      id: "abstraction-13",
      topicId: "abstraction",
      title: "Plugin Interface System",
      difficulty: "challenge",
      type: "code",
      description: `ប្រព័ន្ធ plugin ល្អកំណត់ interface រួម ហើយអនុញ្ញាតឱ្យ plugin ថ្មីៗអនុវត្តវាដោយមិនកែកូដស្នូល។ អ្នកត្រូវបង្កើត Plugin interface និង plugin ពីរប្រភេទ រួចដំណើរការតាមបញ្ជី។`,
      requirements: [
        "បង្កើត abstract class Plugin ដែលមាន pure virtual name ត្រឡប់ string និង run ដែលបង្ហាញសារ។",
        "បង្កើត BackupPlugin ដែល name គឺ Backup និង run បង្ហាញ Running Backup។",
        "បង្កើត CleanupPlugin ដែល name គឺ Cleanup និង run បង្ហាញ Running Cleanup។",
        "អានចំនួន plugin និងឈ្មោះ backup ឬ cleanup នីមួយៗ។",
        "រក្សាទុកក្នុង vector<unique_ptr<Plugin>> រួចបង្ហាញ name និងសារ run សម្រាប់ plugin នីមួយៗ។"
      ],
      input: "ចំនួន plugin និងឈ្មោះ plugin នីមួយៗគឺ backup ឬ cleanup។",
      output: "ឈ្មោះ plugin និងសារកំឡុងពេលដំណើរការ។",
      samples: [{ input: "2\nbackup\ncleanup", output: "Backup: Running Backup\nCleanup: Running Cleanup" }],
      constraints: ["ត្រូវប្រើ abstract class Plugin ជា interface។", "ត្រូវរក្សាទុក plugin ក្នុង vector<unique_ptr<Plugin>>។"],
      hint: "អានឈ្មោះជា string។ បើ name == \"backup\" ប្រើ make_unique<BackupPlugin>() បើមិនដូច្នេះ make_unique<CleanupPlugin>()។ បន្ទាប់មក loop ហើយបង្ហាញ plugin->name() និង plugin->run()។",
      solution: String.raw`#include <iostream>
#include <memory>
#include <string>
#include <vector>

using namespace std;

class Plugin {
public:
    virtual string name() const = 0;

    virtual void run() const = 0;

    virtual ~Plugin() {
    }
};

class BackupPlugin : public Plugin {
public:
    string name() const override {
        return "Backup";
    }

    void run() const override {
        cout << "Running Backup" << endl;
    }
};

class CleanupPlugin : public Plugin {
public:
    string name() const override {
        return "Cleanup";
    }

    void run() const override {
        cout << "Running Cleanup" << endl;
    }
};

int main() {
    int n;
    cin >> n;

    vector<unique_ptr<Plugin>> plugins;
    for (int i = 0; i < n; ++i) {
        string key;
        cin >> key;

        if (key == "backup") {
            plugins.push_back(make_unique<BackupPlugin>());
        } else {
            plugins.push_back(make_unique<CleanupPlugin>());
        }
    }

    for (const unique_ptr<Plugin> &plugin : plugins) {
        cout << plugin->name() << ": ";
        plugin->run();
    }
    return 0;
}`,
      explanation: `Plugin កំណត់ contract រួមសម្រាប់ plugin ទាំងអស់។ BackupPlugin និង CleanupPlugin អនុវត្ត name និង run តាមរបៀបរៀងៗខ្លួន។ main រក្សាទុកពួកវាជា unique_ptr<Plugin> ដូច្នេះវាអាចដំណើរការ plugin ថ្មីៗបានដោយមិនដឹង class ជាក់លាក់។ unique_ptr បញ្ចេញ memory ដោយស្វ័យប្រវត្តិនៅពេល vector ត្រូវបំផ្លាញ។ នេះជាការរួមបញ្ចូល abstraction និង extensibility។`,
      expectedOutput: "Backup: Running Backup\nCleanup: Running Cleanup"
    }
  ]);
})();
