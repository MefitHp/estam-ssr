import React from "react";
import styled from "@emotion/styled";
import { Wrapper } from "../components/shared";

const NewsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  color: white;
  background-color: black;

  h1 {
    font-size: calc(3em + 1vw);
  }
`;
const News = () => {
  return (
    <NewsContainer>
      <Wrapper>
        <h1>Blog</h1>
        <p>Aquí va lo del blog</p>
      </Wrapper>
    </NewsContainer>
  );
};

export default News;
