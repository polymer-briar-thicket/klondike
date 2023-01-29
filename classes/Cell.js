import Position3 from "./Position3.js";

export default class Cell {
  constructor(border) {
    this.dom.border = border;
    this.cards = [];
  }

  get position() {
    return new Position3(
      this.dom.border.getBoundingClientRect().left,
      this.dom.border.getBoundingClientRect().top,
      this.dom.border.style.zIndex
    );
  }

  Place_Cards() {

  }
  Pickup_Cards() {

  }
}
