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
  for (let i = 0; i < lines.length; i++) {
    if (lines[i][0] === 0 && lines[i][1] === 0) {
      {
        break;
      }
    } else if (lines[i][0] + lines[i][1] === 13) {
      console.log("Never speak again.");
    } else if (lines[i][0] > lines[i][1]) {
      console.log("To the convention.");
    } else if (lines[i][0] < lines[i][1]) {
      console.log("Left beehind.");
      const readline = require("readline");

      const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const lines = [];

      reader.on("line", (line) => {
        lines.push(line);
        //or
        const nums = line.split(" ").map(Number);
        lines.push(nums);
      });

      reader.on("close", () => {
        console.log(lines);
      });
    } else if (lines[i][0] === lines[i][1]) {
      console.log("Undecided.");
    }
  }
});
