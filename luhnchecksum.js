const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const [N, ...test] = lines;

  for (let k = 0; k < test.length; k++) {
    let count = 0;
    for (let i = test[k].length - 2; i >= 0; i = i - 2) {
      let temp = test[k][i] * 2;

      if (temp > 9) {
        temp1 = Number(temp.toString()[0]) + Number(temp.toString()[1]);
        test[k] = test[k].substring(0, i) + temp1 + test[k].substring(i + 1);
        count += temp1;
      } else {
        test[k] = test[k].substring(0, i) + temp + test[k].substring(i + 1);
        count += temp;
      }
    }
    for (let i = test[k].length - 1; i >= 0; i = i - 2) {
      count += Number(test[k][i]);
    }
    if (count % 10 === 0) {
      console.log("PASS");
    } else {
      console.log("FAIL");
    }
  }
});
