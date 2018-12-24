class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  toString() {
    return `(${this.x},${this.y})`;
  }
  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
  sub(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }
  mul(s) {
    return new Vector(this.x * s, this.y * s);
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  equal(v) {
    return this.x === v.x && this.y === v.y;
  }
  clone() {
    return new Vector(this.x, this.y);
  }
}

let a = new Vector(4, 0);
let b = new Vector(0, 3);
let c = a.sub(b);
let d = c.mul(2);
console.log(a.equal(new Vector(4, 1)));