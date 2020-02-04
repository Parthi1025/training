// do while statements

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// let n= 0;
// let x= 0;
// while (n<4) {
//   n++;
//   x +=n;
//   console.log(n);
// }

// while (true) {
//   console.log("Heloo world!");
// }

// markLoop;
// while(themark === true){
//   doSomething();
// }


// a =[1,2,3];
// theValue = '';
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === theValue) {
//     break;
//   }
// }

// let i= 0;
// let n=0;
// while (i<5) {
//   i++;
//   if(i===3) {
//     //continue;
//   }
//   n +=i;
//   console.log(n);
// }

let i = 0;
let j=10;
checkiandj;
  while(i<4){
    console.log(i);
    i+=1;
    checkj;
      while(j>4){
        console.log(j);
        j-=1;
        if ((j%2)===0){
          continue checkj;
        }
      }
      console.log('i= ' + i);
      console.log('j= ' + j);
  }