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
  const numbers = lines[0].sort((a, b) => a - b);
  let pos1 = numbers[0];
  let pos2 = numbers[1];
  let pos3 = numbers[2];
  if (pos3 - pos2 === pos2 - pos1 && pos3 + (pos3 - pos2) <= 100) {
    console.log(pos3 + (pos3 - pos2));
  } else if (pos3 - pos2 === pos2 - pos1 && pos3 + (pos3 - pos2) > 100) {
    console.log(pos1 - (pos3 - pos2));
  } else if (pos2 - pos1 > pos3 - pos2) {
    console.log(pos1 + (pos3 - pos2));
  } else if (pos2 - pos1 < pos3 - pos2) {
    console.log(pos2 + (pos2 - pos1));
  }
});
