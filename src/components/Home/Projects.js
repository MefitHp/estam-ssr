import React from "react";
import styled from "@emotion/styled";

import image from "../../images/PROYECTO1.png";
import { Wrapper } from "../shared";
const image1 = "/static/PORQUE.png";
const image2 = "/static/COMOFUNCIONAMOS.png";

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Proyectos</Title>
        <Container>
          <div className="column one">
            <Text>Generación y Almacenamiento</Text>
            <div>
              <Image src={image} alt={"title"} />
            </div>
          </div>
          <div className="column two">
            <Text>Generación y Almacenamiento</Text>
            <div>
              <Image src={image} alt={"title"} />
            </div>
            <div className="flex-images">
              <Image src={image} alt={"title"} />
              <Image src={image} alt={"title"} />
            </div>
          </div>
          <div className="column three">
            <Text>Generación y Almacenamiento</Text>
            <div>
              <Image src={image} alt={"title"} />
            </div>
            <div>
              <Image src={image} alt={"title"} />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Section>
  );
};

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
  height: 70vh;
  display: flex;
  justify-content: space-around;
  & .column {
    width: 30%;
    & .flex-images {
      display: flex;
      & img {
        width: 50%;
      }
    }
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
