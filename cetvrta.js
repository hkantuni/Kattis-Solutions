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
  const x = [];
  const y = [];

  const ans = [];

  for (let i = 0; i < lines.length; i++) {
    x.push(lines[i][0]);
    y.push(lines[i][1]);
  }
  const xLast = {};
  for (let i = 0; i < x.length; i++) {
    const coordinate = x[i];
    xLast[coordinate] = (xLast[coordinate] || 0) + 1;
  }

  const yLast = {};
  for (let i = 0; i < y.length; i++) {
    const coordinate = y[i];
    yLast[coordinate] = (yLast[coordinate] || 0) + 1;
  }

  const xentries = Object.entries(xLast);

  xentries.forEach(function ([prop, val]) {
    if (val === 1) {
      ans.push(prop);
    }
  });

  const yentries = Object.entries(yLast);

  yentries.forEach(function ([prop, val]) {
    if (val === 1) {
      ans.push(prop);
    }
  });

  console.log(ans[0], ans[1]);
});
