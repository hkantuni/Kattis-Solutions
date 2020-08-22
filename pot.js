const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input = [...input, ...nums];
});

reader.on("close", () => {
  const array = input.slice(1);
  const pow = [];
  const numberBody = [];
  const numToPow = [];
  array.forEach(function (num, index) {
    let numstr = num.toString();
    numberBody.push(Number(numstr.slice(0, numstr.length - 1)));
    pow.push(num % 10);
    let mPow = Math.pow(numberBody[index], pow[index]);
    numToPow.push(mPow);
  });
  let ans = 0;
  for (let i = 0; i < numToPow.length; i++) {
    ans += numToPow[i];
  }

  console.log(ans);
});
