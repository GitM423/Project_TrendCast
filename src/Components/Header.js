import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="structure">
      <div>
        {/* <img src="assets/icons8-germany-64.png" alt=""> */}
        <p>REGION</p>
      </div>
      <Link to={`/`}>
        <div className={window.location.pathname === "/" ? "active-page" : ""}>
          {/* <img src="assets/icons8-home-64.png" alt=""> */}
          <p>HOME</p>
        </div>
      </Link>
      <Link to={`/Overview`}>
        <div
          className={
            window.location.pathname === "/Overview" ? "active-page" : ""
          }
        >
          {/* <img src="assets/icons8-headphones-100.png" alt=""> */}
          <p>PODCAST</p>
        </div>
      </Link>
      <Link to={`/Search`}>
        <div
          className={
            window.location.pathname === "/Search" ? "active-page" : ""
          }
        >
          {/* <img src="assets/icons8-search-64.png" alt=""> */}
          <p>SEARCH</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
