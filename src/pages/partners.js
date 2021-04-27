import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Button, Wrapper } from "../components/shared";

function Nosotros() {
  return (
    <>
      <HeaderBanner id="#">
        <BackgroundImageFluid>
          <Wrapper>
            <Section>
              <BannerTitleContainer>
                <BannerTitle>
                  <span>
                    Quieres saber más
                    <br /> acerca de nosotros?
                  </span>
                </BannerTitle>
                <BannerTitle>
                  <span>Descarga nuestro portafolio</span>
                </BannerTitle>
                <BannerButtons>
                  <Button>Español</Button>
                  <Button>English</Button>
                </BannerButtons>
              </BannerTitleContainer>
              <BannerTitleContainer>
                <BannerTitle>
                  <span>Ya eres socio?</span>
                </BannerTitle>
                <BannerButtons>
                  <Button>Accede al Drive para ti</Button>
                </BannerButtons>
              </BannerTitleContainer>
            </Section>
          </Wrapper>
        </BackgroundImageFluid>
      </HeaderBanner>
    </>
  );
}

const Section = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderBanner = styled.section`
  min-height: calc(85vh - 70px);
  background-color: goldenrod;
`;

const BannerTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerTitle = styled.h2`
  color: white;
  font-weight: light;
  padding: 20px;
  span {
    font-size: calc(3.5em + 1vw);
    line-height: 1;
    b {
      font-family: "Oswald Bold";
    }
  }
`;

const BannerButtons = styled.div`
  display: flex;
  justify-content: center;
  & button {
    margin: 10px;
  }
`;
// markup

const BackgroundImageFluid = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner.png" }) {
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
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

export default Nosotros;
