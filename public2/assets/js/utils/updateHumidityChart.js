const updateHumidityChart = (humidityBarChart, humidityData) => {
  const {
    max: maxHumidty,
    min: minHumidity,
    averageData: avgHumidity,
    originalData: humidity,
  } = humidityData;

  humidityBarChart.data.datasets[0].data = [
    // humidity,
    maxHumidty,
    minHumidity,
    avgHumidity,
  ];
  humidityBarChart.update();
};

export default updateHumidityChart;
