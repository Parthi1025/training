let array = [2,3,4,5,6,7,7,4,3,2,1,7,8,9]
function removeDuplicates(array) {
  let a = [];
  array.map(x => {
    if (!a.includes(x) {
      a.push(x)
    }
    })
    return a;   
};
console.log(removeDuplicates(array));

