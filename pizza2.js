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
  const R = lines[0][0];
  const C = lines[0][1];
  const pizzaSurface = Math.PI * Math.pow(R, 2);
  const crustSurface = pizzaSurface - Math.PI * Math.pow(R - C, 2);

  const res = 100 - (crustSurface * 100) / pizzaSurface;
  console.log(res.toFixed(8));
});
