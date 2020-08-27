const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  for (let i = 1; i < Number(lines[0]) + 1; i++) {
    console.log(lines[i].length);
  }
});
