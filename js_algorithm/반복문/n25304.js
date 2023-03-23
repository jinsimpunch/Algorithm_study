const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");

const total = parseInt(input[0]);
let sum = 0;
const n = parseInt(input[1]);

for (let i = 2; i < n + 2; i++) {
  sum += input[i].split(" ")[0] * input[i].split(" ")[1];
}

if (total === sum) console.log("Yes");
else console.log("No");
