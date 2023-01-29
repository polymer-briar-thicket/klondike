export default class Suit {
  constructor(singular, plural, symbol, symbol_outline, color) {
    this.name = {
      "singular": singular,
      "plural": plural
    };
    this.symbol = symbol;
    this.symbol_outline = symbol_outline;
    this.color = color;
  }
}
