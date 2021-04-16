import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "gatsby";
import WhiteLogo from "../../images/white_logo.png";

//Local Imports
import Button from "./Button";

const HeaderContainer = styled.nav`
  ${tw`
  flex
  bg-black
  shadow-md
  px-5
  py-2
  items-center
  justify-between
  lg:px-20
  `}
  color: black;
  .contact-button {
    width: 130px;
    align-items: center;
    display: flex;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const Logo = styled.img`
  height: 64px;
  width: 120px;
  object-fit: contain;
  @media (max-width: 700px) {
    width: 40%;
  }
`;

const LinkList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style-type: none;
  li:last-child {
    justify-self: flex-end;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const ListItem = styled.li``;

const MenuLink = styled(Link)`
  padding: 8px 16px;
  color: white;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    border-color: white;
  }
`;

const items = [
  {
    label: "Noticias",
    path: "/noticias",
  },
  {
    label: "Administración de Energía",
    path: "/administracion-energia",
  },
  {
    label: "Nosotros",
    path: "/nosotros",
  },
];

const Navbar = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={WhiteLogo} alt="ESTAM LOGO" />
      </Link>
      <LinkList>
        {items.map(({ label, path }, index) => {
          return (
            <ListItem key={index}>
              <MenuLink key={index} to={path}>
                {label}
              </MenuLink>
            </ListItem>
          );
        })}
      </LinkList>
      <ListItem className="contact-button">
        <Button>
          Contacto <span style={{ fontSize: 12, paddingLeft: 6 }}> ▶</span>
        </Button>
      </ListItem>
    </HeaderContainer>
  );
};

export default Navbar;
