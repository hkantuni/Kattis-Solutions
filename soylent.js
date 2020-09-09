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
  const [N, ...cals] = lines;
  cals.forEach((num) => {
    if (num < 1) {
      console.log("0");
    } else if (num < 400) {
      console.log("1");
    } else {
      console.log(Math.ceil(num / 400).toString());
    }
  });
});
