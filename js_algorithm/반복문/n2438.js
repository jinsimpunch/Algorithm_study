const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString();
const n = parseInt(input);
let sum = "";
for (let i = 1; i <= n; i++) {
  sum = "";
  for (let j = 0; j < i; j++) sum += "*";
  console.log(sum);
}
