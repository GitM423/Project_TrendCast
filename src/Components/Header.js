import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        {/* <img src="assets/icons8-germany-64.png" alt=""> */}
        <p>REGION</p>
      </div>
      <Link to={`/`}>
        <div>
          {/* <img src="assets/icons8-home-64.png" alt=""> */}
          <p>HOME</p>
        </div>
      </Link>
      <Link to={`/Overview`}>
        <div>
          {/* <img src="assets/icons8-headphones-100.png" alt=""> */}
          <p>PODCAST</p>
        </div>
      </Link>
      <Link to={`/Search`}>
        <div>
          {/* <img src="assets/icons8-search-64.png" alt=""> */}
          <p>SEARCH</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
