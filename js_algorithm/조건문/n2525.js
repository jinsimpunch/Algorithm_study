const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const time = input[0].split(" ");

let A = parseInt(time[0]);
let B = parseInt(time[1]);
let C = parseInt(input[1]);

let H = A + Math.floor((B + C) / 60);

let M = (B + C) % 60;

if (H >= 24) H -= 24;

console.log(H, M);
