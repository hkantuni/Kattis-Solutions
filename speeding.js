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
  const [N, ...range] = lines;
  let photos = N[0];
  let maxSpeed = 0;
  let speed = 0;
  for (let i = photos - 1; i > 0; i--) {
    speed = (range[i][1] - range[i - 1][1]) / (range[i][0] - range[i - 1][0]);
    if (maxSpeed < speed) {
      maxSpeed = speed;
    }
  }

  console.log(Math.floor(maxSpeed));
});
