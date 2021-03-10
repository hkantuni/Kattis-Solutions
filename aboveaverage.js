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
  const [testCase, ...tests] = lines;

  for (let i = 0; i < testCase[0]; i++) {
    let sum = tests[i].reduce((a, b) => a + b, 0) - tests[i][0];
    let eachLen = tests[i].length - 1;
    let avarage = sum / eachLen;
    let newTests = [];
    let aboveAveCount = 0;
    for (let j = 1; j < eachLen + 1; j++) {
      if (tests[i][j] > avarage) {
        aboveAveCount++;
        newTests.push(tests[i][j]);
      }
    }
    let ans = (aboveAveCount * 100) / eachLen;
    console.log(ans.toFixed(3) + "%");
  }
});
