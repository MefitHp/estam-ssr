import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";
import WhyImage from "../../images/energy_generator.webp";
import HowImage from "../../images/solar_panel.webp";

const HowItWorks = () => {
  return (
    <Section id="NOSOTROS">
      <Wrapper>
        <Container isFirst>
          <Image src={WhyImage} alt="why" isFirst />
          <Text>
            <h2>¿Por qué?</h2>
            <p>
              El precio de la electricidad sigue incrementando, los consumidores
              tienen problemas al entenderse con las empresas suministradoras y
              la factura de consumo energético resulta compleja de entender.
            </p>
            <p>
              Como resultado de la reforma energética, aumentó la complejidad de
              los sistemas de producción de energía. La gestión adecuada de los
              activos y los contratos energéticos de corto y largo plazo
              permiten aprovechar nuevas oportunidades, reduciendo el riesgo
              negativo sobre la competitividad del consumidor industrial.
            </p>
          </Text>
        </Container>
        <Container>
          <Image2 src={HowImage} alt="how" />
          <Text>
            <h2>¿Cómo funcionamos?</h2>
            <p>
              En ESTAM contamos con un equipo especializado en la industria
              energética, analizamos sus prácticas actuales de suministro y
              gestión de energía, incluida la forma en la que se produce y
              almacena, como resultado ofrecemos a nuestros clientes generar
              ahorros monetarios.
            </p>
            <p>
              En ESTAM utilizamos aplicaciones avanzadas de administración
              energética, algoritmos complejos y sensores inalámbricos de
              Internet de las cosas (IoT) conectados a su equipo crítico. Esto
              nos permite recopilar información en tiempo real a nivel granular
              para evaluar su programa actual de suministro de energía y
              encontrar alternativas para adquirir, producir y almacenar la
              energía que utiliza.
            </p>
          </Text>
        </Container>
      </Wrapper>
    </Section>
  );
};

const BaseImage = styled.img`
  width: 550px;
  height: 300px;
  @media (max-width: 700px) {
    height: 200px;
  }
`;

const Image = styled(BaseImage)`
  margin-top: -20px;
`;

const Image2 = styled(BaseImage)``;

const Text = styled.div`
  padding: 1em 2em;
  width: 60%;
  & h2 {
    font-family: "Oswald Regular";
    font-size: 2rem;
  }
  & p {
    font-family: "Hartwell Light";
    margin-bottom: 10px;
    text-align: justify;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Section = styled.section`
  background: #000;
  color: #fff;
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${({ isFirst }) => (isFirst ? "row-reverse" : "row")};
  justify-content: space-around;
  align-items: center;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default HowItWorks;
