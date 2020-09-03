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
  const a = lines[0][0];
  const b = lines[0][1];
  const c = lines[0][2];
  const d = lines[0][3];
  const p = (a + b + c + d) / 2;
  const maxArea = Math.sqrt((p - a) * (p - b) * (p - c) * (p - d));
  console.log(maxArea);
});
