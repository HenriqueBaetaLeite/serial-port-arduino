import { barChart } from "./utils/barChartConfig.js";
import { lineChart } from "./utils/lineChartConfig.js";

import { renderTemperatureConfig } from "./utils/temperatureConfig.js";
import { renderHumidityConfig } from "./utils/humidityConfig.js";

$(function () {
  "use strict";

  const ctx2 = document.getElementById("chart2").getContext("2d");
  const myBarChart = new Chart(ctx2, barChart);

  const ctx = document.getElementById("chart1").getContext("2d");
  const myLineChart = new Chart(ctx, lineChart);

  // Temperature config
  const temperatureParagraph = document.getElementsByClassName("temperature")[0];
    const temperatureProgressBar = document.getElementsByClassName("bar-temperature")[0];
    const maxTemperatureParagraph = document.getElementsByClassName("max-temp")[0];
    const minTemperatureParagraph = document.getElementsByClassName("min-temp")[0];
    const avgTemperatureParagraph = document.getElementById("averageTemperature");
  const tempElements = {
    temperatureParagraph,
    temperatureProgressBar,
    maxTemperatureParagraph,
    minTemperatureParagraph,
    avgTemperatureParagraph,
  };

  // Humidity config
  const humidityParagraph = document.getElementsByClassName("humidity");
  const humidityProgressBar = document.getElementsByClassName("bar-humidity")[0];
  const maxHumidityParagraph = document.getElementsByClassName("max-hum")[0];
  const minHumidityParagraph = document.getElementsByClassName("min-hum")[0];
  const avgHumidityParagraph = document.getElementById("averageHumidity");
  const humElements = {
    humidityParagraph,
    humidityProgressBar,
    maxHumidityParagraph,
    minHumidityParagraph,
    avgHumidityParagraph,
  };

  // Socket config
  const socket = io("http://localhost:3003");

  socket.on("ioArduino", (temperature, humidity) => {
    renderTemperatureConfig(Number(temperature), tempElements);

    const { maxHumidity, minHumidity, averageHumidity } = renderHumidityConfig(
      Number(humidity),
      humElements
    );

    myBarChart.data.datasets[0].data = [
      Number(humidity),
      maxHumidity,
      minHumidity,
      averageHumidity,
    ];
    myBarChart.update();

    const localTime = new Date().toLocaleTimeString();
    myLineChart.data.labels.push(localTime);
    myLineChart.data.datasets[0].data.push(+temperature);

    if (myLineChart.data.datasets[0].data.length >= 9) {
      myLineChart.data.labels.shift();
      myLineChart.data.datasets[0].data.shift();
    }
    myLineChart.update();
  });
});
