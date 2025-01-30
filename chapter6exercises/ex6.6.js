// 6.6 Display Patterns
const prompt = require(`prompt-sync`)();

function displayPattern(n) {
    let space = n - 1;
    let number = 1;
    let pattern = number.toString();

    while (number <= n) {
    console.log(`${" ".repeat(space)} ${pattern}`);
    number++
    pattern = number.toString() + (number - 1).toString();
    space--;
    }
}


let n = prompt("Enter a number n : ");
displayPattern(n);

