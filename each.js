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