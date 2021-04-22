import React from "react";
import styled from "@emotion/styled";
import { Wrapper } from "../shared";

const AboutYouContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem;
  gap: 16px;
  h2 {
    font-family: "Oswald";
    color: var(--blue);
    font-size: calc(2.5em + 1vw);
    line-height: 1;
    font-weight: bold;
    @media (max-width: 700px) {
      font-size: 42px;
    }
  }
  .send {
    width: 70px;
    color: var(--blue);
  }
  form {
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .column {
      display: flex;
      flex-direction: column;
      flex: 1 1 48%;
    }

    input,
    textarea,
    select {
      border-radius: 4px;
      padding: 10px;
      background-color: #f4f4f4;
      outline-color: var(--blue);
      &::placeholder {
        color: black;
        opacity: 1;
      }
    }
    @media (max-width: 700px) {
      display: flex;
      gap: 6px;
      flex-direction: column;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    .column {
      display: flex;
      flex-direction: column;
      width: inherit;
      flex: 1;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-end;
`;
const AboutYou = () => {
  return (
    <Wrapper>
      <AboutYouContainer id="CONTACTO">
        <aside>
          <h2>
            Pláticanos sobre <br />
            tu proyecto
          </h2>
        </aside>
        <FormContainer>
          <form id="contact-us">
            <input
              type="text"
              className="column"
              placeholder="Nombre:"
              required
            />
            <input
              type="email"
              className="column"
              placeholder="Email: "
              required
            />
            <input
              type="company"
              className="column"
              placeholder="Empresa: "
              required
            />
            <input
              type="jobTitle"
              className="column"
              placeholder="Puesto: "
              required
            />
            <select
              name="Location"
              className="column"
              placeholder="Ubicación: "
              required
            >
              <StateOptions />
            </select>
            <input
              type="interests"
              className="column"
              placeholder="¿En que estas interesado? "
              required
            />
            <input
              style={{ width: "98%" }}
              type="averageConsumption"
              className="column"
              placeholder="Promedio de pago de energía mensual "
              required
            />
          </form>
          <button className="send" type="submit" form="contact-us">
            Enviar <span style={{ fontSize: 12, paddingLeft: 6 }}> ▶</span>
          </button>
        </FormContainer>
      </AboutYouContainer>
    </Wrapper>
  );
};

const StateOptions = () => {
  return (
    <>
      <option value="no">Seleccione uno...</option>
      <option value="Aguascalientes">Aguascalientes</option>
      <option value="Baja California">Baja California</option>
      <option value="Baja California Sur">Baja California Sur</option>
      <option value="Campeche">Campeche</option>
      <option value="Chiapas">Chiapas</option>
      <option value="Chihuahua">Chihuahua</option>
      <option value="CDMX">Ciudad de México</option>
      <option value="Coahuila">Coahuila</option>
      <option value="Colima">Colima</option>
      <option value="Durango">Durango</option>
      <option value="Estado de México">Estado de México</option>
      <option value="Guanajuato">Guanajuato</option>
      <option value="Guerrero">Guerrero</option>
      <option value="Hidalgo">Hidalgo</option>
      <option value="Jalisco">Jalisco</option>
      <option value="Michoacán">Michoacán</option>
      <option value="Morelos">Morelos</option>
      <option value="Nayarit">Nayarit</option>
      <option value="Nuevo León">Nuevo León</option>
      <option value="Oaxaca">Oaxaca</option>
      <option value="Puebla">Puebla</option>
      <option value="Querétaro">Querétaro</option>
      <option value="Quintana Roo">Quintana Roo</option>
      <option value="San Luis Potosí">San Luis Potosí</option>
      <option value="Sinaloa">Sinaloa</option>
      <option value="Sonora">Sonora</option>
      <option value="Tabasco">Tabasco</option>
      <option value="Tamaulipas">Tamaulipas</option>
      <option value="Tlaxcala">Tlaxcala</option>
      <option value="Veracruz">Veracruz</option>
      <option value="Yucatán">Yucatán</option>
      <option value="Zacatecas">Zacatecas</option>
    </>
  );
};
export default AboutYou;
