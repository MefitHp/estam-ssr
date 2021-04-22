import React from "react";
import styled from "@emotion/styled";

import image from "../../images/PROYECTO1.png";
import { Wrapper } from "../shared";
import image1 from "../../images/energy_generator.png";

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
              <Image src={image1} alt={"title"} />
            </ImageContainer>
            <div className="flex-images">
              <ImageContainer>
                <Image src={image1} alt={"title"} />
              </ImageContainer>
              <ImageContainer>
                <Image src={image1} alt={"title"} />
              </ImageContainer>
            </div>
          </div>
          <div className="column three">
            <Text>Generación y Almacenamiento</Text>
            <ImageContainer>
              <Image src={image1} alt={"title"} />
            </ImageContainer>
            <ImageContainer>
              <Image src={image1} alt={"title"} />
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
  padding: 2em;
  background: #000;
  color: #fff;
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
  & .one > div {
    height: 100%;
  }
  & .two > div {
    height: 50%;
  }
  & .three > div {
    height: 50%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    & .column {
      width: 100%;
      & .flex-images {
        display: block;
        img {
          width: 100%;
        }
      }
    }
  }
`;

export default Projects;
