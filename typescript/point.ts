export class Point {
  constructor(private _x: number, private _y: number) {}
  get x(): number {
    return this._x
  }
  get y(): number {
    return this._y
  }
  set x(value: number) {
    this._x = Math.abs(value)
  }
  set y(value: number) {
    this._y = Math.abs(value)
  }
  print() {
    console.log(`X: ${this._x} Y: ${this._y}`)
  }
}
