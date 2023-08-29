// export const renderTemperatureConfig = (temperature, elements) => {
export const renderTemperatureData = (temperatureData, elements) => {
  const { originalData, max, min, averageData } = temperatureData;
  const {
    temperatureParagraph,
    temperatureProgressBar,
    maxTemperatureParagraph,
    minTemperatureParagraph,
    avgTemperatureParagraph,
  } = elements;

  temperatureParagraph.innerText = originalData + "˚C";

  temperatureProgressBar.style.width = originalData + "%";

  maxTemperatureParagraph.innerHTML = max + "˚C";

  minTemperatureParagraph.innerHTML = min + "˚C";

  avgTemperatureParagraph.innerHTML = averageData + "˚C";

  return { max, min, averageData, originalData };
};
