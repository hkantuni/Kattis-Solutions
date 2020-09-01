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
  // console.log(lines);
  const [N, ...nums] = lines;
  const exp = nums[0];

  let sum = 0;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] < 0) {
      sum += exp[i] * -1;
    }
  }
  console.log(sum);
});
