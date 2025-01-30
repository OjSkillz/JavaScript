// 6.2 Sum of Digits in an Integer
const prompt = require(`prompt-sync`)();

function sumDigits(integer) {
let sum = 0;

while (integer / 10 > 0) {
    sum += integer % 10;
    integer = Math.trunc(integer / 10);
}

return sum
};

let number = prompt("Enter any integer to sum its digits >> ");

console.log(`The sum of the digits in ${number} is ${sumDigits(number)}`);

