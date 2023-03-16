import React from "react";
import Video from "./Video";
import Subscription from "./Subscription";
import "../styles/home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <Video />
        <div className="video-description">
          <h1>The Beauty of Moldova</h1>
          <p>Autumn, harvest season and wines</p>
        </div>
      </div>
      <div className="subscription-container">
        <Subscription />
      </div>
    </>
  );
};

export default Home;
