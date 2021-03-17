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
  const [testCase, ...desk] = lines;
  let counter = 1;
  let previouseDesk = 0;
  for (let i = 0; i < testCase[0]; i++) {
    if (desk[i][0] > previouseDesk) {
      previouseDesk = desk[i][0];
    } else {
      counter++;
      previouseDesk = desk[i][0];
    }
  }
  console.log(counter);
});
