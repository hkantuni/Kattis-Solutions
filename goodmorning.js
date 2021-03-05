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
  const keys = {
    1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    2: ["2", "3", "5", "6", "8", "9", "0"],
    3: ["3", "6", "9"],
    4: ["4", "5", "6", "7", "8", "9", "0"],
    5: ["5", "6", "8", "9", "0"],
    6: ["6", "9"],
    7: ["7", "8", "9", "0"],
    8: ["8", "9", "0"],
    9: ["9"],
    0: ["0"],
  };

  const [testCase, ...input] = lines;

  for (let i = 0; i < testCase; i++) {
    let number = input[i][0];
    let ans = isPossible(number.toString());
    if (ans === true) {
      console.log(number);
    } else {
      let upper = number + 1;
      let lower = number - 1;
      while (true) {
        if (isPossible(upper.toString())) {
          console.log(upper);
          break;
        } else if (isPossible(lower.toString())) {
          console.log(lower);
          break;
        } else {
          upper += 1;
          lower -= 1;
        }
      }
    }
  }

  function isPossible(x) {
    let possible = true;
    for (let i = 0; i < x.length - 1; i++) {
      let nextDidit = x[i + 1];
      if (!keys[x[i]].includes(nextDidit)) {
        possible = false;
        break;
      }
    }
    return possible;
  }
});
