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
class App extends React.Component {
  state = {
    regionId: "DE",
    regionName: "Germany",
    flagClicked: false,
  };
  handleRegionIdName = (regionId, regionName) => {
    this.setState({ regionId });
    this.setState({ regionName });
  };
  handleFlagClicked = (flagClicked) => {
    this.setState({ flagClicked: !this.state.flagClicked });
  };
  render() {
    return (
      <Router>
        {this.props.children}
        <div className="App">
          <Route
            render={() => (
              <Header
                handleRegionIdName={this.handleRegionIdName}
                handleFlagClicked={this.handleFlagClicked}
                regionId={this.state.regionId}
              />
            )}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Overview"
              exact
              render={() => (
                <Overview
                  regionId={this.state.regionId}
                  regionName={this.state.regionName}
                  handleFlagClicked={this.handleFlagClicked}
                  flagClicked={this.state.flagClicked}
                />
              )}
            />
            <Route
              path="/Search"
              exact
              render={() => <Search regionId={this.state.regionId} />}
            />
            <Route path="/shows/:id" component={Details} />
            <Route component={NoMatch} />
          </Switch>
          <Route component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
// function App(props) {
//   return (
//     <Router>
//       {props.children}
//       <div className="App">
//         <Route render={() => <Header />} />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/Overview" exact component={Overview} />
//           <Route path="/Search" exact component={Search} />
//           <Route path="/shows/:id" component={Details} />
//           <Route component={NoMatch} />
//         </Switch>
//         <Route component={Footer} />
//       </div>
//     </Router>
//   );
// }

// export default App;
