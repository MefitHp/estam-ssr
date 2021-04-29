import React from "react";
import styled from "@emotion/styled";
import { SEO, Wrapper } from "../components/shared";
import { graphql } from "gatsby";

const Blog = styled.div`
  padding: 6rem 0px 3rem;
  color: white;
  background-color: black;
  min-height: 100vh;
  font-family: "Hartwell Light";
  h1 {
    font-size: 30px;
    line-height: 1.7em;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
  }
  h2 {
    font-size: 1.95em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
  }

  p {
    margin-bottom: 0.5rem;
  }
  .wp-block-quote {
    border-left: 0.25em solid;
    margin: 0 0 1.75em;
    padding-left: 1em;
  }
  .wp-block {
    max-width: 821px;
  }
  .wp-block-image {
    position: relative;
  }
  .wp-block-image {
    margin-bottom: 1em;
  }

  .wp-block-image figcaption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .wp-block-image figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .has-text-align-right {
    text-align: right;
    white-space: pre-wrap;
  }
`;
export default function blogPost({ data: { wpPost: post } }) {
  let { title, content, date } = post;
  const baseUrl = `https://noticias.estam.uno/wp-content/uploads/${date}`;
  const regex = /\/static\/[\w]{3,}\/[\w]{3,}/g;
  const contentWithFixedUrls = content.replace(regex, baseUrl);

  return (
    <Blog>
      <Wrapper>
        <SEO title={title} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentWithFixedUrls }} />
      </Wrapper>
    </Blog>
  );
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      date(formatString: "YYYY/MM")
      content
    }
  }
`;
