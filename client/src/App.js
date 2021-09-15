import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import T_Header from "./components/TemplatePage/T_Header";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/template" exact component={T_Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
