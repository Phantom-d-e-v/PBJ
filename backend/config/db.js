var mysql = require("mysql2");

const connectDB = async () => {
  try {
    await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "PBJ@",
      database: "users",
      dialect: "mysql",
    });
    console.log(`DB connected`);
  } catch (error) {
    console.log("ERROR WHILE CONNECTING TO DB");
  }
  connectDB.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected.");
  });
};

module.exports = connectDB;
