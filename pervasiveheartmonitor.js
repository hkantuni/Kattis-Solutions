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
  for (let i = 0; i < lines.length; i++) {
    const centance = lines[i].split(" ");

    let name = [];
    let numbers = [];

    for (let j = 0; j < centance.length; j++) {
      if (isNaN(parseInt(centance[j]))) {
        name.push(centance[j]);
      } else {
        numbers.push(centance[j]);
      }
    }

    let nums = numbers.map((i) => Number(i));

    let bpm = nums.reduce((a, b) => a + b, 0) / nums.length;
    let longName = name.join(" ");
    console.log(bpm.toFixed(6), longName);
  }
});
