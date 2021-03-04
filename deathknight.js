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
  const [N, ...battles] = lines;
  const numberOFBattles = Number(N);
  let count = 0;
  for (let i = 0; i < numberOFBattles; i++) {
    if (battles[i].includes("CD") === true) {
      count = count + 1;
    }
  }
  console.log(numberOFBattles - count);
});
