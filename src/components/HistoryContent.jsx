import React from "react";
import "../styles/history.css";

const HistoryContent = ({ h2, p1, p2, p3, image }) => {
  return (
    <div>
      <h2>{h2}</h2>

      <p>{p1}</p>

      <img src={image} alt="" />
      <p>{p2}</p>

      <p>{p3}</p>
    </div>
  );
};

export default HistoryContent;
