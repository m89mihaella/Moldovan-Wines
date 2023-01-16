import React from 'react'

const WineCards = (props) => {
  return (
    <>

      <div className="flex">
        <p>
          <a href={props.siteProp} target="_blank" rel="noreferrer">
            {props.wineNameProp}
          </a>
        </p>
      </div>
    </>
  );
}

export default WineCards