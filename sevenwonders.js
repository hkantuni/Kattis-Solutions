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
  const line = lines[0];

  const letterCount = {};

  for (let i = 0; i < line.length; i++) {
    if ((letterCount[line[i]] = (letterCount[line[i]] || 0) + 1)) {
    } else {
      letterCount[line[i]]++;
    }
  }

  let count = 0;

  Object.entries(letterCount).forEach(([key, value]) => {
    count = count + value * value;
  });
  const minA = Object.values(letterCount);
  if (
    letterCount["T"] === (letterCount["T"] || 0) &&
    letterCount["G"] === (letterCount["G"] || 0) &&
    letterCount["C"] === (letterCount["C"] || 0)
  ) {
    count = count + Math.min(...minA) * 7;
  }

  console.log(count);
});
