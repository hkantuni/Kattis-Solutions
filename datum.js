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
  let day = new Date();
  let d = lines[0][0];
  let m = lines[0][1];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.setFullYear(2009, m - 1, d);
  let whatDay = day.getDay();
  console.log(days[whatDay]);
});
