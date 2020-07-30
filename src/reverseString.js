function reverseString(inputString) {
    var newString = "";
    for (var i = inputString.length - 1; i >= 0; i--) {
        newString += inputString.charAt(i);
    }
    return newString;
}

module.exports = reverseString;