const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", function (line) {
  const linespl = line.split(" ");
  const num = linespl.map(Number);
  const ans = 2 * num[1] - num[0];
  console.log(ans);
});
