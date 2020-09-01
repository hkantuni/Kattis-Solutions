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
  const [lic, ...rest] = lines;
  const days = rest[0];
  const minDay = Math.min(...days);
  const wait = days.findIndex(function (days) {
    return days === minDay;
  });
  console.log(wait);
});
