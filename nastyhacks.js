const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input.push(nums);
});

reader.on("close", () => {
  // console.log(input);

  let ans = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i][1] - input[i][2] - input[i][0] === 0) {
      console.log("does not matter");
    } else if (input[i][1] - input[i][2] - input[i][0] > 0) {
      console.log("advertise");
    } else {
      console.log("do not advertise");
    }
  }
});
