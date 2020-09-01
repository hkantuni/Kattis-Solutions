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
  const [N, ...rest] = lines;

  for (let i = 0; i < rest.length; i++) {
    if (rest[i].startsWith("Simon says") === true) {
      console.log(rest[i].replace("Simon says ", ""));
    }
  }
});
