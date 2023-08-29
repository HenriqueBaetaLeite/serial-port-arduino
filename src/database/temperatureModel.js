const connection = require("./connection");

const getTemperatureRegister = async () => {
  const [result] = await connection.execute(
    "SELECT * FROM temp_analyze.temperature;"
  );
  return result;
};

const createTemperatureRegister = async (temp) => {
  const { data, max, min, avg } = temp;
  const [{ insertId }] = await connection.execute(
    "INSERT INTO temp_analyze.temperature (temperature, max, min, avg) VALUES (?, ?, ?, ?);",
    [data, max, min, avg]
  );
  return insertId;
};

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
  getTemperatureRegister,
  createTemperatureRegister,
  getHumidityRegister,
  createHumidityRegister,
};
