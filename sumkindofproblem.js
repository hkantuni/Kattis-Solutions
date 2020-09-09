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
  const [K, ...N] = lines;

  for (let i = 0; i < N.length; i++) {
    let sumPos = 0;
    let sumOdd = 0;
    let sumEven = 0;

    for (let j = 1, k = 1, l = 2; j <= N[i][1]; j++, k += 2, l += 2) {
      sumPos += j;
      sumOdd += k;
      sumEven += l;
    }
    console.log(i + 1, sumPos, sumOdd, sumEven);
  }
});
