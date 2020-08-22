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
  const groups = [];
  let totalNumber = 0;
  let notAllowed = 0;
  const nLines = lines[0].split(" ");
  for (let i = 1; i <= lines.length - 1; i++) {
    groups.push(lines[i].split(" "));
  }
  if (Number(nLines[1]) > 0) {
    if (groups[0][0] === "enter" && Number(groups[0][1]) <= Number(nLines[0])) {
      totalNumber += Number(groups[0][1]);
    } else if (
      groups[0][0] === "enter" &&
      Number(groups[0][1]) > Number(nLines[0])
    ) {
      notAllowed++;
    }
  }

  for (let i = 1; i < Number(nLines[1]); i++) {
    if (groups[i][0] === "enter") {
      totalNumber += Number(groups[i][1]);
      if (totalNumber > Number(nLines[0])) {
        notAllowed++;
        totalNumber = totalNumber - Number(groups[i][1]);
      }
    } else if (groups[i][0] === "leave") {
      totalNumber -= Number(groups[i][1]);
    }
  }

  console.log(notAllowed);
  console.log(lines);
  console.log(nLines);
});
