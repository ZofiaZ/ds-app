import React from "react";
import styled from "styled-components";
import { colors, spacings, layout } from "../../utils/styles";

const Footer = styled.footer`
  padding: ${spacings.offset};
  display: flex;
  border-top: 2px solid ${colors.border};
  height: ${layout.footerHeight};
`;

function MainFooter() {
  return (
    <Footer>
      <p>all rights reserved</p>
    </Footer>
  );
}

export default MainFooter;
