const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line.split(" "));
});

reader.on("close", () => {
  const len = Number(lines[0]);
  let total = 0;
  for (i = 1; i < len + 1; i++) {
    let ans = lines[i][0] * lines[i][1];
    total += ans;
  }
  console.log(total.toFixed(3));
});
