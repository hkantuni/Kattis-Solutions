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
  const k = lines.splice(1);
  let cases = lines[0][0];

  for (let i = 0; i < cases; i++) {
    let sum = Math.pow(2, k[i][0]) - 1;
    console.log(sum);
  }
});
