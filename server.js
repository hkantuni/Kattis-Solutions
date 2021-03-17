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
  const numberOfProblems = lines[0][0];
  const time = lines[0][1];
  const problems = lines[1];
  let count = 0;
  let i = 0;

  while (count + problems[i] <= time) {
    count = count + problems[i];
    i++;
  }
  console.log(i);
});
