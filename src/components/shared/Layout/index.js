import React from "react";
import { Navbar, SEO } from "../";
import { Global, css } from "@emotion/react";
import "../../../fonts/layout.css";

const globalStyles = `
  html {
    scroll-behavior: smooth;
  }
  :root {
    --blue: #009FE3;
  }

  .oswald-regular {
    font-family: "Oswald Regular";
  }

  .oswald-extralight {
    font-family: "Oswald ExtraLight";
  }

  .hartwell-regular {
    font-family: "Hartwell Regular";
  }
  
  .hartwell-bold {
    font-family: "Hartwell Bold";
  }

  .hartwell-light {
    font-family: "Hartwell Light";
  }
  
  .hartwell-semibold {
    font-family: "Hartwell Semibold";
  }
`;
export const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <Navbar />
      <SEO title={"Inicio"} />
      {children}
    </div>
  );
};

export default Layout;
