import React, { Component } from "react";

class Episode extends Component {
  state = {
    hidden: true,
  };

  toggleHidden = () => {
    this.setState({ hidden: this.state.hidden ? false : true });
  };

  render() {
    return (
      <div className="episode" onClick={this.toggleHidden}>
        <div className="episode-audio-preview">
          <audio ref="audio_tag" src={this.props.audio} controls />
        </div>
        <div className="episode-information">
          <h3>{this.props.name}</h3>
          <h6>
            {this.props.date}
            <span>🞄</span>
            {Math.floor(this.props.duration / 60000)}min{" "}
            {Math.floor((this.props.duration / 1000) % 60)}s
          </h6>
          <div className={this.state.hidden ? "hidden" : ""}>
            <p className="episode-description">{this.props.description}</p>
          </div>
        </div>
        <div className="episode-expand">
          <div className={this.state.hidden ? "" : "rotate"}>
            <span>▼</span>
          </div>
          {/* <div className={this.state.hidden ? "hidden" : ""}>▲</div> */}
        </div>
      </div>
    );
  }
}

export default Episode;
