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
  const text = lines[0].split(" ");
  let includes = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i].includes("ae")) {
      includes++;
    }
  }
  if (includes >= text.length * 0.4) {
    console.log("dae ae ju traeligt va");
  } else {
    console.log("haer talar vi rikssvenska");
  }
});
