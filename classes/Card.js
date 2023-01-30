import Position3 from "./Position3.js";
import DragHandler from "./DragHandler.js";

export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.is_face_up = true;

    this.dom = {
      "card": document.createElement("div"),
      "index_value": document.createElement("div"),
      "index_suit": document.createElement("div"),
      "pip": document.createElement("div")
    };

    this.dom.card.classList.add("card");
    this.dom.card.style.borderColor = this.suit.color.hsl_string;
    this.dom.card.style.color = this.suit.color.hsl_string;

    this.dragHandler = new DragHandler();
    this.dom.card.addEventListener("ontouchstart", dragHandler.TouchStart(this.dom.card, event));

    this.dom.index_value.classList.add("index-value");
    this.dom.index_value.innerHTML = this.value.symbol;

    this.dom.index_suit.classList.add("index-suit");
    this.dom.index_suit.innerHTML = this.suit.symbol;

    this.dom.pip.classList.add("pip");
    this.dom.pip.innerHTML = this.suit.symbol;

    this.dom.card.appendChild(this.dom.index_value);
    this.dom.card.appendChild(this.dom.index_suit);
    this.dom.card.appendChild(this.dom.pip);

    document.body.appendChild(this.dom.card);
  }

  get name() {
    return this.value.name.singular + " of " + this.suit.name.plural;
  }

  get is_face_down() {
    !this.is_face_up;
  }

  get position() {
    return new Position3(
      this.dom.card.style.left,
      this.dom.card.style.top,
      this.dom.card.style.zIndex
    );
  }
  set position(position3) {
    if (position3.x != null) this.dom.card.style.left = position3.x;
    if (position3.y != null) this.dom.card.style.top = position3.y;
    if (position3.x != null) this.dom.card.style.zIndex = position3.z;
  }

  Move(position3) {
    this.position = position3;
  }
}
