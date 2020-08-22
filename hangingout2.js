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
  const [firstLine, ...groups] = lines;
  const [L, x] = firstLine.split(" ").map(Number);
  let total = 0;
  let notAllowed = 0;

  groups.forEach((group) => {
    const [action, size] = group.split(" ");
    if (action === "enter") {
      if (total + Number(size) > L) {
        notAllowed++;
      } else {
        total += Number(size);
      }
    } else {
      total -= Number(size);
    }
  });

  console.log(notAllowed);
});
