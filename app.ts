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
  constructor(private x?: number, private y?: number){
    this.x = x ?? 0
    this.y = y ?? 0
  }
  
  draw() {
    console.log(`Let's draw a point giving x: ${this.x} & y: ${this.y}`)
  }
}

let pointA = new Point(100, 200)
let pointB = new Point()
pointA.draw()
pointB.draw()