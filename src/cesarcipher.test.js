const cesarCipher = require('./cesarcipher');

const msg1 = ['A', 3];
const msg2 = ['x', 3];
const msg3 = ['x', 9];
const msg4 = ['c', -3];
const msg5 = ['a', -5];
const msg6 = ['.', -5];
const msg7 = ['Microverse, The best Software School. ', -9];
const msg8 = ['Dztifmvijv, Kyv svjk Jfwknriv Jtyffc. ', -9]
let myCipher = cesarCipher();


/* Cyphers a letter with positive shift */
test('it encrypts a letter', () => {
    expect(myCipher.encrypt(msg1)).toBe('D');
});

test('it encrypts a letter', () => {
    expect(myCipher.encrypt(msg2)).toBe('a');
});
test('it encrypts a letter', () => {
    expect(myCipher.encrypt(msg3)).toBe('g');
});

/* Cyphers a letter with negative shift */
test('it encrypts a letter', () => {
    expect(myCipher.encrypt(msg4)).toBe('z');
});

test('it encrypts a letter', () => {
    expect(myCipher.encrypt(msg5)).toBe('v');
});

test('it encrypts punctuation', () => {
    expect(myCipher.encrypt(msg6)).toBe('.');
});

/* Test a full case */
test('it encrypts a full message', () => {
    expect(myCipher.encrypt(msg7)).toBe('Dztifmvijv, Kyv svjk Jfwknriv Jtyffc. ');
});

/*Decrypts */
test('it encrypts a full message', () => {
    expect(myCipher.decrypt(msg8)).toBe('Microverse, The best Software School. ');
});
