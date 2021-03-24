import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import tw from "twin.macro";
import WhiteLogo from "../images/blanco.png";

import { Button, Wrapper } from "../components/shared";

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

const CardsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 50vh;
  padding: 30px;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  .card {
    margin-bottom: 10px;
  }
  .card-logo {
    height: 30%;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .card-title {
    height: 20%;
    font-size: 1.2rem;
    text-align: center;
  }
  .card-text {
    height: 40%;
    font-size: 0.8rem;
  }
`;

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
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
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
      .container {
        padding: 16px;
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
            <div className="container">
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
      <CardsSection>
        {[1, 2, 3, 4].map((item, key) => (
          <Card key={key}>
            <div className="card card-logo">
              <img src={WhiteLogo} />
            </div>
            <div className="card card-title">
              <h4>El título de la Card</h4>
            </div>
            <div className="card card-text">
              El abuso al consumo de este producto es nocivo para la salud
            </div>
          </Card>
        ))}
      </CardsSection>
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
