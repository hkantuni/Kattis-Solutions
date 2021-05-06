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
  // console.log(lines);
  //loop trougth inputs
  for (let i = 0; i < lines.length; i++) {
    //split imput to "AB" and "minor"
    let note = lines[i].split(" ")[0];
    let tone = lines[i].split(" ")[1];
    // console.log(i, note, tone);
    // console.log(note);
    //compare if "AB" has similar names
    //if has replace with other name
    //add "minor"
    //log case number [i] and "AB" AND "minor" or UNIQUE
    if (note === "A#") {
      console.log("Case " + [i + 1] + ": Bb " + tone);
    } else if (note === "Bb") {
      console.log("Case " + [i + 1] + ": A# " + tone);
    } else if (note === "C#") {
      console.log("Case " + [i + 1] + ": Db " + tone);
    } else if (note === "Db") {
      console.log("Case " + [i + 1] + ": C# " + tone);
    } else if (note === "D#") {
      console.log("Case " + [i + 1] + ": Eb " + tone);
    } else if (note === "Eb") {
      console.log("Case " + [i + 1] + ": D# " + tone);
    } else if (note === "F#") {
      console.log("Case " + [i + 1] + ": Gb " + tone);
    } else if (note === "Gb") {
      console.log("Case " + [i + 1] + ": F# " + tone);
    } else if (note === "G#") {
      console.log("Case " + [i + 1] + ": Ab " + tone);
    } else if (note === "Ab") {
      console.log("Case " + [i + 1] + ": G# " + tone);
    } else {
      console.log("Case " + [i + 1] + ": UNIQUE");
    }
  }
});
//try to work with object
// let keys = {"A#":"Bb","C#":"Db", "D#":"Eb", "F#":"Gb", "G#":"Ab"}
