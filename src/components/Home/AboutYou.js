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

  form {
    display: grid;
    width: 100%;
    .name {
      grid-area: name;
    }
    .email {
      grid-area: email;
    }
    .message {
      grid-area: message;
    }
    .send {
      grid-area: send;
      color: var(--blue);
    }
    gap: 8px;
    grid-template-areas:
      "name name email email"
      "message message message send";
    input,
    textarea {
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
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AboutYou = () => {
  return (
    <Wrapper>
      <AboutYouContainer>
        <aside>
          <h2>
            Pláticanos sobre <br />
            tu proyecto
          </h2>
        </aside>
        <FormContainer>
          <form>
            <input type="text" className="name" placeholder="Nombre:" />
            <input type="email" className="email" placeholder="Email: " />
            <textarea className="message" placeholder="Mensaje: " />
            <button className="send" type="submit">
              Enviar <span style={{ fontSize: 12, paddingLeft: 6 }}> ▶</span>
            </button>
          </form>
        </FormContainer>
      </AboutYouContainer>
    </Wrapper>
  );
};

export default AboutYou;
