import { barChart } from "./utils/barChartConfig.js";
import { lineChart } from "./utils/lineChartConfig.js";

import { renderTemperatureConfig } from "./utils/temperatureConfig.js";
import { renderHumidityConfig } from "./utils/humidityConfig.js";

$(function () {
  "use strict";

  // Temperature config
  const temperatureParagraph =
    document.getElementsByClassName("temperature")[0];
  const temperatureAverageParagraph =
    document.getElementById("averageTemperature");
  const temperatureProgressBar =
    document.getElementsByClassName("bar-temperature")[0];
  const maxTemperatureParagraph =
    document.getElementsByClassName("max-temp")[0];
  const minTemperatureParagraph =
    document.getElementsByClassName("min-temp")[0];
  const averageTemperatureArray = [];
  let maxTemperature = 0;
  let minTemperature = 40;

  // Humidity config
  const humidityParagraph = document.getElementsByClassName("humidity");
  const humidityAverageParagraph = document.getElementById("averageHumidity");
  const humidityProgressBar =
    document.getElementsByClassName("bar-humidity")[0];
  const maxHumidityParagraph = document.getElementsByClassName("max-hum")[0];
  const minHumidityParagraph = document.getElementsByClassName("min-hum")[0];
  const averageHumidityArray = [];
  let maxHumidity = 0;
  let minHumidity = 100;

  const socket = io("http://localhost:3003");

  socket.on("ioArduino", (temperature, humidity) => {
    const tempData = { temperature, maxTemperature, minTemperature };
    const tempElements = {
      temperatureParagraph,
      temperatureProgressBar,
      averageTemperatureArray,
      temperatureAverageParagraph,
      maxTemperatureParagraph,
      minTemperatureParagraph,
    };

    renderTemperatureConfig(tempData, tempElements);

    const humData = {
      humidity,
      maxHumidity,
      minHumidity,
    };

    const humElements = {
      humidityParagraph,
      humidityProgressBar,
      averageHumidityArray,
      humidityAverageParagraph,
      maxHumidityParagraph,
      minHumidityParagraph,
    };

    renderHumidityConfig(humData, humElements);

    const time = new Date().toLocaleTimeString();

    myChart.data.labels.push(time);
    myChart.data.datasets[0].data.push(+temperature);

    if (myChart.data.datasets[0].data.length >= 9) {
      myChart.data.labels.shift();
      myChart.data.datasets[0].data.shift();
    }

    myChart.update();
  });

  var ctx = document.getElementById("chart2").getContext("2d");
  var myChart = new Chart(ctx, barChart);
  console.log("before", ctx);

  var ctx = document.getElementById("chart1").getContext("2d");
  var myChart = new Chart(ctx, lineChart);
  console.log("after", ctx);
});
