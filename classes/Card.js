import Position3 from "./Position3.js";
import Cell from "./Cell.js";

export default class Card {
  constructor(suit, value, elementToObject) {
    this.suit = suit;
    this.value = value;
    this.is_face_up = true;

    this.ElementToObject = elementToObject;

    this.element = document.createElement("div")

    this.sub_el = {
      "index_value": document.createElement("div"),
      "index_suit": document.createElement("div"),
      "pip": document.createElement("div")
    };

    this.element.classList.add("card");
    this.element.style.borderColor = this.suit.color.hsl_string;
    this.element.style.color = this.suit.color.hsl_string;

    this.sub_el.index_value.classList.add("index-value");
    this.sub_el.index_value.innerHTML = this.value.symbol;
    this.element.appendChild(this.sub_el.index_value);

    this.sub_el.index_suit.classList.add("index-suit");
    this.sub_el.index_suit.innerHTML = this.suit.symbol;
    this.element.appendChild(this.sub_el.index_suit);

    this.sub_el.pip.classList.add("pip");
    this.sub_el.pip.innerHTML = this.suit.symbol;
    this.element.appendChild(this.sub_el.pip);

    document.body.appendChild(this.element);

    this.touch_offset = {
      "x": 0,
      "y": 0
    };
    this.element.addEventListener("touchstart", this.TouchStart.bind(this));

    this.touchmove = this.TouchMove.bind(this);
    this.touchend = this.TouchEnd.bind(this);
  }

  get name() {
    return this.value.name.singular + " of " + this.suit.name.plural;
  }

  get is_face_down() {
    !this.is_face_up;
  }

  get position() {
    return new Position3(
      parseFloat(this.element.style.left),
      parseFloat(this.element.style.top),
      parseInt(this.element.style.zIndex)
    );
  }
  set position(position3) {
    if (position3.x != null) this.element.style.left = position3.x + "px";
    if (position3.y != null) this.element.style.top = position3.y + "px";
    if (position3.z != null) this.element.style.zIndex = position3.z;
  }

  Move(position3) {
    this.position = position3;
  }

  TouchStart(event) {
    this.touch_offset.x = event.targetTouches[0].clientX - this.element.getBoundingClientRect().left;
    this.touch_offset.y = event.targetTouches[0].clientY - this.element.getBoundingClientRect().top;

    this.position = new Position3(null, null, this.position.z + 200);
    this.element.style.transform = "scale(1.05)";
    this.element.style.pointerEvents = "none";

    this.element.addEventListener("touchmove", this.touchmove);
    this.element.addEventListener("touchend", this.touchend);
    this.element.addEventListener("touchcancel", this.touchend);
  }
  TouchMove(event) {
    this.position = new Position3(
      (event.targetTouches[0].clientX - this.touch_offset.x),
      (event.targetTouches[0].clientY - this.touch_offset.y),
      null
    );
  }
  TouchEnd() {
    this.position = new Position3(null, null, this.position.z - 200);
    this.element.style.transform = "scale(1)";

    let under = this.ElementToObject(document.elementFromPoint(this.position.x, this.position.y));
    this.element.style.pointerEvents = "auto";
    console.log(under);

    if (under instanceof Cell) under.Place_Cards([this]);

    this.element.removeEventListener("touchmove", this.touchmove);
    this.element.removeEventListener("touchend", this.touchend);
    this.element.removeEventListener("touchcancel", this.touchend);
  }
}
