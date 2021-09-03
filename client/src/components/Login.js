import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {};
  return (
    <div>
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <label for="u_name">Username:</label>
        <input id="u_name" type="text" placeholder="username"></input>
        <br />
        <label for="u_pwd">Password:</label>
        <input id="u_pwd" type="password" placeholder="password"></input>
        <br />
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export default Login;
