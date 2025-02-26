//Given a string, if a length 2 substring appears at both its beginning and end,
//return a string without the substring at the beginning, so "HelloHe" yields "lloHe".
//The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

function without2(str){
  if (str.length < 2){
    return str;
  } else if (str.slice(0,2) === str.slice(-2)){
    return str.slice(2); 
  } else {
    return str;
  }  
}

console.log(without2('HelloHe'));
console.log(without2('HelloHi'));
console.log(without2('Hi'));
console.log(without2('Chocolate'));
console.log(without2('xxx'));
console.log(without2('xx'));
console.log(without2('x'));
console.log(without2(''));
console.log(without2('Fruits'));