// 6.3 Palindrome Integer

const prompt = require(`prompt-sync`)();
function isPalindrome(number) {
    function reverse(number) {
    let reversedNumber = "";
    while (number / 10 > 0) {
    reversedNumber += (number % 10).toString();
    number = Math.trunc(number / 10);
    }
    return reversedNumber
    }
    return reverse(number) === number
}

let number = prompt("Enter a number >> ");

console.log(`Is ${number} a palindrome? ${isPalindrome(number)}`); 
