const setColorLineDown = (ctx, color) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? color : undefined;

const setColorLineUp = (ctx, color) =>
  ctx.p0.parsed.y < ctx.p1.parsed.y ? color : undefined;

const setColorLineEqual = (ctx, color) =>
  ctx.p0.parsed.y === ctx.p1.parsed.y ? color : undefined;

const deepOrange = "rgb(255, 171, 145)";
const blue = "rgb(33, 150, 243)";
const lightGreen = "rgb(197, 225, 165)";

const datasets = [
  {
    label: "Umidade em %",
    backgroundColor: "rgb(152, 173, 194)",
    borderColor: "rgb(141, 228, 15)",
    hoverBackgroundColor: "rgb(0,0,0)",
    pointHoverRadius: 10,
    pointStyle: "rectRounded",
    pointRadius: 5,
    data: [],
    tension: 0.5,
    segment: {
      borderColor: (ctx) =>
        setColorLineDown(ctx, blue) || setColorLineUp(ctx, lightGreen),
      borderDash: (ctx) => setColorLineEqual(ctx, [6, 6]),
    },
  },
  {
    label: "Temperatura em ˚C",
    backgroundColor: "rgb(52, 73, 94)",
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
];

const data = {
  labels: [],
  datasets,
};

const options = {
  // scales: {
  //   y: {
  //     max: 50,
  //     min: -5,
  //     ticks: {
  //       stepSize: 0.1,
  //     },
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
};

const config = {
  type: "line",
  data,
  options,
};

const calculateAverage = (data) =>
  (data.reduce((element, total) => element + total, 0) / data.length).toFixed(
    2
  );

export default {
  config,
  calculateAverage,
};
