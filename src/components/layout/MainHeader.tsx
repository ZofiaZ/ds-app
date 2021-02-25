import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { colors, spacings, layout, fontSizes } from "../../utils/styles";

const Header = styled.header`
  padding: ${spacings.offset};
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.border};
  height: ${layout.headerHeight};
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
`;

const NavItem = styled.li`
  padding: 10px;
  margin: 0;
  font-size: ${fontSizes.large};

  a {
    color: ${colors.accent};
  }

  .active {
    color: ${colors.dark};
  }
`;

function MainHeader() {
  return (
    <Header>
      <img src={logo} alt="Dynamic Solutions logo" />
      <nav>
        <NavList>
          <NavItem>
            <NavLink exact={true} to="/">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/edit">Edit</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </Header>
  );
}

export default MainHeader;
