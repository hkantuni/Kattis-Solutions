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
  const [N, ...rest] = lines;

  for (let i = 0; i < rest.length; i++) {
    let sum = (rest[i][1] * (rest[i][1] + 1)) / 2 + rest[i][1];
    console.log(rest[i][0], sum);
  }
});
