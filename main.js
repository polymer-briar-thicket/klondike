import Color from "/classes/Color.js";
import Game from "/classes/Game.js"; // (cells[], cards[])
import Suit from "/classes/Suit.js"; // (singular, plural, symbol_solid, symbol_outline, color)
import Value from "/classes/Value.js"; // (singular, plural, rank, symbol)
import Cell from "/classes/Cell.js"; // (border)
import Stock from "/classes/Stock.js";
import Waste from "/classes/Waste.js";
import Foundation from "/classes/Foundation.js";
import Tableau from "/classes/Tableau.js";
import Card from "/classes/Card.js";

function PreventDefault(event) {
  event.preventDefault();
}

function Main() {

  const colors = {
    "cardstock": new Color(0, 0, 12),
    "card_details": new Color(0, 0, 20),
    "suit_black": new Color(190, 100, 40),
    "suit_red": new Color(32, 100, 45)
  };

  const suits = [
    new Suit("Spade", "Spades", "♠", "♤", colors.suit_black),
    new Suit("Heart", "Hearts", "♥", "♡", colors.suit_red),
    new Suit("Club", "Clubs", "♣", "♧", colors.suit_black),
    new Suit("Diamond", "Diamonds", "♦", "♢", colors.suit_red)
  ];

  const values = [
    new Value("Ace", "Aces", 1, "A"),
    new Value("Two", "Twos", 2, "2"),
    new Value("Three", "Threes", 3, "3"),
    new Value("Four", "Fours", 4, "4"),
    new Value("Five", "Fives", 5, "5"),
    new Value("Six", "Sixes", 6, "6"),
    new Value("Seven", "Sevens", 7, "7"),
    new Value("Eight", "Eights", 8, "8"),
    new Value("Nine", "Nines", 9, "9"),
    new Value("Ten", "Tens", 10, "10"),
    new Value("Jack", "Jacks", 11, "J"),
    new Value("Queen", "Queens", 12, "Q"),
    new Value("King", "Kings", 13, "K")
  ];

  const cells = [
    new Stock(document.getElementById("stock")),
    new Waste(document.getElementById("waste")),
    new Foundation(document.getElementById("foundation1")),
    new Foundation(document.getElementById("foundation2")),
    new Foundation(document.getElementById("foundation3")),
    new Foundation(document.getElementById("foundation4")),
    new Tableau(document.getElementById("tableau1")),
    new Tableau(document.getElementById("tableau2")),
    new Tableau(document.getElementById("tableau3")),
    new Tableau(document.getElementById("tableau4")),
    new Tableau(document.getElementById("tableau5")),
    new Tableau(document.getElementById("tableau6")),
    new Tableau(document.getElementById("tableau7"))
  ];

  const cards = [];
  for (var suit of suits) {
    for(var value of values) {
      cards.push(new Card(suit, value));
    }
  }

}
