let str = "strangers";

let reversed = "";
function reverse (str){
  for(var i= str.length -1; i>=0; i--) {
    reversed += str[i];
  }  
  return reversed;
}

console.log(reverse(str));