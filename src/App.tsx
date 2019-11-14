import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <h1>HOME</h1>
          </Route>
          <Route path="/what-we-do">
            <h1>WHAT WE DO</h1>
          </Route>
          <Route path="/work">
            <h1>WORK</h1>
          </Route>
          <Route path="/our-network">
            <h1>OUR NETWORK</h1>
          </Route>
          <Route path="/about">
            <h1>ABOUT</h1>
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
