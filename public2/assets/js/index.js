import { barChart } from "./utils/barChartConfig.js";
import { lineChart } from "./utils/lineChartConfig.js";

import { renderTemperatureData } from "./utils/renderTemperatureData.js";
import { renderHumidityData } from "./utils/renderHumidityData.js";

$(function () {
  "use strict";

  const ctx2 = document.getElementById("chart2").getContext("2d");
  const humidityBarChart = new Chart(ctx2, barChart);

  const ctx = document.getElementById("chart1").getContext("2d");
  const temperatureLineChart = new Chart(ctx, lineChart);

  // Temperature config
  const temperatureParagraph =
    document.getElementsByClassName("temperature")[0];
  const temperatureProgressBar =
    document.getElementsByClassName("bar-temperature")[0];
  const maxTemperatureParagraph =
    document.getElementsByClassName("max-temp")[0];
  const minTemperatureParagraph =
    document.getElementsByClassName("min-temp")[0];
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
  const humidityProgressBar =
    document.getElementsByClassName("bar-humidity")[0];
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

  socket.on("ioArduino", (temperatureResults, humidityResults) => {
    const { originalData: temperature } = renderTemperatureData(
      temperatureResults,
      tempElements
    );

    const {
      max: maxHumidty,
      min: minHumidity,
      averageData: avgHumidity,
      originalData: humidity,
    } = renderHumidityData(humidityResults, humElements);

    humidityBarChart.data.datasets[0].data = [
      humidity,
      maxHumidty,
      minHumidity,
      avgHumidity,
    ];
    humidityBarChart.update();

    const localTime = new Date().toLocaleTimeString();
    temperatureLineChart.data.labels.push(localTime);
    temperatureLineChart.data.datasets[0].data.push(temperature);

    if (temperatureLineChart.data.datasets[0].data.length >= 9) {
      temperatureLineChart.data.labels.shift();
      temperatureLineChart.data.datasets[0].data.shift();
    }
    temperatureLineChart.update();
  });
});
