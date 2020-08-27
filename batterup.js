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
  let denominator = lines[0];
  let sum = 0;
  for (let i = 0; i < lines[0]; i++) {
    if (lines[1][i] === -1) {
      denominator = denominator - 1;
    } else {
      sum = sum + lines[1][i];
    }
  }
  const ans = sum / denominator;

  console.log(ans);
});
