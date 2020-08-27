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
  lines.pop();
  for (let i = 0; i < lines.length; i++) {
    const [count] = lines[i];
    const testCase = [];
    const testCaseFirstLine = [];
    for (let j = 0; j < count; j++) {
      testCase.push(lines[i + 1 + j]);
    }
    i = i + count;

    let total = 0;
    let totalNext = 0;
    for (let k = 0; k < count; k++) {
      if (k === 0) {
        total = testCase[k][0] * testCase[k][1];
      } else {
        if (k !== 0) {
          totalNext =
            totalNext + testCase[k][0] * (testCase[k][1] - testCase[k - 1][1]);
        }
      }
    }
    console.log(total + totalNext + " miles");
  }
});
