const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim();

let a = input;
let b = input.split("").reverse().join("");

if (a == b) console.log(1);
else console.log(0);
