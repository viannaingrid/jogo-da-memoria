const emojis = [
    "🌞",
    "🌞",
    "🌈",
    "🌈",
    "😎",
    "😎",
    "🤩",
    "🤩",
    "🤑",
    "🤑",
    "🤡",
    "🤡",
    "🦄",
    "🦄"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("section");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];

    const gameContainer = document.querySelector(".game");
    if (gameContainer) {
        gameContainer.appendChild(box);
    } 
}