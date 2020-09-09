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
  const [e, f, c] = lines[0];
  let count = 0;
  let bot = e + f;
  for (let i = 0; i < e + f; i++) {
    if (bot > 0 && bot !== c && bot > c) {
      bot = bot - c + 1;
      count++;
    } else if (bot === c) {
      bot = bot - c;
      count++;
    } else if (bot < c && bot > 0) {
    }
  }

  console.log(count);
});
