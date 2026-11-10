(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "polymorphism-01",
      topicId: "polymorphism",
      title: "Virtual Animal Speak",
      difficulty: "beginner",
      type: "code",
      description: `Polymorphism អនុញ្ញាតឱ្យ base pointer ហៅ method ដែលជ្រើសរើសតាម object ពិតប្រាកដ។ អ្នកត្រូវបង្កើត Animal និង Dog ដោយប្រើ virtual function ហើយហៅ speak តាម base pointer។`,
      requirements: [
        "បង្កើត class Animal ដែលមាន virtual method speak បង្ហាញ Animal speaks។",
        "បង្កើត class Dog ដែល override speak បង្ហាញ Dog speaks។",
        "បង្កើត Animal* ដែលចង្អុលទៅ Dog object ហើយហៅ speak។",
        "បញ្ចេញ memory ដោយ delete ព្រមទាំងមាន virtual destructor។"
      ],
      input: null,
      output: "សារពី Dog តាមរយៈ base pointer។",
      samples: [{ input: "", output: "Dog speaks" }],
      constraints: ["speak ត្រូវតែជា virtual ក្នុង Animal។", "ត្រូវ delete object ដែលបង្កើតដោយ new។"],
      hint: "ប្រើ Animal* animal = new Dog(); រួច animal->speak();។ បន្ថែម virtual ~Animal() ដើម្បីឱ្យ delete បានត្រឹមត្រូវ។",
      solution: String.raw`#include <iostream>

using namespace std;

class Animal {
public:
    virtual void speak() const {
        cout << "Animal speaks" << endl;
    }

    virtual ~Animal() {
    }
};

class Dog : public Animal {
public:
    void speak() const override {
        cout << "Dog speaks" << endl;
    }
};

int main() {
    Animal* animal = new Dog();
    animal->speak();
    delete animal;
    return 0;
}`,
      explanation: `base pointer Animal* អាចចង្អុលទៅ Dog object បាន។ ដោយសារ speak ជា virtual ការហៅ animal->speak() ជ្រើសរើស Dog version នៅ runtime ទោះបី type របស់ pointer ជា Animal ក៏ដោយ។ នេះជា runtime polymorphism។ virtual destructor ធានាថា delete បំផ្លាញ derived object បានត្រឹមត្រូវ។`,
      expectedOutput: "Dog speaks"
    },
    {
      id: "polymorphism-02",
      topicId: "polymorphism",
      title: "Quiz: Runtime Polymorphism Keyword",
      difficulty: "beginner",
      type: "quiz",
      description: `Runtime polymorphism ត្រូវការ keyword ពិសេសមួយដើម្បីឱ្យការហៅ method ត្រូវបានជ្រើសរើសតាម object ពិតប្រាកដ។ សូមពិនិត្យ snippet ហើយជ្រើសរើស keyword នោះ។`,
      requirements: ["ពិនិត្យ method ក្នុង class Shape។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`class Shape {
public:
    virtual double area() const {
        return 0.0;
    }
};

class Square : public Shape {
public:
    double area() const override {
        return 4.0;
    }
};`,
      quizQuestion: "តើ keyword មួយណាធ្វើឱ្យ area ត្រូវបានជ្រើសរើសនៅ runtime?",
      options: [
        "virtual",
        "static",
        "const",
        "inline"
      ],
      correctIndex: 0,
      quizExplanation: "virtual ប្រាប់ compiler ឱ្យជ្រើសរើស method version តាម dynamic type របស់ object នៅ runtime។ keyword override ជួយផ្ទៀងផ្ទាត់ថា derived method ពិតជា override base method ប៉ុន្តែវាមិនបើក dynamic dispatch ដោយខ្លួនឯងទេ។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "keyword នេះធ្វើឱ្យ method អាច override បាន និងហៅតាម dynamic type។",
      solution: String.raw`class Shape {
public:
    virtual double area() const {
        return 0.0;
    }
};

class Square : public Shape {
public:
    double area() const override {
        return 4.0;
    }
};`,
      explanation: `virtual function ត្រូវបានហៅតាម object ពិតប្រាកដនៅ runtime។ បើ Shape* ចង្អុលទៅ Square នោះ shape->area() ហៅ Square::area។ បើគ្មាន virtual ទេ compiler នឹងជ្រើសរើសតាម type របស់ pointer គឺ Shape::area។`,
      expectedOutput: "virtual"
    },
    {
      id: "polymorphism-03",
      topicId: "polymorphism",
      title: "Square Area Through Base Pointer",
      difficulty: "beginner",
      type: "code",
      description: `Shape base class អាចកំណត់ method area ហើយ Square override វា។ អ្នកត្រូវអានជ្រុងរបស់ square រួចគណនាក្រឡាផ្ទៃតាម base pointer។`,
      requirements: [
        "បង្កើត class Shape ដែលមាន virtual method area និង virtual destructor។",
        "បង្កើត class Square ដែល override area ដោយ return side * side។",
        "អានជ្រុងមួយ បង្កើត Square តាម new ហើយចង្អុលដោយ Shape*។",
        "បង្ហាញ Area ដោយខ្ទង់ទសភាគពីរ រួច delete object។"
      ],
      input: "ប្រវែងជ្រុងរបស់ square។",
      output: "ក្រឡាផ្ទៃរបស់ square។",
      samples: [{ input: "7", output: "Area: 49.00" }],
      constraints: ["ត្រូវហៅ area តាម Shape* មិនមែនតាម Square object ដោយផ្ទាល់ទេ។", "ត្រូវ delete object នៅចុងបញ្ចប់។"],
      hint: "Shape* shape = new Square(side); រួច cout << fixed << setprecision(2) << shape->area();។ បន្ថែម delete shape;។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Shape {
public:
    virtual double area() const {
        return 0.0;
    }

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
    double side;
    cin >> side;

    Shape* shape = new Square(side);
    cout << fixed << setprecision(2);
    cout << "Area: " << shape->area() << endl;
    delete shape;
    return 0;
}`,
      explanation: `Shape* មិនដឹងថា object ពិតជា Square នៅ compile time ទេ ប៉ុន្តែ area ជា virtual ដូច្នេះការហៅត្រូវបានដោះស្រាយនៅ runtime។ វាហៅ Square::area ហើយទទួលបាន side * side។ virtual destructor ធានាថា delete shape បំផ្លាញ Square បានត្រឹមត្រូវ។`,
      expectedOutput: "Area: 49.00"
    },
    {
      id: "polymorphism-04",
      topicId: "polymorphism",
      title: "Temperature Converter Polymorphism",
      difficulty: "beginner",
      type: "code",
      description: `Converter មួយអាចមានរូបមន្តបំលែងផ្សេងៗគ្នា។ អ្នកត្រូវបង្កើត base Converter និង FahrenheitConverter ដែល override method convert ដើម្បីបំលែងពី Celsius ទៅ Fahrenheit។`,
      requirements: [
        "បង្កើត class Converter ដែលមាន virtual method convert(double) និង virtual destructor។",
        "បង្កើត class FahrenheitConverter ដែល override convert ដោយប្រើរូបមន្ត c * 9 / 5 + 32។",
        "អានសីតុណ្ហភាព Celsius មួយ ហើយហៅ convert តាម base pointer។",
        "បង្ហាញ Fahrenheit ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "សីតុណ្ហភាពជាអង្សាសេ។",
      output: "សីតុណ្ហភាពជាអង្សាសេបំលែងទៅ Fahrenheit។",
      samples: [{ input: "100", output: "Fahrenheit: 212.00" }],
      constraints: ["ត្រូវហៅ convert តាម Converter*។", "ត្រូវ delete object នៅចុងបញ្ចប់។"],
      hint: "ប្រើ Converter* converter = new FahrenheitConverter(); រួចបង្ហាញ converter->convert(celsius)។ រូបមន្តគឺ c * 9.0 / 5.0 + 32.0។",
      solution: String.raw`#include <iostream>
#include <iomanip>

using namespace std;

class Converter {
public:
    virtual double convert(double value) const {
        return value;
    }

    virtual ~Converter() {
    }
};

class FahrenheitConverter : public Converter {
public:
    double convert(double value) const override {
        return value * 9.0 / 5.0 + 32.0;
    }
};

int main() {
    double celsius;
    cin >> celsius;

    Converter* converter = new FahrenheitConverter();
    cout << fixed << setprecision(2);
    cout << "Fahrenheit: " << converter->convert(celsius) << endl;
    delete converter;
    return 0;
}`,
      explanation: `Converter កំណត់ interface សម្រាប់ការបំលែង ហើយ FahrenheitConverter ផ្តល់រូបមន្តជាក់លាក់។ ការហៅតាម Converter* បង្ហាញថា main មិនចាំបាច់ដឹង type ពិតប្រាកដទេ។ បើមាន converter ថ្មីដូចជា KelvinConverter យើងអាចបន្ថែមដោយមិនកែ main ច្រើន។`,
      expectedOutput: "Fahrenheit: 212.00"
    },
    {
      id: "polymorphism-05",
      topicId: "polymorphism",
      title: "Polymorphic Shape Total",
      difficulty: "intermediate",
      type: "code",
      description: `អ្នកត្រូវរក្សាទុក shape ផ្សេងៗក្នុង vector<Shape*> ហើយគណនាក្រឡាផ្ទៃសរុបដោយហៅ area តាម base pointer។ លំហាត់នេះបង្ហាញពីអត្ថប្រយោជន៍នៃ polymorphism ក្នុង collection។`,
      requirements: [
        "បង្កើត class Shape ដែលមាន virtual area និង virtual destructor។",
        "បង្កើត class Circle និង Rectangle ដែល override area។",
        "បង្កើត Circle(2) និង Rectangle(3, 4) ហើយរក្សាទុកក្នុង vector<Shape*>។",
        "គណនាផលបូក area របស់ shape ទាំងអស់ ហើយបង្ហាញដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: null,
      output: "ក្រឡាផ្ទៃសរុបរបស់រង្វង់ និង rectangle។",
      samples: [{ input: "", output: "Total area: 24.57" }],
      constraints: ["ត្រូវប្រើ 3.14159 សម្រាប់ pi។", "ត្រូវ delete shape ទាំងអស់នៅចុងបញ្ចប់។"],
      hint: "ប្រើ vector<Shape*> shapes; រួច push_back(new Circle(2)); និង push_back(new Rectangle(3, 4));។ loop បូក total += shapes[i]->area();។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <vector>

using namespace std;

class Shape {
public:
    virtual double area() const {
        return 0.0;
    }

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
};

int main() {
    vector<Shape*> shapes;
    shapes.push_back(new Circle(2.0));
    shapes.push_back(new Rectangle(3.0, 4.0));

    double total = 0.0;
    for (Shape* shape : shapes) {
        total += shape->area();
    }

    cout << fixed << setprecision(2);
    cout << "Total area: " << total << endl;

    for (Shape* shape : shapes) {
        delete shape;
    }
    return 0;
}`,
      explanation: `vector<Shape*> អាចរក្សាទុក object ដែលមាន type ផ្សេងៗគ្នាបាន ដរាបណាពួកវាទទួលមរតកពី Shape។ នៅពេលហៅ shape->area() ក្នុង loop ការជ្រើសរើស method កើតឡើងតាម object ពិតប្រាកដ។ ដូច្នេះ Circle និង Rectangle គណនាតាមរូបមន្តរៀងៗខ្លួន ហើយយើងបូកបានត្រឹមត្រូវ។`,
      expectedOutput: "Total area: 24.57"
    },
    {
      id: "polymorphism-06",
      topicId: "polymorphism",
      title: "Quiz: Virtual Destructor",
      difficulty: "intermediate",
      type: "quiz",
      description: `នៅពេល delete derived object តាម base pointer destructor ត្រូវដំណើរការត្រឹមត្រូវ។ សូមពិនិត្យ snippet ហើយជ្រើសរើសមូលហេតុដែលគួរធ្វើ destructor ជា virtual។`,
      requirements: ["ពិនិត្យ base destructor។", "ជ្រើសរើសចម្លើយតែមួយ។"],
      input: null,
      output: null,
      snippet: String.raw`class Base {
public:
    virtual ~Base() {
    }
};

class Derived : public Base {
public:
    ~Derived() {
    }
};

int main() {
    Base* p = new Derived();
    delete p;
    return 0;
}`,
      quizQuestion: "តើហេតុអ្វី Base គួរមាន destructor ជា virtual?",
      options: [
        "ដើម្បីឱ្យ delete តាម base pointer ហៅ destructor របស់ derived បានត្រឹមត្រូវ។",
        "ដើម្បីឱ្យ destructor ដំណើរការលឿនជាងមុន។",
        "ដើម្បីអនុញ្ញាតឱ្យបង្កើត Base object បាន។",
        "ដើម្បីធ្វើឱ្យ destructor ក្លាយជា static។"
      ],
      correctIndex: 0,
      quizExplanation: "បើ base destructor មិនមែន virtual ទេ delete p ដែល p ជា Base* ប្រហែលជាហៅតែ Base destructor។ ផ្នែករបស់ Derived នឹងមិនត្រូវបានបំផ្លាញ ដែលអាចបង្ក memory leak។ virtual destructor ធានាថា destructor ត្រូវបានជ្រើសរើសតាម dynamic type។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "delete តាម base pointer ត្រូវដឹង destructor របស់ object ពិតប្រាកដ។",
      solution: String.raw`class Base {
public:
    virtual ~Base() {
    }
};

class Derived : public Base {
public:
    ~Derived() {
    }
};

int main() {
    Base* p = new Derived();
    delete p;
    return 0;
}`,
      explanation: `Base destructor ជា virtual ដូច្នេះ delete p ជ្រើសរើស Derived destructor មុន រួចបន្ទាប់មក Base destructor។ បើគ្មាន virtual ទេ derived destructor អាចមិនត្រូវហៅ ហើយ resource ដែល derived កាន់កាប់នឹងមិនត្រូវបានបញ្ចេញ។ ដូច្នេះ base class ដែលមាន virtual methods គួរមាន virtual destructor។`,
      expectedOutput: "A virtual destructor makes delete through a base pointer call the derived destructor."
    },
    {
      id: "polymorphism-07",
      topicId: "polymorphism",
      title: "Override Calculator",
      difficulty: "intermediate",
      type: "code",
      description: `keyword override ជួយឱ្យ compiler ផ្ទៀងផ្ទាត់ថា derived method ពិតជា override base method។ អ្នកត្រូវបង្កើត Calculator និង Doubler ដែល override compute ហើយហៅតាម base pointer។`,
      requirements: [
        "បង្កើត class Calculator ដែលមាន virtual method compute(int) និង virtual destructor។",
        "បង្កើត class Doubler ដែល override compute ដោយ return x * 2 និងប្រើ keyword override។",
        "អានចំនួនគត់មួយ ហើយហៅ compute តាម Calculator*។",
        "បង្ហាញ Result។"
      ],
      input: "ចំនួនគត់មួយ។",
      output: "លទ្ធផលដែលបានពី Doubler។",
      samples: [{ input: "6", output: "Result: 12" }],
      constraints: ["ត្រូវប្រើ keyword override ក្នុង Doubler។", "ការហៅត្រូវធ្វើតាម Calculator*។"],
      hint: "Calculator* calculator = new Doubler(); រួច cout << calculator->compute(value);។ method ក្នុង Doubler គឺ int compute(int x) const override។",
      solution: String.raw`#include <iostream>

using namespace std;

class Calculator {
public:
    virtual int compute(int value) const {
        return value;
    }

    virtual ~Calculator() {
    }
};

class Doubler : public Calculator {
public:
    int compute(int value) const override {
        return value * 2;
    }
};

int main() {
    int value;
    cin >> value;

    Calculator* calculator = new Doubler();
    cout << "Result: " << calculator->compute(value) << endl;
    delete calculator;
    return 0;
}`,
      explanation: `override ប្រាប់ compiler ថា method នេះគួរតែ override method ក្នុង base class។ បើ signature មិនត្រូវគ្នា compiler នឹងរាយការណ៍ error ដែលជួយការពារកំហុស។ នៅ runtime ការហៅតាម Calculator* ជ្រើសរើស Doubler::compute ដោយសារ method ជា virtual។ ដូច្នេះ 6 ក្លាយជា 12។`,
      expectedOutput: "Result: 12"
    },
    {
      id: "polymorphism-08",
      topicId: "polymorphism",
      title: "Dynamic Cast Type Check",
      difficulty: "advanced",
      type: "code",
      description: `dynamic_cast អនុញ្ញាតឱ្យយើងពិនិត្យ type ពិតប្រាកដរបស់ object នៅ runtime។ អ្នកត្រូវឆ្លងកាត់ vector<Shape*> ហើយបង្ហាញព័ត៌មានខុសគ្នាសម្រាប់ Circle និង Square។`,
      requirements: [
        "បង្កើត class Shape ដែលមាន virtual destructor។",
        "បង្កើត class Circle ដែលមាន radius និង class Square ដែលមាន side។",
        "រក្សាទុក Circle(2.5) និង Square(4) ក្នុង vector<Shape*>។",
        "ប្រើ dynamic_cast ដើម្បីពិនិត្យ type ហើយបង្ហាញ Circle radius ឬ Square side ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: null,
      output: "ព័ត៌មាន radius និង side តាម type ពិតប្រាកដ។",
      samples: [{ input: "", output: "Circle radius: 2.50\nSquare side: 4.00" }],
      constraints: ["ត្រូវប្រើ dynamic_cast ជាមួយ pointer។", "ត្រូវ delete object ទាំងអស់។"],
      hint: "ប្រើ if (Circle* circle = dynamic_cast<Circle*>(shape)) { ... } else if (Square* square = dynamic_cast<Square*>(shape)) { ... }។ dynamic_cast ត្រឡប់ nullptr បើ type មិនត្រូវ។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <vector>

using namespace std;

class Shape {
public:
    virtual ~Shape() {
    }
};

class Circle : public Shape {
public:
    double radius;

    Circle(double r) : radius(r) {
    }
};

class Square : public Shape {
public:
    double side;

    Square(double s) : side(s) {
    }
};

int main() {
    vector<Shape*> shapes;
    shapes.push_back(new Circle(2.5));
    shapes.push_back(new Square(4.0));

    cout << fixed << setprecision(2);
    for (Shape* shape : shapes) {
        if (Circle* circle = dynamic_cast<Circle*>(shape)) {
            cout << "Circle radius: " << circle->radius << endl;
        } else if (Square* square = dynamic_cast<Square*>(shape)) {
            cout << "Square side: " << square->side << endl;
        }
    }

    for (Shape* shape : shapes) {
        delete shape;
    }
    return 0;
}`,
      explanation: `dynamic_cast ពិនិត្យ type នៅ runtime ហើយត្រឡប់ pointer ទៅ derived type បើ object ពិតជាប្រភេទនោះ។ បើមិនត្រូវវាត្រឡប់ nullptr សម្រាប់ pointer cast។ ដូច្នេះយើងអាចចូលប្រើ radius ឬ side បានដោយសុវត្ថិភាព ទោះបី vector មានតែ Shape* ក៏ដោយ។ ត្រូវមាន virtual function យ៉ាងហោចណាស់មួយ (ដូចជា virtual destructor) ដើម្បីឱ្យ dynamic_cast ដំណើរការ។`,
      expectedOutput: "Circle radius: 2.50\nSquare side: 4.00"
    },
    {
      id: "polymorphism-09",
      topicId: "polymorphism",
      title: "Polymorphic Payroll Report",
      difficulty: "advanced",
      type: "code",
      description: `បុគ្គលិកប្រភេទផ្សេងៗគណនាប្រាក់ខែខុសគ្នា។ អ្នកត្រូវបង្កើត base Employee និង derived SalariedEmployee ព្រមទាំង HourlyEmployee ហើយគណនាប្រាក់ខែសរុបតាម base pointer។`,
      requirements: [
        "បង្កើត class Employee ដែលមាន name ជា protected, virtual method pay និង getName ព្រមទាំង virtual destructor។",
        "បង្កើត SalariedEmployee ដែល pay ត្រឡប់ salary។",
        "បង្កើត HourlyEmployee ដែល pay ត្រឡប់ rate * hours។",
        "អានចំនួនបុគ្គលិក បន្ទាប់មកប្រភេទ S ឬ H ជាមួយទិន្នន័យដែលពាក់ព័ន្ធ។",
        "បង្ហាញឈ្មោះជាមួយប្រាក់ខែនីមួយៗ និង Total ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ចំនួនបុគ្គលិក បន្ទាប់មកប្រភេទ S/H ឈ្មោះ និងទិន្នន័យប្រាក់ខែ។",
      output: "ប្រាក់ខែរបស់បុគ្គលិកនីមួយៗ និងប្រាក់ខែសរុប។",
      samples: [{ input: "2\nS Dara 900\nH Sokha 5 120", output: "Dara: 900.00\nSokha: 600.00\nTotal: 1500.00" }],
      constraints: ["ត្រូវប្រើ vector<Employee*> និង delete object ទាំងអស់។", "ការគណនាប្រាក់ខែត្រូវធ្វើតាម virtual method pay។"],
      hint: "អាន type ជា char និង name ជា string។ បើ type == 'S' អាន salary រួចបង្កើត SalariedEmployee។ បើ 'H' អាន rate និង hours រួចបង្កើត HourlyEmployee។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>
#include <vector>

using namespace std;

class Employee {
protected:
    string name;

public:
    Employee(const string &n) : name(n) {
    }

    virtual double pay() const {
        return 0.0;
    }

    string getName() const {
        return name;
    }

    virtual ~Employee() {
    }
};

class SalariedEmployee : public Employee {
private:
    double salary;

public:
    SalariedEmployee(const string &n, double s) : Employee(n), salary(s) {
    }

    double pay() const override {
        return salary;
    }
};

class HourlyEmployee : public Employee {
private:
    double rate;
    int hours;

public:
    HourlyEmployee(const string &n, double r, int h) : Employee(n), rate(r), hours(h) {
    }

    double pay() const override {
        return rate * hours;
    }
};

int main() {
    int n;
    cin >> n;

    vector<Employee*> employees;
    for (int i = 0; i < n; ++i) {
        char type;
        string name;
        cin >> type >> name;

        if (type == 'S') {
            double salary;
            cin >> salary;
            employees.push_back(new SalariedEmployee(name, salary));
        } else {
            double rate;
            int hours;
            cin >> rate >> hours;
            employees.push_back(new HourlyEmployee(name, rate, hours));
        }
    }

    double total = 0.0;
    cout << fixed << setprecision(2);
    for (Employee* employee : employees) {
        cout << employee->getName() << ": " << employee->pay() << endl;
        total += employee->pay();
    }
    cout << "Total: " << total << endl;

    for (Employee* employee : employees) {
        delete employee;
    }
    return 0;
}`,
      explanation: `Employee កំណត់ interface pay ហើយ derived classes គណនាតាមរបៀបរៀងៗខ្លួន។ vector<Employee*> រក្សា object ទាំងអស់ក្នុង collection តែមួយ។ នៅពេលហៅ employee->pay() ការជ្រើសរើស method កើតឡើងតាម dynamic type។ ដូច្នេះ SalariedEmployee ត្រឡប់ salary ខណៈ HourlyEmployee ត្រឡប់ rate * hours ហើយយើងបូកបានត្រឹមត្រូវ។`,
      expectedOutput: "Dara: 900.00\nSokha: 600.00\nTotal: 1500.00"
    },
    {
      id: "polymorphism-10",
      topicId: "polymorphism",
      title: "Compile-Time Polymorphism with Overloading",
      difficulty: "advanced",
      type: "code",
      description: `Polymorphism មិនត្រឹមតែជា virtual functions ទេ។ Function overloading ជា compile-time polymorphism ដែល compiler ជ្រើសរើស function តាម argument។ អ្នកត្រូវបង្កើត Printer ដែលមាន print ពីរប្រភេទ។`,
      requirements: [
        "បង្កើត class Printer ដែលមាន print(int) បង្ហាញ Int: value។",
        "បន្ថែម print(const string&) ដែលបង្ហាញ Text: value។",
        "អានចំនួនគត់ និងពាក្យមួយ រួចហៅ print ទាំងពីរទម្រង់។",
        "បង្ហាញលទ្ធផលតាមលំដាប់ Int មុន បន្ទាប់មក Text។"
      ],
      input: "ចំនួនគត់ និងពាក្យមួយ។",
      output: "សារពី overload ទាំងពីរ។",
      samples: [{ input: "5 Hello", output: "Int: 5\nText: Hello" }],
      constraints: ["ត្រូវប្រើ function overloading មិនមែន virtual function ទេ។", "method ទាំងពីរត្រូវមានឈ្មោះដូចគ្នា print។"],
      hint: "ប្រកាស void print(int value) const និង void print(const string &value) const ក្នុង class តែមួយ។ compiler ជ្រើសរើសតាម argument type។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

class Printer {
public:
    void print(int value) const {
        cout << "Int: " << value << endl;
    }

    void print(const string &value) const {
        cout << "Text: " << value << endl;
    }
};

int main() {
    int number;
    string text;
    cin >> number >> text;

    Printer printer;
    printer.print(number);
    printer.print(text);
    return 0;
}`,
      explanation: `function overloading អនុញ្ញាតឱ្យមាន functions ឈ្មោះដូចគ្នាប៉ុន្តែ parameter ខុសគ្នា។ compiler ជ្រើសរើស version ត្រឹមត្រូវនៅ compile time ដោយផ្អែកលើ argument type។ នេះហៅថា compile-time polymorphism។ ផ្ទុយពី virtual function ដែលជ្រើសរើសនៅ runtime។`,
      expectedOutput: "Int: 5\nText: Hello"
    },
    {
      id: "polymorphism-11",
      topicId: "polymorphism",
      title: "Shape Area Report",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីមួយត្រូវអាន shape ច្រើនតាមប្រភេទ រួចបង្ហាញក្រឡាផ្ទៃនីមួយៗ និងផលបូកសរុប។ អ្នកត្រូវប្រើ polymorphism ដើម្បីគណនាដោយមិនចាំបាច់សរសេរលក្ខខណ្ឌ type ច្រើនកន្លែង។`,
      requirements: [
        "បង្កើត abstract-like base Shape ដែលមាន virtual area និង virtual typeName។",
        "បង្កើត Circle ដែលអាន radius និង Rectangle ដែលអាន width, height។",
        "អានចំនួន shape បន្ទាប់មកប្រភេទ C ឬ R ជាមួយទិន្នន័យដែលពាក់ព័ន្ធ។",
        "បង្ហាញ typeName និង area សម្រាប់ shape នីមួយៗ បន្ទាប់មក Total។",
        "បង្ហាញ area ទាំងអស់ដោយខ្ទង់ទសភាគពីរ។"
      ],
      input: "ចំនួន shape បន្ទាប់មកប្រភេទ C/R និងទិន្នន័យរបស់វា។",
      output: "area នីមួយៗតាមលំដាប់ និងផលបូកសរុប។",
      samples: [{ input: "3\nC 2\nR 3 4\nC 1", output: "Circle: 12.57\nRectangle: 12.00\nCircle: 3.14\nTotal: 27.71" }],
      constraints: ["ត្រូវប្រើ 3.14159 សម្រាប់ pi។", "ត្រូវ delete shape ទាំងអស់នៅចុងបញ្ចប់។"],
      hint: "អាន type ជា char។ បើ type == 'C' អាន radius រួចបង្កើត Circle។ បើ 'R' អាន width និង height រួចបង្កើត Rectangle។ បន្ថែម shape ទៅ vector<Shape*>។",
      solution: String.raw`#include <iostream>
#include <iomanip>
#include <string>
#include <vector>

using namespace std;

class Shape {
public:
    virtual double area() const {
        return 0.0;
    }

    virtual string typeName() const {
        return "Shape";
    }

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

    string typeName() const override {
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

    string typeName() const override {
        return "Rectangle";
    }
};

int main() {
    int n;
    cin >> n;

    vector<Shape*> shapes;
    for (int i = 0; i < n; ++i) {
        char type;
        cin >> type;

        if (type == 'C') {
            double radius;
            cin >> radius;
            shapes.push_back(new Circle(radius));
        } else {
            double width;
            double height;
            cin >> width >> height;
            shapes.push_back(new Rectangle(width, height));
        }
    }

    double total = 0.0;
    cout << fixed << setprecision(2);
    for (Shape* shape : shapes) {
        cout << shape->typeName() << ": " << shape->area() << endl;
        total += shape->area();
    }
    cout << "Total: " << total << endl;

    for (Shape* shape : shapes) {
        delete shape;
    }
    return 0;
}`,
      explanation: `Shape កំណត់ interface រួមសម្រាប់ area និង typeName។ Circle និង Rectangle ផ្តល់ implementation រៀងៗខ្លួន។ main អានទិន្នន័យ បង្កើត object តាម type ហើយរក្សាទុកក្នុង vector<Shape*>។ នៅពេលបង្ហាញ ការហៅតាម base pointer ជ្រើសរើស method តាម object ពិតប្រាកដ។ ដូច្នេះយើងមិនចាំបាច់សរសេរ if ដើម្បីគណនា area ម្តងទៀតទេ។`,
      expectedOutput: "Circle: 12.57\nRectangle: 12.00\nCircle: 3.14\nTotal: 27.71"
    },
    {
      id: "polymorphism-12",
      topicId: "polymorphism",
      title: "Virtual Call in Constructor",
      difficulty: "challenge",
      type: "code",
      description: `នៅក្នុង constructor របស់ base class virtual dispatch មិនដំណើរការដូចធម្មតាទេ។ អ្នកត្រូវសង្កេតថា ពេល base constructor ហៅ virtual method នោះ version របស់ base ត្រូវបានហៅ។`,
      requirements: [
        "បង្កើត class Base ដែល constructor ហៅ show និង method show ជា virtual បង្ហាញ Base show។",
        "បង្កើត class Derived ដែល override show បង្ហាញ Derived show។",
        "ក្នុង main បង្កើត Derived object រួចហៅ show ផ្ទាល់ម្តងទៀត។",
        "បង្ហាញលទ្ធផលពីរ។"
      ],
      input: null,
      output: "សារពី base constructor និងសារពីការហៅខាងក្រៅ។",
      samples: [{ input: "", output: "Base show\nDerived show" }],
      constraints: ["show ត្រូវតែជា virtual ក្នុង Base។", "ត្រូវហៅ show ក្នុង Base constructor។"],
      hint: "ក្នុង Base constructor សរសេរ show();។ នៅពេល Derived object កំពុងសាងសង់ derived part មិនទាន់រួចទេ ដូច្នេះ Base version ត្រូវបានហៅ។",
      solution: String.raw`#include <iostream>

using namespace std;

class Base {
public:
    Base() {
        show();
    }

    virtual void show() const {
        cout << "Base show" << endl;
    }

    virtual ~Base() {
    }
};

class Derived : public Base {
public:
    void show() const override {
        cout << "Derived show" << endl;
    }
};

int main() {
    Derived d;
    d.show();
    return 0;
}`,
      explanation: `កំឡុងពេល Base constructor ដំណើរការ derived part មិនទាន់ត្រូវបានសាងសង់នៅឡើយទេ។ C++ ដូច្នេះជ្រើសរើស method តាម class ដែលកំពុងសាងសង់ គឺ Base។ ដូច្នេះសារដំបូងគឺ Base show។ បន្ទាប់ពី object សាងសង់រួច d.show() ហៅ Derived version ដោយសារ dynamic type ឥឡូវជា Derived។`,
      expectedOutput: "Base show\nDerived show"
    },
    {
      id: "polymorphism-13",
      topicId: "polymorphism",
      title: "Game Unit Damage Report",
      difficulty: "challenge",
      type: "code",
      description: `ហ្គេមមួយមាន unit ច្រើនប្រភេទដែលបង្កើត damage ខុសគ្នា។ អ្នកត្រូវប្រើ abstract base Unit និង derived Warrior ព្រមទាំង Archer ដើម្បីគណនា damage សរុបតាម polymorphism។`,
      requirements: [
        "បង្កើត class Unit ដែលមាន power ជា protected, pure virtual attack និង typeName ព្រមទាំង virtual destructor។",
        "Warrior គណនា attack ជា power * 2 និង typeName W។",
        "Archer គណនា attack ជា power + 5 និង typeName A។",
        "អានចំនួន unit បន្ទាប់មកប្រភេទ W/A និង power។",
        "បង្ហាញ damage នីមួយៗ និង Total damage។"
      ],
      input: "ចំនួន unit បន្ទាប់មកប្រភេទ W/A និង power របស់ unit នីមួយៗ។",
      output: "damage នីមួយៗ និង damage សរុប។",
      samples: [{ input: "3\nW 10\nA 7\nW 4", output: "W: 20\nA: 12\nW: 8\nTotal damage: 40" }],
      constraints: ["ត្រូវប្រើ pure virtual function ក្នុង Unit។", "ត្រូវ delete unit ទាំងអស់នៅចុងបញ្ចប់។"],
      hint: "Unit មាន virtual int attack() const = 0; និង virtual string typeName() const = 0;។ អាន type ជា char រួចបង្កើត Warrior ឬ Archer។",
      solution: String.raw`#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Unit {
protected:
    int power;

public:
    Unit(int p) : power(p) {
    }

    virtual int attack() const = 0;

    virtual string typeName() const = 0;

    virtual ~Unit() {
    }
};

class Warrior : public Unit {
public:
    Warrior(int p) : Unit(p) {
    }

    int attack() const override {
        return power * 2;
    }

    string typeName() const override {
        return "W";
    }
};

class Archer : public Unit {
public:
    Archer(int p) : Unit(p) {
    }

    int attack() const override {
        return power + 5;
    }

    string typeName() const override {
        return "A";
    }
};

int main() {
    int n;
    cin >> n;

    vector<Unit*> units;
    for (int i = 0; i < n; ++i) {
        char type;
        int power;
        cin >> type >> power;

        if (type == 'W') {
            units.push_back(new Warrior(power));
        } else {
            units.push_back(new Archer(power));
        }
    }

    int total = 0;
    for (Unit* unit : units) {
        cout << unit->typeName() << ": " << unit->attack() << endl;
        total += unit->attack();
    }
    cout << "Total damage: " << total << endl;

    for (Unit* unit : units) {
        delete unit;
    }
    return 0;
}`,
      explanation: `Unit កំណត់ pure virtual methods ដូច្នេះវាជា abstract class ហើយមិនអាចបង្កើត Unit object ដោយផ្ទាល់បានទេ។ Warrior និង Archer ផ្តល់ implementation សម្រាប់ attack និង typeName។ vector<Unit*> រក្សា unit ទាំងអស់ ហើយការហៅ attack ជ្រើសរើសតាម type ពិតប្រាកដ។ ដូច្នេះ damage ត្រូវបានគណនាត្រឹមត្រូវសម្រាប់ unit នីមួយៗ។`,
      expectedOutput: "W: 20\nA: 12\nW: 8\nTotal damage: 40"
    }
  ]);
})();
