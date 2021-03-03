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
  const branchLength = lines[0][0];

  if (branchLength % 2 === 0) {
    console.log("Alice");
    console.log(1);
  } else {
    console.log("Bob");
  }
});
