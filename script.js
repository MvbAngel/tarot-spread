// Tarot Deck – full 78 cards
const deck = [
  // Major Arcana
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
  "Judgement", "The World",

  // Minor Arcana – Cups
  "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups",
  "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
  "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",

  // Minor Arcana – Pentacles
  "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles",
  "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
  "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles",

  // Minor Arcana – Swords
  "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords",
  "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
  "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",

  // Minor Arcana – Wands
  "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands",
  "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
  "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands"
];

// Convert card name to file name
function getImageFilename(cardName) {
  const normalized = cardName
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "") // remove punctuation
      .replace(/\s+/g, "_"); // replace spaces with _
  return `images/${normalized}.png`;
}

function drawCards(num) {
  const container = document.getElementById('cards');

  // Toggle layout classes
  container.classList.toggle('five-card-spread', num === 5);
  container.classList.toggle('horseshoe-spread', num === 7);
  container.classList.toggle('ten-card-spread', num === 10);
  container.classList.toggle('twelve-houses-spread', num === 12);

  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  const drawn = shuffled.slice(0, num);

  container.innerHTML = ''; // clear previous cards

  drawn.forEach(cardName => {
      const isReversed = Math.random() < 0.2;
      const imgSrc = getImageFilename(cardName);

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      if (isReversed) cardDiv.classList.add("reversed");
      cardDiv.dataset.name = cardName;

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = cardName + (isReversed ? " (Reversed)" : "");
      if (isReversed) img.classList.add("reversed");

      const label = document.createElement("div");
      label.classList.add("card-name");
      label.textContent = cardName + (isReversed ? " (Reversed)" : "");

      cardDiv.appendChild(img);
      cardDiv.appendChild(label);
      container.appendChild(cardDiv);

      // Add click event
      cardDiv.addEventListener('click', () => {
          const isReversed = cardDiv.classList.contains('reversed');
          document.getElementById("cardTitle").textContent = cardName;
          document.getElementById("meaningUpright").textContent = cardMeanings[cardName]?.upright || "No data";
          document.getElementById("meaningReversed").textContent = cardMeanings[cardName]?.reversed || "No data";
          document.getElementById("cardModal").style.display = "flex";
      });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close").addEventListener("click", () => {
      document.getElementById("cardModal").style.display = "none";
  });
});