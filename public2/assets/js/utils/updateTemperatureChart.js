const updateTemperatureChart = (temperatureLineChart, temperature) => {
  const localTime = new Date().toLocaleTimeString();
  temperatureLineChart.data.labels.push(localTime);
  temperatureLineChart.data.datasets[0].data.push(temperature);

  if (temperatureLineChart.data.datasets[0].data.length >= 9) {
    temperatureLineChart.data.labels.shift();
    temperatureLineChart.data.datasets[0].data.shift();
  }
  temperatureLineChart.update();
};

export default updateTemperatureChart;
