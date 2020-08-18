import React from "react";
import appStore from "./img/AppStore.png";
import googlePlay from "./img/GooglePlay.png";

const Footer = () => {
  return (
    <footer className="structure">
      <div className="footer-info">
        <p>
          The easiest way to listen to podcasts on your iPhone, iPad, Android,
          PC, smart speaker - and even in your car. For Free. Bonus and ad-free
          content available with Premium.
        </p>
        <h3>Get the Free App</h3>
        <p>Now available for iPhone, iPad, Android and Alexa</p>
        <div>
          <img src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
        <h5>
          <span>®</span> TrendCast 2020. All Rights reserved
        </h5>
      </div>
      <div className="footer-about">
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
      <div className="footer-socials">
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
