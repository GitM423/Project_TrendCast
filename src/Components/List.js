import React, { Component } from "react";
import Item from "./Item";
import apiKey from "./apiKey";

// let searchInput = "Dog";
class List extends Component {
  state = {
    data: [],
    search: "playlists",
    type: "show",
    market: "DE",
    limit: 15,
    offset: 1,
  };
  // type=show&q=

  componentDidMount() {
    fetch(
      `https://api.spotify.com/v1/search?q=${this.state.search}&type=${this.state.type}&market=${this.state.market}&limit=${this.state.limit}&offset=${this.state.offset}`,
      {
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json.shows.items });
        console.log(this.state.data);
      });
  }
  backwards() {
    this.setState({ offset: 1 });
  }

  forwards() {
    this.setState({ offset: this.state.offset + 1 });
  }

  render() {
    return (
      <section>
        <div className="list">
          {this.state.data.map((obj) => {
            return (
              <Item
                key={obj.id}
                id={obj.id}
                image={obj.images[0].url}
                name={obj.name}
              />
            );
          })}
        </div>
        <button onClick={this.backwards}>Backwards</button>
        <button onClick={this.forwards}>Forwards</button>
      </section>
    );
  }
}

export default List;
