//Given an "out" string length 4, such as "<<>>", and a word, 
// return a new string where the word is in the middle of the out string, 
// e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at 
// index i and going up to but not including index j.

function makeOutWord(out, word){
  let leftContainer = out.substring(0,2)
  let rightContainer = out.substring(2,4)
  if (out.length === 4){
  return leftContainer + word + rightContainer
  }
}

console.log(makeOutWord('<<>>', 'Yay'));
console.log(makeOutWord('<<>>', 'WooHoo'));
console.log(makeOutWord('[[]]', 'word'));
console.log(makeOutWord('abyz', 'YAY'));