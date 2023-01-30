import Position3 from "./Position3.js";

export default class DragHandler {
  constructor() {
    this.element;
    this.offset = {
      "x": 0,
      "y": 0
    };
  }

  TouchStart(element, event) {
    this.element = element;
    this.offset.x = event.targetTouches[0].screenX - this.element.getBoundingClientRect().left;
    this.offset.y = event.targetTouches[0].screenY - this.element.getBoundingClientRect().top;
    element.addEventListener("touchmove", this.TouchMove);
    element.addEventListener("touchend", this.TouchEnd);
  }
  TouchMove(event) {
    this.element.Move(new Position3(
      event.targetTouches[0].screenX - this.offset.x,
      event.targetTouches[0].screenY - this.offset.y,
      null
    ));
  }
  TouchEnd() {
    element.removeEventListener("touchmove", this.TouchMove);
    element.removeEventListener("touchend", this.TouchEnd);
  }
}
