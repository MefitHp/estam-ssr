import React from "react";
import { Navbar, SEO } from ".";
import { Global, css } from "@emotion/react";

const globalStyles = `
  @font-face {
    font-family: "Hartwell";
    src: url("../../fonts/Hartwell-Regular.otf");
  }

  @font-face {
    font-family: "Hartwell Bold";
    src: url("../../fonts/Hartwell-Bold.otf");
  }

  @font-face {
    font-family: "Hartwell Light";
    src: url("../../fonts/Hartwell-Light.otf");
  }

  @font-face {
    font-family: "Oswald Bold";
    src: url("../../fonts/Oswald-Regular.ttf");
  }
  
  @font-face {
    font-family: "Oswald";
    src: url("../../fonts/Oswald-ExtraLight.ttf");
  }

  body {
    font-family: "Oswald", "Oswald Bold", georgia, serif;
    overflow-y: scroll;
  }
  
  html {
    scroll-behavior: smooth;
  }
  :root {
    --blue: #009FE3;
  }
  
`;
export const Layout = ({ children }) => {
  return (
    <div>
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
