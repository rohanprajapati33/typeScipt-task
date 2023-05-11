// interface Data {
//     name?: string;
//     age: number;
// }

enum Enum {
  age11=20,
  age2 = 'b',
}

abstract class Data {
  name?: string;
  abstract age: number;

  //   abstract print = () => void;

  abstract print(): void;

  constructor(age: number) {
    if(age === Enum.age11) {
        console.log(`age is ${Enum.age11}`);
    }
    // this.age = age;
  }
}

class Student extends Data {
  age: number = 20;
  _name: string;

  static height = 170;

  //   set name(name) {
  //    this._name = name;
  //   }

  //   get name() {
  //     this._name = 'hello';
  //     return this._name;
  //   }
  constructor(age: number) {
    super(age);
  }

  print() {
    console.log("print from student class");
    // return 10;
    //   super.print();
  }
}

console.log(Student.height)
// const student = new Student(30);
// console.log(student.print());
