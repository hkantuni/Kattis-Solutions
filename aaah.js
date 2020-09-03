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
  const jonCan = lines[0];
  const docRequest = lines[1];
  const jonA = countBs(jonCan);
  const docA = countBs(docRequest);

  if (jonA >= docA) {
    console.log("go");
  } else {
    console.log("no");
  }
});

function countBs(str) {
  const letters = str.split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (letters[i] === "a") {
      count += 1;
    }
  }
  return count;
}
