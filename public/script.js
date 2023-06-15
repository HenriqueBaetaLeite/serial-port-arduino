import utils from "./utils.js";

const { calculateTemperatureAverage, config } = utils;

const socket = io("http://localhost:3003");

const temperatureParagraph = document.getElementById("temperature");

const averageParagraph = document.getElementById("average");

const averageTemperatureArray = [];

const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, config);

const numberOfTemperatureRegister = 30;

socket.on("ioArduino", (dataSocket) => {
  temperatureParagraph.innerText = dataSocket + "˚C";

  averageTemperatureArray.push(+dataSocket);

  averageParagraph.innerHTML =
    calculateTemperatureAverage(averageTemperatureArray) + "˚C";

  const actualTime = new Date().toLocaleTimeString();

  myChart.data.labels.push(actualTime);

  myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(dataSocket);
    if (dataset.data.length >= numberOfTemperatureRegister) {
      myChart.data.labels.shift();
      dataset.data.shift();
    }
    myChart.update();
  });
});
