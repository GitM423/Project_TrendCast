import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="item-container">
        <Link to={"/shows/" + this.props.id}>
          <div className="item">
            <img src={this.props.image} alt="" />
            <div className="item-text">
              <h2 className="item-name">{this.props.name}</h2>
              <h2 className="item-number">{this.props.number}.</h2>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Item;
