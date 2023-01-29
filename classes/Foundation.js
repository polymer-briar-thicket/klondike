import Cell from "./Cell.js";

export default class Foundation extends Cell {
  constructor(border, suit) {
    super(border);
    this.g.symbol;
    this.suit = suit;
  }
}
