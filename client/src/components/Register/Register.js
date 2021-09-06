import React from "react";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {};

  return (
    <div>
      <h2>Register:</h2>
      <form onClick={handleSubmit}>
        <label for="name">Name: </label>
        <input id="name" type="text" placeholder="full name"></input>
        <br />
        <label for="email">Email: </label>
        <input id="email" type="text" placeholder="email"></input>
        <br />
        <label for="u_name">Username:</label>
        <input id="u_name" type="text" placeholder="username"></input>
        <br />
        <label for="u_pwd">Password:</label>
        <input id="u_pwd" type="password" placeholder="password"></input>
        <br />
        <br />
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
}

export default Register;
