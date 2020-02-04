const array = [2,3,4,5,6,7,7,4,3,2,1,7,8,9];

// let array2 = array.filter((item, index) => array.indexOf(item) !== index);

// let uniqueSet = new Set(array);

Array.from(new Set(array));

console.log(Array(new Set(array)));