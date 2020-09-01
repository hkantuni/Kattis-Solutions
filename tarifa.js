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
  const [X, N, ...P] = lines;
  let ans = X[0];

  for (let i = 0; i < P.length; i++) {
    ans = ans + X[0] - P[i];
  }

  console.log(ans);
});
