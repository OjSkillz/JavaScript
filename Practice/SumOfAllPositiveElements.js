const input = [1, -4, 12, 0, -3, 29, -150];

const result = input.filter((number) => number > 0).reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(result);