const calculator = () => {

    const add = (number1, number2) => number1 + number2;
    const substract = (number1, number2) => number1 - number2;

    return {
        add,
        substract
    };
}

module.exports = calculator;