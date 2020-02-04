// map reduce and filter

let initialValue = 0;
let sum = [{x:1}, {x:2}, {x:3}].reduce(function(accumulator, currentValue) {
    return  accumulator + currentValue.x
}, initialValue)

console.log(sum)

//

let initialValue = 0;
let sum = [{x:1}, {x:2}, {x:3}].reduce (
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
)
console.log(sum)

// mapindex of

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])
console.log(myOrderedArray)

//

let sum = [0,1,2,3,4].reduce(function(accumulator, currentValue){
  return (accumulator + currentValue);

}, 0)
console.log(sum);

//

let total = [0,1,2,3,4].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  console.log(total)

  //

  const arr1 = [1,2,3,4];
  const reducer = (accumulator, currentValue) => accumulator  currentValue;
  
  console.log(arr1.reduce(reducer));

  // for each

  const array = ['a','b','c'];

  array.forEach(element => console.log(element));

  // const array = ['a','b','c'];

// array.forEach(element => console.log(element));

// const arr = [3, 5, 7];
// arr.foo = 'hello';

// for (let i of arr) {
//     console.log(i); // logs 3, 5, 7
//  }

//  for (let i in arr) {
//     console.log(i); // logs "0", "1", "2", "foo"
//  }

const items = ['item1', 'item2', 'item3'];
const copy = [];

//for (let i=0; i<items.length; i++ ) {  // normal for loop
//  copy.push(items[i]);
//}

items.forEach(function(item){     // foreach fnc
  copy.push(item);
});
console.log(copy);