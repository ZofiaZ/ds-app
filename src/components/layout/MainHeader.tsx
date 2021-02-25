import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Header = styled.header`
  padding: 20px;
  display: flex;
`;

function MainHeader() {
  return (
    <Header>
      <img src={logo} className="App-logo" alt="Dynamic Solutions logo" />
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
    </Header>
  );
}

export default MainHeader;
