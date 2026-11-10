(function () {
  window.CPP_DATA.exercises.push([
    {
      id: "enums-01",
      topicId: "enums",
      title: "Weekday Names",
      difficulty: "beginner",
      type: "code",
      description: `ប្រព័ន្ធកាលវិភាគត្រូវការបំប្លែងលេខថ្ងៃក្នុងសប្តាហ៍ទៅជាឈ្មោះថ្ងៃ។ អ្នកត្រូវប្រើ enum ដើម្បីកំណត់ថ្ងៃទាំងប្រាំពីរ និង switch ដើម្បីជ្រើសឈ្មោះ។`,
      requirements: [
        "ប្រកាស enum Day ដែលមាន MON = 1 រហូតដល់ SUN។",
        "អានលេខថ្ងៃពី 1 ដល់ 7។",
        "បង្ហាញឈ្មោះថ្ងៃជាភាសាអង់គ្លេស។"
      ],
      input: "ចំនួនគត់ពី 1 ដល់ 7។",
      output: "ឈ្មោះថ្ងៃដែលត្រូវនឹងលេខ។",
      samples: [{ input: "3", output: "Wednesday" }],
      constraints: ["លេខថ្ងៃស្ថិតក្នុងចន្លោះ 1 ដល់ 7។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ប្រើ switch លើ int ដែលអានបាន ហើយបង្ហាញឈ្មោះក្នុង case នីមួយៗ។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Day {
    MON = 1,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
};

int main() {
    int n;
    cin >> n;
    switch (n) {
        case MON:
            cout << "Monday" << endl;
            break;
        case TUE:
            cout << "Tuesday" << endl;
            break;
        case WED:
            cout << "Wednesday" << endl;
            break;
        case THU:
            cout << "Thursday" << endl;
            break;
        case FRI:
            cout << "Friday" << endl;
            break;
        case SAT:
            cout << "Saturday" << endl;
            break;
        case SUN:
            cout << "Sunday" << endl;
            break;
    }
    return 0;
}`,
      explanation: `enum បង្កើតឈ្មោះសម្រាប់តម្លៃចំនួនគត់។ MON មានតម្លៃ 1 ហើយបន្ទាប់មក TUE, WED និងដទៃទៀតកើនឡើងម្តងមួយ។ switch ជួយជ្រើសរើសឈ្មោះថ្ងៃដែលត្រូវនឹងលេខដែលបានអាន។`,
      expectedOutput: "Wednesday"
    },
    {
      id: "enums-02",
      topicId: "enums",
      title: "Account Status",
      difficulty: "beginner",
      type: "code",
      description: `ប្រព័ន្ធគណនីត្រូវការបង្ហាញស្ថានភាពគណនីពីលេខកូដសាមញ្ញ។ អ្នកត្រូវប្រើ enum ដែលកំណត់តម្លៃ INACTIVE និង ACTIVE ឱ្យច្បាស់លាស់។`,
      requirements: [
        "ប្រកាស enum Status ដែលមាន INACTIVE = 0 និង ACTIVE = 1។",
        "អានលេខកូដស្ថានភាពពី input។",
        "បង្ហាញ Active បើលេខគឺ 1 និង Inactive បើលេខគឺ 0។"
      ],
      input: "លេខកូដ 0 ឬ 1។",
      output: "អត្ថបទ Active ឬ Inactive។",
      samples: [{ input: "1", output: "Active" }],
      constraints: ["លេខកូដមានតែ 0 ឬ 1។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ប្រៀបធៀប n ជាមួយ ACTIVE ឬប្រើ switch លើ Status។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Status {
    INACTIVE = 0,
    ACTIVE = 1
};

int main() {
    int n;
    cin >> n;
    if (n == ACTIVE) {
        cout << "Active" << endl;
    } else {
        cout << "Inactive" << endl;
    }
    return 0;
}`,
      explanation: `ការកំណត់តម្លៃឱ្យ enum ដោយផ្ទាល់ធ្វើឱ្យអត្ថន័យកាន់តែច្បាស់។ ACTIVE មានតម្លៃ 1 ហើយ INACTIVE មានតម្លៃ 0។ កូដអាចប្រៀបធៀបលេខដែលបានអានជាមួយឈ្មោះ enum បានផ្ទាល់។`,
      expectedOutput: "Active"
    },
    {
      id: "enums-03",
      topicId: "enums",
      title: "Season Selector",
      difficulty: "beginner",
      type: "code",
      description: `កម្មវិធីអាកាសធាតុចង់បំប្លែងលេខរដូវទៅជាឈ្មោះរដូវ។ លំហាត់នេះហាត់ការប្រើ enum ជាមួយ switch សម្រាប់ជម្រើសដែលមានកំណត់។`,
      requirements: [
        "ប្រកាស enum Season ដែលមាន SPRING, SUMMER, AUTUMN និង WINTER។",
        "អានលេខរដូវពី 0 ដល់ 3។",
        "បង្ហាញឈ្មោះរដូវដែលត្រូវនឹងលេខ។"
      ],
      input: "ចំនួនគត់ពី 0 ដល់ 3។",
      output: "ឈ្មោះរដូវ។",
      samples: [{ input: "2", output: "Autumn" }],
      constraints: ["លេខរដូវស្ថិតក្នុងចន្លោះ 0 ដល់ 3។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "enum ធម្មតាចាប់ផ្តើមពី 0។ ដូច្នេះ SPRING = 0, SUMMER = 1, AUTUMN = 2 និង WINTER = 3។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Season {
    SPRING,
    SUMMER,
    AUTUMN,
    WINTER
};

int main() {
    int n;
    cin >> n;
    switch (n) {
        case SPRING:
            cout << "Spring" << endl;
            break;
        case SUMMER:
            cout << "Summer" << endl;
            break;
        case AUTUMN:
            cout << "Autumn" << endl;
            break;
        case WINTER:
            cout << "Winter" << endl;
            break;
    }
    return 0;
}`,
      explanation: `enum ធម្មតាកំណត់តម្លៃដំបូងជា 0 ហើយបន្ទាប់មកបន្ថែមម្តងមួយ។ ដូច្នេះលេខ 2 ត្រូវនឹង AUTUMN។ switch ធ្វើឱ្យការជ្រើសឈ្មោះមានលក្ខណៈច្បាស់លាស់។`,
      expectedOutput: "Autumn"
    },
    {
      id: "enums-04",
      topicId: "enums",
      title: "Quiz: Default Enum Values",
      difficulty: "beginner",
      type: "quiz",
      description: `enum ធម្មតាមានតម្លៃចំនួនគត់ដែលកើនឡើងដោយស្វ័យប្រវត្តិ។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផលដែលបង្ហាញ។`,
      requirements: ["ចងចាំថា enum ដំបូងចាប់ផ្តើមពីតម្លៃ 0។", "ជ្រើសរើសលទ្ធផលត្រឹមត្រូវ។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

enum Level {
    LOW,
    MEDIUM,
    HIGH
};

int main() {
    cout << LOW << " " << MEDIUM << " " << HIGH;
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: ["0 1 2", "1 2 3", "LOW MEDIUM HIGH", "0 0 0"],
      correctIndex: 0,
      quizExplanation: "enum ធម្មតាចាប់ផ្តើមពី 0 ហើយកើនឡើងម្តងមួយ។ ដូច្នេះ LOW = 0, MEDIUM = 1 និង HIGH = 2។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "LOW គឺជា enumerator ដំបូង។ តើវាមានតម្លៃប៉ុន្មាន?",
      solution: String.raw`#include <iostream>

using namespace std;

enum Level {
    LOW,
    MEDIUM,
    HIGH
};

int main() {
    cout << LOW << " " << MEDIUM << " " << HIGH << endl;
    return 0;
}`,
      explanation: `តម្លៃលំនាំដើមនៃ enum គឺ 0 សម្រាប់ enumerator ដំបូង ហើយបន្ទាប់មក 1, 2, 3 ជាដើម។ ការបង្ហាញ enumerator ដោយ cout បង្ហាញតម្លៃចំនួនគត់របស់វា។`,
      expectedOutput: "0 1 2"
    },
    {
      id: "enums-05",
      topicId: "enums",
      title: "Next Traffic Light",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រព័ន្ធគ្រប់គ្រងភ្លើងចរាចរណ៍ត្រូវការបង្ហាញពណ៌បន្ទាប់ពីពណ៌បច្ចុប្បន្ន។ លំដាប់គឺ RED ទៅ GREEN បន្ទាប់មក YELLOW ហើយត្រឡប់ទៅ RED វិញ។`,
      requirements: [
        "ប្រកាស enum Light ដែលមាន RED, YELLOW និង GREEN។",
        "អានលេខពណ៌បច្ចុប្បន្ន 0 សម្រាប់ RED, 1 សម្រាប់ YELLOW និង 2 សម្រាប់ GREEN។",
        "បង្ហាញពណ៌បន្ទាប់ក្នុងទម្រង់ Next: COLOR។"
      ],
      input: "ចំនួនគត់ 0, 1 ឬ 2។",
      output: "ពណ៌បន្ទាប់។",
      samples: [{ input: "0", output: "Next: GREEN" }],
      constraints: ["លំដាប់ប្តូរគឺ RED, GREEN, YELLOW ហើយត្រឡប់ទៅ RED។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ប្រើ switch លើ Light ហើយកំណត់ case RED ទៅ GREEN, case GREEN ទៅ YELLOW និង case YELLOW ទៅ RED។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Light {
    RED,
    YELLOW,
    GREEN
};

int main() {
    int n;
    cin >> n;
    Light current = static_cast<Light>(n);
    switch (current) {
        case RED:
            cout << "Next: GREEN" << endl;
            break;
        case GREEN:
            cout << "Next: YELLOW" << endl;
            break;
        case YELLOW:
            cout << "Next: RED" << endl;
            break;
    }
    return 0;
}`,
      explanation: `យើងបំប្លែងលេខដែលបានអានទៅជា Light ដោយ static_cast។ switch បន្ទាប់មកជ្រើសរើសពណ៌បន្ទាប់តាមលំដាប់ចរាចរណ៍ពិត។ ការប្រើ enum ធ្វើឱ្យកូដអានបានច្បាស់ជាងការប្រើលេខ 0, 1, 2 ដោយផ្ទាល់។`,
      expectedOutput: "Next: GREEN"
    },
    {
      id: "enums-06",
      topicId: "enums",
      title: "Role Permissions",
      difficulty: "intermediate",
      type: "code",
      description: `ប្រព័ន្ធគ្រប់គ្រងវគ្គសិក្សាមានអ្នកប្រើបីប្រភេទ ហើយអ្នកត្រូវបង្ហាញសិទ្ធិដែលត្រូវនឹងតួនាទីនីមួយៗ។ អ្នកត្រូវប្រើ enum class សម្រាប់តួនាទី។`,
      requirements: [
        "ប្រកាស enum class Role ដែលមាន ADMIN, TEACHER និង STUDENT។",
        "អានលេខតួនាទី 0, 1 ឬ 2។",
        "បង្ហាញ Full access សម្រាប់ ADMIN, Manage courses សម្រាប់ TEACHER និង View lessons សម្រាប់ STUDENT។"
      ],
      input: "ចំនួនគត់ 0, 1 ឬ 2។",
      output: "សិទ្ធិដែលត្រូវនឹងតួនាទី។",
      samples: [{ input: "2", output: "View lessons" }],
      constraints: ["ប្រើ enum class មិនមែន enum ធម្មតាទេ។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "បំប្លែង int ទៅ Role ដោយ static_cast<Role>(n) ហើយប្រើ switch លើ role។",
      solution: String.raw`#include <iostream>

using namespace std;

enum class Role {
    ADMIN,
    TEACHER,
    STUDENT
};

int main() {
    int n;
    cin >> n;
    Role role = static_cast<Role>(n);
    switch (role) {
        case Role::ADMIN:
            cout << "Full access" << endl;
            break;
        case Role::TEACHER:
            cout << "Manage courses" << endl;
            break;
        case Role::STUDENT:
            cout << "View lessons" << endl;
            break;
    }
    return 0;
}`,
      explanation: `enum class មាន scope ផ្ទាល់ខ្លួន ដូច្នេះយើងត្រូវសរសេរ Role::ADMIN ជំនួស ADMIN ធម្មតា។ ការប្រើ static_cast បំប្លែងលេខពី input ទៅជា Role ដោយច្បាស់លាស់។ switch បន្ទាប់មកជ្រើសសិទ្ធិតាមតួនាទី។`,
      expectedOutput: "View lessons"
    },
    {
      id: "enums-07",
      topicId: "enums",
      title: "Days in a Month",
      difficulty: "intermediate",
      type: "code",
      description: `កម្មវិធីប្រតិទិនត្រូវការបង្ហាញចំនួនថ្ងៃនៃខែដែលអ្នកប្រើជ្រើសរើស។ អ្នកត្រូវប្រើ enum សម្រាប់ខែ និង switch ដើម្បីកំណត់ចំនួនថ្ងៃ។`,
      requirements: [
        "ប្រកាស enum Month ដែលមាន JAN = 1 រហូតដល់ DEC។",
        "អានលេខខែពី 1 ដល់ 12។",
        "បង្ហាញចំនួនថ្ងៃនៃខែនោះ ដោយខែកុម្ភៈមាន 28 ថ្ងៃ។"
      ],
      input: "ចំនួនគត់ពី 1 ដល់ 12។",
      output: "ចំនួនថ្ងៃនៃខែ។",
      samples: [{ input: "2", output: "28" }],
      constraints: ["មិនគិតឆ្នាំបង្គ្រប់ទេ។", "ខែមេសា មិថុនា កញ្ញា និងវិច្ឆិកាមាន 30 ថ្ងៃ។"],
      hint: "កំណត់ days = 31 ជាលំនាំដើម បន្ទាប់មកកែសម្រាប់ FEB, APR, JUN, SEP និង NOV។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Month {
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC
};

int main() {
    int n;
    cin >> n;
    Month month = static_cast<Month>(n);
    int days = 31;
    switch (month) {
        case FEB:
            days = 28;
            break;
        case APR:
        case JUN:
        case SEP:
        case NOV:
            days = 30;
            break;
    }
    cout << days << endl;
    return 0;
}`,
      explanation: `ខែភាគច្រើនមាន 31 ថ្ងៃ ដូច្នេះយើងចាប់ផ្តើម days ជា 31។ switch កែតម្រូវតែខែដែលមាន 30 ថ្ងៃ និងខែកុម្ភៈ។ ការដាក់ case ជាច្រើនជាមួយគ្នាជួយកាត់បន្ថយកូដដដែលៗ។`,
      expectedOutput: "28"
    },
    {
      id: "enums-08",
      topicId: "enums",
      title: "Order Status Message",
      difficulty: "advanced",
      type: "code",
      description: `ហាងអនឡាញត្រូវការបង្ហាញសារស្ថានភាពការបញ្ជាទិញតាមលេខកូដ។ ស្ថានភាពមួយចំនួនជាស្ថានភាពបញ្ចប់ ហើយអ្នកត្រូវបញ្ជាក់វាផងដែរ។`,
      requirements: [
        "ប្រកាស enum class OrderStatus ដែលមាន PENDING = 1, SHIPPED = 2, DELIVERED = 3 និង CANCELLED = 4។",
        "អានលេខស្ថានភាពពី input។",
        "បង្ហាញសារដូចជា PENDING: processing, SHIPPED: on the way, DELIVERED: final និង CANCELLED: final។"
      ],
      input: "ចំនួនគត់ពី 1 ដល់ 4។",
      output: "សារស្ថានភាពការបញ្ជាទិញ។",
      samples: [{ input: "3", output: "DELIVERED: final" }],
      constraints: ["ប្រើ enum class។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "ប្រើ static_cast<OrderStatus>(n) ហើយ switch លើ OrderStatus::PENDING ជាដើម។",
      solution: String.raw`#include <iostream>

using namespace std;

enum class OrderStatus {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4
};

int main() {
    int n;
    cin >> n;
    OrderStatus status = static_cast<OrderStatus>(n);
    switch (status) {
        case OrderStatus::PENDING:
            cout << "PENDING: processing" << endl;
            break;
        case OrderStatus::SHIPPED:
            cout << "SHIPPED: on the way" << endl;
            break;
        case OrderStatus::DELIVERED:
            cout << "DELIVERED: final" << endl;
            break;
        case OrderStatus::CANCELLED:
            cout << "CANCELLED: final" << endl;
            break;
    }
    return 0;
}`,
      explanation: `enum class ជួយឱ្យឈ្មោះស្ថានភាពមិនប៉ះទង្គិចជាមួយឈ្មោះផ្សេងទៀតក្នុង program។ ការកំណត់តម្លៃចាប់ផ្តើមពី 1 ធ្វើឱ្យលេខពី input ត្រូវនឹងស្ថានភាពដោយផ្ទាល់។ switch បង្ហាញសារដែលសមស្របនឹងស្ថានភាពនីមួយៗ។`,
      expectedOutput: "DELIVERED: final"
    },
    {
      id: "enums-09",
      topicId: "enums",
      title: "Permission Flag Check",
      difficulty: "advanced",
      type: "code",
      description: `ប្រព័ន្ធសុវត្ថិភាពប្រើ permission ជា bit flags ដើម្បីផ្ទៀងផ្ទាត់សិទ្ធិរបស់អ្នកប្រើ។ អ្នកត្រូវពិនិត្យថាតើសិទ្ធិដែលត្រូវការមាននៅក្នុងសិទ្ធិរបស់អ្នកប្រើឬអត់។`,
      requirements: [
        "ប្រកាស enum Permission ដែលមាន READ = 1, WRITE = 2 និង EXECUTE = 4។",
        "អានសិទ្ធិរបស់អ្នកប្រើ និងសិទ្ធិដែលត្រូវការ។",
        "ប្រើ bitwise AND ដើម្បីពិនិត្យសិទ្ធិ។",
        "បង្ហាញ Allowed បើមានសិទ្ធិគ្រប់គ្រាន់ និង Denied បើខ្វះ។"
      ],
      input: "ចំនួនគត់ពីរ គឺ user permission និង required permission។",
      output: "អត្ថបទ Allowed ឬ Denied។",
      samples: [{ input: "3 2", output: "Allowed" }],
      constraints: ["តម្លៃ permission អាចជាផលបូកនៃ flags។", "មិនត្រូវបង្ហាញ prompt ទេ។"],
      hint: "បើ (user & required) == required មានន័យថាសិទ្ធិទាំងអស់ដែលត្រូវការមាន។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Permission {
    READ = 1,
    WRITE = 2,
    EXECUTE = 4
};

int main() {
    int user;
    int required;
    cin >> user >> required;
    if ((user & required) == required) {
        cout << "Allowed" << endl;
    } else {
        cout << "Denied" << endl;
    }
    return 0;
}`,
      explanation: `bit flags ប្រើតម្លៃដែលជាស្វ័យគុណនៃ 2 ដើម្បីឱ្យប៊ីតនីមួយៗតំណាងឱ្យសិទ្ធិមួយ។ bitwise AND រវាង user និង required បង្ហាញថាតើសិទ្ធិដែលត្រូវការមាននៅក្នុង user ឬអត់។ បើលទ្ធផលស្មើ required នោះមានន័យថាសិទ្ធិគ្រប់គ្រាន់។`,
      expectedOutput: "Allowed"
    },
    {
      id: "enums-10",
      topicId: "enums",
      title: "Quiz: Enum Class Scope",
      difficulty: "advanced",
      type: "quiz",
      description: `enum class ខុសពី enum ធម្មតា ព្រោះឈ្មោះ enumerator នៅក្នុង scope របស់វា។ សូមពិនិត្យ snippet ហើយស្មានលទ្ធផល។`,
      requirements: ["ពិនិត្យការចូលប្រើ Color::RED។", "យល់ពី static_cast ទៅ int។"],
      input: null,
      output: null,
      snippet: String.raw`#include <iostream>

using namespace std;

enum class Color {
    RED,
    GREEN
};

enum class Fruit {
    APPLE,
    BANANA
};

int main() {
    Color c = Color::RED;
    cout << static_cast<int>(c);
    return 0;
}`,
      quizQuestion: "តើកម្មវិធីបង្ហាញអ្វី?",
      options: ["0", "1", "RED", "Compile error ព្រោះ enum class មិនអាចប្រើបាន"],
      correctIndex: 0,
      quizExplanation: "enum class Color មានតម្លៃលំនាំដើមចាប់ពី 0 ដូច enum ធម្មតា។ Color::RED គឺតម្លៃទីមួយ ដូច្នេះ static_cast<int>(c) គឺ 0។",
      constraints: ["ជ្រើសរើសចម្លើយតែមួយ។"],
      hint: "RED ជា enumerator ដំបូងក្នុង Color។ enum class ចាប់ផ្តើមពី 0 ដូចគ្នា។",
      solution: String.raw`#include <iostream>

using namespace std;

enum class Color {
    RED,
    GREEN
};

enum class Fruit {
    APPLE,
    BANANA
};

int main() {
    Color c = Color::RED;
    cout << static_cast<int>(c) << endl;
    return 0;
}`,
      explanation: `enum class មាន scoped enumerators ដូច្នេះត្រូវសរសេរ Color::RED មិនមែន RED ទេ។ ការបំប្លែងទៅ int ត្រូវធ្វើដោយ explicit cast ដូចជា static_cast<int>។ តម្លៃលំនាំដើមនៅតែចាប់ផ្តើមពី 0។`,
      expectedOutput: "0"
    },
    {
      id: "enums-11",
      topicId: "enums",
      title: "Grade Distribution",
      difficulty: "challenge",
      type: "code",
      description: `គ្រូត្រូវការរាប់ចំនួនសិស្សតាមនិទ្ទេស A, B, C, D និង F ពីបញ្ជីពិន្ទុ។ អ្នកត្រូវប្រើ enum សម្រាប់និទ្ទេស និង array សម្រាប់រាប់។`,
      requirements: [
        "ប្រកាស enum Grade ដែលមាន A, B, C, D និង F។",
        "បង្កើត function ដែលបំប្លែងពិន្ទុទៅ Grade។",
        "អានចំនួនសិស្ស n និងពិន្ទុរបស់ពួកគេ។",
        "រាប់ និងបង្ហាញចំនួនសិស្សក្នុងនិទ្ទេសនីមួយៗ។"
      ],
      input: "n បន្ទាប់មក n ពិន្ទុ។",
      output: "ចំនួនសិស្សសម្រាប់ A, B, C, D និង F តាមលំដាប់។",
      samples: [{ input: "5\n95 85 75 65 55", output: "A: 1\nB: 1\nC: 1\nD: 1\nF: 1" }],
      constraints: ["ពិន្ទុស្ថិតក្នុងចន្លោះ 0 ដល់ 100។", "A ចាប់ពី 90, B ចាប់ពី 80, C ចាប់ពី 70, D ចាប់ពី 60 និង F ក្រោម 60។"],
      hint: "ប្រើ int counts[5] = {0}; ហើយ counts[toGrade(score)]++ ដើម្បីរាប់តាម enum value។",
      solution: String.raw`#include <iostream>

using namespace std;

enum Grade {
    A,
    B,
    C,
    D,
    F
};

Grade toGrade(int score) {
    if (score >= 90) {
        return A;
    }
    if (score >= 80) {
        return B;
    }
    if (score >= 70) {
        return C;
    }
    if (score >= 60) {
        return D;
    }
    return F;
}

int main() {
    int n;
    cin >> n;
    int counts[5] = {0};
    for (int i = 0; i < n; i++) {
        int score;
        cin >> score;
        counts[toGrade(score)]++;
    }
    cout << "A: " << counts[A] << endl;
    cout << "B: " << counts[B] << endl;
    cout << "C: " << counts[C] << endl;
    cout << "D: " << counts[D] << endl;
    cout << "F: " << counts[F] << endl;
    return 0;
}`,
      explanation: `enumerator នៃ enum អាចប្រើជា index របស់ array បាន ព្រោះវាមានតម្លៃចំនួនគត់ពី 0 ដល់ 4។ function toGrade បំប្លែងពិន្ទុទៅ Grade ហើយ counts[grade]++ បង្កើនចំនួនសម្រាប់និទ្ទេសនោះ។ បន្ទាប់មកយើងបង្ហាញចំនួនតាមលំដាប់ enum។`,
      expectedOutput: "A: 1\nB: 1\nC: 1\nD: 1\nF: 1"
    },
    {
      id: "enums-12",
      topicId: "enums",
      title: "Task Status Summary",
      difficulty: "challenge",
      type: "code",
      description: `កម្មវិធីគ្រប់គ្រងកិច្ចការរក្សាទុកចំណងជើងកិច្ចការ និងស្ថានភាពរបស់វា។ អ្នកត្រូវប្រើ enum class សម្រាប់ស្ថានភាព និង struct សម្រាប់កិច្ចការ។`,
      requirements: [
        "ប្រកាស enum class Status ដែលមាន PENDING = 0 និង COMPLETED = 1។",
        "ប្រកាស struct Task ដែលមាន title និង status។",
        "អានចំនួនកិច្ចការ n បន្ទាប់មកអានចំណងជើង និងលេខស្ថានភាព។",
        "រាប់ និងបង្ហាញចំនួនកិច្ចការដែលបានបញ្ចប់ និងមិនទាន់បញ្ចប់។"
      ],
      input: "n បន្ទាប់មក n បន្ទាត់ ដែលមានចំណងជើង និងលេខស្ថានភាព 0 ឬ 1។",
      output: "ចំនួនកិច្ចការ Completed និង Pending។",
      samples: [{ input: "3\nRead 1\nWrite 0\nPractice 1", output: "Completed: 2\nPending: 1" }],
      constraints: ["ចំណងជើងមិនមានចន្លោះ។", "ស្ថានភាពមានតែ 0 ឬ 1។"],
      hint: "បំប្លែងលេខស្ថានភាពដោយ static_cast<Status>(code) ហើយប្រៀបធៀបជាមួយ Status::COMPLETED។",
      solution: String.raw`#include <iostream>
#include <string>

using namespace std;

enum class Status {
    PENDING = 0,
    COMPLETED = 1
};

struct Task {
    string title;
    Status status;
};

int main() {
    int n;
    cin >> n;
    Task tasks[100];
    for (int i = 0; i < n; i++) {
        int code;
        cin >> tasks[i].title >> code;
        tasks[i].status = static_cast<Status>(code);
    }
    int completed = 0;
    int pending = 0;
    for (int i = 0; i < n; i++) {
        if (tasks[i].status == Status::COMPLETED) {
            completed++;
        } else {
            pending++;
        }
    }
    cout << "Completed: " << completed << endl;
    cout << "Pending: " << pending << endl;
    return 0;
}`,
      explanation: `enum class អាចធ្វើជា member របស់ struct បានយ៉ាងងាយ។ យើងបំប្លែងលេខពី input ទៅ Status ដោយ static_cast ហើយរក្សាទុកក្នុង task នីមួយៗ។ បន្ទាប់មកយើងរាប់តាមស្ថានភាពដោយប្រៀបធៀបជាមួយ Status::COMPLETED។`,
      expectedOutput: "Completed: 2\nPending: 1"
    },
    {
      id: "enums-13",
      topicId: "enums",
      title: "Order State Machine",
      difficulty: "challenge",
      type: "code",
      description: `ប្រព័ន្ធដឹកជញ្ជូនត្រូវផ្ទៀងផ្ទាត់លំដាប់ស្ថានភាពនៃការបញ្ជាទិញ។ លំដាប់ត្រឹមត្រូវគឺ PENDING បន្ទាប់មក SHIPPED ហើយបន្ទាប់មក DELIVERED។ លេខ 0 បញ្ចប់ input។`,
      requirements: [
        "ប្រកាស enum class Status ដែលមាន PENDING = 1, SHIPPED = 2 និង DELIVERED = 3។",
        "អានលេខស្ថានភាពជាបន្តបន្ទាប់រហូតដល់ជួប 0។",
        "ផ្ទៀងផ្ទាត់ថាលំដាប់គឺ 1, 2, 3 ពិតប្រាកដ។",
        "បង្ហាញ Valid បើលំដាប់ត្រឹមត្រូវ និង Invalid បើមិនត្រឹមត្រូវ។"
      ],
      input: "លេខស្ថានភាពជាច្រើន បញ្ចប់ដោយ 0។",
      output: "Valid ឬ Invalid។",
      samples: [{ input: "1 2 3 0", output: "Valid" }],
      constraints: ["លំដាប់ត្រូវមានស្ថានភាពទាំងបីគត់។", "0 មិនត្រូវរាប់ជាស្ថានភាពទេ។"],
      hint: "រក្សា expected ចាប់ផ្តើមពី 1។ បើ code មិនស្មើ expected នោះ invalid។ បង្កើន expected បន្ទាប់ពីអានម្តងៗ។",
      solution: String.raw`#include <iostream>

using namespace std;

enum class Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3
};

int main() {
    int code;
    int expected = static_cast<int>(Status::PENDING);
    bool valid = true;
    while (cin >> code && code != 0) {
        if (code != expected) {
            valid = false;
        }
        expected++;
    }
    if (valid && expected == 4) {
        cout << "Valid" << endl;
    } else {
        cout << "Invalid" << endl;
    }
    return 0;
}`,
      explanation: `state machine ត្រូវផ្ទៀងផ្ទាត់ថាស្ថានភាពនីមួយៗមកតាមលំដាប់កំណត់។ យើងចាប់ផ្តើម expected ត្រង់ PENDING ហើយបង្កើនម្តងមួយបន្ទាប់ពីអាន code នីមួយៗ។ បើ code មិនស្មើ expected នោះលំដាប់មិនត្រឹមត្រូវ។ នៅចុងបញ្ចប់ expected ត្រូវស្មើ 4 ដើម្បីបញ្ជាក់ថាស្ថានភាពទាំងបីមានគ្រប់។`,
      expectedOutput: "Valid"
    }
  ]);
})();
