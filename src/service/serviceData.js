let maxData = 0;
let minData = 100;

const dataService = (data) => {
  if (data > maxData) {
    maxData = data;
  }
  if (data < minData) {
    minData = data;
  }
  const averageData = ((maxData + minData) / 2).toFixed(1);

  return { maxData, minData, averageData };
};

module.exports = dataService;
