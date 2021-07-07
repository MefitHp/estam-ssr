import React from "react";
import styled from "@emotion/styled";
import { Wrapper } from "../shared";

import AEE from "../../images/abilities/AEE.webp";
import CEM from "../../images/abilities/CEM.webp";
import ANCE_ECO from "../../images/abilities/ANCE_ECO.webp";
import ANCE_FIRCO from "../../images/abilities/ANCE_FIRCO.webp";
import ISO from "../../images/abilities/ISO.webp";

const Container = styled.section`
  background: black;
  padding: 2rem 0;
  h2 {
    color: white;
    font-family: "Oswald Regular";
    font-size: calc(1.5em + 1vw);
  }
`;

const AbilitiesContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const AbilityBox = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: auto;
  }
`;
const Abilities = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Habilidades</h2>
        <AbilitiesContainer>
          <AbilityBox>
            <img src={AEE} alt="AEE" />
          </AbilityBox>
          <AbilityBox>
            <img src={CEM} alt="CEM" />
          </AbilityBox>
          <AbilityBox>
            <img src={ANCE_ECO} alt="ANCE_ECO" />
          </AbilityBox>
          <AbilityBox>
            <img src={ANCE_FIRCO} alt="ANCE_FIRCO" />
          </AbilityBox>
          <AbilityBox>
            <img src={ISO} alt="ISO" />
          </AbilityBox>
        </AbilitiesContainer>
      </Wrapper>
    </Container>
  );
};

export default Abilities;
