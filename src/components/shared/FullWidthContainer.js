import React from "react";
import styled from "@emotion/styled";

const FullWidth = styled.div`
  width: 100%;
  height: 100%;
`;
const FullWidthContainer = ({ children, ...props }) => {
  return <FullWidth {...props}>{children}</FullWidth>;
};

export default FullWidthContainer;
