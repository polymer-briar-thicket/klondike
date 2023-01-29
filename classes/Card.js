import Position3 from "./Position3.js";

export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;

    this.dom.border = document.createElement("div");
    this.dom.index_value = document.createElement("div");
    this.dom.index_suit = document.createElement("div");
    this.dom.suit = document.createElement("div");
  }

  get position() {
    return new Position3(
      this.dom.border.style.left,
      this.dom.border.style.top,
      this.dom.border.style.zIndex
    );
  }
  set position(position3) {
    if (position3.x != null) this.dom.border.style.left = position3.x;
    if (position3.y != null) this.dom.border.style.top = position3.y;
    if (position3.x != null) this.dom.border.style.zIndex = position3.z;
  }
}
