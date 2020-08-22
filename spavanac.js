const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputTime = [];

reader.on("line", (line) => {
  inputTime.push(line.split(" "));
});

reader.on("close", () => {
  const time = [];
  inputTime[0].forEach(function (num) {
    num = num * 1;
    time.push(num);
  });

  const ans = [];
  const minDiff = 45 - time[1];

  if (time[0] === 0 && time[1] > 45) {
    ans.push(time[0], time[1] - 45);
    console.log(ans[0], ans[1]);
  } else if (time[0] === 0 && time[1] < 45) {
    ans.push(23, 60 - minDiff);
    console.log(ans[0], ans[1]);
  } else if (time[0] !== 0 && time[1] > 45) {
    ans.push(time[0], time[1] - 45);
    console.log(ans[0], ans[1]);
  } else if (time[0] !== 0 && time[1] < 45) {
    ans.push(time[0] - 1, 60 - minDiff);
    console.log(ans[0], ans[1]);
  } else if ((time[1] = 45)) {
    ans.push(time[0], 0);
    console.log(ans[0], ans[1]);
  }
});
