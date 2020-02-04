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
