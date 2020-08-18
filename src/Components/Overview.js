import React, { Component } from "react";
import List from "./List";

class Overview extends Component {
  state = {
    pageChange: false,
  };

  componentDidUpdate() {
    if (this.props.flagClicked) {
      this.props.handleFlagClicked();
    }
  }

  render() {
    return (
      <section id="overview">
        <div className="overview-header">
          <div className="overview-results">
            Podcasts from {this.props.regionName}
          </div>
        </div>
        {console.log("regionId: ", this.props.regionId)}
        <List
          searchInput={`${this.props.regionId}`}
          market={`${this.props.regionId}`}
          // type={"show"}
        />
      </section>
    );
  }
}

export default Overview;
