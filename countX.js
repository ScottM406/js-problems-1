//Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

function countX(str) {
  if (str.length === 0) return 0;
  else if (str.slice(-1) === "x") return 1 + countX(str.slice(0, -1));
  else return countX(str.slice(0, -1));
}

console.log(countX('xxhixx'));
console.log(countX('xhixhix'));
console.log(countX('hi'));
console.log(countX('h'));
console.log(countX('x'));
console.log(countX('') );
console.log(countX('hihi'));
console.log(countX('hiAAhi12hi') );