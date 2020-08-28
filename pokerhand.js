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
  const hand = [];
  const cards = [];
  const hands = lines[0].split(" ");

  hands.forEach((element) => {
    hand.push(element.split(""));
  });
  for (let i = 0; i < hand.length; i++) {
    cards.push(hand[i][0]);
  }

  const count = {};

  for (let i = 0; i < cards.length; i++) {
    if (count[cards[i]] === undefined) {
      count[cards[i]] = 1;
    } else {
      count[cards[i]]++;
    }
  }

  const cardCount = Object.entries(count);

  let maxValue = 1;
  cardCount.forEach(function ([prop, val]) {
    if (val > maxValue) {
      maxValue = val;
    }
  });
  console.log(maxValue);
});
