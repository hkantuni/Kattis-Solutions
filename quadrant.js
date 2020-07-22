const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];

reader.on("line", function (line) {
  const a = Number(line);
  numbers.push(a);
});

reader.on("close", function () {
  console.log(solve(numbers[0], numbers[1]));
});

function solve(a, b) {
  if (a > 0 && b > 0) {
    return 1;
  } else if (a < 0 && b < 0) {
    return 3;
  } else if (a < 0 && b > 0) {
    return 2;
  } else if (a > 0 && b < 0) {
    return 4;
  }
}
