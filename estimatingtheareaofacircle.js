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
  for (let i = 0; i < lines.length - 1; i++) {
    const radius = lines[i][0];
    const areaCir = Math.PI * radius ** 2;
    const areaSq = 4 * radius ** 2;
    const dotsIn = lines[i][2];
    const dotsTot = lines[i][1];
    const relArea = (areaSq * dotsIn) / dotsTot;
    console.log(areaCir.toFixed(9), relArea.toFixed(8));
  }
});
