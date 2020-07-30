const cesarCipher = () => {
  const base = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];
    // 23
  const cesarShift = (letter, offset) => {
    for (let i = 0; i < base.length; i += 1) {
      if (base[i] === letter) {
        // if index + offset is bigger than length
        if ((i + offset) > base.length - 1) {
          const toEnd = (base.length - 1) - i; // offset = 3 : 25-23 = 2
          return base[(offset - toEnd) - 1];
        }
        // if index - offset is less than 0
        if ((i + offset) < 0) {
          const toStart = (i); // offset = 3 : 25-23 = 2
          const cIndex = base.length - ((offset + toStart) * -1);
          return base[cIndex];
        }
        return base[i + offset];
      }
    }
    return letter;
  };

  const encrypt = (message) => {
    const word = message[0];
    const offset = message[1];
    let response = '';
    for (let i = 0; i < word.length; i += 1) {
      response += cesarShift(word[i], offset);
    }
    return response;
  };

  const decrypt = (message) => {
    const word = message[0];
    const offset = message[1] * -1;
    let response = '';
    for (let i = 0; i < word.length; i += 1) {
      response += cesarShift(word[i], offset);
    }
    return response;
  };


  return {
    encrypt,
    decrypt,
  };
};

module.exports = cesarCipher;