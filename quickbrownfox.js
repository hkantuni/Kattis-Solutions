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
  const [N, ...text] = lines;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < N; i++) {
    let centance = text[i].split(" ").join("").toLowerCase();
    let count = 0;
    let missing = [];
    for (let j = 0; j < alphabet.length; j++) {
      if (centance.includes(alphabet[j]) === true) {
        count = count + 1;
      } else {
        missing.push(alphabet[j]);
      }
    }
    if (count === 26) {
      console.log("pangram");
    } else {
      console.log("missing " + missing.join(""));
    }
  }
});
