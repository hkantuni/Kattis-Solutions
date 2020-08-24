const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const total = [1, 1, 2, 2, 2, 8];
let lines = [];
const ans = [];
reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  lines.push(nums);
});

reader.on("close", () => {
  lines = lines[0];
  for (let i = 0; i < lines.length; i++) {
    ans.push(total[i] - lines[i]);
  }

  console.log(ans.join(" "));
});
