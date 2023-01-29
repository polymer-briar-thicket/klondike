export default class Suit {
  constructor(singular, plural, symbol_solid, symbol_outline, color) {
    this.name = {
      "singular": singular,
      "plural": plural
    };
    this.symbol_solid = symbol_solid;
    this.symbol_outline = symbol_outline;
    this.color = color;
  }
}
