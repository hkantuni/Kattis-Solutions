const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = [];

reader.on("line", (line) => {
  num.push(line * 1);
});

reader.on("close", () => {
  if (num % 2 === 0) {
    console.log("Bob");
  } else {
    console.log("Alice");
  }
});
