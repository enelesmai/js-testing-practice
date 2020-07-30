const calculator = require('./calculator');

const number1 = 10;
const number2 = 5;
let myCalculator = calculator();

test('it adds a number', () => {
    expect(myCalculator.add(number1, number2)).toBe(15);
});

test('it substracts a number', () => {
    expect(myCalculator.substract(number1, number2)).toBe(5);
});