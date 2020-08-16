import React, { Component } from "react";
import Item from "./Item";
import apiKey from "./apiKey";

// let searchInput = "Dog";
class List extends Component {
  state = {
    data: [],
    type: "show",
    market: "DE",
    limit: 15,
    offset: 0,
    pageChange: false,
    error: "",
  };

  componentDidMount() {
    console.log("search: ", this.props.searchInput);
    fetch(
      `https://api.spotify.com/v1/search?q=${this.props.searchInput}&type=${this.state.type}&market=${this.state.market}&limit=${this.state.limit}&offset=${this.state.offset}`,
      {
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.shows.items });
        console.log("podcasts:", this.state.data);
      });
  }
  componentDidUpdate() {
    if (this.state.pageChange) {
      console.log("search: ", this.props.searchInput);
      fetch(
        `https://api.spotify.com/v1/search?q=${this.props.searchInput}&type=${this.state.type}&market=${this.state.market}&limit=${this.state.limit}&offset=${this.state.offset}`,
        {
          headers: {
            Authorization: "Bearer " + apiKey,
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json.shows.items });
          console.log("podcasts:", this.state.data);
        })
        .then(this.setState({ pageChange: false }));
    }
  }
  handleLimit = () => {
    if (this.state.limit > 0 && this.state.limit <= 50) {
      this.setState({ pageChange: true });
      this.setState({ error: "" });
    } else {
      this.setState({
        error: "ERROR! Please enter a number between 1 and 50!",
      });
    }
  };

  handleLimitChange(event) {
    this.setState({ limit: event.target.value });
  }
  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      // (KeyDown, use keyCode)
      // (KeyPress, use charCode)
      this.handleLimit();
    }
  };
  backward = () => {
    this.setState({ offset: parseInt(this.state.offset - 1) });
    this.setState({ pageChange: true });
  };

  forward = () => {
    this.setState({ offset: parseInt(this.state.offset + 1) });
    this.setState({ pageChange: true });
  };

  render() {
    return (
      <div className="list">
        <div className="list-adjustments">
          <div className="list-limit">
            <label>
              Set number of results per page:{" "}
              <input
                type="number"
                value={this.state.limit}
                min="1"
                max="50"
                onChange={(event) => this.handleLimitChange(event)}
                onKeyUp={(event) => this.handleKeyUp(event)}
              />
            </label>
            <input
              type="button"
              value="Apply Changes"
              onClick={this.handleLimit}
            />
          </div>
          <div className="error-message">{this.state.error}</div>
        </div>
        <div className="list-items">
          {this.state.data.map((obj, i) => {
            return (
              <Item
                key={obj.id}
                id={obj.id}
                image={obj.images[0].url}
                name={obj.name}
                number={this.state.limit * this.state.offset + i + 1}
              />
            );
          })}
        </div>
        <div className="list-nav">
          <div className="nav-buttons">
            <button
              disabled={this.state.offset === 0}
              className={
                this.state.offset === 0
                  ? "direction-btn inactive-btn"
                  : "direction-btn active-btn"
              }
              onClick={this.backward}
            >
              {"<"}
            </button>
            <button className="direction-btn active-btn" onClick={this.forward}>
              {">"}
            </button>
          </div>
          <div className="page-count">Page {this.state.offset + 1}</div>
        </div>
      </div>
    );
  }
}

export default List;
