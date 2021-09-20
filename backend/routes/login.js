const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");
const router = express.Router();
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/login', function(request, response) {
    const connection = connectDB();
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				// response.redirect('/dashboard');
                response.send("Successfully Logged In");
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
