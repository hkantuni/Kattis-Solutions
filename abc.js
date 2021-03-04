const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
const numbers = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const num = lines[0].split(" ");
  let letters = lines[1];
  for (let i = 0; i < num.length; i++) {
    numbers.push(parseInt(num[i]));
  }
  const sortedNumbers = numbers.sort((a, b) => a - b);

  if (letters === "ABC") {
    console.log(
      sortedNumbers[0] + " " + sortedNumbers[1] + " " + sortedNumbers[2]
    );
  } else if (letters === "ACB") {
    console.log(
      sortedNumbers[0] + " " + sortedNumbers[2] + " " + sortedNumbers[1]
    );
  } else if (letters === "BAC") {
    console.log(
      sortedNumbers[1] + " " + sortedNumbers[0] + " " + sortedNumbers[2]
    );
  } else if (letters === "BCA") {
    console.log(
      sortedNumbers[1] + " " + sortedNumbers[2] + " " + sortedNumbers[0]
    );
  } else if (letters === "CAB") {
    console.log(
      sortedNumbers[2] + " " + sortedNumbers[0] + " " + sortedNumbers[1]
    );
  } else if (letters === "CBA") {
    console.log(
      sortedNumbers[2] + " " + sortedNumbers[1] + " " + sortedNumbers[0]
    );
  }
});
