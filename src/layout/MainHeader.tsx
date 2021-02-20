import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

function MainHeader() {
  return (
    <header className="MainHeader">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <NavLink to="/">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/edit">Edit</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default MainHeader;
