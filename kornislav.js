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
  const rest = lines[0];
  const minNum = Math.min(...rest);
  const maxNum1 = Math.max(...rest);
  const maxNumIndex = rest.indexOf(maxNum1);

  rest.splice(maxNumIndex, 1);

  const maxNum = Math.max(...rest);

  console.log(minNum * maxNum);
});
