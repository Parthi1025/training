//remove the object

let array = [{name: "foo", age: 20}, {name: "bar", age: 10}, {name: "choclate", age: 15}]

console.log(array.pop());

console.log(array);

// recurring value

const array = [2,3,4,5,6,7,7,4,3,2,1,7,8,9];

// let array2 = array.filter((item, index) => array.indexOf(item) !== index);

// let uniqueSet = new Set(array);

Array.from(new Set(array));

console.log(Array(new Set(array)));

// Sorting array of an Object

let array = [{name: "babu", age: 20}, {name: "bala", age: 10}, {name: "karthi", age: 15}].sort(function(obj1, obj2){
    return obj1.age - obj2.age;
  });
  console.log(array);

 
  // Write function to return sum of N numbers
let n= 50;
function findSum(n){
  let result = 0;
  for (let i= 1; i<=n; i++){ 
    result = result + i;
  }
  return result;
}
console.log(`sum of numbers from 5 to ${n} is ${findSum(n)}`);

// reverse string

let str = "strangers";

let reversed = "";
function reverse (str){
  for(var i= str.length -1; i>=0; i--) {
    reversed += str[i];
  }  
  return reversed;
}
console.log(reverse(str));

