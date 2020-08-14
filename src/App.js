import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Overview from "./Components/Overview";
import Search from "./Components/Search";
import Details from "./Components/Details";

function App(props) {
  return (
    <Router>
      {props.children}
      <div className="App">
        <Route path=""></Route>
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Overview" exact component={Overview} />
          <Route path="/Search" exact component={Search} />
          <Route path="/shows/:id" component={Details} />
          {/* <Route>
            <NoMatch />
          </Route>*/}
        </Switch>
        {/* <Route component={Footer} /> */}
      </div>
    </Router>
  );
}

export default App;
