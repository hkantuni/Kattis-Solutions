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
  const numbers = [];
  const [nTestCase, ...testCase] = lines;

  for (let i = 0, j = 0; i < nTestCase; i++, j += Number(testCase[j]) + 1) {
    numbers.push(testCase[j]);
  }

  for (
    let i = 0, j = 0, k = 0;
    i < nTestCase;
    i++, j += Number(numbers[i - 1])
  ) {
    k = k + Number(numbers[i]);
    let myArrays = testCase.slice(j + i + 1, k + i + 1);
    let towns = [...new Set(myArrays)];
    console.log(towns.length);
  }
});
