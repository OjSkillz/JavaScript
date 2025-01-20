let var1 = 2;
let var2 = 3;
let var3 = 4;
let varx;

varx = var2;
var2 = var3;
var3 = var1;


console.log("var1 = " + varx + "\nvar2 = " + var2 + "\nvar3 = " +  var3);

const person = {
    name : "Chinedu",
    sex : "Shemale",
    age : 95,
    isBlack : false,
    married : null,
    hobbies : ["Dancing", "Eating", "Gossiping"],
    greet : function() {
                console.log("hello");
                }
    
}; // person is an Object

console.log(Object.keys(person)) // Object.keys() returns a list of keys from an Object
console.log(Object.values(person)) // Object.values() returns a list of values from an Object
person.greet(); // this prints out the content of the function key greet is holding
console.log(Object.entries(person)) // this prints out a multi-dimensional array holding key , value as elements of each inner array
let items = [1, "Ada", true, null, {height : 5.67, weight : 67, address : "Bellview Estate, VGC"}] // items is an Array 

// FOR LOOPS IN JavaScript 

let numbers = [1,2,3,4,5];

// for/of :
for (let number of numbers) {// NOTE: const can work in place of let if the intention is to not manipulate the elements in numbers
    if (number > 2) 
        number = 5;
    console.log(number);
    }
// NOTE : YOU CANNOT LOOP THROUGH AN OBJECT IN JS USING A FOR/OF LOOP
// For example, for (const data of person) -- this will throw an error : person is not iterable

// for/in : behaves like the traditional for loop in java
for (let index in numbers) {
    console.log(index + " " + numbers[index]); 
    console.log(" ");
}
// You could also use the for/in loop to iterate THROUH AN OBJECT or an Array IN JS :
for (let index in person) {
    console.log(index + " : " + person[index]);
    console.log(" ");
}
const prompt = require('prompt-sync')(); // This command line is used to import and execute the prompt-sync module for reading user input in JS

let name = prompt("What is your name? : "); // prompts user to enter their name


let age = number(prompt("Hello, " + name + "! What is your age? ")); // prompts user to enter their age
let  newAge = age + 10;
console.log("Hey " + name + "! in 10 years , you will be " + newAge + " years old!");

