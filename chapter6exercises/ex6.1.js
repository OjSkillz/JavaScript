// 6.1 Math: Pentagonal numbers

const prompt = require('prompt-sync')(); 

function getPentagonalNumbers(number) {
    for (let count = 0; count < number; count++ ) {
        process.stdout.write(`${((count + 1) * ( 3 * (count +1) - 1) / 2)} `);
       if ((count + 1) % 10 === 0) console.log("\n");
    }
}

let number = prompt("Enter a number >> ");

getPentagonalNumbers(number);
