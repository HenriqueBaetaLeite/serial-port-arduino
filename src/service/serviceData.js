let maxData = 0;
let minData = 100;

const generateDataResults = (originalData) => {
  
  if (originalData > maxData) {
    maxData = originalData;
  }
  if (originalData < minData) {
    minData = originalData;
  }
  const averageData = Number(((maxData + minData) / 2).toFixed(1));
  
  return { maxData, minData, averageData };
};

module.exports = generateDataResults;
