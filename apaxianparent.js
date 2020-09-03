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
  const name = lines[0].split(" ");

  let Y = name[0];
  let P = name[1];

  if (Y[Y.length - 1] === "e") {
    console.log(Y + "x" + P);
  } else if (Y[Y.length - 1].match(/[aiou]/g)) {
    Y = Y.slice(0, Y.length - 1);
    console.log(Y + "ex" + P);
  } else if (Y[Y.length - 1] === "x" && Y[Y.length - 2] === "e") {
    console.log(Y + P);
  } else {
    console.log(Y + "ex" + P);
  }
});
