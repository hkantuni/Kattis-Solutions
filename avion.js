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
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    let eachPhrase = lines[i].split("FBI");
    if (eachPhrase.length > 1) {
      console.log(i + 1);
    } else {
      count++;
    }
  }
  if (count === lines.length) {
    console.log("HE GOT AWAY!");
  }
});
