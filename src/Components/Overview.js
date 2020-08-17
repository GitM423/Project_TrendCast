import React, { Component } from "react";
import List from "./List";

class Overview extends Component {
  state = {};
  render() {
    return (
      <section id="overview">
        <div className="overview-header">
          <div className="overview-results">Podcasts from Germany</div>
        </div>
        {console.log("regionId: ", this.props.regionId)}
        <List
          searchInput={"DE"}
          market={"DE"}
          // type={"show"}
        />
      </section>
    );
  }
}

export default Overview;
