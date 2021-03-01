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
  const line = lines[0];

  const letters = line.split("");

  for (let i = 0; i < letters.length; i++) {
    if (
      letters[i] === "a" ||
      letters[i] === "e" ||
      letters[i] === "i" ||
      letters[i] === "o" ||
      letters[i] === "u"
    ) {
      letters.splice(i, 2);
    }
  }

  const ans = letters.join("");
  console.log(ans);
});
