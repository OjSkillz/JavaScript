const prompt = require("prompt-sync")();
const Rectangle = require("./Rectangle");



let name = prompt("Enter name of shape: ");
let side1 = prompt("Enter the length of side 1: ");
let side2 = prompt("Enter length of side 2: ");

const shape = new Rectangle(name, side1, side2)
shape.getArea();
shape.isSquare();




