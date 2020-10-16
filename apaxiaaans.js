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
  let chars = lines[0].split("");
  let currentChar = "";
  let res = [];
  let lengthA = chars.length;
  let result = "";
  for (let i = 0; i < lengthA; i++) {
    if (chars[i] === currentChar) {
      i = i - 1;
      chars.splice(i, 1);
      lengthA = lengthA - 1;
    } else {
      currentChar = chars[i];
    }
  }
  res.push(chars);
  result = res[0].join("");
  console.log(result);
});
