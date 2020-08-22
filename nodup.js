const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const n = line.split(" ");
  hasDuplicates(words);
});

function hasDuplicates(words) {
  let a = words.some(function (word) {
    return words.indexOf(word) !== words.lastIndexOf(word);
  });
  if (a === true) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
hasDuplicates(words);
