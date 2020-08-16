import React, { Component } from "react";
import Episode from "./Episode";

class DetailsContent extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="details">
        <div className="details-compact">
          <div className="details-image">
            <a href={this.props.external}>
              <img src={this.props.image} alt="" />
            </a>
          </div>
          <div className="details-information">
            <h1>{this.props.data.name}</h1>
            <button className="button">Follow</button>
            <button className="button">Share</button>
            <p>{this.props.data.description}</p>
          </div>
        </div>
        <div className="episodes-overview">
          <h2>Episodes</h2>
          <div className="episode-list">
            {this.props.episodes.map((obj) => {
              return (
                <Episode
                  key={obj.id}
                  audio={obj.audio_preview_url}
                  name={obj.name}
                  date={obj.release_date}
                  duration={obj.duration_ms}
                  description={obj.description}
                />
              );
            })}
          </div>
          <div className="details-show-more">
            <a href={this.props.external}>Show More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsContent;
