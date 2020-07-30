const cesarCipher = () => {
    const base = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'];
    // 

    const upperCase = (char) => {
        return char == char.toUpperCase()
    }

    const toCase = (char, upper) => {
        if (upper) {
            return char.toUpperCase();
        } else {
            return char;
        }
    }

    const cesarShift = (letter, offset, upper) => {
        letter = letter.toLowerCase();
        for (let i = 0; i < base.length; i += 1) {
            if (base[i] === letter) {
                // if index + offset is bigger than length
                if ((i + offset) > base.length - 1) {
                    const toEnd = (base.length - 1) - i; // offset = 3 : 25-23 = 2
                    return toCase(base[(offset - toEnd) - 1], upper);
                }
                // if index - offset is less than 0
                if ((i + offset) < 0) {
                    const toStart = (i); // offset = 3 : 25-23 = 2
                    const cIndex = base.length - ((offset + toStart) * -1);
                    return toCase(base[cIndex], upper);
                }

                return toCase(base[i + offset], upper);
            }
        }
        return letter;
    };

    const encrypt = (message) => {
        const word = message[0];
        const offset = message[1];
        let response = '';
        for (let i = 0; i < word.length; i += 1) {
            response += cesarShift(word[i], offset, upperCase(word[i]));
        }
        return response;
    };

    const decrypt = (message) => {
        const word = message[0];
        const offset = message[1] * -1;
        let response = '';
        for (let i = 0; i < word.length; i += 1) {
            response += cesarShift(word[i], offset, upperCase(word[i]));
        }
        return response;
    };


    return {
        encrypt,
        decrypt,
    };
};

module.exports = cesarCipher;