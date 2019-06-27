export class Triangle {
  constructor(a, b, c) {
    this._sides = [a, b, c].sort((a, b) => a - b);
    if ((this._sides[0] != this._sides[1]) && (this._sides[1] != this._sides[2])) {
      this._kind = 'scalene';
    };
    if ((this._sides[0] == this._sides[1]) || (this._sides[1] == this._sides[2])) {
      this._kind = 'isosceles';
    };
    if (this._sides[0] == this._sides[2]) {
      this._kind = 'equilateral';
    };
  }

  kind() {
    if ((this._sides[0] <= 0) || ((this._sides[0] + this._sides[1]) < this._sides[2])) {
      throw new Error("Invalid triangle");
    } else {
      return this._kind;
    }
  }
}
