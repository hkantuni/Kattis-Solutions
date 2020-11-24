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
  const [N, B] = lines;
  let bot = Number(N);
  let bev = B.toLowerCase();

  for (let i = bot; i > 0; i--) {
    if (i === 1) {
      console.log(
        "1 bottle of " +
          bev +
          " on the wall, 1 bottle of " +
          bev +
          "." +
          "\n" +
          "Take it down, pass it around, no more bottles of " +
          bev +
          "." +
          "\n"
      );
    } else if (i === 2) {
      console.log(
        "2 bottles of " +
          bev +
          " on the wall, 2 bottles of " +
          bev +
          "." +
          "\n" +
          "Take one down, pass it around, 1 bottle of " +
          bev +
          " on the wall." +
          "\n"
      );
    } else {
      console.log(
        i +
          " bottles of " +
          bev +
          " on the wall, " +
          i +
          " bottles of " +
          bev +
          "." +
          "\n" +
          "Take one down, pass it around, " +
          (i - 1) +
          " bottles of " +
          bev +
          " on the wall." +
          "\n"
      );
    }
  }
});
