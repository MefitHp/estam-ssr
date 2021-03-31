import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";

const cards = [
  {
    logo: "",
    title: "Generación / Almacenamiento",
    description:
      "Tenemos 5 esquemas diferentesde generar energía en sitio y almacenarla para usarla cuandolas tarifas son más altas.",
  },
  {
    logo: "",
    title: "Código de Red",
    description:
      "Derivado de las problemáticas actuales del sistema eléctrico nacional se decretan las condiciones que debe de cumplirvtodo usuario conectado al sen, llamadas código de red.",
  },
  {
    logo: "",
    title: "Software de Administración de Energía",
    description:
      "Monitoreo de líneas de producción y consumos en tiempo real a través de un software en la nube",
  },
  {
    logo: "",
    title: "SGEn",
    description:
      "Basado en la ISO50001 se elabora un sistema de gestión de energía con auditores expertos",
  },
  {
    logo: "",
    title: "MEM",
    description:
      "Al ser comercializadores de energía te ayudamos en tu trámite como usuario calificado con una excelente oferta de suministro.",
  },
];

const InfoCards = () => {
  return (
    <CardsSection>
      <Wrapper>
        <CardsContainer>
          {cards.map(({ logo, title, description }, key) => (
            <Card key={key}>
              <div className="card card-logo">
                {/* <img src={logo} /> */}
                <div className="logo"></div>
              </div>
              <div className="card card-title">
                <h4>{title}</h4>
              </div>
              <div className="card card-text">{description}</div>
            </Card>
          ))}
        </CardsContainer>
      </Wrapper>
    </CardsSection>
  );
};

const CardsSection = styled.section`
  background-color: #fff;
`;

const CardsContainer = styled.section`
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  width: 200px;
  height: 350px;
  padding: 10px;
  border-radius: 5px;
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-logo {
    height: 25%;
    img {
      height: 100%;
    }
    .logo {
      width: 50px;
      height: 50px;
      background: #009fe3;
      border-radius: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .card-title {
    height: 35%;
    font-size: 1.6rem;
    text-align: center;
    line-height: normal;
    font-weight: 600;
  }
  .card-text {
    height: 40%;
    font-size: 0.7rem;
    text-align: justify;
    align-items: flex-start;
  }
`;

export default InfoCards;
