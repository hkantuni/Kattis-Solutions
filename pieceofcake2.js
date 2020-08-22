const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

reader.on("line", (line) => {
  input.push(line.split(" ").map(Number));
});

reader.on("close", () => {
  let h = 0;
  let v = 0;
  const t = 4;
  if (input[0][1] < input[0][0] / 2) {
    h = input[0][0] - input[0][1];
  } else {
    h = input[0][1];
  }
  if (input[0][2] < input[0][0] / 2) {
    v = input[0][0] - input[0][2];
  } else {
    v = input[0][2];
  }
  console.log(h * v * t);
});
