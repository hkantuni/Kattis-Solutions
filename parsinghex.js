const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", function (line) {
  lines.push(line);
});

reader.on("close", function () {
  let allHexNums = [];
  const lowCaseLines = lines.map((line) => line.toLowerCase());

  lowCaseLines.forEach(function (lowCaseLine, i) {
    const allIndexesOf0 = findIndexesOf0(lowCaseLine);
    allIndexesOf0.forEach(function (startIndex) {
      const hexNumsInLine = check0x(lines[i], startIndex);

      allHexNums = [...allHexNums, ...hexNumsInLine];
    });
  });

  allHexNums.forEach(function (hexNum) {
    const decNum = parseInt(hexNum, 16);
    console.log(hexNum, decNum);
  });
});

function findIndexesOf0(lowCaseLine) {
  const indexesOf0 = [];

  let i = 0;
  while (lowCaseLine.indexOf("0x", i) !== -1) {
    const index = lowCaseLine.indexOf("0x", i);
    indexesOf0.push(index);
    i = index + 1;
  }
  return indexesOf0;
}

function check0x(line, index) {
  let lastIndex = 1;
  const lineLowCase = line.toLowerCase();
  const checkHex = lineLowCase.slice(index, index + 10);
  const result = [];
  for (let i = 2; i < checkHex.length; i++) {
    const fromAtoF = checkHex[i] >= "a" && checkHex[i] <= "f";
    const isDigit = checkHex[i] >= "0" && checkHex[i] <= "9";
    if (fromAtoF || isDigit) {
      lastIndex++;
    } else {
      break;
    }
  }
  const hexNumber = line.slice(index, index + lastIndex + 1);
  if (hexNumber !== "0x" && hexNumber !== "0X") {
    result.push(hexNumber);
  }
  return result;
}
