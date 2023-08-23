const generateDataResults = (originalData) => {
  let { data, maxData, minData } = originalData;

  if (data > maxData) {
    maxData = data;
  }
  if (data < minData) {
    minData = data;
  }
  const averageData = Number(((maxData + minData) / 2).toFixed(1));
  
  return { maxData, minData, averageData };
};

module.exports = generateDataResults;
