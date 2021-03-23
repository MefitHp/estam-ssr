import React from "react";
import styled from "@emotion/styled";

const WrapperContainer = styled.div`
  max-width: 1200px;
  padding: 0 16px;
  margin: auto;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

export default Wrapper;
