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
  };
  handleRegionId = (regionId) => {
    this.setState({ regionId });
  };
  render() {
    return (
      <Router>
        {this.props.children}
        <div className="App">
          <Route
            render={() => (
              <Header
                handleRegionId={this.handleRegionId}
                regionId={this.state.regionId}
              />
            )}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Overview"
              exact
              render={() => <Overview regionId={this.state.regionId} />}
            />
            <Route
              path="/Search"
              exact
              render={() => <Search regionId={this.state.regionId} />}
            />
            <Route path="/shows/:id" component={Details} />
            <Route component={NoMatch} />
          </Switch>
          {/* <Route component={Footer} /> */}
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
