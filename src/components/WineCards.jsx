import React from 'react'

const WineCards = ({ name, webSite }) => {
  return (
    <>
      <div className="flex">
        <p>
          <a href={webSite} target="_blank" rel="noreferrer">
            {name}
          </a>
        </p>
      </div>
    </>
  );
};

export default WineCards