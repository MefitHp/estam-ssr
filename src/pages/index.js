import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import tw from "twin.macro";

import { Button, Wrapper } from "../components/shared";

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

const BlogHighlightsBox = styled.section`
  ${tw`
      flex
      bg-black
      text-white
      py-10
    `}
  background-color: black;
  min-height: 50vh;
  article {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    .blog {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: left;
      padding: 8px;
    }
    .left {
      h2 {
        font-size: 54px;
        line-height: 1;
        font-weight: lighter;
        margin-bottom: 32px;
      }
      button {
        font-size: 24px;
        padding: 12px 24px;
      }
    }
    .right {
      flex-direction: row;
      gap: 30px;
      flex-wrap: wrap;
    }
    .blog-card {
      height: 500px;
      position: relative;
      .overlay {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 10px;
      }
      .image {
        height: 100%;
        width: 300px;
        background-image: url("https://elceo.com/wp-content/uploads/2020/06/empresas_slim_reuters.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
`;

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
    <>
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
      <BlogHighlightsBox>
        {/* <Wrapper> */}
        <article>
          <div className="blog left">
            <div>
              <h2>
                Mantente informado <br /> sobre el sector <br /> energético...
              </h2>
              <Button>Leer más</Button>
            </div>
          </div>
          <div className="blog right">
            <div className="blog-card">
              <div className="overlay">
                <p>
                  {`5 CAMBIOS DE
                    LA REFORMA A LA LEY
                    DE INDUSTRIA ELÉCTRICA`}
                </p>
              </div>
              <div className="image"></div>
            </div>
            <div className="blog-card">
              <div className="overlay">
                <p>
                  {`5 CAMBIOS DE
                    LA REFORMA A LA LEY
                    DE INDUSTRIA ELÉCTRICA`}
                </p>
              </div>
              <div className="image"></div>
            </div>
          </div>
        </article>
        {/* </Wrapper> */}
      </BlogHighlightsBox>
    </>
  );
};

export default IndexPage;
