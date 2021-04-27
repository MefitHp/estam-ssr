import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";
import image1 from "../../images/PROYECTO1.png";
import image2 from "../../images/PROYECTO2.png";
import image3 from "../../images/PROYECTO3.png";
import image4 from "../../images/PROYECTO4.png";
import image5 from "../../images/PROYECTO5.png";
import image6 from "../../images/PROYECTO6.png";

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Proyectos</Title>
        <Container>
          <div className="column one">
            <Text>Generación y Almacenamiento</Text>
            <ImageContainer>
              <Image src={image1} alt={"title"} />
            </ImageContainer>
          </div>
          <div className="column two">
            <Text>Generación y Almacenamiento</Text>
            <ImageContainer>
              <Image src={image2} alt={"title"} />
            </ImageContainer>
            <div className="flex-images">
              <ImageContainer>
                <Image src={image3} alt={"title"} />
              </ImageContainer>
              <ImageContainer>
                <Image src={image4} alt={"title"} />
              </ImageContainer>
            </div>
          </div>
          <div className="column three">
            <Text>Generación y Almacenamiento</Text>
            <ImageContainer>
              <Image src={image5} alt={"title"} />
            </ImageContainer>
            <ImageContainer>
              <Image src={image6} alt={"title"} />
            </ImageContainer>
          </div>
        </Container>
      </Wrapper>
    </Section>
  );
};

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
`;

const Text = styled.h3`
  font-size: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Section = styled.section`
  padding-bottom: 60px;
  background: #000;
  color: #fff;
  @media (max-width: 700px) {
    padding-bottom: 30px;
  }
`;

const Container = styled.section`
  box-sizing: border-box;
  height: 70vh;
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
