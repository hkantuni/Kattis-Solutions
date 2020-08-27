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
  const firstArr = [];
  for (let i = lines[0][0] + 1; i < lines[0][1]; i++) {
    firstArr.push(i);
  }

  const lastArr = [];
  for (let i = lines[0][1] + 1; i < lines[0][2]; i++) {
    lastArr.push(i);
  }

  if (firstArr.length > lastArr.length) {
    console.log(firstArr.length);
  } else if (firstArr.length < lastArr.length) {
    console.log(lastArr.length);
  } else if (firstArr.length === lastArr.length) {
    console.log(lastArr.length);
  }
});
