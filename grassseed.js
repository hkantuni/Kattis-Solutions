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
  const [scost, slawns, ...sizes] = lines;
  const plotSizes = sizes.map((size) => size.split(" ").map(Number));
  const cost = Number(scost);

  let area = 0;
  plotSizes.forEach((plotSize) => {
    const [w, l] = plotSize;
    area = area + w * l;
  });
  const ans = (cost * area).toFixed(7);

  console.log(ans);
});
