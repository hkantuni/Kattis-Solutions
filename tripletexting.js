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
  let N = [];
  let oneWordLength = lines[0].length / 3;
  for (let i = 0; i < lines[0].length; i += oneWordLength) {
    N.push(lines[0].slice(i, i + oneWordLength));
  }

  if (N[0] === N[1]) {
    console.log(N[0]);
  } else if (N[0] === N[2]) {
    console.log(N[2]);
  } else if (N[1] === N[2]) {
    console.log(N[1]);
  }
});
