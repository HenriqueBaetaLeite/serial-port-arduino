const humidityConfig = {
  max: 0,
  min: 100,
};

const temperatureConfig = {
  max: 0,
  min: 45,
};

const configObject = {
  temperature: temperatureConfig,
  humidity: humidityConfig,
};

const generateDataResults = (type, originalData) => {
  if (originalData > configObject[type].max) {
    configObject[type].max = originalData;
  }
  if (originalData < configObject[type].min) {
    configObject[type].min = originalData;
  }

  const averageData = Number(
    ((configObject[type].max + configObject[type].min) / 2).toFixed(1)
  );

  return { ...configObject[type], averageData, originalData };
};

module.exports = generateDataResults;
