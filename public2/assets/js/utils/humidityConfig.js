let maxHumidity = 0;
let minHumidity = 100;

export const renderHumidityConfig = (humidity, elements) => {
  const {
    humidityParagraph,
    humidityProgressBar,
    maxHumidityParagraph,
    minHumidityParagraph,
    avgHumidityParagraph,
  } = elements;

  for (let paragraph of humidityParagraph) {
    paragraph.innerText = humidity + "%";
  }

  humidityProgressBar.style.width = humidity + "%";

  if (humidity > maxHumidity) {
    maxHumidity = humidity;
  }
  if (humidity < minHumidity) {
    minHumidity = humidity;
  }

  const averageHumidity = (maxHumidity + minHumidity) / 2;

  maxHumidityParagraph.innerHTML = maxHumidity + "%";
  minHumidityParagraph.innerHTML = minHumidity + "%";
  avgHumidityParagraph.innerText = averageHumidity + "%";

  return { maxHumidity, minHumidity, averageHumidity };
};
