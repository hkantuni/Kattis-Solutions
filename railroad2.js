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
  if (lines[0][1] % 2 === 0 || lines[0][1] === 0) {
    console.log("possible");
  } else {
    console.log("impossible");
  }
});
