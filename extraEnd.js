//Given a string, return a new string made of 3 copies of the last 2 chars of the original string. 
// The string length will be at least 2.

function extraEnd(str){
  let lastTwo = str.slice(-2);
  return lastTwo + lastTwo + lastTwo;
}

console.log(extraEnd('Hello'));
console.log(extraEnd('ab'));
console.log(extraEnd('Hi'));
console.log(extraEnd('Candy'));
console.log(extraEnd('Code'));