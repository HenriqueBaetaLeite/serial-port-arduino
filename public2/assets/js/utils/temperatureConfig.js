const calculateAverageTemperature = (maxTemperature, minTemperature) => {
  return (
    ((Number(maxTemperature) + Number(minTemperature)) / 2).toFixed(2) + "˚C"
  );
};

export const renderTemperatureConfig = (temperatureData, elements) => {
  const {
    temperatureParagraph,
    temperatureProgressBar,
    averageTemperatureArray,
    temperatureAverageParagraph,
    maxTemperatureParagraph,
    minTemperatureParagraph,
  } = elements;

  let { maxTemperature, minTemperature, temperature } = temperatureData;

  temperatureParagraph.innerText = temperature + "˚C";

  temperatureProgressBar.style.width = temperature + "%";

  averageTemperatureArray.push(+temperature);

  if (temperature > maxTemperature) {
    maxTemperature = temperature;
  }
  if (temperature < minTemperature) {
    minTemperature = temperature;
  }

  temperatureAverageParagraph.innerHTML = calculateAverageTemperature(
    maxTemperature,
    minTemperature
  );

  maxTemperatureParagraph.innerHTML = maxTemperature + "˚C";

  minTemperatureParagraph.innerHTML = minTemperature + "˚C";
};
