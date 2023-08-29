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

module.exports = {
  getTemperatureRegister,
  createTemperatureRegister,
};
