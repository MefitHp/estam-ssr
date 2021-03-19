import React from "react";
import { Navbar, SEO } from ".";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SEO title={"Inicio"} />
      {children}
    </div>
  );
};

export default Layout;
