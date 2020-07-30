const calculator = () => {
  const add = (number1, number2) => number1 + number2;
  const substract = (number1, number2) => number1 - number2;
  const divide = (number1, number2) => number1 / number2;
  const multiply = (number1, number2) => number1 * number2;

  return {
    add,
    substract,
    divide,
    multiply,
  };
};

module.exports = calculator;