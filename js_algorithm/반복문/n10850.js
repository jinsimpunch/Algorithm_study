const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");
const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  console.log(
    parseInt(input[i + 1].split(" ")[0]) + parseInt(input[i + 1].split(" ")[1])
  );
}
