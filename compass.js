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
  const [fromC, toC] = lines;
  const from = fromC[0];
  const to = toC[0];

  if (from === to) {
    console.log(0);
  } else if (from < to) {
    let diffA = to - from;
    let diffB = 360 - to + from;
    if (diffA <= diffB) {
      console.log(diffA);
    } else {
      console.log(diffB * -1);
    }
  } else {
    let diffC = from - to;
    let diffD = 360 - from + to;
    if (diffC < diffD) {
      console.log(diffC * -1);
    } else {
      console.log(diffD);
    }
  }
});
