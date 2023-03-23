const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = parseInt(input[0]);

for (let i = 1; i < n + 1; i++)
  console.log(
    `Case #${i}:`,
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
  );
