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

// const ctx = document.getElementById("myChartTemperature")//.getContext("2d");
// const myChart = new Chart(ctx, config);

// const ctx2 = document.getElementById("myChartHumidity");
// const myChart2 = new Chart(ctx2, config);

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

  // myChart.data.labels.push(actualTime);

  // myChart.data.datasets[0].data.push(humidity)
  // myChart.data.datasets[1].data.push(temperature)
  
  // if (myChart.data.datasets[0].data.length >= numberOfTemperatureRegister) {
  //   myChart.data.labels.shift();
  //   myChart.data.datasets[0].data.shift();
  //   myChart.data.datasets[1].data.shift();
  //   myChart.update();
  // }
  // myChart.update();


  // myChart2.data.labels.push(actualTime);

  // myChart2.data.datasets[0].data.push(humidity)
  // myChart2.data.datasets[1].data.push(temperature)
  
  // if (myChart2.data.datasets[0].data.length >= numberOfTemperatureRegister) {
  //   myChart2.data.labels.shift();
  //   myChart2.data.datasets[0].data.shift();
  //   myChart2.data.datasets[1].data.shift();
  //   myChart2.update();
  // }
  // myChart2.update();

  // myChart.data.datasets.forEach((dataset) => {
  //   dataset.data.push(temperature);
  //   if (dataset.data.length >= numberOfTemperatureRegister) {
  //     myChart.data.labels.shift();
  //     dataset.data.shift();
  //   }
  //   myChart.update();
  // });

});
