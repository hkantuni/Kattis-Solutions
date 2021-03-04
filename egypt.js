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
  for (let i = 0; i < lines.length; i++) {
    lines[i].sort((a, b) => a - b);
    let leg1 = lines[i][0];
    let leg2 = lines[i][1];
    let hypot = lines[i][2];
    if (leg1 * leg1 + leg2 * leg2 === 0) {
      break;
    } else if (leg1 * leg1 + leg2 * leg2 === hypot * hypot) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
});
