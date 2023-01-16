import React from "react";
import "../styles/wineries.css";

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <h3>{props.nameProp}</h3>
        <img src={props.imageProp} alt={props.altProp} />
        <div className="card-info">
          <p>{props.descriptionProp}</p>
          <p>{props.addressProp}</p>

          <button>
            <a href={props.webSiteProp} target="_blank" rel="noreferrer">
              Find out more
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
