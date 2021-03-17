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
  const [test, ...numbers] = lines;
  const testCase = test[0];
  let bus = numbers[0].sort((a, b) => a - b);
  let myans = [];

  let myIndex = [];
  for (let i = 1; i < testCase - 1; i++) {
    if (bus[i] - bus[i - 1] === 1 && bus[i + 1] - bus[i] === 1) {
      myIndex.push(i);
    }
  }

  for (let j = 0; j < myIndex.length; j++) {
    bus.splice(myIndex[j], 1, "-");
  }

  for (let k = 0; k < bus.length; k++) {
    if (bus[k] === "-" && bus[k + 1] === "-") {
    } else {
      myans.push(bus[k]);
    }
  }

  let ans = "";
  for (let l = 0; l < myans.length; l++) {
    if (myans[l] === "-") {
      ans = ans + myans[l];
    } else if (myans[l + 1] === "-") {
      ans = ans + myans[l];
    } else {
      ans = ans + myans[l] + " ";
    }
  }
  console.log(ans, "\n");
});
