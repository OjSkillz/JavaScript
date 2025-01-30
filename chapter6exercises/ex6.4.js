//6.4 Display an integer reversed

const prompt = require(`prompt-sync`)();

function reverse(number) {
    let reversedNumber = "";
    
    while (number / 10 > 0) {
    reversedNumber += (number % 10).toString();
    number = Math.trunc(number / 10);
    }
    
    return reversedNumber;
}

let number = prompt("Enter any number to reverse it >> ");

console.log(`${number} reversed = ${reverse(number)}`);
