import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`
    px-4
    py-1
    font-medium
    `}
  background-color: #009fe3;
  color: white;
  &:hover {
    background-color: #0084bd;
  }
`;

const Button = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;
