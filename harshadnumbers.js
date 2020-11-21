const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
  // const nums = line.split(" ").map(Number);
  // lines.push(nums);
});

reader.on("close", () => {
  let number = Number(lines[0]);
  let count = 0;

  for (let i = Number(lines[0]); count < 1; i++) {
    const str = number.toString();
    const result = str.split("").reduce(function (a, b) {
      return +a + +b;
    });
    if (Number(number) % result === 0) {
      count = count + 1;
      console.log(number);
    } else if (Number(number) % result !== 0) {
      number = Number(number) + 1;
    }
  }
});
