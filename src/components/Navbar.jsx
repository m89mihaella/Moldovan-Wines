import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import hamburger from "../assets/icons8-hamburger-menu-24.png";
//import logo from "../assets/3.png";

const Navbar = ({ styleClass }) => {

  return (
    <>
      <nav className={styleClass}>
      <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/wines">Wines</Link>
              </li>

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
          <h1 className="logo">Best Moldovan Wines</h1>
      </div>
  </nav>

     {/* <nav className={styleClass}>
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="logo" />{" "}
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={hamburger} alt="menu" />
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
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
        </div>
  </nav>*/}
      <Outlet />
    </>
  );
};

export default Navbar;


    