import React from "react";

const Footer = () => {
  return (
    <footer className="structure">
      <div>
        <p>
          The easiest way to listen to podcasts on your iPhone, iPad, Android,
          PC, smart speaker - and even in your car. For Free. Bonus and ad-free
          content available with Premium.
        </p>
        <h3>Get the Free App</h3>
        <p>Now available for iPhone, iPad, Android and Alexa</p>
        <div>{/* <img src="" alt="" />
          <img src="" alt="" /> */}</div>
        <p>
          <span>®</span> TrendCast 2020. All Rights reserved
        </p>
      </div>
      <div>
        <h2>About</h2>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Podcast</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Terms of Service</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a href="">twitter</a>
          </li>
          <li>
            <a href="">facebook</a>
          </li>
          <li>
            <a href="">indeed</a>
          </li>
          <li>
            <a href="">instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
