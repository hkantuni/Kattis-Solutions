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
  const [testCase, ...data] = lines;

  const statusForName = {};

  for (let i = 0; i < testCase; i++) {
    const [status, name] = data[i].split(" ");
    statusForName[name] = 0;
    console.log(statusForName);
  }
  for (let j = 0; j < testCase; j++) {
    const [status, name] = data[j].split(" ");
    const currentStatus = statusForName[name];

    if (status === "entry" && currentStatus === 0) {
      console.log(name + " entered");
      statusForName[name] = 1;
    } else if (status === "exit" && currentStatus === 1) {
      console.log(name + " exited");
      statusForName[name] = 0;
    } else if (status === "entry" && currentStatus === 1) {
      console.log(name + " entered (ANOMALY)");
    } else if (status === "exit" && currentStatus === 0) {
      console.log(name + " exited (ANOMALY)");
    }
  }
});
