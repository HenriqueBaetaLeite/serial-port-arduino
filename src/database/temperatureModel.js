const connection = require("./connection");

const getAllRegister = async () => {
  const [result] = await connection.execute(
    "SELECT * FROM temp_analyze.temperature;"
  );
  return result;
};

const createRegister = async (temp) => {
  const [{ insertId }] = await connection.execute(
    "INSERT INTO temp_analyze.temperature (temp) VALUES (?);",
    [temp]
  );
  return insertId;
};

module.exports = {
  getAllRegister,
  createRegister,
};
