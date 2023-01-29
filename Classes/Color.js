export class Color {
  constructor(hue, saturation, lightness) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  get hsl_string() {
    return "hsl(" + this.hue + ", " + this.saturation + "%, " + this.lightness + "%)";
  }
}
