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
  let lowEnd = lines[0][0];
  let highEnd = lines[1][0];
  let X = lines[2][0];
  let ans = [];

  for (let i = lowEnd; i < highEnd + 1; i++) {
    let sum = i
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);

    if (sum === X) {
      ans.push(i);
      break;
    }
  }
  for (let i = highEnd; i > lowEnd - 1; i--) {
    let sum = i
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    if (sum === X) {
      ans.push(i);
      break;
    }
  }
  console.log(ans[0]);
  console.log(ans[1]);
});
