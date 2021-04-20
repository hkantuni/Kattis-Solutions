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
  const [n, ...test] = lines;

  let count = 0;
  if (n[0] % 2 !== 0) {
    console.log("still running");
  } else {
    for (let i = 0; i < test.length; i += 2) {
      count = count + (test[i + 1][0] - test[i][0]);
    }
    console.log(count);
  }
});
