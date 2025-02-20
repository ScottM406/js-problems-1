//Given a string, return a string length 1 from its front, unless front is false, 
// in which case return a string length 1 from its back. The string will be non-empty.

function theEnd(str, front){
  if (front){
    return str.slice(0, 1);
  } else {
    return str.slice(-1);
  }
};

console.log(theEnd('Hello', true))
console.log(theEnd('Hello', false))
console.log(theEnd('oh', true))
console.log(theEnd('oh', false))