//Given a string, return a version without the first and last char, 
// so "Hello" yields "ell". The string length will be at least 2.

function withoutEnd(str){
  let middleSection = str.slice(1).slice(0, -1);
  return middleSection;
}

console.log(withoutEnd('Hello'));
console.log(withoutEnd('java'));
console.log(withoutEnd('coding'));
console.log(withoutEnd('code'));
console.log(withoutEnd('ab'));
console.log(withoutEnd('Chocolate!'));
console.log(withoutEnd('kitten'));
console.log(withoutEnd('woohoo'));