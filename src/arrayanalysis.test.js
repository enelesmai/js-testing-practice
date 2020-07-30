const arrayAnalysis = require('./arrayanalysis');

test('it takes an array of numbers and returns object', () => {
    const array = [1, 8, 3, 4, 2, 6];
    const expected = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    const analizer = arrayAnalysis(array);
    expect(analizer.analyze()).toMatchObject(expected);
});