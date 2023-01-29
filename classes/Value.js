export default class Value {
  constructor(singular, plural, rank, symbol) {
    this.name = {
      "singular": singular,
      "plural": plural
    };
    this.rank = rank;
    this.symbol = symbol;
  }
}
