import React, { Component } from "react";
import Item from "./Item";
import apiKey from "./apiKey";

// let searchInput = "Dog";
class List extends Component {
  state = {
    data: [],
    type: "show",
    market: "DE",
    tempLimit: 15,
    limit: 15,
    offset: 0,
    pageChange: false,
    pageNumber: 1,
    error: "",
  };

  componentDidMount() {
    console.log("search: ", this.props.searchInput);
    fetch(
      `https://api.spotify.com/v1/search?q=${this.props.searchInput}&type=${this.state.type}&market=${this.props.market}&limit=${this.state.limit}&offset=${this.state.offset}`,
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
    if (this.state.tempLimit > 0 && this.state.tempLimit <= 50) {
      this.setState({ offset: 0 });
      this.setState({ limit: this.state.tempLimit });

      this.setState({ pageChange: true });
      this.setState({ pageNumber: 1 });
      this.setState({ error: "" });
    } else {
      this.setState({
        error: "ERROR! Please enter a number between 1 and 50!",
      });
    }
  };

  handleLimitChange(event) {
    this.setState({ tempLimit: event.target.value });
  }
  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      // (KeyDown, use keyCode)
      // (KeyPress, use charCode)
      this.handleLimit();
    }
  };
  backward = () => {
    this.setState({
      offset: parseInt(this.state.offset) - parseInt(this.state.limit),
    });
    this.setState({ pageChange: true });
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  forward = () => {
    this.setState({
      offset: parseInt(this.state.offset) + parseInt(this.state.limit),
    });
    this.setState({ pageChange: true });
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    return (
      <div className="list">
        <div className="list-limit">
          <div className="list-adjustments">
            <label for="limit-change">Set number of results per page:</label>

            <input
              type="number"
              value={this.state.tempLimit}
              min="1"
              max="50"
              id="limit-change"
              onChange={(event) => this.handleLimitChange(event)}
              onKeyUp={(event) => this.handleKeyUp(event)}
            />
            <input
              type="button"
              value="Apply Changes"
              className="limit-apply"
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
                number={
                  parseInt(this.state.limit) * parseInt(this.state.pageNumber) -
                  parseInt(this.state.limit) +
                  i +
                  1
                }
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
          <div className="page-count">Page {this.state.pageNumber}</div>
        </div>
      </div>
    );
  }
}

export default List;
