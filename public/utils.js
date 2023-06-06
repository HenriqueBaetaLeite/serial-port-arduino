const colorDown = (ctx, color) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? color : undefined;

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
      borderColor: (ctx) => colorDown(ctx, "rgb(192, 57, 43)"),
    },
  },
];

const data = {
  labels: [],
  datasets,
};

const options = {
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

const averageTemperature = (dataTemperature) =>
  (
    dataTemperature.reduce((element, total) => element + total, 0) /
    dataTemperature.length
  ).toFixed(2);

export default {
  config,
  averageTemperature,
};
