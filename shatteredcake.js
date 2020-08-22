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
  let total = 0;

  for (let i = 2; i < input.length; i++) {
    const ans = input[i][0] * input[i][1];
    total += ans;
  }
  console.log(total / input[0]);
});
