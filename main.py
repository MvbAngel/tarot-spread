import tkinter as tk
import random

# --- Create the deck (you can replace these with real card names later) ---
tarotdeck = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor" "The Hierophant", "The Lovers", "The Chariot", "Strenght", "The Hermit", "The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", 
             "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",
             "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
             "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
             "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"]

# --- Function to draw cards ---
def draw_cards(num):
    drawn = random.sample(tarotdeck, num)
    result_text = "\n".join([f"{i+1}. {card}" for i, card in enumerate(drawn)])
    result_label.config(text=result_text)

# --- Set up the window ---
root = tk.Tk()
root.title("Tarot Card Draw")

# --- Instructions ---
instruction = tk.Label(root, text="Choose a spread:")
instruction.pack(pady=10)

# --- Buttons to choose number of cards ---
button_frame = tk.Frame(root)
button_frame.pack()

tk.Button(button_frame, text="Past Present Future", command=lambda: draw_cards(3)).pack(side="left", padx=10)
tk.Button(button_frame, text="5 Card Cross", command=lambda: draw_cards(5)).pack(side="left", padx=10)
tk.Button(button_frame, text="The Celtic Cross", command=lambda: draw_cards(10)).pack(side="left", padx=10)

# --- Label to show results ---
result_label = tk.Label(root, text="", justify="left", font=("Arial", 12))
result_label.pack(pady=20)

# --- Run the app ---
root.mainloop()
