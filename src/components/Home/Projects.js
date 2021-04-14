import React from "react";
import styled from "@emotion/styled";

import { Wrapper } from "../shared";
const image1 = "/static/PORQUE.png";
const image2 = "/static/COMOFUNCIONAMOS.png";

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  & div {
    background: red;
  }
  & .one {
    grid-column: 1;
    grid-row: 1 / 3;
  }
  .two {
    grid-column: 2;
    grid-row: 1;
  }
  .three {
    grid-column: 3;
    grid-row: 1;
  }
  .four {
    grid-column: 3;
    grid-row: 2;
  }
  .five {
    grid-column: 2;
    grid-row: 2;
  }
`;

// .one {
//   grid-column: 1 / 3;
//   grid-row: 1;
// }
// .two {
//   grid-column: 2 / 4;
//   grid-row: 1 / 3;
// }
// .three {
//   grid-column: 1;
//   grid-row: 2 / 5;
// }
// .four {
//   grid-column: 3;
//   grid-row: 3;
// }
// .five {
//   grid-column: 2;
//   grid-row: 4;
// }
// .six {
//   grid-column: 3;
//   grid-row: 4;
// }

export default Projects;
