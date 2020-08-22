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
  const tempsNums = lines[1].split(" ");
  const ans = [];
  if (lines[0] == tempsNums.length) {
    tempsNums.forEach(function (num) {
      num = num * 1;
      if (num < 0) {
        ans.push(num);
      }
    });
  }

  console.log(ans.length);
});
