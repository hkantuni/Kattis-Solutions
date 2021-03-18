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
  let n = lines[0][0];
  let p = lines[0][1];
  let q = lines[0][2];
  let turns = p + q;

  if (Math.floor(turns / n) % 2 === 0) {
    console.log("paul");
  } else {
    console.log("opponent");
  }
});
