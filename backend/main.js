const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const connectDB = require("./config/db.js");
const app = express();
const port = 5000;
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Happy Birth!");
});

// connectDB();

app.listen(port, () => {
  console.log(`app listening at http://localhost: ${port}`);
});
