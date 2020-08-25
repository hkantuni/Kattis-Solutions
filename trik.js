const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line.split(""));
});

reader.on("close", () => {
  let position = 1;

  for (let i = 0; i < lines[0].length; i++) {
    if (position === 1 && lines[0][i] === "A") {
      position = position + 1;
    } else if (position === 1 && lines[0][i] === "C") {
      position = position + 2;
    } else if (position === 2 && lines[0][i] === "B") {
      position = position + 1;
    } else if (position === 2 && lines[0][i] === "A") {
      position = position - 1;
    } else if (position === 3 && lines[0][i] === "C") {
      position = position - 2;
    } else if (position === 3 && lines[0][i] === "B") {
      position = position - 1;
    }
  }

  console.log(position);
});
