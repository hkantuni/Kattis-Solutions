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
  const nBites = Number(lines[0]);
  const words = lines[1].split(" ");

  let ans = false;
  for (let i = 0; i < nBites; i++) {
    if (words[i] === "mumble" || Number(words[i]) === i + 1) {
      ans = true;
    } else {
      ans = false;
      break;
    }
  }
  if (ans === true) {
    console.log("makes sense");
  } else {
    console.log("something is fishy");
  }
});
