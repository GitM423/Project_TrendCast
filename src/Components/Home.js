import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to TrendCast</h1>
      <h2>
        Audio News, Sports and Entertainment, now with exclusive contect from
        your favorite podcasts.
      </h2>
      <Link to={`/Overview`}>Get started</Link>
      <p>Available in the App Stores</p>
    </section>
  );
};

export default Home;
