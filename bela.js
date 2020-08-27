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
  const value = {
    A: 11,
    K: 4,
    Q: 3,
    J: 2,
    T: 10,
    "9": 0,
    "8": 0,
    "7": 0,
  };
  const dValue = {
    A: 11,
    K: 4,
    Q: 3,
    J: 20,
    T: 10,
    "9": 14,
    "8": 0,
    "7": 0,
  };

  const [N, ...hands] = lines;
  let count = 0;

  hands.forEach(function (hand) {
    hands.push(hand.split(""));
  });

  const nHands = N.split(" ")[0];
  const B = N.split(" ")[1];

  for (let i = 0; i < nHands * 4; i++) {
    if (hands[i][1] === B) {
      count = count + dValue[hands[i][0]];
    } else {
      count = count + value[hands[i][0]];
    }
  }

  console.log(count);
});
