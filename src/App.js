import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Overview from "./Components/Overview";
import Search from "./Components/Search";
import Details from "./Components/Details";

import NoMatch from "./Components/error404";
import "./App.css";

function App(props) {
  return (
    <Router>
      {props.children}
      <div className="App">
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Overview" exact component={Overview} />
          <Route path="/Search" exact component={Search} />
          <Route path="/shows/:id" component={Details} />
          <Route component={NoMatch} />
        </Switch>
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
