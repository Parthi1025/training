// Sorting array of an Object

// let array = [{name: "foo", age: 20}, {name: "bar", age: 10}, {name: "choclate", age: 15}];

// array.sort();

// console.log(array);

let array = [{name: "babu", age: 20}, {name: "bala", age: 10}, {name: "karthi", age: 15}].sort(function(obj1, obj2){
  return obj1.age - obj2.age;
});
console.log(array);