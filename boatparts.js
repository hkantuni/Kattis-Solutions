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
  const [part, ...partName] = lines;
  const [partsNum, seasonDays] = part.split(" ");
  const usedParts = [];
  for (let i = 0; i < partName.length; i++) {
    if (usedParts.indexOf(partName[i]) === -1) {
      usedParts.push(partName[i]);
    }
  }
  if (usedParts.length < Number(partsNum)) {
    console.log("paradox avoided");
  } else {
    const ans = usedParts[partsNum - 1];
    console.log(partName.indexOf(ans) + 1);
  }
});
