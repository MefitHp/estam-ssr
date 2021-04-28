import React, { useState } from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";
import image1 from "../../images/GENERATION.webp";
import image2 from "../../images/PROYECTO2.png";
import image3 from "../../images/PROYECTO3.png";
import image4 from "../../images/PROYECTO4.png";
import image5 from "../../images/MEM1.webp";
import image6 from "../../images/MEM2.webp";

const Projects = () => {
  const [currentPicture, setCurrentPicture] = useState(null);
  const closeModal = () => {
    setCurrentPicture(null);
  };

  return (
    <Section>
      <Wrapper>
        <Title>Proyectos</Title>
        <Container>
          <div className="column one">
            <Text>Generación y Almacenamiento</Text>
            <ImageContainer>
              <Image
                src={image1}
                alt={"Paneles Vista Superior"}
                onClick={() => setCurrentPicture(image1)}
              />
            </ImageContainer>
          </div>
          <div className="column two">
            <Text>Código de Red</Text>
            <ImageContainer>
              <Image
                src={image2}
                alt={"Electricidad"}
                onClick={() => setCurrentPicture(image2)}
              />
            </ImageContainer>
            <div className="flex-images">
              <ImageContainer>
                <Image
                  src={image3}
                  alt={"Electricidad 2"}
                  onClick={() => setCurrentPicture(image3)}
                />
              </ImageContainer>
              <ImageContainer>
                <Image
                  src={image4}
                  alt={"Electricidad 3"}
                  onClick={() => setCurrentPicture(image4)}
                />
              </ImageContainer>
            </div>
          </div>
          <div className="column three">
            <Text>MEM</Text>
            <ImageContainer>
              <Image
                src={image5}
                alt={"Panel Solar"}
                onClick={() => setCurrentPicture(image5)}
              />
            </ImageContainer>
            <ImageContainer>
              <Image
                src={image6}
                alt={"Panel Solar 2"}
                onClick={() => setCurrentPicture(image6)}
              />
            </ImageContainer>
          </div>
        </Container>
      </Wrapper>
      {currentPicture && (
        <Overlay>
          <CloseIcon onClick={closeModal}>X</CloseIcon>
          <BigImage src={currentPicture} />
        </Overlay>
      )}
    </Section>
  );
};

const CloseIcon = styled.span`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
`;

const Overlay = styled.div`
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ImageContainer = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    margin: 10px 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointe;
`;

const BigImage = styled.div`
  height: 80%;
  width: 80%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 700px) {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.h3`
  font-family: "Hartwell Light";
  font-size: 1rem;
`;

const Title = styled.h2`
  font-family: "Oswald Regular";
  font-size: 2rem;
`;

const Section = styled.section`
  position: relative;
  padding: 60px 0px;
  background: #000;
  color: #fff;
  @media (max-width: 700px) {
    padding-bottom: 30px;
  }
`;

const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  & .column {
    width: 30%;
    & .flex-images {
      display: flex;
    }
  }
  & .one {
    width: 50%;
    & > div {
      height: 100%;
    }
  }
  & .two {
    width: 25%;
    & > div {
      height: 50%;
    }
  }
  & .three {
    width: 25%;
    & > div {
      height: 50%;
    }
  }
  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    & .column {
      width: 100%;
      margin-bottom: 20px;
      & .flex-images {
        flex-direction: column;
      }
    }
  }
`;

export default Projects;
