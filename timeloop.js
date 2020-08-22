const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line * 1);
});

reader.on("close", () => {
  for (let i = 0; i < lines[0]; i++) {
    console.log((i + 1).toString(), "Abracadabra");
  }
});
