export const barChart = {
  type: "bar",
  data: {
    labels: ["Atual", "Máxima", "Mínima", "Média"],
    datasets: [
      {
        backgroundColor: [
          "#ffffff",
          "rgba(255, 255, 255, 0.70)",
          "rgba(255, 255, 255, 0.50)",
          "rgba(255, 255, 255, 0.20)",
        ],
        data: [57, 100, 45, 55],
        borderWidth: [0, 0, 0, 0],
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
