const connection = require("./connection");

const getHumidityRegister = async () => {
  const [result] = await connection.execute(
    "SELECT * FROM temp_analyze.humidity;"
  );
  return result;
};

const createHumidityRegister = async (hum) => {
  const { data, max, min, avg } = hum;
  const [{ insertId }] = await connection.execute(
    "INSERT INTO temp_analyze.humidity (humidity, max, min, avg) VALUES (?, ?, ?, ?);",
    [data, max, min, avg]
  );
  return insertId;
};

module.exports = {
  getHumidityRegister,
  createHumidityRegister,
};
