function calculateAverage(data) {
  return (
    data.reduce((element, total) => element + total, 0) / data.length
  ).toFixed(2);
}

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

  // Humidity config
  const humidityParagraph = document.getElementsByClassName("humidity")[0];
  const humidityAverageParagraph = document.getElementById("averageHumidity");
  const humidityProgressBar =
    document.getElementsByClassName("bar-humidity")[0];
  const averageHumidityArray = [];
  let maxTemperature = 0;
  let minTemperature = 40;

  const socket = io("http://localhost:3003");

  socket.on("ioArduino", (temperature, humidity) => {
    temperatureParagraph.innerText = temperature + "˚C";
    temperatureProgressBar.style.width = temperature + "%";

    humidityParagraph.innerText = humidity + "%";
    humidityProgressBar.style.width = humidity + "%";

    averageTemperatureArray.push(+temperature);
    averageHumidityArray.push(+humidity);

    temperatureAverageParagraph.innerHTML =
      (maxTemperature + minTemperature) / 2 + "˚C";

    // humidityAverageParagraph.innerText =
    //   calculateAverage(averageHumidityArray) + "%";

    if (temperature > maxTemperature) {
      maxTemperature = temperature;
    }
    if (temperature < minTemperature) {
      minTemperature = temperature;
    }

    maxTemperatureParagraph.innerHTML = maxTemperature + "˚C";
    minTemperatureParagraph.innerHTML = minTemperature + "˚C";

    const time = new Date().toLocaleTimeString();
    myChart.data.labels.push(time);

    if (myChart.data.datasets[0].data.length >= 9) {
      myChart.data.labels.shift();
      myChart.data.datasets[0].data.shift();
    }

    myChart.data.datasets[0].data.push(+temperature);
    myChart.update();
  });

  var ctx = document.getElementById("chart2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Direct", "Affiliate", "E-mail", "Other"],
      datasets: [
        {
          backgroundColor: [
            "#ffffff",
            "rgba(255, 255, 255, 0.70)",
            "rgba(255, 255, 255, 0.50)",
            "rgba(255, 255, 255, 0.20)",
          ],
          data: [5856, 2602, 1802, 1105],
          borderWidth: [0, 0, 0, 0],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        display: false,
        labels: {
          fontColor: "#ddd",
          boxWidth: 15,
        },
      },
      tooltips: {
        displayColors: false,
      },
    },
  });

  const deepOrange = "rgb(255, 171, 145)";
  const blue = "rgb(33, 150, 243)";

  var ctx = document.getElementById("chart1").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Temperatura em ˚C",
          borderColor: "rgb(41, 128, 185)",
          hoverBackgroundColor: "rgb(0,0,0)",
          pointHoverRadius: 10,
          pointStyle: "rectRounded",
          pointRadius: 5,
          data: [],
          tension: 0.5,
          segment: {
            borderColor: (ctx) =>
              setColorLineDown(ctx, blue) || setColorLineUp(ctx, deepOrange),
            borderDash: (ctx) => setColorLineEqual(ctx, [6, 6]),
          },
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          fontColor: "#ddd",
          boxWidth: 40,
        },
      },
      tooltips: {
        displayColors: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#ddd",
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              // beginAtZero: true,
              fontColor: "#ddd",
              stepSize: 1,
            },
            gridLines: {
              display: true,
              color: "rgba(221, 221, 221, 0.08)",
            },
          },
        ],
      },
    },
  });
});
