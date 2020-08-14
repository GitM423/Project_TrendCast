import React, { Component } from "react";
import apiKeyShows from "./apiKeyShows";
import DetailsContent from "./DetailsContent";

class Details extends Component {
  state = {
    data: {},
    episodes: [],
  };

  componentDidMount() {
    fetch(`https://api.spotify.com/v1${this.props.location.pathname}`, {
      headers: {
        Authorization: "Bearer " + apiKeyShows,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
        console.log(this.state.data);
      })
      .then(() => {
        console.log(this.state.data.episodes);

        this.setState({ episodes: this.state.data.episodes });
        console.log(this.state.episodes);
        console.log(this.state.data.images[0].url);
      });
  }

  render() {
    return (
      <section>
        <DetailsContent
          data={this.state.data}
          image={this.state.data.images[0].url}
          episodes={this.state.episodes}
        />
      </section>
    );
  }
}
export default Details;
