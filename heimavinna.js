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
  let a = lines[0].split(";");
  let list = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("-")) {
      let newA = a[i].split("-");
      for (let j = Number(newA[0]); j <= Number(newA[1]); j++) {
        list.push(j);
      }
    } else {
      list.push(Number(a[i]));
    }
  }
  console.log(list.length);
});
