export const barChart = {
  type: "bar",
  data: {
    labels: ["Mínima", "Máxima", "Média"],
    datasets: [
      {
        backgroundColor: [
          "rgba(255, 255, 255, 0.50)",
          "rgba(255, 255, 255, 0.70)",
          "rgba(255, 255, 255, 0.30)",
        ],
        data: [45, 100, 55],
        borderWidth: [0, 0, 0],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },

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
};
