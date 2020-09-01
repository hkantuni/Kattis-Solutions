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
  if (lines[0][0] === 0 && lines[0][1] === 0) {
    console.log("Not a moose");
  } else if (lines[0][0] === lines[0][1]) {
    console.log("Even", lines[0][0] * 2);
  } else if (lines[0][0] < lines[0][1]) {
    console.log("Odd", lines[0][1] * 2);
  } else if (lines[0][0] > lines[0][1]) {
    console.log("Odd", lines[0][0] * 2);
  }
});
