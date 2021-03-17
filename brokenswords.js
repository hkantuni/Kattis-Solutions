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
  const [test, ...data] = lines;

  const letters = [];
  let countT = 0;
  let countB = 0;
  let countL = 0;
  let countR = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === "0") {
      letters.push("T");
      countT++;
    }
    if (data[i][1] === "0") {
      letters.push("B");
      countB++;
    }
    if (data[i][2] === "0") {
      letters.push("L");
      countL++;
    }
    if (data[i][3] === "0") {
      letters.push("R");
      countR++;
    }
  }

  let vertical = countT + countB;
  let horizontal = countL + countR;
  let swards = 0;

  if (vertical > horizontal) {
    swards = Math.floor(horizontal / 2);
  }
  if (vertical < horizontal) {
    swards = Math.floor(vertical / 2);
  }
  if (vertical === horizontal) {
    swards = Math.floor(vertical / 2);
  }
  let ans =
    swards + " " + (vertical - swards * 2) + " " + (horizontal - swards * 2);
  console.log(ans);
});
