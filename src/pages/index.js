import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Wrapper } from "../components/shared";
import {
  ReadMore,
  InfoCards,
  HowItWorks,
  Projects,
  Importance,
} from "../components/Home";
import AboutYou from "../components/Home/AboutYou";
import Footer from "../components/Home/Footer";

const HeaderBanner = styled.section`
  min-height: calc(85vh - 70px);
  background-color: goldenrod;
`;

const BannerTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: flex-end;
`;

const BannerTitle = styled.h1`
  color: white;
  font-weight: light;
  padding: 15% 8px;
  span {
    font-size: calc(2.5em + 1vw);
    line-height: 1;
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

const IndexPage = () => {
  return (
    <>
      {/* Header */}
      <HeaderBanner id="#">
        <BackgroundImageFluid>
          <Wrapper>
            <BannerTitleContainer>
              <BannerTitle>
                <span className="oswald-extralight">
                  <i>
                    <b className="oswald-regular">
                      Somos la única empresa <br />
                      en México con la solución integral
                    </b>{" "}
                    <br />
                  </i>
                  desde la generación de enegía <br />
                  uso eficiente y suministro de <br />
                  la misma.
                </span>
              </BannerTitle>
            </BannerTitleContainer>
          </Wrapper>
        </BackgroundImageFluid>
      </HeaderBanner>
      {/* Formulario acerca de ti */}
      <AboutYou />
      {/* Primera sección */}
      <ReadMore />

      <InfoCards />
      <HowItWorks />
      <Projects />
      <BackgroundImageFluid>
        <Importance />
        <Footer />
        <div style={{ padding: "2rem" }} />
      </BackgroundImageFluid>
    </>
  );
};

export default IndexPage;
