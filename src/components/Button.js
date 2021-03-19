import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`
    rounded-lg
    px-3
    py-2
    `}
  background-color: #009fe3;
  color: white;
`;
const Button = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;
