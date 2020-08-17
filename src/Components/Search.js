import React, { Component } from "react";
import List from "./List";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPlaceholder: "SEARCH FOR TOPIC, PERSON, PLACES...",
      inputValue: "SEARCH FOR TOPIC, PERSON, PLACES...",
      prevInputValue: "",
      searchValue: "",
      pageChange: false,
      noSearch: true,
      extendedSearch: false,
      typeInput: "show",
      exName: "",
      yearRangeChecked: false,
    };
  }
  componentDidUpdate() {
    if (this.state.pageChange) {
      this.setState({ pageChange: false });
    }
  }
  handleSearch = () => {
    if (
      this.state.inputValue !== this.state.inputPlaceholder &&
      this.state.inputValue !== ""
    ) {
      this.setState({ pageChange: true });
      this.setState({ noSearch: false });

      this.setState({ searchValue: this.state.inputValue });
      this.setState({ prevInputValue: this.state.inputValue });
    }
  };

  handleChange = (event) => {
    // or handleChange() { , but then onChange={(event) => this.handleChange(event)}
    this.setState({ inputValue: event.target.value });
    this.setState({ pageChange: false });
  };
  handlePlaceholder = () => {
    if (this.state.inputValue === this.state.inputPlaceholder) {
      this.setState({ inputValue: "" });
    }
    if (this.state.inputValue === "") {
      this.setState({ inputValue: this.state.inputPlaceholder });
    }
  };

  handleExtendedSearch = () => {
    this.setState({ extendedSearch: !this.state.extendedSearch });
  };

  // handleType = (event) => {
  //   this.setState({ typeInput: event.target.value });
  //   this.setState({ pageChange: false });
  //   console.log(this.state.typeInput);
  // };

  handleExName = (event) => {
    this.setState({ exName: event.target.value });
  };
  handleYearCheck = () => {
    this.setState({ yearRangeChecked: false });
  };
  handleYearRangeCheck = () => {
    this.setState({ yearRangeChecked: true });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      // (KeyDown, use keyCode)
      // (KeyPress, use charCode)
      this.handleSearch();
    }
  };

  render() {
    return (
      <section id="search">
        <div className="search-header">
          <div className="search-input">
            <div className="simple-search">
              <input
                type="text"
                value={this.state.inputValue}
                className="simple-search-text"
                onChange={(event) => this.handleChange(event)}
                onFocus={this.handlePlaceholder}
                onBlur={this.handlePlaceholder}
                onKeyUp={(event) => this.handleKeyUp(event)}
              />
              <input type="button" value="Search" onClick={this.handleSearch} />
              <input
                type="button"
                value={this.state.extendedSearch ? "-" : "+"}
                className="simple-search-expand"
                onClick={this.handleExtendedSearch}
              />
            </div>

            <div
              className={
                this.state.extendedSearch ? "extended-search" : "hidden"
              }
            >
              <h2> Refine your search:</h2>
              <div className="extended-search-para">
                <div className="extended-search-para-all">
                  <div className="para">
                    <label>
                      <h3>Album: </h3>
                      <input
                        type="text"
                        onChange={(event) => this.handleExAlbum(event)}
                      />
                    </label>

                    <label>
                      <h3>Artist: </h3>
                      <input
                        type="text"
                        onChange={(event) => this.handleExArtist(event)}
                      />
                    </label>

                    <label>
                      <h3>Track: </h3>
                      <input
                        type="text"
                        onChange={(event) => this.handleExTrack(event)}
                      />
                    </label>
                  </div>
                  <div className="para-year">
                    <label>
                      <h3>Year: </h3>
                      <input
                        type="radio"
                        name="year"
                        checked={!this.state.yearRangeChecked}
                        onClick={this.handleYearCheck}
                      />
                    </label>
                    <label>
                      <h3>Range: </h3>
                      <input
                        type="radio"
                        name="year"
                        checked={this.state.yearRangeChecked}
                        onClick={this.handleYearRangeCheck}
                      />
                    </label>
                    <div className="para-year-value">
                      <input
                        type="text"
                        onChange={(event) => this.handleExTrack(event)}
                      />
                      <h3>-</h3>
                      <input
                        type="text"
                        onChange={(event) => this.handleExTrack(event)}
                      />
                    </div>
                  </div>
                </div>

                <div className="extended-search-para-all">
                  <div class="para">
                    <label>
                      <h3>Album:</h3>
                      <input type="text" />
                    </label>

                    <label>
                      <h3>Artist:</h3>
                      <input type="text" />
                    </label>

                    <label>
                      <h3>Track:</h3>
                      <input type="text" />
                    </label>
                  </div>
                </div>
              </div>
              {/* <label>
                Type:{" "}
                <select onChange={(event) => this.handleType(event)}>
                  <option value="album">Album</option>
                  <option value="artist">Artist</option>
                  <option value="playlist">Playlist</option>
                  <option value="track">Track</option>
                  <option value="show">Show</option>
                  <option value="episode">Episode</option>
                </select>
              </label>  */}
            </div>
          </div>
          <div className="search-results">
            {this.state.noSearch
              ? ""
              : "Results for '" +
                (this.state.pageChange
                  ? this.state.inputValue
                  : this.state.prevInputValue) +
                "'"}
          </div>
        </div>
        {this.state.pageChange || this.state.noSearch ? null : (
          <List
            searchInput={`${this.state.searchValue}`}
            market={this.props.regionId}
            // type={this.state.typeInput}
          />
        )}
      </section>
    );
  }
}
export default Search;
