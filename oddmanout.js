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
  const [test, ...data] = lines;
  const testCase = test[0];

  let count = 0;
  for (let i = 1; i < testCase * 2; i = i + 2) {
    let duplicates = data[i].reduce(function (acc, el, j, arr) {
      if (data[i].indexOf(el) !== j && acc.indexOf(el) < 0) acc.push(el);

      return acc;
    }, []);

    for (let k = 0; k < duplicates.length; k++) {
      data[i] = data[i].filter(function (e) {
        return e !== duplicates[k];
      });

      if (i === 1) {
        count++;
        console.log("Case #" + count + ":", data[i][0]);
      }

      if (data[i].length === 1 && i > 1) {
        count++;
        console.log("Case #" + count + ":", data[i][0]);
      }
    }
  }
});
