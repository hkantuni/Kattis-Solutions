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
  if (Number(lines[0][2]) > Number(lines[0][6])) {
    console.log(Number(lines[0][2] + lines[0][1] + lines[0][0]));
  } else if (Number(lines[0][2]) < Number(lines[0][6])) {
    console.log(Number(lines[0][6] + lines[0][5] + lines[0][4]));
  } else if (Number(lines[0][2]) === Number(lines[0][6])) {
    if (Number(lines[0][1]) > Number(lines[0][5])) {
      console.log(Number(lines[0][2] + lines[0][1] + lines[0][0]));
    } else if (Number(lines[0][1]) < Number(lines[0][5])) {
      console.log(Number(lines[0][6] + lines[0][5] + lines[0][4]));
    } else if (Number(lines[0][1]) === Number(lines[0][5])) {
      if (Number(lines[0][0]) > Number(lines[0][4])) {
        console.log(Number(lines[0][2] + lines[0][1] + lines[0][0]));
      } else {
        console.log(Number(lines[0][6] + lines[0][5] + lines[0][4]));
      }
    }
  }
});
