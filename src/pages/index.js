import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Wrapper } from "../components";

const HeaderBanner = styled.section`
  min-height: calc(85vh - 70px);
  background-color: goldenrod;
`;

const BannerTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(85vh - 70px);
  display: flex;
  align-items: flex-end;
`;

const BannerTitle = styled.h1`
  color: white;
  font-weight: light;
  padding: 15% 8px;
  span {
    font-size: 64px;
    line-height: 1;
  }
`;
// markup

const BackgroundImageFluid = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "main_banner.jpeg" }) {
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
  );
};

export default IndexPage;
