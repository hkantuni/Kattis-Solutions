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
  let sentence = lines[0].toLowerCase();
  let ans = sentence
    .replace(/a/g, "@")
    .replace(/b/g, "8")
    .replace(/c/g, "(")
    .replace(/d/g, "|)")
    .replace(/e/g, "3")
    .replace(/f/g, "#")
    .replace(/g/g, "6")
    .replace(/h/g, "[-]")
    .replace(/i/g, "|")
    .replace(/j/g, "_|")
    .replace(/k/g, "|<")
    .replace(/l/g, "1")
    .replace(/m/g, "[]\\/[]")
    .replace(/n/g, "[]\\[]")
    .replace(/o/g, "0")
    .replace(/p/g, "|D")
    .replace(/q/g, "(,)")
    .replace(/r/g, "|Z")
    .replace(/s/g, "$")
    .replace(/t/g, "']['")
    .replace(/u/g, "|_|")
    .replace(/v/g, "\\/")
    .replace(/w/g, "\\/\\/")
    .replace(/x/g, "}{")
    .replace(/y/g, "`/")
    .replace(/z/g, "2");
  console.log(ans);
});
