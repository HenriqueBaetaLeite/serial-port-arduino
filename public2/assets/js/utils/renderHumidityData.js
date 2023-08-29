export const renderHumidityData = (humidityData, elements) => {
  const { originalData, max, min, averageData } = humidityData;
  const {
    humidityParagraph,
    humidityProgressBar,
    maxHumidityParagraph,
    minHumidityParagraph,
    avgHumidityParagraph,
  } = elements;

  for (let paragraph of humidityParagraph) {
    paragraph.innerText = originalData + "%";
  }

  humidityProgressBar.style.width = originalData + "%";
  maxHumidityParagraph.innerHTML = max + "%";
  minHumidityParagraph.innerHTML = min + "%";
  avgHumidityParagraph.innerText = averageData + "%";

  return { max, min, averageData, originalData };
};
