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
  const [a, b, c] = lines[0];
  if (a + b === c) {
    console.log(a + "+" + b + "=" + c);
  } else if (a === b + c) {
    console.log(a + "=" + b + "+" + c);
  } else if (a === b - c) {
    console.log(a + "=" + b + "-" + c);
  } else if (a * b === c) {
    console.log(a + "*" + b + "=" + c);
  } else if (a === b * c) {
    console.log(a + "=" + b + "*" + c);
  } else {
    console.log(a + "=" + b + "/" + c);
  }
});
