import utils from "./utils.js";

const { calculateAverage, config, configHumidity } = utils;

const socket = io("http://localhost:3003");

const temperatureParagraph = document.getElementById("temperature");
const temperatureAverageParagraph =
  document.getElementById("averageTemperature");

const humidityParagraph = document.getElementById("humidity");
const humidityAverageParagraph = document.getElementById("averageHumidity");

const averageTemperatureArray = [];
const averageHumidityArray = [];

const ctx = document.getElementById("myChartTemperature").getContext("2d");

const myChart = new Chart(ctx, config);
const numberOfTemperatureRegister = 30;

socket.on("ioArduino", (temperature, humidity) => {
  temperatureParagraph.innerText = temperature + "˚C";

  humidityParagraph.innerText = humidity + "%";

  averageTemperatureArray.push(+temperature);
  averageHumidityArray.push(+humidity);

  temperatureAverageParagraph.innerHTML =
    calculateAverage(averageTemperatureArray) + "˚C";

  humidityAverageParagraph.innerText =
    calculateAverage(averageHumidityArray) + "%";

  const actualTime = new Date().toLocaleTimeString();

  myChart.data.labels.push(actualTime);

  myChart.data.datasets[0].data.push(humidity)
  myChart.data.datasets[1].data.push(temperature)
  myChart.update();

  // myChart.data.datasets.forEach((dataset) => {
  //   dataset.data.push(temperature);
  //   if (dataset.data.length >= numberOfTemperatureRegister) {
  //     myChart.data.labels.shift();
  //     dataset.data.shift();
  //   }
  //   myChart.update();
  // });

});
