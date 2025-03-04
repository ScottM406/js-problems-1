//Given a string and an index, return a string length 2 starting at the given index. 
// If the index is too big or too small to define a string length 2,
// use the first 2 chars. The string length will be at least 2.

function twoChar(str, index){
  let resultingString = str.slice(index, index + 2);
  if (resultingString.length !== 2){
    return str.slice(0, 2);
  } else {
    return resultingString;
  }
}

console.log(twoChar('java', 3));
console.log(twoChar('java', 0));
console.log(twoChar('java', 2));
console.log(twoChar('java', 4));
console.log(twoChar('java', -1));
console.log(twoChar('Hello', 0));
console.log(twoChar('Hello', 1));
console.log(twoChar('Hello', 99));
console.log(twoChar('Hello', 3));
console.log(twoChar('Hello', 4));
console.log(twoChar('Hello', 5));
console.log(twoChar('Hello', -7));
console.log(twoChar('Hello', 6));
console.log(twoChar('Hello', -1));
console.log(twoChar('yay', 0));