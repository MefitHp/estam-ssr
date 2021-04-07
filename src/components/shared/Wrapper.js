import React from "react";
import styled from "@emotion/styled";

const WrapperContainer = styled.div`
  max-width: 1280px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

export default Wrapper;