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
  const str = lines[0];

  const letters = str.split("");
  let count = 0;
  let countS = "";
  for (let i = 0; i < str.length; i++) {
    if (letters[i] === "s" && countS === "") {
      countS = "s";
    } else if (letters[i] === "s" && countS === "s") {
      count += 1;
    } else if (letters[i] !== "s") {
      countS = "";
    }
  }
  if (count > 0) {
    console.log("hiss");
  } else {
    console.log("no hiss");
  }
});
