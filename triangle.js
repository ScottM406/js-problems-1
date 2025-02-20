//We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks,
//the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total
//number of blocks in such a triangle with the given number of rows.

function triangle(rows){
  if (rows === 0) return 0;
  else return rows + triangle(rows -1)
}

console.log(triangle(0));
console.log(triangle(1));
console.log(triangle(2));
console.log(triangle(3));
console.log(triangle(4));
console.log(triangle(5));
console.log(triangle(6));
console.log(triangle(7));
console.log(triangle(8));