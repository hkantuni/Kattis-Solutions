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
  const [T, ...rest] = lines;
  const testCases = [];
  let tmpCase = [];
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] !== "what does the fox say?") {
      tmpCase.push(rest[i]);
    } else {
      testCases.push(tmpCase);
      tmpCase = [];
    }
  }

  for (let i = 0; i < testCases.length; i++) {
    const [text, ...animalSounds] = testCases[i];

    let soundsText = text.split(" ");
    const sounds = [];

    animalSounds.forEach(function (sound) {
      sounds.push(sound.split(" ").slice(-1)[0]);
    });

    for (let j = 0; j < sounds.length; j++) {
      for (let i = 0; i < soundsText.length; i++) {
        soundsText = soundsText.filter(function (entry) {
          return entry !== sounds[j];
        });
      }
    }

    console.log(soundsText.join(" "));
  }
});
