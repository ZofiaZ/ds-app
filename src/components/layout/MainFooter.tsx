import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colors, spacings, layout } from "../../utils/styles";

const Footer = styled.footer`
  padding: ${spacings.offset};
  display: flex;
  border-top: 2px solid ${colors.border};
  height: ${layout.footerHeight};
`;

const MainFooter: FunctionComponent = () => (
  <Footer>
    <p>all rights reserved</p>
  </Footer>
);

export default MainFooter;
