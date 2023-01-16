import React from "react";
import VideoHistory from "./VideoHistory";
import Subscription from "./Subscription";
import "../styles/home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <VideoHistory />
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
