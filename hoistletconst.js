// let and const

const PI = 3.14;
console.log(PI);

pi= 3;
console.log(pi);

// es6 allows the change of const value?

// const something = {};
// something = 10;
// console.log(something);


let somethingElse = {};
somethingElse = 1000;
console.log(somethingElse);

const myArray = [];
myArray.push(3);
myArray[3] = 4;
console.log(myArray);

// for let;

// const foo = 123;
// if(true){
//     const foo = 234;
// }
// console.log(foo);

// if (true){
//     let foo = 33;
// }
// console.log(foo);

// const num = 42;

// try {
//   num = 99;
// } catch(err) {
//   console.log(err);
// }
 
// const arr = [0,1,2]
// arr[3] = 4;
// console.log(arr);

// let arr1 = Object.freeze([0,1,2])
// arr1[3] = 4;
// console.log(arr1);

const key = 'abc123';
let points = 50;
let winnar = false;

points = 60;
//key = 'asdf9876'

console.log(points);

const person = {
    name : 'ehilw',
    age:20
}
//person.age = 32
//person.name = 'mean'
console.log(person);

const mean = Object.freeze(person)
console.log(person);

//hoistings , it is only for declaring not initializing;

var a = 1;
function b() {
    a= 10;
    return;

    function a(){} // hoisting
}
b();
console.log(a);

var foo = 1;
function bar(){
    var foo;
    if(!foo){
        foo = 10;
    }
    console.log(foo);
}
bar();

var a= 1;
function b(){
    a =20;
    var a= 30;
}
console.log(b());
console.log(a);

function catName(name){
    console.log("my cat name is " +  name);
    
}
catName("jimy")

petName("drew")
function petName(name){
    console.log("this is my pet " + name);
    
}

console.log(num);
var num;
num = 10;

num = 9;
console.log(num);
var num;

//doesnot hoist

var x =1;
console.log(x + '' +y);
var y = 2; // 1 undefind

var num1 =3;
num2 = 4;
console.log(num1 + '' + num2);
var num2

a ='hjk';
b= 'rewq';
console.log(a + ' ' + b);
var a,b;

