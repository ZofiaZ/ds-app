import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

function MainHeader() {
  return (
    <header className="MainHeader">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <NavLink exact={true} to="/">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/edit">Edit</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
