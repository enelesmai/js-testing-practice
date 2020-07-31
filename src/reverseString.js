function reverseString(inputString) {
  let newString = '';
  for (let i = inputString.length - 1; i >= 0; i -= 1) {
    newString += inputString.charAt(i);
  }
  return newString;
}

module.exports = reverseString;