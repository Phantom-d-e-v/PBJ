import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./LoginPage.css";

const Render = (props) => {
  if (props.isLogin === "Login") {
    return (
      <div className="loginpage">
        <Login />
      </div>
    );
  } else if (props.isLogin === "Register") {
    return (
      <div className="registerpage">
        <Register />
      </div>
    );
  } else {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
};

function LoginPage(props) {
  const [isLogin, setIsLogin] = useState();
  return (
    <div>
      <header>
        <h1>CV Generator(Temp Name)</h1>
      </header>
      <div class="Button">
        <button id="Login" onClick={() => setIsLogin("Login")}>
          Login
        </button>
        <button id="Register" onClick={() => setIsLogin("Register")}>
          Register
        </button>
      </div>
      <Render isLogin={isLogin} />
    </div>
  );
}

export default LoginPage;
