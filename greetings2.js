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
  const letters = [...lines[0]];

  let count = 0;

  letters.forEach((letter) => {
    if (letter === "e") {
      count++;
    }
  });
  const index = letters.indexOf("e");
  const addition = "e".repeat(count);
  letters.splice(index, 0, addition);
  console.log(letters.join(""));
});
