import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Button, Wrapper } from "../components/shared";

function Nosotros() {
  return (
    <>
      <HeaderBanner>
        <BackgroundImageFluid>
          <Mask>
            <Wrapper>
              <Section>
                <BannerTitleContainer>
                  <BannerTitle>
                    <span>
                      ¿Quíeres saber más
                      <br /> acerca de nosotros?
                    </span>
                  </BannerTitle>
                  <BannerTitle>
                    <span className="subtitle">
                      Descarga nuestro portafolio
                    </span>
                  </BannerTitle>
                  <BannerButtons>
                    <Button>Español</Button>
                    <Button>English</Button>
                  </BannerButtons>
                </BannerTitleContainer>
                <BannerTitleContainer>
                  <BannerTitle>
                    <span>¿Ya eres socio?</span>
                  </BannerTitle>
                  <BannerButtons>
                    <Button>Accede al Drive para ti</Button>
                  </BannerButtons>
                </BannerTitleContainer>
              </Section>
            </Wrapper>
          </Mask>
        </BackgroundImageFluid>
      </HeaderBanner>
    </>
  );
}

const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.33);
`;
const Section = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderBanner = styled.section`
  min-height: 100vh;
  section {
    min-height: 100vh;
  }
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
  .subtitle {
    font-family: "Hartwell Light";
    font-size: calc(0.7em + 1vw);
  }
  span {
    font-size: calc(3.5em + 1vw);
    line-height: 1;
    font-family: "Oswald ExtraLight";
    b {
      font-family: "Oswald Regular";
    }
  }
  @media (max-width: 700px) {
    span {
      font-size: calc(2.5em + 1vw);
    }
  }
`;

const BannerButtons = styled.div`
  display: flex;
  justify-content: center;
  & button {
    margin: 10px;

    padding: 12px 22px !important;
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
