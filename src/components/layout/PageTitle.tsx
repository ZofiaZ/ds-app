import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 18px;
`;

const PageTitle: FunctionComponent = ({ children }) => (
  <Title>{children}</Title>
);

export default PageTitle;
