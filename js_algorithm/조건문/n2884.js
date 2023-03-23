const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split(" ");
const H = parseInt(input[0]);
const M = parseInt(input[1]);

if (M - 45 >= 0) {
  console.log(H, M - 45);
} else {
  if (H - 1 < 0) {
    console.log(24 - 1, 60 - (45 - M));
  } else {
    console.log(H - 1, 60 - (45 - M));
  }
}
