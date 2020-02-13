

// // class Rectangle {
// //   constructor() {
// //     console.log("Rectangle is created")

// //     this.width = 7;
// //     this.height = 29;
// //     this.color = 'yellow';
// //   }

// // }

// // let myRectangle = new Rectangle();

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// let user = new User("india");
// user.sayHi();

async function Max(a, b) {
 if (a > b) {
  return Promise.resolve("Success");
 }
 else {
  return Promise.reject("Error");
 }
}Max(14, 10)
.then(function(x) {
 console.log("Good " + x); 
})
.catch(function(x) {
 console.log("Oops " + x); 
});

async function hello() {
 let response = await fetch('https://api.github.com/');
 // above line fetches the response from the given API endpoint.
 return response;
}hello()
.then(function(x) {
 console.log(x); 
});