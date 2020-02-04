const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {   //by using for in stmt.
   console.log(i); 

for (let i of arr) {
   console.log(i);
}

//doubt