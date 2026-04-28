console.log("moiz");
const player = [
  "babar-azam",
  "moiz",
  "shahid-afridi",
  "shadab-khan",
  "imad-wasim",
  "hasan-ali",
  "wahab-riaz",
  "shaheen-shah-afridi",
  "haris-rauf",
  "faheem-ashraf",
  "hassan-sheikh",
];

const playerList = document.getElementById("playerList");

// 3. Use map to create HTML for each player
const playerHTML = player.map((player) => {
  return `<li>${player}</li>`;
});

// 4. Join the array of HTML strings into a single string
const playerHTMLString = playerHTML.join("");
playerList.innerHTML = playerHTMLString;

const arr = [1, 2, 3, 4, 5];

// 1. Use map to create a new array with each element multiplied by 2
const multipliedArr = arr.map((num) => num * 2);

console.log(multipliedArr); // Output: [2, 4, 6, 8, 10]
