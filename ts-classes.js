// private class Data {
//   name?: string;
//   private age: number;
//   protected print() {
//     console.log("print from super");
//   }
//   constructor(age: number) {
//     // this.age = age;
//   }
// }
var Student = /** @class */ (function () {
    function Student(age) {
        this.age = 20;
        this.name = 'rohan';
        console.log(this.name);
        // super(age);
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            this._name = 'hello';
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.print = function () {
        console.log("print from student class");
        //   super.print();
    };
    return Student;
}());
var student = new Student(30);
// console.log(student.print());
