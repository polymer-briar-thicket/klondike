export default class DragHandler {
  constructor(element) {
    this.element = element;
    this.offset = {
      "x": 0,
      "y": 0
    };
    this.element.addEventListener("touchstart", this.TouchStart.bind(this));
  }

  TouchStart(event) {
    console.log(event);
    this.offset.x = event.targetTouches[0].screenX - this.element.getBoundingClientRect().left;
    this.offset.y = event.targetTouches[0].screenY - this.element.getBoundingClientRect().top;

    this.element.removeEventListener("touchstart", this.TouchStart);
    this.element.addEventListener("touchmove", this.TouchMove.bind(this));
    this.element.addEventListener("touchend", this.TouchEnd.bind(this));
  }
  TouchMove(event) {
    this.element.style.left = event.targetTouches[0].screenX - this.offset.x;
    this.element.style.top = event.targetTouches[0].screenY - this.offset.y;
  }
  TouchEnd() {
    this.element.removeEventListener("touchmove", this.TouchMove);
    this.element.removeEventListener("touchend", this.TouchEnd);
    this.element.addEventListener("touchstart", this.TouchStart.bind(this));
  }
}
