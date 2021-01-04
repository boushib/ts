// enum Colors {
//   RED,
//   GREEN,
//   BLUE
// }

interface IPoint {
  x: number,
  y: number,
  drawPoint: () => void
}

class Point implements IPoint {
  x: number
  y: number

  constructor(x?: number, y?: number){
    this.x = x ?? 0
    this.y = y ?? 0
  }
  
  drawPoint() {
    console.log(`Let's draw a point giving x: ${this.x} & y: ${this.y}`)
  }
}

let pointA = new Point(100, 200)
let pointB = new Point()
pointA.drawPoint()
pointB.drawPoint()