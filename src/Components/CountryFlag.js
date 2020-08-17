import React, { Component } from "react";
class Item extends Component {
  state = {};
  render() {
    return <img src={`${this.props.url}`} alt={`${this.props.name}`} />;
  }
}
export default Item;
