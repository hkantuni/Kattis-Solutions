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
  const [testCase, ...test] = lines;
  let ans = [];
  let position = 0;

  for (let i = 0; i < testCase; i++) {
    let nums = test[position];
    let products = {};

    for (let j = 1; j < parseInt(nums) + 1; j++) {
      let name = test[position + j].split(" ")[0];
      let qty = parseInt(test[position + j].split(" ")[1]);

      if (name in products) {
        products[name] += qty;
      } else {
        products[name] = qty;
      }
    }
    ans.push(products);
    position += parseInt(nums) + 1;
  }

  for (let k = 0; k < ans.length; k++) {
    let sortable = Object.entries(ans[k]).sort(function (a, b) {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
    });

    console.log(Object.keys(sortable).length);

    Object.keys(sortable).forEach(function (element) {
      console.log(sortable[element][0], sortable[element][1]);
    });
  }
});
