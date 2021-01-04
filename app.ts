// enum Colors {
//   RED,
//   GREEN,
//   BLUE
// }

// interface IPoint {
//   x: number,
//   y: number,
//   draw: () => void
// }

//class Point implements IPoint {
class Point {
  constructor(private _x: number, private _y: number){
  }
  
  draw() {
    console.log(`Let's draw a point giving x: ${this._x} & y: ${this._y}`)
  }

  get x(){
    return this._x
  }

  set x(value: number){
    this._x = value;
  }
}

let pointA = new Point(100, 200)
pointA.draw()
