const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
reader.on("line", (line) => {
  lines.push(Number(line));
});

reader.on("close", function () {
  const [n, ...nums] = lines;
  nums.forEach((num) => {
    isEven(num);
  });
});

function isEven(n) {
  if (n % 2 === 0) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }
}
