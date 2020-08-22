const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

reader.on("line", (line) => {
  const nams = line.split(" ");
  input.push(nams);
});

reader.on("close", () => {
  input.sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return a[1].localeCompare(b[1]);
    }
  });

  const names = {};
  for (let i = 0; i < input.length; i++) {
    const fName = input[i][0];
    names[fName] = (names[fName] || 0) + 1;
  }

  for (let i = 0; i < input.length; i++) {
    if (names[input[i][0]] === 1) {
      console.log(input[i][0]);
    } else {
      console.log(input[i][0], input[i][1]);
    }
  }
  console.log(input);
  console.log(names);
});
