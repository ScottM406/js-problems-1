//Given a string, return the length of the largest "block" in the string.
// A block is a run of adjacent chars that are the same.

function largestBlockLength(str) {
  if (str.length === 0) return 0;

  let maxBlockLength = 1;
  let currentBlockLength = 1;

  for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
          currentBlockLength++;
          if (currentBlockLength > maxBlockLength) {
              maxBlockLength = currentBlockLength;
          }
      } else {
          currentBlockLength = 1;
      }
  }

  return maxBlockLength;
}

console.log(maxBlock('hoopla'));
console.log(maxBlock('abbCCCddBBBxx'));
console.log(maxBlock(''));
console.log(maxBlock('xyz'));
console.log(maxBlock('xxyz'));
console.log(maxBlock('xyzz'));
console.log(maxBlock('abbbcbbbxbbbx'));
console.log(maxBlock('XXBBBbbxx'));
console.log(maxBlock('XXBBBBbbxx'));
console.log(maxBlock('XXBBBbbxxXXXX'));
console.log(maxBlock('XX2222BBBbbXX2222'));