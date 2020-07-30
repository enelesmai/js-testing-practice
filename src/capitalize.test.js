const capitalize = require('./capitalize');
const { TestScheduler } = require('jest');

test('first character is capitalized', () => {
    const name = "eloy";
    expect(capitalize(name)).toBe('Eloy');
});