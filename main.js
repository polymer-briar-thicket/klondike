import Position3 from "./classes/Position3.js";
import Color from "./classes/Color.js";
import Suit from "./classes/Suit.js"; // (singular, plural, symbol_solid, symbol_outline, color)
import Value from "./classes/Value.js"; // (singular, plural, rank, symbol)
import Stock from "./classes/Stock.js";
import Waste from "./classes/Waste.js";
import Foundation from "./classes/Foundation.js";
import Tableau from "./classes/Tableau.js";
import Card from "./classes/Card.js";

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

const cells = {};
const cards = [];

function Main() {
  cells.stock = new Stock(document.getElementById("stock"));
  cells.waste = new Waste(document.getElementById("waste"));
  cells.foundations = [
    new Foundation(document.getElementById("foundation1")),
    new Foundation(document.getElementById("foundation2")),
    new Foundation(document.getElementById("foundation3")),
    new Foundation(document.getElementById("foundation4"))
  ];
  cells.tableaus = [
    new Tableau(document.getElementById("tableau1")),
    new Tableau(document.getElementById("tableau2")),
    new Tableau(document.getElementById("tableau3")),
    new Tableau(document.getElementById("tableau4")),
    new Tableau(document.getElementById("tableau5")),
    new Tableau(document.getElementById("tableau6")),
    new Tableau(document.getElementById("tableau7"))
  ];

  for (var suit of suits) {
    for(var value of values) {
      let card = new Card(suit, value, ElementToObject);
      cards.push(card);
      cells.stock.Place_Cards([card]);
    }
  }
}

function ElementToObject (element) {
  let object = undefined;
  object = cards.find(card => card.element === element);
  if (object != undefined) return object;
  else {
    object = cells.tableaus.find(tableau => tableau.element === element);
    if (object != undefined) return object;
    else {
      object = cells.foundations.find(foundation => foundation.element === element);
      if (object != undefined) return object;
      else return null;
    }
  }
}

window.addEventListener('load', Main);