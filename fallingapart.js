const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  lines.push(nums);
});

reader.on("close", () => {
  const n = lines[0][0];
  const pieses = lines[1];
  let Alice = 0;
  let Bob = 0;

  for (let i = 0; i < pieses.length; i++) {
    if (i === 0 || i % 2 === 0) {
      let index = pieses.indexOf(Math.max(...pieses));
      Alice = Alice + pieses[index];
      pieses.splice(index, 1);
      pieses.push(0);
    } else if (i !== 0) {
      let index = pieses.indexOf(Math.max(...pieses));
      Bob = Bob + pieses[index];
      pieses.splice(index, 1);
      pieses.push(0);
    }
  }
  console.log(Alice, Bob);
});
