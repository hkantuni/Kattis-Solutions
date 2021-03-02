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
  const [N, ...days] = lines;

  let allDys = [];
  for (let i = 0; i < days.length; i++) {
    let dayBegin = days[i][0];
    let dayEnd = days[i][1];

    while (dayBegin <= dayEnd) {
      allDys.push(dayBegin++);
    }
  }

  let ansDays = [...new Set(allDys)];
  console.log(ansDays.length);
});
