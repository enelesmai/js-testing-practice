const calculator = require('./calculator');

const number1 = 10;
const number2 = 5;
const number3 = 3;
const number4 = 6
let myCalculator = calculator();

test('it adds a number', () => {
    expect(myCalculator.add(number1, number2)).toBe(15);
});

test('it substracts a number', () => {
    expect(myCalculator.substract(number1, number2)).toBe(5);
});

test('it adds a number', () => {
    expect(myCalculator.add(number3, number4)).toBe(9);
});

test('it substracts a number', () => {
    expect(myCalculator.substract(number3, number4)).toBe(-3);
});