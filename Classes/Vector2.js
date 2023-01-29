export class Vector2 {
  constructor(angle, magnitude) {
    this.angle = angle;
    this.magnitude = magnitude;
  }

  get x() {
    return this.magnitude * Math.cos(this.angle);
  }

  get y() {
    return this.magnitude * Math.sin(this.angle);
  }
}
