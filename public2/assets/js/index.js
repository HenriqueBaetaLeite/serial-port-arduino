import { barChart } from "./utils/barChartConfig.js";
import { lineChart } from "./utils/lineChartConfig.js";

import { renderTemperatureData } from "./utils/renderTemperatureData.js";
import { renderHumidityData } from "./utils/renderHumidityData.js";

import temperatureElements from "./utils/temperatureElements.js";
import humidityElements from "./utils/humidityElements.js";
import updateTemperatureChart from "./utils/updateTemperatureChart.js";
import updateHumidityChart from "./utils/updateHumidityChart.js";

$(function () {
  "use strict";

  const ctx2 = document.getElementById("chart2").getContext("2d");
  const humidityBarChart = new Chart(ctx2, barChart);

  const ctx = document.getElementById("chart1").getContext("2d");
  const temperatureLineChart = new Chart(ctx, lineChart);

  const socket = io("http://localhost:3003");

  socket.on("ioArduino", (temperatureResults, humidityResults) => {
    const { originalData: temperature } = renderTemperatureData(
      temperatureResults,
      temperatureElements
    );

    updateTemperatureChart(temperatureLineChart, temperature);

    const humidityData = renderHumidityData(humidityResults, humidityElements);
    updateHumidityChart(humidityBarChart, humidityData);

    // const {
    //   max: maxHumidty,
    //   min: minHumidity,
    //   averageData: avgHumidity,
    //   originalData: humidity,
    // } = renderHumidityData(humidityResults, humidityElements);

    // humidityBarChart.data.datasets[0].data = [
    //   humidity,
    //   maxHumidty,
    //   minHumidity,
    //   avgHumidity,
    // ];
    // humidityBarChart.update();

    // const localTime = new Date().toLocaleTimeString();
    // temperatureLineChart.data.labels.push(localTime);
    // temperatureLineChart.data.datasets[0].data.push(temperature);

    // if (temperatureLineChart.data.datasets[0].data.length >= 9) {
    //   temperatureLineChart.data.labels.shift();
    //   temperatureLineChart.data.datasets[0].data.shift();
    // }
    // temperatureLineChart.update();
  });
});
