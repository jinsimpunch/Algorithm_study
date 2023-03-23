const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");

const n = input[0];

let arr = new Array(26).fill(0);

let result = "";

for (let i = 1; i <= n; i++) {
  arr[input[i].charCodeAt(0) - "a".charCodeAt(0)]++;
}

for (let i = 0; i < 26; i++) {
  if (arr[i] >= 5) result += String.fromCharCode(i + "a".charCodeAt(0));
}

if (result == "") console.log("PREDAJA");
else console.log(result);
