const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
reader.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  lines.push(nums);
});

reader.on("close", () => {
  const [total, ...rooms] = lines;
  const [allRooms, bookedRooms] = total;
  rooms.sort();

  let totalRooms = [];

  for (let i = 1; i <= allRooms; i++) {
    totalRooms.push(i);
  }
  rooms.sort();

  for (let i = 0; i < rooms.length; i++) {
    for (let k = 0; k < totalRooms.length; k++) {
      if (totalRooms[k] === rooms[i][0]) {
        totalRooms.splice(k, 1);
      }
    }
  }
  if (totalRooms.length === 0) {
    console.log("too late");
  } else {
    console.log(totalRooms[Math.floor(Math.random() * totalRooms.length)]);
  }
});
