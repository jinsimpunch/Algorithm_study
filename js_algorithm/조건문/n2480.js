const fs = require("fs");

const input = fs.readFileSync("ex.txt").toString().split(" ").map(Number);

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

if (A != B && B != C) {
  console.log(Math.max(...input) * 100);
} else if (A == B && B != C) {
  console.log(1000 + A * 100);
} else if (A == C && C != B) {
  console.log(1000 + A * 100);
} else if (B == C && C != A) {
  console.log(1000 + B * 100);
} else {
  console.log(10000 + A * 1000);
}
