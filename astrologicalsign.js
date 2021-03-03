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
  const classmates = Number(lines[0]);

  const [N, ...dates] = lines;

  for (let i = 0; i < classmates; i++) {
    let oneDate = dates[i].split(" ");

    let month = oneDate[1];

    let day = Number(oneDate[0]);

    if ((month === "Jan" && day <= 20) || (month === "Dec" && day >= 22)) {
      console.log("Capricorn");
    } else if (
      (month === "Jan" && day >= 21) ||
      (month === "Feb" && day <= 19)
    ) {
      console.log("Aquarius");
    } else if (
      (month === "Feb" && day >= 20) ||
      (month === "Mar" && day <= 20)
    ) {
      console.log("Pisces");
    } else if (
      (month === "Mar" && day >= 21) ||
      (month === "Apr" && day <= 20)
    ) {
      console.log("Aries");
    } else if (
      (month === "Apr" && day >= 21) ||
      (month === "May" && day <= 20)
    ) {
      console.log("Taurus");
    } else if (
      (month === "May" && day >= 21) ||
      (month === "Jun" && day <= 21)
    ) {
      console.log("Gemini");
    } else if (
      (month === "Jun" && day >= 22) ||
      (month === "Jul" && day <= 22)
    ) {
      console.log("Cancer");
    } else if (
      (month === "Jul" && day >= 23) ||
      (month === "Aug" && day <= 22)
    ) {
      console.log("Leo");
    } else if (
      (month === "Aug" && day >= 23) ||
      (month === "Sep" && day <= 21)
    ) {
      console.log("Virgo");
    } else if (
      (month === "Sep" && day >= 22) ||
      (month === "Oct" && day <= 22)
    ) {
      console.log("Libra");
    } else if (
      (month === "Oct" && day >= 23) ||
      (month === "Nov" && day <= 22)
    ) {
      console.log("Scorpio");
    } else if (
      (month === "Nov" && day >= 23) ||
      (month === "Dec" && day <= 21)
    ) {
      console.log("Sagittarius");
    }
  }
});
