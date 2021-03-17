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
  const [n, ...data] = lines;
  let min = 0;
  let sec = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    min += data[i][0];
    sec += data[i][1];
    count = sec / (min * 60);
  }
  if (count <= 1) {
    console.log("measurement error");
  } else {
    console.log(count.toFixed(9));
  }
});
