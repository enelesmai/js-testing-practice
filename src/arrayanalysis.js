const arrayAnalysis = (inputArray) => {
    let obj = {};
    const analyze = () => {
        obj["average"] = getAverage();
        obj["min"] = getMin();
        obj["max"] = getMax();
        obj["length"] = inputArray.length;
        return obj;
    }
    const getAverage = () => {
        const sum = inputArray.reduce((sum, x) => sum + x);
        return sum / inputArray.length;
    }
    const getMin = () => {
        return inputArray.reduce((min, x) => (x < min) ? x : min);
    }
    const getMax = () => {
        return inputArray.reduce((max, x) => (x > max) ? x : max);
    }
    return {
        analyze
    }
};

module.exports = arrayAnalysis;