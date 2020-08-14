import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <Link to={"/shows/" + this.props.id}>
        <div className="item">
          <div className="item-img">
            {" "}
            <img src={this.props.image} alt="" />
          </div>
          <div className="item-text">
            <h2>{this.props.name}</h2>
          </div>
        </div>
      </Link>
    );
  }
}

export default Item;
