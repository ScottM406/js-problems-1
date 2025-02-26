//Given a string, return true if "bad" appears starting at index 0 or 1 in the string,
//such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

function hasBad(str){
  if (str.slice(0,3) === "bad" || str.slice(1,4) === "bad") return true;
  else return false;
}

console.log(hasBad('badxx'))
console.log(hasBad('xbadxx'));
console.log(hasBad('xxbadxx'));
console.log(hasBad('code'));
console.log(hasBad('bad'));
console.log(hasBad('ba'));
console.log(hasBad('xba'));
console.log(hasBad('xbad'));
console.log(hasBad(''));
console.log(hasBad('badyy'));