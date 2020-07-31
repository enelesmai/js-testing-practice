const capitalize = require('./capitalize');

test('first character is capitalized', () => {
  const name = 'eloy';
  expect(capitalize(name)).toBe('Eloy');
});

test('first character is capitalized', () => {
  const name = 'hello';
  expect(capitalize(name)).toBe('Hello');
});