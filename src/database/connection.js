const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_ROOT_USER || "root",
  password: process.env.MYSQL_ROOT_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "temp_analyze",
  port: 3306,
});

module.exports = connection;

const result = async () => {
  const [data] = await connection.execute("SELECT * FROM temperature");
  return data;
};

result().then(data => console.log(data))