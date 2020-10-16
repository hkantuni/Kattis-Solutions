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
  const sqWidth = lines[0][1] * lines[0][1];
  const sqHeight = lines[0][2] * lines[0][2];
  const maxLength = Math.sqrt(sqWidth + sqHeight);
  const eachMatch = lines.slice(1);

  for (let i = 0; i < eachMatch.length; i++) {
    if (eachMatch[i] <= maxLength) {
      console.log("DA");
    } else {
      console.log("NE");
    }
  }
});
