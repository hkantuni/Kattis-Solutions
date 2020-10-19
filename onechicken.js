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
  const people = lines[0][0];
  const pieces = lines[0][1];
  const diff = people - pieces;

  if (people > pieces) {
    if (diff === 1) {
      console.log("Dr. Chaz needs 1 more piece of chicken!");
    } else {
      console.log("Dr. Chaz needs " + diff + " more pieces of chicken!");
    }
  } else if (people < pieces) {
    if (diff === -1) {
      console.log("Dr. Chaz will have 1 piece of chicken left over!");
    } else {
      console.log(
        "Dr. Chaz will have " + diff * -1 + " pieces of chicken left over!"
      );
    }
  }
});
