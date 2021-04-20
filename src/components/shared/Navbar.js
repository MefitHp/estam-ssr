import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "gatsby";
import WhiteLogo from "../../images/white_logo.png";

//Local Imports
import Button from "./Button";

const items = [
  {
    label: "Noticias",
    path: "/noticias",
  },
  {
    label: "Administración de Energía",
    path: "#GESTION-DE-ENERGIA",
  },
  {
    label: "Nosotros",
    path: "/nosotros",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={WhiteLogo} alt="ESTAM LOGO" />
      </Link>
      {/* Hidden in mobile */}
      <LinkList>
        {items.map(({ label, path }, index) => {
          return (
            <li key={index}>
              <MenuLink key={index} to={path}>
                {label}
              </MenuLink>
            </li>
          );
        })}
      </LinkList>
      <ListItem className="contact-button">
        <Button>
          Contacto <span style={{ fontSize: 12, paddingLeft: 6 }}> ▶</span>
        </Button>
      </ListItem>
      {/* Hidden in mobile */}
      {/* Shown in mobile */}
      <MenuButton
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? "Cerrar" : "Abrir"}
      </MenuButton>
      {/* Shown in mobile */}
      <ResponsiveLinkList isOpen={menuOpen}>
        {items.map(({ label, path }, index) => {
          return (
            <ListItem key={index}>
              <MenuLink key={index} to={path}>
                {label}
              </MenuLink>
            </ListItem>
          );
        })}
      </ResponsiveLinkList>
    </HeaderContainer>
  );
};

const MenuButton = styled.button`
  display: none;
  font-size: 1rem;
  padding: 4px;
  color: white;
  border: 1px solid white;
  width: 60px;
  height: 60px;
  @media (max-width: 700px) {
    display: block;
  }
`;

const ResponsiveLinkList = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  position: absolute;
  top: 80px;
  z-index: 100;
  left: 0;
  right: 0;
  transition: max-height 200ms ease-in-out;

  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;

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
  position: relative;
  color: black;
  .contact-button {
    width: 150px;
    font-size: 16px;
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

const ListItem = styled.li`
  font-size: 24px;
  width: 100%;
  display: block;
  padding: 2px 0px;
  a {
    width: 100%;
    text-align: center;
    display: block;
  }
`;

const MenuLink = styled(Link)`
  padding: 8px 16px;
  color: white;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    border-color: white;
  }
`;
export default Navbar;
