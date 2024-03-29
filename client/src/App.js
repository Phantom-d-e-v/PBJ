import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import T_Header from "./components/TemplatePage/T_Header";
import AdminPage from "./components/AdminPage/AdminPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/template" exact component={T_Header} />
          <Route path="/details" exact component={DetailsPage} />
          <Route path="/admin" exact component={AdminPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
