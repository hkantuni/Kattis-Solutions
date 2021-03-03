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
  let [Num, ...lists] = lines;

  Num = Num.split(" ");

  const numOfLists = Number(Num[0]);
  const numOfItems = Number(Num[1]);
  const ans = [];
  for (let j = 0; j < numOfItems; j++) {
    let item = lists[0].split(" ")[j];
    let checkedLists = 0;
    for (let i = 1; i < numOfLists; i++) {
      if (lists[i].includes(item)) {
        checkedLists = checkedLists + 1;
      }
      if (checkedLists === numOfLists - 1) {
        ans.push(item);
      }
    }
  }
  ans.sort();
  console.log(ans.length);
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
});
