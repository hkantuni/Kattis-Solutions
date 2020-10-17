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
  const answers = lines[1].split("");
  const Adrian = ["A", "B", "C"];
  const Bruno = ["B", "A", "B", "C"];
  const Goran = ["C", "C", "A", "A", "B", "B"];

  const AdrianArr = new Array(Math.ceil(answers.length / Adrian.length))
    .fill("ABC")
    .join("")
    .split("");
  const BrunoArr = new Array(Math.ceil(answers.length / Bruno.length))
    .fill("BABC")
    .join("")
    .split("");
  const GoranArr = new Array(Math.ceil(answers.length / Goran.length))
    .fill("CCAABB")
    .join("")
    .split("");

  const maxLength = Math.max(
    AdrianArr.length,
    BrunoArr.length,
    GoranArr.length
  );

  let AdrianCorrectAnswer = 0;
  let BrunoCorrectAnswer = 0;
  let GoranCorrectAnswer = 0;

  for (let i = 0; i < maxLength; i++) {
    if (answers[i] !== undefined && answers[i] === AdrianArr[i]) {
      AdrianCorrectAnswer += 1;
    }
    if (answers[i] !== undefined && answers[i] === BrunoArr[i]) {
      BrunoCorrectAnswer += 1;
    }
    if (answers[i] !== undefined && answers[i] === GoranArr[i]) {
      GoranCorrectAnswer += 1;
    }
  }

  const ans = Math.max(
    AdrianCorrectAnswer,
    BrunoCorrectAnswer,
    GoranCorrectAnswer
  );
  console.log(ans);
  if (AdrianCorrectAnswer === ans) {
    console.log("Adrian");
  }
  if (BrunoCorrectAnswer === ans) {
    console.log("Bruno");
  }
  if (GoranCorrectAnswer === ans) {
    console.log("Goran");
  }
});
