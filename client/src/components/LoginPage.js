import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Render = (props) => {
  if (props.isLogin === "Login") {
    return (
      <div>
        <Login />
      </div>
    );
  } else if (props.isLogin === "Register") {
    return (
      <div>
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
      <button onClick={() => setIsLogin("Login")}>
        Already hav an account
      </button>
      <button onClick={() => setIsLogin("Register")}>Create an account</button>
      <Render isLogin={isLogin} />
    </div>
  );
}

export default LoginPage;
