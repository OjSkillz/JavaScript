const prompt = require("prompt-sync")();

const input = prompt("Enter any integer n to find n! >> ");

let factors = [];

for (let count = 1; count <= input; count++)
    factors.push(count)

const result = factors.reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(result);