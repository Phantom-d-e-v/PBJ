import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../LoginPage/LoginPage.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const animProp = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  const handlePwd = (e) => {
    setPassword(e.target.value);
  };

  const handleUname = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res) => {
        console.log(res);
      });
    // axios
    //   .post(
    //     "http://localhost:5000/login",
    //     {},
    //     {
    //       auth: { username: { username }, password: { password } },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <animated.div style={animProp}>
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <label for="u_name">Username:</label>
        <input
          id="u_name"
          type="text"
          placeholder="username"
          onChange={handleUname}
          value={username}
        ></input>
        <br />
        <label for="u_pwd">Password:</label>
        <input
          id="u_pwd"
          type="password"
          placeholder="password"
          onChange={handlePwd}
          value={password}
        ></input>
        <br />
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </animated.div>
  );
}

export default Login;
