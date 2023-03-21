import React, { useState } from "react";
import "../styles/glass.css";
import SecondNavbar from "./SecondNavbar";

const Glass = () => {
  const [wineLevel, setWineLevel] = useState(0);
  const setWine = () => (wineLevel === 50 ? setWineLevel(0) : setWineLevel(10 + wineLevel));

  return (
    <>
      <SecondNavbar styleClass={"nav-wines nav-wineries"} />
      <main>
        <div className="squarePart">
          <div className="roundGlass">
            <hr className="topLine" />
            <div style={{ height: `${wineLevel}%` }} className="winePart"></div>
          </div>
        </div>
        <div className="wineLeg">
          <div className="leftLegPart"></div>
          <div className="rightLegPart"></div>
        </div>
        <div className="BottomOfGlass"></div>
        <div className="getWinePart">
          <button onClick={setWine}>Fill Me Up</button>
        </div>
      </main>
    </>
  );
};

export default Glass;
