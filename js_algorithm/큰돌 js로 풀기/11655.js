const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split(" ");
let result = "";
//13

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    //대문자
    if (input[i].charCodeAt(j) > 64 && input[i].charCodeAt(j) < 91) {
      if (input[i].charCodeAt(j) + 13 > 90) {
        result += String.fromCharCode(
          "A".charCodeAt(0) + (input[i].charCodeAt(j) + 13 - 91)
        );
      } else result += String.fromCharCode(input[i].charCodeAt(j) + 13);
    }
    //소문자
    else if (input[i].charCodeAt(j) > 96 && input[i].charCodeAt(j) < 123) {
      if (input[i].charCodeAt(j) + 13 > 122) {
        result += String.fromCharCode(
          "a".charCodeAt(0) + (input[i].charCodeAt(j) + 13 - 123)
        );
      } else result += String.fromCharCode(input[i].charCodeAt(j) + 13);
    } else result += input[i][j];
  }
  result += " ";
}

console.log(result);

// console.log("Z".charCodeAt(0));
