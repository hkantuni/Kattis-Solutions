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
  const [N, ...texts] = lines;
  const tokens = [];

  texts.forEach((text) => {
    tokens.push(text.split(" "));
  });

  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i][0]) === false) {
      let store = "";
      tokens[i][0] = tokens[i][0] / 2;
      store = tokens[i][0];
      tokens[i][0] = tokens[i][1];
      tokens[i][1] = store;
    } else {
      tokens[i][1] = parseInt(tokens[i][1], 10);
    }
  }

  tokens.sort(function (a, b) {
    return a[1] - b[1];
  });

  tokens.forEach((text) => {
    console.log(text[0]);
  });
});
