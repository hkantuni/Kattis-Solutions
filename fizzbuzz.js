const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input.push(nums);
});

reader.on("close", () => {
  for (let i = 1; i <= input[0][2]; i++) {
    if (i % input[0][0] === 0 && i % input[0][1] === 0) {
      console.log("FizzBuzz");
    } else if (i % input[0][0] === 0) {
      console.log("Fizz");
    } else if (i % input[0][1] === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
});
