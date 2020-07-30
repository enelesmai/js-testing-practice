const arrayAnalysis = (inputArray) => {
  const obj = {};
  const getAverage = () => {
    const sum = inputArray.reduce((sum, x) => sum + x);
    return sum / inputArray.length;
  };
  const getMin = () => inputArray.reduce((min, x) => ((x < min) ? x : min));
  const getMax = () => inputArray.reduce((max, x) => ((x > max) ? x : max));
  const analyze = () => {
    obj.average = getAverage();
    obj.min = getMin();
    obj.max = getMax();
    obj.length = inputArray.length;
    return obj;
  };
  return {
    analyze,
  };
};

module.exports = arrayAnalysis;