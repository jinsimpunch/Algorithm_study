const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString();

const time = parseInt(input / 4);

let result = "";

for (let i = 0; i < time; i++) result += "long ";

result += "int";
console.log(result);
