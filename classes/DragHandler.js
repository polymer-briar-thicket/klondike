export default class DragHandler {
  constructor(element) {
    this.element = element;
    this.offset = {
      "x": 0,
      "y": 0
    };
    this.element.addEventListener("touchstart", this.TouchStart.bind(this));

    this.touchmove = this.TouchMove.bind(this);
    this.touchend = this.TouchEnd.bind(this);
  }

  TouchStart(event) {
    this.offset.x = event.targetTouches[0].clientX - this.element.getBoundingClientRect().left;
    this.offset.y = event.targetTouches[0].clientY - this.element.getBoundingClientRect().top;

    this.element.style.zIndex += 200;
    this.element.style.transform = "scale(1.05)";

    this.element.addEventListener("touchmove", this.touchmove);
    this.element.addEventListener("touchend", this.touchend);
    this.element.addEventListener("touchcancel", this.touchend);
  }
  TouchMove(event) {
    this.element.style.left = (event.targetTouches[0].clientX - this.offset.x) + "px";
    this.element.style.top = (event.targetTouches[0].clientY - this.offset.y) + "px";
  }
  TouchEnd() {
    this.element.style.zIndex -= 200;
    this.element.style.transform = "scale(1)";

    this.element.removeEventListener("touchmove", this.touchmove);
    this.element.removeEventListener("touchend", this.touchend);
    this.element.removeEventListener("touchcancel", this.touchend);
  }
}