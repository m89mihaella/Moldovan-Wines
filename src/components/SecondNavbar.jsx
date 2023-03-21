import React from "react";
import { Link, Outlet } from "react-router-dom";

const SecondNavbar = ({ styleClass }) => {
  return (
    <>
      <nav className={styleClass}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/wines">Wines</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Best Moldovan Wines</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/wineries">Wineries</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/fill-me-up">Fill-Me</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default SecondNavbar;
