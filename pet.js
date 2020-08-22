const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input.push(nums);
});

reader.on("close", () => {
  let ans = [];

  for (let i = 0; i < input.length; i++) {
    ansEach = input[i][0] + input[i][1] + input[i][2] + input[i][3];
    ans.push(ansEach);
  }

  let index = ans.indexOf(Math.max(...ans));
  console.log(index + 1, Math.max(...ans));
});
