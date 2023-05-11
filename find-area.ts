//area of square
// function areaOfSquare(side:number) {
//     return  side * side;
//     }
//   console.log("Area = " + areaOfSquare(4));

// //area of rectangle
//  function areaOfRectangle(height:number, width:number) {
//     return height * width;
//   }
//  console.log("Area = " + areaOfRectangle(5, 6));

// //area of triangle
//   function areaOfTriangle(length:number, height:number) {
//     return (length*height)/2;
//     }
//   console.log("Area =" + areaOfTriangle(15, 20));


  //With Normal Function
// function calculateArea(shape:any, width:number, height:number) {
//   switch (shape) {
//     case "square":
//     case "rectangle":
//       return height * width;

//     case "trinangle":
//       return (height * width) / 2;
//     default:
//   }
// }
// console.log(calculateArea("square", 10, 10));
// console.log(calculateArea("rectangle", 10, 15));
// console.log(calculateArea("trinangle", 10, 20));

//with enum
const Shapes = {
  Recatange: "rectangle",
  Square: "square",
  Triangle: "triangle",
};

function calculateArea(shape:any, width:number, height:number) {
  switch (shape) {
    case Shapes.Square:
    case Shapes.Recatange:
      return height * width;

    case Shapes.Triangle:
      return (height * width) / 2;
    default:
  }
}
console.log(calculateArea(Shapes.Recatange, 25, 10));
console.log(calculateArea(Shapes.Square, 10, 15));
console.log(calculateArea(Shapes.Triangle, 10, 20));