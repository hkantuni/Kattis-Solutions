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
  // console.log(lines[0]);
  const myNum = Number(lines[0]);
  const myBinNum = myNum.toString(2);

  function reverse(str) {
    let reversed = "";
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
  const newBin = reverse(myBinNum);

  console.log(parseInt(newBin, 2));
});
