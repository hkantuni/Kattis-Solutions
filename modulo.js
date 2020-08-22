const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  input.push(nums);
});

reader.on("close", () => {
  const modulos = [];
  for (let i = 0; i < input.length; i++) {
    const mods = input[i] % 42;
    modulos.push(mods);
  }
  const uniqueModulo = [...new Set(modulos)];
  console.log(uniqueModulo.length);
});
