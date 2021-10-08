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
    `SELECT * FROM users where username = '${uName}' AND password = '${pass}'`,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong" });
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

app.delete("/delete/:username", (req, res) => {
  const username = req.params.username; //Passing username through parameters
  db.query("DELETE FROM users WHERE username = ?", username),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    };
});

app.get("/templates", (req, res) => {
  db.query("SELECT template_path FROM template", (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      console.log(`templatepath: ${JSON.stringify(result)}`);
      res.send(JSON.stringify(result));
    }
  });
});

app.post("/updatecv", (req, res) => {
  const name = req.body.name;
  const about = req.body.about;
  const education1 = req.body.education1;
  const education2 = req.body.education2;
  const work1 = req.body.work1;
  const work2 = req.body.work2;
  const address = req.body.address;
  const pnumber = req.body.pnumber;
  const email = req.body.email;
  const languages = req.body.languages;
  const tskills1 = req.body.tskills1;
  const tskills2 = req.body.tskills2;
  const hobbies1 = req.body.hobbies1;
  const hobbies2 = req.body.hobbies2;

  db.query(
    "INSERT INTO cvs (name, about, education1, education2, work1, work2, address, pnumber, email, languages, tskills1, tskills2, hobbies1, hobbies2) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      name,
      about,
      education1,
      education2,
      work1,
      work2,
      address,
      pnumber,
      email,
      languages,
      tskills1,
      tskills2,
      hobbies1,
      hobbies2,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/adminlist", (req, res) => {
  db.query("SELECT name,username,email,password FROM admins", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

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
