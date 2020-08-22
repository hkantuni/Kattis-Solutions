const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", function (line) {
  const n = Number(line);
  console.log(Math.pow(Math.pow(2, n) + 1, 2));
});
