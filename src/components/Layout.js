import React from "react";
import { SEO } from ".";

export const Layout = ({ children }) => {
  return (
    <div>
      <SEO title={"Inicio"} />
      {children}
    </div>
  );
};

export default Layout;
