let maxTemperature = 0;
let minTemperature = 40;

export const renderTemperatureConfig = (temperature, elements) => {
  const {
    temperatureParagraph,
    temperatureProgressBar,
    maxTemperatureParagraph,
    minTemperatureParagraph,
    avgTemperatureParagraph,
  } = elements;

  temperatureParagraph.innerText = temperature + "˚C";

  temperatureProgressBar.style.width = temperature + "%";

  if (temperature > maxTemperature) {
    maxTemperature = temperature;
  }
  if (temperature < minTemperature) {
    minTemperature = temperature;
  }

  const avgTemperature = ((maxTemperature + minTemperature) / 2).toFixed(1);

  maxTemperatureParagraph.innerHTML = maxTemperature + "˚C";

  minTemperatureParagraph.innerHTML = minTemperature + "˚C";

  avgTemperatureParagraph.innerHTML = avgTemperature + "˚C";
};
