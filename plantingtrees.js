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
  const [trees, ...day] = lines;
  const Ntree = trees[0];
  const days = day[0].sort(function (a, b) {
    return b - a;
  });

  let count = 0;
  for (let i = 0; i < Ntree + 1; i++) {
    let currentDays = days[i] + (i + 1);
    if (currentDays > count) {
      count = currentDays;
    }
  }
  console.log(count + 1);
});
