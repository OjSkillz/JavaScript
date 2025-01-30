// 6.5 Sort three numbers
const prompt = require(`prompt-sync`)();

function displaySortedNumbers(num1, num2, num3) {
let largest = Math.max(num1, num2, num3);
let smallest = Math.min(num1, num2, num3);
let midi = 0;

if (num1 < largest && num1 > smallest) midi = num1;
if (num2 < largest && num2 > smallest) midi = num2;
if (num3 < largest && num3 > smallest) midi = num3;

console.log(`The sorted numbers are ${smallest} ${midi} ${largest} `);

}

console.log("Enter three numbers: ");
let num1 = prompt("number 1 : ");
let num2 = prompt("number 2 : ");
let num3 = prompt("number 3 : ");

displaySortedNumbers(num1, num2, num3);
