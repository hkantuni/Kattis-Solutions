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
  // prettier-ignore
  const digits = {
    "0": [
      "+---+",
      "|   |",
      "|   |",
      "+   +",
      "|   |",
      "|   |",
      "+---+",
    ],
    "1": [
      "    +",
      "    |",
      "    |",
      "    +",
      "    |",
      "    |",
      "    +",
    ],
    "2": [
      "+---+",
      "    |",
      "    |",
      "+---+",
      "|    ",
      "|    ",
      "+---+"
    ],
    "3": [
      "+---+",
      "    |",
      "    |",
      "+---+",
      "    |",
      "    |",
      "+---+"
    ],
    "4": [
      "+   +",
      "|   |",
      "|   |",
      "+---+",
      "    |",
      "    |",
      "    +"
    ],
    "5": [
      "+---+",
      "|    ",
      "|    ",
      "+---+",
      "    |",
      "    |",
      "+---+"
    ],
    "6": [
      "+---+",
      "|    ",
      "|    ",
      "+---+",
      "|   |",
      "|   |",
      "+---+"
    ],
    "7": [
      "+---+",
      "    |",
      "    |",
      "    +",
      "    |",
      "    |",
      "    +"
    ],
    "8": [
      "+---+",
      "|   |",
      "|   |",
      "+---+",
      "|   |",
      "|   |",
      "+---+"
    ],
    "9": [
      "+---+",
      "|   |",
      "|   |",
      "+---+",
      "    |",
      "    |",
      "+---+"
    ],
    ":": [
      " ",
      " ",
      "o",
      " ",
      "o",
      " ",
      " ",
    ]
  }

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "end") {
      console.log("end");
    } else {
      const current = lines[i].split("");

      let ans = Array(7).fill("");
      current.forEach((num, index) => {
        for (let j = 0; j < 7; j++) {
          ans[j] += digits[num][j];
          if (index < current.length - 1) {
            ans[j] += "  ";
          }
        }
      });
      for (let j = 0; j < 7; j++) {
        console.log(ans[j]);
      }
      console.log("\n");
    }
  }
});
