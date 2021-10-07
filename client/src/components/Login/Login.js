import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../LoginPage/LoginPage.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Login(props) {
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

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(`user id: ${response.data}`);
        let data = response.data;
        //map
        if (data === 1 || 2) {
          props.history.push("/admin");
        } else if (response === 0) {
          console.log(`wrong`);
        } else {
          console.log(`wait`);
        }
      });
  };

  return (
    <animated.div style={animProp}>
      <h2>Login:</h2>
      <form>
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
        <button onClick={loginUser}>Login</button>
      </form>
    </animated.div>
  );
}

export default withRouter(Login);
