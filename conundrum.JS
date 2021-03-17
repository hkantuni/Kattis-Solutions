const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  let str = lines[0];

  let count = 0;
  for (let i = 0; i < str.length; i += 3) {
    if (str[i] != "P") {
      count++;
    }
    if (str[i + 1] != "E") {
      count++;
    }
    if (str[i + 2] != "R") {
      count++;
    }
  }
  console.log(count);
});
