const capitalize = require('./capitalize');

test('first character is capitalized', () => {
    const name = "eloy";
    expect(capitalize(name)).toBe('Eloy');
});