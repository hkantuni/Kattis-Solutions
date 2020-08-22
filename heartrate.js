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
    const bpm = (60 * lines[i][0]) / lines[i][1];
    const minAbpm = (60 / lines[i][1]) * (lines[i][0] - 1);
    const maxAbpm = (60 / lines[i][1]) * (lines[i][0] + 1);
    console.log(minAbpm.toFixed(4), bpm.toFixed(4), maxAbpm.toFixed(4));
  }
});
