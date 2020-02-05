/**  classes, class expression, class declareation, accessing, static keyword */

// class Student {
//     constructor(name, age){
//         this.n = name;
//         this.a = age;
//     }
// stu() {
//     console.log("the name of the student:", this.n)
//     console.log("age of the student:", this.a)
//   }

// }
// var stuObj = new Student('peter', 20);
// stuObj.stu();

// // static keyword

// class Example{
//     static show(){
//         console.log("\n this is static func");
//     }
// }

// Example.show();

// class inheritsnce:

class Student {
    constructor(a) {
        this.name = a;
    }
}
class User extends Student {
    show() {
        console.log(" name of the pupil : "  +  this.name);
    }
}
var obj = new User("parthi");
obj.show()