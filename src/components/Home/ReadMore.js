import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Button, FullWidthContainer, Wrapper } from "../shared";

const RenewableEnergyBackground = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "mantente_informado.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.banner.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="ReadMore" className={className} fluid={imageData}>
      {children}
    </BackgroundImage>
  );
};

const ReadMore = () => {
  return (
    <ReadMoreContainer>
      <Wrapper>
        <FullWidthContainer
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RenewableEnergyBackground className="fluid-background">
            <div className="text">
              <h2>
                Mantente informado <br /> sobre el sector <br /> energético...
              </h2>
              <Button>Leer más</Button>
            </div>
          </RenewableEnergyBackground>
        </FullWidthContainer>
      </Wrapper>
    </ReadMoreContainer>
  );
};

const ReadMoreContainer = styled.section`
  background-color: black;
  height: 100vh;
  .fluid-background {
    width: 100%;
    height: 65vh;
    position: relative;
  }
  .text {
    position: absolute;
    padding: 2.5em;
    color: white;
    background: black;
    width: auto;
    right: 0;
  }
  h2 {
    font-size: calc(1.2em + 1vw);
    line-height: 1;
    font-weight: lighter;
    margin-bottom: 32px;
    @media (max-width: 700px) {
      font-size: 42px;
    }
  }
  button {
    text-transform: uppercase;
    font-size: calc(0.2em + 1vw);
    padding: 12px 24px;
  }
`;

export default ReadMore;
