import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "./countries";
import CountryFlag from "./CountryFlag";

import iconHome from "./img/icons8-home-64.png";
import iconOverview from "./img/icons8-headphones-100.png";
import iconSearch from "./img/icons8-search-64.png";

class Header extends Component {
  state = { regionHidden: true };
  handleRegion = () => {
    this.setState({ regionHidden: !this.state.regionHidden });
  };
  handleFlagClick = (itemId, itemName) => {
    // if (!this.state.regionHidden) {
    this.props.handleRegionIdName(itemId, itemName);
    this.props.handleFlagClicked();
    this.handleRegion();
    // }
  };

  render() {
    return (
      <div>
        <header className="structure">
          <div
            className={
              this.state.regionHidden
                ? "header-region"
                : "header-region active-page"
            }
            onClick={this.handleRegion}
          >
            {countries.map((obj) => {
              if (obj.id === this.props.regionId) {
                return (
                  <div className="country-flag-header">
                    <CountryFlag
                      key={obj.id}
                      id={obj.id}
                      name={obj.name}
                      url={obj.url}
                    />
                  </div>
                );
              }
            })}
            {/* <img src="assets/icons8-germany-64.png" alt=""> */}
            <p>REGION</p>
          </div>
          <Link to={`/`} className="home-link">
            <div
              className={window.location.pathname === "/" ? "active-page" : ""}
            >
              {/* <div className="header-img">
                <img src={iconHome} alt="" />
              </div> */}
              <p>HOME</p>
            </div>
          </Link>
          <Link to={`/Overview`}>
            <div
              className={
                window.location.pathname === "/Overview" ? "active-page" : ""
              }
            >
              {/* <div className="header-img">
                <img src={iconOverview} alt="" />
              </div> */}
              <p>PODCAST</p>
            </div>
          </Link>
          <Link to={`/Search`}>
            <div
              className={
                window.location.pathname === "/Search" ? "active-page" : ""
              }
            >
              {/* <div className="header-img">
                <img src={iconSearch} alt="" />
              </div> */}
              <p>SEARCH</p>
            </div>
          </Link>
        </header>
        <div
          className={
            this.state.regionHidden ? "overlay" : "overlay overlay-show"
          }
          onClick={this.handleRegion}
        ></div>

        <nav
          className={this.state.regionHidden ? "region" : "region region-show"}
        >
          <div className="countries">
            {countries.map((obj) => {
              return (
                <div
                  className="country-flag"
                  onClick={() => this.handleFlagClick(obj.id, obj.name)}
                >
                  <CountryFlag
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    url={obj.url}
                  />
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
