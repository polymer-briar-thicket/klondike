import Position3 from "./Position3.js";

export default class Cell {
  constructor(element) {
    this.element = element;
    this.cards = [];
    this.element.style.zIndex = 1;
  }

  get position() {
    return new Position3(
      this.element.getBoundingClientRect().left,
      this.element.getBoundingClientRect().top,
      this.element.style.zIndex
    );
  }

  Place_Cards(cards) {
    this.cards = this.cards.concat(cards);
    for (var i = this.cards.length - cards.length; i < this.cards.length; i++) {
      this.cards[i].position = new Position3(this.position.x, this.position.y, this.position.z + i);
    }
  }
  Pickup_Cards() {

  }
}