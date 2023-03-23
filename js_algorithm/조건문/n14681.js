const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");
const X = input[0];
const Y = input[1];

if (X > 0) {
  if (Y > 0) {
    console.log("1");
  } else console.log("4");
} else {
  if (Y > 0) {
    console.log("2");
  } else console.log("3");
}
