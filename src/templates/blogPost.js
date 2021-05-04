import React from "react";
import styled from "@emotion/styled";
import { Seo, Wrapper } from "../components/shared";
import { graphql } from "gatsby";
import contentParser from "gatsby-source-wpgraphql-images";

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
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

const pluginOptions = {
  wordPressUrl: "https://noticias.estam.uno/",
  uploadsUrl: "https://noticias.estam.uno/wp-content/uploads/",
};
export default function blogPost({ data }) {
  const {
    title,
    contentParsed,
    contentFiles,
    featuredImage,
  } = data.wpgraphql.post;

  return (
    <Blog>
      <Wrapper>
        <Seo title={title} image={featuredImage.node.mediaItemUrl} />
        <h1>{title}</h1>
        <div>
          {contentParser(
            { content: contentParsed, files: contentFiles },
            pluginOptions
          )}
        </div>
      </Wrapper>
    </Blog>
  );
}

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        id
        uri
        title
        content
        contentParsed
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        contentFiles {
          publicURL
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
  }
`;
