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
  const [testCases, ...text] = lines;

  let str1 = "";
  let str2 = "";
  for (let i = 0; i < text.length - 1; i = i + 3) {
    str1 = text[i];
    str2 = text[i + 1];
    let newline = "";

    for (let j = 0; j < str1.length; j++) {
      if (str1[j] === str2[j]) {
        newline += ".";
      } else {
        newline += "*";
      }
    }
    text.splice(i + 2, 0, newline);
  }
  let mycount = 1;
  for (let k = 0; k < text.length; k++) {
    console.log(text[k]);
    if (mycount === 3) {
      console.log("\n");
      mycount = 1;
    } else {
      mycount++;
    }
  }
  // console.log(text);
});
//
