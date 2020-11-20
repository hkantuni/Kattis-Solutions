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
  const [N, ...univer] = lines;

  let univers = [];
  let ans = [];
  let count = 0;

  for (let i = 0; i < N; i++) {
    let current = univer[i].split(" ");

    if (univers.includes(current[0])) {
    } else if (count < 12) {
      univers.push(current[0]);
      ans.push(univer[i]);
      count = count + 1;
      console.log(univer[i]);
    }
  }
});
