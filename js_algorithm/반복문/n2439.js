const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString();
let sum = new Array(Number(input)).fill(" ");

for (let i = input - 1; i >= 0; i--) {
  sum[i] = "*";
  console.log(sum.join(""));
}
