import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Button from "./Button";

const HeaderContainer = styled.div`
  ${tw`
  flex
  h-16
  bg-black
  shadow-md
  px-20
  
  items-center
  `}
  color: black;
`;

const Logo = styled.img`
  height: 64px;
  width: 120px;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <Logo src="/static/blanco.png" />
      <Button>Contacto</Button>
    </HeaderContainer>
  );
};

export default Navbar;
