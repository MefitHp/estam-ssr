import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Button, Wrapper } from "../components/shared";
import { ReadMore, InfoCards, HowItWorks, Projects } from "../components/Home";
import AboutYou from "../components/Home/AboutYou";

const Footer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 10vh;
  padding: 30px;
`;

const VideoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
  padding: 30px;
  background-color: black;
  .video {
    width: 40%;
    height: 50%;
    background-color: #fff;
  }
  .cuadro {
    width: 30%;
    height: 40%;
    background-color: #009fe3;
    margin-left: -5%;
  }
`;

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
    b {
      font-family: "Oswald Bold";
    }
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
      <HeaderBanner>
        <BackgroundImageFluid>
          <Wrapper>
            <BannerTitleContainer>
              <BannerTitle>
                <span>
                  ¡Reduce los costos
                  <br /> de energía de tu <br /> <b>empresa!</b>
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
      {/* <HowItWorks /> */}
      <Projects />
      <VideoSection>
        <div className="video">Video</div>
        <div className="cuadro">
          El abuso al consumo de este producto es nocivo para la salud
        </div>
      </VideoSection>
      <Footer>Footer</Footer>
    </>
  );
};

export default IndexPage;
