const deepOrange = "rgb(255, 171, 145)";
const blue = "rgb(33, 150, 243)";

const setColorLineDown = (ctx, color) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? color : undefined;

const setColorLineUp = (ctx, color) =>
  ctx.p0.parsed.y < ctx.p1.parsed.y ? color : undefined;

const setColorLineEqual = (ctx, color) =>
  ctx.p0.parsed.y === ctx.p1.parsed.y ? color : undefined;

export const lineChart = {
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
};
