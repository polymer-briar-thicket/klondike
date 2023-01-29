export class Cell {
  constructor(border) {
    this.dom.border = border;
    this.cards = [];
  }

  get position() {
    return {
      "x": this.dom.border.getBoundingClientRect().left,
      "y": this.dom.border.getBoundingClientRect().top,
      "z": this.dom.border.style.zIndex;
    };
  }

  Place_Cards() {

  }
  Pickup_Cards() {

  }
}
