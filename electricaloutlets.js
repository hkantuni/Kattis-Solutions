const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  lines.push(nums);
});

reader.on("close", () => {
  for (let i = 1; i < lines.length; i++) {
    let sum = lines[i].reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log(sum - lines[i][0] - (lines[i][0] - 1));
  }
});
