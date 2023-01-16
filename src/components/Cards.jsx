import React from "react";
import "../styles/wineries.css";

const Cards = ({ name, image, description, alt, address, webSite }) => {
  //const { name, image, description, alt, address, webSite } = props;
  return (
    <>
      <div className="cards">
        <h3>{name}</h3>
        <img src={image} alt={alt} />
        <div className="card-info">
          <p>{description}</p>
          <p>{address}</p>

          <button>
            <a href={webSite} target="_blank" rel="noreferrer">
              Find out more
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
