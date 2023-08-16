const calculateAverage = (data) =>
  (data.reduce((element, total) => element + total, 0) / data.length).toFixed(
    2
  );

  module.exports = { calculateAverage}

// export default {
//   calculateAverage,
// };
