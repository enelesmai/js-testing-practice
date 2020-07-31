const calculator = require('./calculator');

const number1 = 10;
const number2 = 5;
const number3 = 3;
const number4 = 6;
const myCalculator = calculator();


/* Add */
test('it adds a number', () => {
  expect(myCalculator.add(number1, number2)).toBe(15);
});

test('it adds a number', () => {
  expect(myCalculator.add(number3, number4)).toBe(9);
});

/* Substract */
test('it substracts a number', () => {
  expect(myCalculator.substract(number1, number2)).toBe(5);
});

test('it substracts a number', () => {
  expect(myCalculator.substract(number3, number4)).toBe(-3);
});

/* divide */
test('it divides a number by another ', () => {
  expect(myCalculator.divide(number1, number2)).toBe(2);
});

test('it divides a number by another ', () => {
  expect(myCalculator.divide(number4, number3)).toBe(2);
});

/* multiply */
test('it multiplies a number by another ', () => {
  expect(myCalculator.multiply(number2, number3)).toBe(15);
});

test('it multiplies a number by another ', () => {
  expect(myCalculator.multiply(number1, number4)).toBe(60);
});
