const input = [12, 46, 32, 64];

const result = {"mean" : (input.reduce((accumulator, currentValue) => accumulator + currentValue))/input.length,
    "median": (input.slice(1,3).reduce((accumulator, currentValue) => accumulator + currentValue))/2};
console.log(result);