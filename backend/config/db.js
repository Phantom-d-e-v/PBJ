var mysql = require("mysql2");

const connectDB = async () => {
  try {
    await mysql.createConnection({
      host: "localhost",
      user: "advai",
      password: "password",
      database: "PBJ",
      dialect: "mysql",
    });
    console.log(`DB connected`);
  } catch (error) {
    console.log("ERROR WHILE CONNECTING TO DB");
  }

  return mysql;
};

module.exports = connectDB;
