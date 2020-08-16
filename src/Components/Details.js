import React, { Component } from "react";
import apiKey from "./apiKey";
import DetailsContent from "./DetailsContent";

class Details extends Component {
  state = {
    data: {},
    episodes: [],
    image: "",
    external: "",
  };

  componentDidMount() {
    fetch(`https://api.spotify.com/v1${this.props.location.pathname}`, {
      headers: {
        Authorization: "Bearer " + apiKey,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
        console.log("podcast-data:", this.state.data);
      })
      .then(() => {
        this.setState({ episodes: this.state.data.episodes.items });
        console.log("episodes:", this.state.episodes);
      })
      .then(() => {
        this.setState({ image: this.state.data.images[0].url });
        console.log("image:", this.state.image);
      })
      .then(() => {
        this.setState({ external: this.state.data.external_urls.spotify });
        console.log("external:", this.state.external);
      });
  }

  render() {
    return (
      <section id="details">
        <DetailsContent
          data={this.state.data}
          episodes={this.state.episodes}
          image={this.state.image}
          external={this.state.external}
        />
      </section>
    );
  }
}
export default Details;
