// We have a number of bunnies and each bunny has two big floppy ears. 
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars(bunnies){
  if (bunnies === 0){
    return 0;
  }
  return 2 + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(0));
console.log(bunnyEars(1));
console.log(bunnyEars(2));
console.log(bunnyEars(4));
console.log(bunnyEars(6));
console.log(bunnyEars(8));
console.log(bunnyEars(10));
console.log(bunnyEars(24));
console.log(bunnyEars(100));
console.log(bunnyEars(468));
console.log(bunnyEars(7989));