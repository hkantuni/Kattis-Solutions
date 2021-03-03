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
  const [N, ...nums] = lines;
  const ans = nums.reverse();
  for (i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
});
