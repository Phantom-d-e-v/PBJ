const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
var session = require("express-session");
const app = express();
const port = 5000;
var corsOptions = {
  origin: "*",
};
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

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "PBJ",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name, username, email, password) VALUES (?,?,?,?)",
    [name, username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(`Values inserted`);
      }
    }
  );
});

app.post("/login", (req, res) => {
  const uName = req.body.username;
  const pass = req.body.password;

  db.query(
    `SELECT id FROM users where username = '${uName}' AND password = '${pass}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length === 0) {
        res.send(`incorrect details`);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/userlist", (req, res) => {
  db.query("SELECT name,username,email,password FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const uName = req.body.username;
  const pass = req.body.password;
  db.query(
    "UPDATE users SET password = ? WHERE username = ?",
    [pass, uName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// app.delete();

app.listen(port, () => {
  console.log(`app listening at http://localhost: ${port}`);
});

//app.get("/", (req, res) => {
//   res.send("Happy Birth!");
// });

// app.post("/login", function (request, response) {
//   const connection = connectDB();
//   const { username, password } = request.body;
//   console.log(request.body);
//   // var username = request.body.username;
//   // var password = request.body.password;
//   if (username && password) {
//     connection.query(
//       "SELECT * FROM users WHERE username = ? AND password = ?",
//       [username, password],
//       function (error, results, fields) {
//         if (results.length > 0) {
//           request.session.loggedin = true;
//           request.session.username = username;
//           // response.redirect('/dashboard');
//           response.send("Successfully Logged In");
//         } else {
//           response.send("Incorrect Username and/or Password!");
//         }
//         response.end();
//       }
//     );
//   } else {
//     response.send("Please enter Username and Password!");
//     response.end();
//   }
// });

// // connectDB();
