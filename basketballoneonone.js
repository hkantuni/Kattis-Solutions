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
  const letters = lines[0].split("");

  let countA = 0;
  let countB = 0;
  for (let i = 0; i < letters.length - 1; i += 2) {
    if (letters[i] === "A") {
      countA += Number(letters[i + 1]);
    } else if (letters[i] === "B") {
      countB += Number(letters[i + 1]);
    }
  }
  if (countA > countB) {
    console.log("A");
  } else {
    console.log("B");
  }
});
