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
  let number = Number(lines[0]);

  if (number % 4 === 0) {
    console.log("Even");
  } else if (number % 2 === 0) {
    console.log("Odd");
  } else {
    console.log("Either");
  }
});
