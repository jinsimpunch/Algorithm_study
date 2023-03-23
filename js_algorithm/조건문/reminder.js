const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > y) console.log(">");
else if (x < y) console.log("<");
else console.log("==");
