export const renderHumidityConfig = (humidityData, elements) => {
  const {
    humidityParagraph,
    humidityProgressBar,
    averageHumidityArray,
    humidityAverageParagraph,
    maxHumidityParagraph,
    minHumidityParagraph,
  } = elements;

  let { maxHumidity, minHumidity, humidity } = humidityData;
  for (let paragraph of humidityParagraph) {
    paragraph.innerText = humidity + "%";
  }

  humidityProgressBar.style.width = humidity + "%";

  averageHumidityArray.push(+humidity);

  if (humidity > maxHumidity) {
    maxHumidity = humidity;
  }
  if (humidity < minHumidity) {
    minHumidity = humidity;
  }

  humidityAverageParagraph.innerText =
    ((Number(maxHumidity) + Number(minHumidity)) / 2).toFixed(2) + "%";

  maxHumidityParagraph.innerHTML = maxHumidity + "%";
  minHumidityParagraph.innerHTML = minHumidity + "%";
};
