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
  const [N, ...array] = lines;

  for (let i = 0; i < N; i++) {
    let a = array[i][0];
    let b = array[i][1];
    let c = array[i][2];

    if (a + b === c) {
      console.log("Possible");
    } else if (a * b === c) {
      console.log("Possible");
    } else if (a - b === c) {
      console.log("Possible");
    } else if (b - a === c) {
      console.log("Possible");
    } else if (a / b === c) {
      console.log("Possible");
    } else if (b / a === c) {
      console.log("Possible");
    } else {
      console.log("Impossible");
    }
  }
});
