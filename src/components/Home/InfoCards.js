import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";

const cards = [
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png",
    title: "Generación / Almacenamiento",
    description:
      "Tenemos 5 esquemas diferentesde generar energía en sitio y almacenarla para usarla cuandolas tarifas son más altas.",
  },
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png",
    title: "Código de Red",
    description:
      "Derivado de las problemáticas actuales del sistema eléctrico nacional se decretan las condiciones que debe de cumplirvtodo usuario conectado al sen, llamadas código de red.",
  },
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png",
    title: "Software de Administración de Energía",
    description:
      "Monitoreo de líneas de producción y consumos en tiempo real a través de un software en la nube",
  },
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png",
    title: "SGEn",
    description:
      "Basado en la ISO50001 se elabora un sistema de gestión de energía con auditores expertos",
  },
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png",
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
  padding: 2em;
`;

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 8px;
`;

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  border-radius: 5px;
  height: 100%;
  .flex-alignment {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-logo {
    height: 100px;
    img {
      height: 70px;
      width: 70px;
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
    height: 40px;
    text-align: center;
    line-height: normal;
    font-weight: 600;
  }
  .card-text {
    height: 40%;
    font-size: 0.8rem;
    align-items: flex-start;
  }
`;

export default InfoCards;
