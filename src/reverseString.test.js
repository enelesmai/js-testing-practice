const reverseString = require('./reverseString');

test('string is reversed', () => {
  const name = 'argentine';
  expect(reverseString(name)).toBe('enitnegra');
});