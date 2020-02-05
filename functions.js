// func is one of the fundamental building blocks in JS. a set of stmts that performs a task or a value.
// func declarations or func stmts, "function" is a keyword, * name of func, * list of arg in (), * JS stmts that define func and as {}.

// function square(number) {
//   return number * number;
// }

function addNum(a,b){
    console.log("this is op for");
    return a*b;  // without return stmt, op is undefined
    
}

console.log(addNum(5,6));

// Anonymous function;

var anon = function(a,b){
    console.log("this is anonymous fnc");
    return a*b;
}

anon(5,7);

// Function expressions 

// function map(f,a) {
//   let result = [], i;
//   for (i=0; i!=a.length; i++)
//     result[i] = f(a[i]);
//   return result;    
// }

// console.log(map(5,7));

//  function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }
//   const f = function(x) {
//      return x * x * x; 
//   }
//   let numbers = [0, 1, 2, 5, 10];
//   let cube = map(f,numbers);
//   console.log(cube);

// calling fnc;

console.log(square(5));

function square(n) {return n*n}