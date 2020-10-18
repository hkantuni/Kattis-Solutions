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
  const arr = lines[0].match(/.{3}/g);

  const arrToCheck = new Set(arr);

  if (arr.length !== arrToCheck.size) {
    console.log("GRESKA");
  } else {
    let P = 0;
    let K = 0;
    let H = 0;
    let T = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === "P") {
        P = P + 1;
      } else if (arr[i][0] === "K") {
        K = K + 1;
      } else if (arr[i][0] === "H") {
        H = H + 1;
      } else if (arr[i][0] === "T") {
        T = T + 1;
      }
    }

    console.log(13 - P, 13 - K, 13 - H, 13 - T);
  }
});
