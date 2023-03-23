const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const A = parseInt(input[0]);
const B = input[1];
var sum = 0;

console.log(A * B[2]);

sum = A * B[2];

console.log(A * B[1]);

sum += A * B[1] * 10;

console.log(A * B[0]);

sum += A * B[0] * 100;

console.log(sum);
