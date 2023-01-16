import React from "react";
import "../styles/history.css";

const HistoryContent = (props) => {
  return (
    <div>
      <h2>{props.h2Prop}</h2>

      <p>{props.p1Prop}</p>

      <img src={props.imageProp} alt="" />
      <p>{props.p2Prop}</p>

      <p>{props.p3Prop}</p>
    </div>
  );
};

export default HistoryContent;
