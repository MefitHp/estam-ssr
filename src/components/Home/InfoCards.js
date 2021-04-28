import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";
import { infoImages } from "./utils";

const cards = [
  {
    logo: infoImages.storage,
    title: "Generación / Almacenamiento",
    description:
      "Tenemos 5 esquemas diferentesde generar energía en sitio y almacenarla para usarla cuandolas tarifas son más altas.",
  },
  {
    logo: infoImages.net,
    title: "Código de Red",
    description:
      "Derivado de las problemáticas actuales del sistema eléctrico nacional se decretan las condiciones que debe de cumplirvtodo usuario conectado al sen, llamadas código de red.",
  },
  {
    logo: infoImages.software,
    title: "Software de Administración de Energía",
    description:
      "Monitoreo de líneas de producción y consumos en tiempo real a través de un software en la nube",
  },
  {
    logo: infoImages.sgen,
    title: "SGEn",
    description:
      "Basado en la ISO50001 se elabora un sistema de gestión de energía con auditores expertos",
  },
  {
    logo: infoImages.mem,
    title: "MEM",
    description:
      "Al ser comercializadores de energía te ayudamos en tu trámite como usuario calificado con una excelente oferta de suministro.",
  },
];

const InfoCards = () => {
  return (
    <CardsSection id="GESTION-DE-ENERGIA">
      <Wrapper>
        <CardsContainer>
          {cards.map(({ logo, title, description }, key) => (
            <Card key={key}>
              <div className="card-logo flex-alignment">
                <img src={logo} alt={title} />
              </div>
              <div className="card-title flex-alignment">
                <h5>{title}</h5>
              </div>
              <div className="card-text">{description}</div>
            </Card>
          ))}
        </CardsContainer>
      </Wrapper>
    </CardsSection>
  );
};

const CardsSection = styled.section`
  background-color: #fff;
  padding: 6em 2em;
`;

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
`;

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  border-radius: 14px;
  height: 100%;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transform: scale(1.04);
  }
  .flex-alignment {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-logo {
    height: 100px;
    img {
      height: 80px;
      width: 80px;
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
    font-family: "Oswald Regular";
    height: 40px;
    text-align: center;
    line-height: normal;
    font-size: 1.2rem;
  }
  .card-text {
    font-family: "Hartwell Light";
    height: 40%;
    font-size: 1rem;
    align-items: flex-start;
    text-align: center;
  }
`;

export default InfoCards;
