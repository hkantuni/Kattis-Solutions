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
  const [testCasestr, ...tests] = lines;
  let testCase = Number(testCasestr);
  let position = 0;

  for (let z = 0; z < testCase; z++) {
    let final = [];
    let eachCase = tests[position];
    let arr = [eachCase];

    for (let y = 1; y < parseInt(eachCase) + 1; y++) {
      arr.push(tests[position + y]);
    }

    for (let i = 1; i < Number(arr[0]) + 1; i++) {
      let newLine = arr[i].replace(" class", "");
      let name = newLine.substring(0, newLine.indexOf(":"));
      let level = newLine
        .substring(newLine.indexOf(":") + 2)
        .replace(/-/g, " ")
        .trim()
        .split(" ");
      level.reverse();
      while (level.length < 10) {
        level.push("middle");
      }

      for (let j = 0; j < 11; j++) {
        if (level[j] === "upper") {
          level[j] = 3;
        } else if (level[j] === "middle") {
          level[j] = 2;
        } else if (level[j] === "lower") {
          level[j] = 1;
        }
      }
      final.push([level, name]);
    }
    final.sort(function (a, b) {
      if (a[0] < b[0]) return 1;
      if (a[0] > b[0]) return -1;
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
    });

    for (let k = 0; k < final.length; k++) {
      console.log(final[k][1]);
    }
    console.log("=".repeat(30));

    position += parseInt(eachCase) + 1;
  }
});
