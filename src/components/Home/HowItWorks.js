import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";
const image1 = "/static/PORQUE.png";
const image2 = "/static/COMOFUNCIONAMOS.png";

const HowItWorks = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <Text>
            <h2>Por qué?</h2>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </Text>
          <Image src={image1} />
        </Container>
        <Container>
          <Image2 src={image2} />
          <Text>
            <h2>Cómo funcionamos?</h2>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </Text>
        </Container>
      </Wrapper>
    </Section>
  );
};

const Image = styled.img`
  width: 500px;
  height: 220px;
  margin-top: -80px;
  margin-right: 70px;
`;

const Image2 = styled.img`
  width: 500px;
  height: 220px;
  margin-top: -10px;
  margin-left: 70px;
`;

const Text = styled.div`
  padding: 1em 2em;
  width: 60%;
  & h2 {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  padding: 2em;
  background: #000;
  color: #fff;
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-contente: space-around;
`;

export default HowItWorks;
