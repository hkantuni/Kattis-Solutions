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
  const [nCase, ...rest] = lines;

  for (let i = 0; i < rest.length; i++) {
    rest[i].sort(function (a, b) {
      return a - b;
    });
  }

  for (let i = 1; i < rest.length; i += 2) {
    let count = rest[i][rest[i - 1] - 1] - rest[i][0];

    let ans = count * 2;
    console.log(ans);
  }
});
