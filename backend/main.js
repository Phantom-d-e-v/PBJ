const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const connectDB = require("./config/db.js");
var session = require("express-session");
const app = express();
const port = 5000;
var corsOptions = {
  origin: "*",
};
const connectDB = require("./config/db.js");
app.use(cors(corsOptions));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Happy Birth!");
});

app.post("/login", function (request, response) {
  const connection = connectDB();
  const { username, password } = request.body;
  console.log(request.body);
  // var username = request.body.username;
  // var password = request.body.password;
  if (username && password) {
    connection.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          // response.redirect('/dashboard');
          response.send("Successfully Logged In");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

// connectDB();

app.listen(port, () => {
  console.log(`app listening at http://localhost: ${port}`);
});
