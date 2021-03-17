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
  if (
    lines[0] === "South West East" ||
    lines[0] === "South West North" ||
    lines[0] === "South North East" ||
    lines[0] === "West North South" ||
    lines[0] === "West North East" ||
    lines[0] === "West East South" ||
    lines[0] === "North East West" ||
    lines[0] === "North East South" ||
    lines[0] === "North South West" ||
    lines[0] === "East South North" ||
    lines[0] === "East South West" ||
    lines[0] === "East West North"
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
