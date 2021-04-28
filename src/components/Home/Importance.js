import React from "react";
import styled from "@emotion/styled";

const ImportanceContainer = styled.section`
  max-width: 1280px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  font-size: 22px;
  justify-content: flex-end;
  align-items: center;
  color: white;
  min-height: 50vh;
  @media (max-width: 700px) {
    font-size: 18px;
    br {
      display: none;
    }
  }
  blockquote {
    background: var(--blue);
    padding: 2em;
    display: flex;
    flex-direction: column;
    text-align: right;
    p {
      font-family: "Hartwell Light";
      position: relative;
      letter-spacing: 2px;
      i {
        font-family: "Hartwell Medium Italik";
        font-weight: 700;
        margin-top: 16px;
      }
    }
  }

  span::before {
    font-family: "Oswald Regular";
    position: absolute;
    top: -45px;
    left: -15px;
    content: open-quote;
    font-size: 100px;
  }
`;
const Importance = () => {
  return (
    <ImportanceContainer>
      <blockquote>
        <p>
          <span />
          Entendemos el uso de energía del sitio, <br />
          buscamos oportunidades de reducción del <br />
          consumo, incluyendo la identificación de <br />
          los sistemas y áreas.
          <br />
          <b>
            <i>- ESTAM</i>
          </b>
        </p>
      </blockquote>
    </ImportanceContainer>
  );
};

export default Importance;
