import React from "react";
import { useState } from "react";
import Axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Sends information to backend (Promise)
  const registerUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/create", {
      name: name,
      username: username,
      email: email,
      password: password,
    }).then(() => {
      console.log("Sent user info");
      alert("Registered user successfully");
    });
  };
  return (
    <div>
      <h2>Register:</h2>
      <form>
        <label for="name">Name: </label>
        <input
          id="name"
          type="text"
          placeholder="full name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <br />
        <label for="u_name">Username:</label>
        <input
          id="u_name"
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <br />
        <label for="email">Email: </label>
        <input
          id="email"
          type="text"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <br />
        <label for="u_pwd">Password:</label>
        <input
          id="u_pwd"
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <br />
        <br />
        <button onClick={registerUser}>Register</button>
      </form>
    </div>
  );
}

export default Register;
