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
  const totalChar = lines[0].length;
  const letters = lines[0].split("");
  let wSpace = 0;
  let loCase = 0;
  let upCase = 0;
  let symbol = 0;

  for (i = 0; i < letters.length; i++) {
    if (letters[i].match(/[_]/g)) {
      wSpace += 1;
    } else if (letters[i].match(/[a-z]/g)) {
      loCase += 1;
    } else if (letters[i].match(/[A-Z]/g)) {
      upCase += 1;
    } else if (letters[i].match(/[^a-zA-Z\s_]/g)) {
      symbol += 1;
    }
  }
  console.log(wSpace / totalChar);
  console.log(loCase / totalChar);
  console.log(upCase / totalChar);
  console.log(symbol / totalChar);
});
