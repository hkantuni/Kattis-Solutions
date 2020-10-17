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
  const myNumbers = lines[1].slice(1);

  for (let k = 0; k < myNumbers.length; k++) {
    numTwo = Number(myNumbers[k]);
    numOne = Number(lines[1][0]);

    for (let i = Math.max(numOne, numTwo); i > 1; i--) {
      if (numOne % i == 0 && numTwo % i == 0) {
        numOne /= i;
        numTwo /= i;
      }
    }

    console.log(numOne.toString() + "/" + numTwo.toString());
  }
});
