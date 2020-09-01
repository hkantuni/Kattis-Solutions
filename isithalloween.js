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
  const line = lines[0].split(" ");

  let month = line[0];
  let date = line[1];

  if (month === "OCT" && date === "31") {
    console.log("yup");
  } else if (month === "DEC" && date === "25") {
    console.log("yup");
  } else {
    console.log("nope");
  }
});
