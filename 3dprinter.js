const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stat = 0;
reader.on("line", function (line) {
  stat = line;
});

reader.on("close", function () {
  console.log(countDays(stat));
});
function countDays(stat) {
  let print = 1;
  let days = 1;

  while (print < stat) {
    print = print * 2;
    days++;
  }
  return days;
}
