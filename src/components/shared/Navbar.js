import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "gatsby";
import WhiteLogo from "../../images/blanco.png";

//Local Imports
import Button from "./Button";

const HeaderContainer = styled.div`
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
`;

const Logo = styled.img`
  height: 64px;
  width: 120px;
  object-fit: cover;
`;

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  list-style-type: none;
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
    label: "Generación / Almacenamiento",
    path: "/generacion-almacenamiento",
  },
  {
    label: "SGEn",
    path: "/sgen",
  },
  {
    label: "Eficiencia Energética",
    path: "/eficiencia-energetica",
  },
  {
    label: "MEM",
    path: "/mem",
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
        <ListItem>
          <Button>Contacto</Button>
        </ListItem>
      </LinkList>
    </HeaderContainer>
  );
};

export default Navbar;
