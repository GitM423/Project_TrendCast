import React, { Component } from "react";

class DetailsContent extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.props.image} alt="" />
          </div>
          <div>
            <h1>Bon Appétit Foodcast</h1>
            <button className="button">Follow</button>
            <button className="button">Share</button>
            <p>{this.state.data.description}</p>
          </div>
        </div>
        <div className="episodes">
          <h2>Episodes</h2>
          <div>first episodes map</div>
          <a className="show-more" href={this.state.data}>
            Show More
          </a>
        </div>
      </div>
    );
  }
}

export default DetailsContent;
