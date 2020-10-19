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
  const data = lines[0];
  let ans = 0;
  for (let i = data[0]; i <= data[1]; i++) {
    const memo = new Array(10).fill(0);

    let tmp = i;
    while (tmp > 0) {
      let d = tmp % 10;
      if (d === 0 || memo[d] > 0 || i % d > 0) {
        break;
      }
      memo[d]++;
      tmp = (tmp - d) / 10;
    }
    if (tmp === 0) {
      ans++;
    }
  }
  console.log(ans);
});
