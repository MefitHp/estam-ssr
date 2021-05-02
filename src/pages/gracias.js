import React from "react";
import styled from "@emotion/styled";
import linkedin from "../images/footer_icons/linkedin.webp";
import facebook from "../images/footer_icons/facebook.webp";

const ThanksContainer = styled.div`
  min-height: 100vh;
  font-family: "Oswald Regular";
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  h1 {
    font-size: calc(3.5em + 1vw);
  }
  p {
    font-size: 24px;
    background-color: var(--blue);
    padding: 0 0.5rem;
  }
  .nosotros {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .social {
    display: flex;
    gap: 20px;
    img {
      height: 70px;
      width: 70px;
      object-fit: contain;
    }
  }
`;

const Thanks = () => {
  return (
    <ThanksContainer>
      <h1>¡Gracias!</h1>
      <p>Tu información se ha enviado correctamente</p>
      <span>Pronto un asesor comercial se contactará contigo por correo.</span>

      <span className="nosotros">
        ¡Conoce un poco más sobre nosotros, visita nuestras redes sociales!
      </span>
      <div className="social">
        <a
          target="_blank"
          rel="noreferrer "
          href=" https://www.facebook.com/estamenergia"
        >
          <img alt={"Facebook"} src={facebook} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/estam-mx"
        >
          <img alt={"Linked In"} src={linkedin} />
        </a>
      </div>
    </ThanksContainer>
  );
};

export default Thanks;
