import utils from "./utils.js";

const socket = io("http://localhost:3000");

const temperature = document.getElementById("temperature");

const average = document.getElementById("average");

const averageData = [];

const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, utils.config);

socket.on("ioArduino", (dataSocket) => {
  temperature.innerText = dataSocket + "˚C";

  averageData.push(+dataSocket);

  average.innerHTML = utils.averageTemperature(averageData) + "˚C";

  const actualTime = new Date().toLocaleTimeString();

  myChart.data.labels.push(actualTime);

  myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(dataSocket);
    if (dataset.data.length >= 20) {
      myChart.data.labels.shift();
      dataset.data.shift();
    }
    myChart.update();
  });
});
