// 6.8 Conversions between Celcius and Fahrenheit) 
const prompt = require(`prompt-sync`)();

function celsiusToFahrenheit(celsius) {
    return (9/ 5) * celsius + 32
};

function fahrenheitToCelcius(fahrenheit) {
    return (5/9) * (fahrenheit - 32)
};

console.log("\033[1mCelsius\t\tFahrenheit   |   Fahrenheit\t\tCelsius\033[0m");
for (let celsius = 40.0, fahrenheit = 120.0; celsius >= 31; celsius--, fahrenheit -= 10) {
    console.log(`${celsius.toFixed(1)}\t\t${celsiusToFahrenheit(celsius).toFixed(1)}\t\t|   ${fahrenheit.toFixed(1)}\t\t${fahrenheitToCelcius(fahrenheit).toFixed(2)}`);
}

