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

  const keys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18, 19],
    [20, 21, 22],
    [23, 24, 25, 26],
    [0],
  ];
  const textInNums = [];

  for (let i = 0; i < text.length; i++) {
    textInNums.push(charPos(text[i]).split(" "));
  }
  for (let i = 0; i < textInNums.length; i++) {
    textInNums[i].pop();
  }
  const ans = [];

  for (let i = 0; i < textInNums.length; i++) {
    const A = [];
    for (let k = 0; k < textInNums[i].length; k++) {
      for (let j = 0; j < keys.length; j++) {
        for (let l = 0; l < keys[j].length; l++) {
          if (textInNums[i][k] == keys[j][l]) {
            let ans1 = j + 2;

            A.push(ans1.toString().repeat(l + 1));
          }
        }
      }
    }
    const B = A.map((n) => (n === "10" ? "0" : n));
    ans.push(B);
  }

  for (let i = 0; i < ans.length; i++) {
    let joined = "";
    for (let j = 0; j < ans[i].length - 1; j++) {
      const left = ans[i][j];
      const right = ans[i][j + 1];
      if (left[left.length - 1] === right[0]) {
        joined += left + " ";
      } else {
        joined += left;
      }
    }
    const last = ans[i][ans[i].length - 1];
    console.log(`Case #${i + 1}:`, joined + last);
  }
});

function charPos(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if (code > 96 && code < 123) {
      result += code - 96 + " ";
    } else if (code === 32) {
      result += code - 32 + " ";
    }
  }
  return result;
}
