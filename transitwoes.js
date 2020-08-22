const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input.push(nums);
});

reader.on("close", () => {
  const totalTime = input[0][1] - input[0][0];

  let toBusWalkTime = 0;
  for (let i = 0; i < input[1].length; i++) {
    toBusWalkTime += input[1][i];
  }

  let busRideTime = 0;
  for (let i = 0; i < input[2].length; i++) {
    busRideTime += input[2][i];
  }
  let busWaitTime = 0;
  if (input[3][0] > input[1][0]) {
    busWaitTime = busWaitTime + (input[3][0] - input[1][0]);
  }

  let makeOrNo = totalTime - (toBusWalkTime + busRideTime + busWaitTime);
  if (makeOrNo < 0) {
    console.log("no");
  } else {
    console.log("yes");
  }
});
