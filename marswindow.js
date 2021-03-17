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
  let year = lines[0][0];
  if (((year - 2017) * 12 - 4) % 26 < 12) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
