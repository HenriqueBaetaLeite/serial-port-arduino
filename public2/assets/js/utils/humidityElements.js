const humidityParagraph = document.getElementsByClassName("humidity");
const humidityProgressBar = document.getElementsByClassName("bar-humidity")[0];
const maxHumidityParagraph = document.getElementsByClassName("max-hum")[0];
const minHumidityParagraph = document.getElementsByClassName("min-hum")[0];
const avgHumidityParagraph = document.getElementById("averageHumidity");

export default {
  humidityParagraph,
  humidityProgressBar,
  maxHumidityParagraph,
  minHumidityParagraph,
  avgHumidityParagraph,
};
