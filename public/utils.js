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
        setColorLineDown(ctx, blue) ||
        setColorLineUp(ctx, deepOrange) ||
        setColorLineEqual(ctx, lightGreen),
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

const calculateTemperatureAverage = (dataTemperature) =>
  (
    dataTemperature.reduce((element, total) => element + total, 0) /
    dataTemperature.length
  ).toFixed(2);

export default {
  config,
  calculateTemperatureAverage,
};
