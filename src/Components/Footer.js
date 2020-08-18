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
          <a href="">
            <img src={appStore} alt="" />
          </a>
          <a href="">
            <img src={googlePlay} alt="" />
          </a>
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
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
      {/* <div className="footer-copyright">
      
      </div> */}
    </footer>
  );
};

export default Footer;
