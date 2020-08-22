const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input.push(nums);
});

reader.on("close", () => {
  const angle = Number(degreesToRadians(input[0][1]));
  const sin = Number(Math.sin(angle));
  const ans = Math.ceil(input[0][0] / sin);
  console.log(ans);
});

function degreesToRadians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}
