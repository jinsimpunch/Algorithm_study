const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString();

const dan = parseInt(input);

for (let i = 1; i < 10; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}
