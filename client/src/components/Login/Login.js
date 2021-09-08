import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../LoginPage/LoginPage.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const animProp = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  const handleSubmit = (e) => {};
  return (
    <animated.div style={animProp}>
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
    </animated.div>
  );
}

export default Login;
