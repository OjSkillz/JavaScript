const Shape = require("./Shape")

class Rectangle extends Shape {
    
    #side1
    #side2

    constructor(name, side1, side2) {
        super(name)
        this.#side1 = side1
        this.#side2 = side2

    }

    getArea() {
        let area = this.#side1 * this.#side2;
        console.log(`The area of your shape is ${area}`);
    }

    isSquare() {
        if (this.#side1 === this.#side2) {
            console.log("The shape is a square")
        }
        else console.log("The shape is a rectangle");
    }
}

module.exports = Rectangle;