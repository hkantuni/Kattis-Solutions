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
  const [kitten, ...test] = lines;
  let kittenPos = kitten[0];
  let ans = [];
  ans.push(kittenPos);
  for (let i = 0; i < test.length; i++) {
    if (test[i].includes(kittenPos) && test[i].indexOf(kittenPos) !== 0) {
      ans.push(test[i][0]);
      kittenPos = test[i][0];
      i = -1;
      continue;
    }
  }
  console.log(ans.join(" "));
});
