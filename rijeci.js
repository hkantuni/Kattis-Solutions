const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  N = Number(line);
});

reader.on("close", () => {
  let a = 0,
    b = 1;

  for (let i = 1; i < N; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  console.log(a, b);
});
