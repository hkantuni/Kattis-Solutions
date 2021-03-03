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
  let list = [];

  for (let i = 0; i < numOfLists; i++) {
    list.push(lists[i].split(" "));
  }

  function intersection(x, y) {
    let s = new Set(y);
    return x.filter((item) => s.has(item));
  }

  let ans = list[0];

  for (let i = 1; i < numOfLists; i++) {
    ans = intersection(ans, list[i]);
  }

  ans.sort();
  console.log(ans.length);
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
});
