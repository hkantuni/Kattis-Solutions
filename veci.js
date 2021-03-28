const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  // lines.push(line);
  // //or
  const nums = line.split(" ").map(Number);
  lines.push(nums);
});

reader.on("close", () => {
  let data = lines[0][0];
  // let maxNum = Math.max(...data);
  let newData = data.toString(10).split("").map(Number);
  // console.log("aaa", Number(data));

  var permArr = [],
    usedChars = [];

  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }
  let ans = permute(newData);
  // console.log(ans);
  let ans1 = [];
  for (let i = 0; i < ans.length; i++) {
    // console.log(ans[i]);
    ans1.push(Number(ans[i].join("")));
  }
  // console.log(ans1);
  // let eql = Math.min(...ans1);
  // console.log("eql", eql);

  let result = ans1.filter((ans) => ans > data);
  result = result.sort((a, b) => a - b);
  // console.log(result[0]);

  if (result[0] != undefined) {
    console.log(result[0]);
  } else {
    console.log(0);
  }
});
