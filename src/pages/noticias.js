import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Wrapper, SEO } from "../components/shared";

const NewsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  color: white;
  background-color: black;

  h1 {
    font-size: calc(1.5em + 1vw);
  }
`;

const PostContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.div`
  height: 500px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const Layer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  p {
    font-family: "Oswald Regular";
    font-size: 16px;
    text-transform: uppercase;
  }
`;

const avoidList = [
  "/index.php/2021/03/25/en-mexico-trabajan-279-centrales-de-energia-limpia/",
];

const News = ({ data }) => {
  const { posts } = data.wpgraphql;
  const filteredPosts = posts.edges.filter(({ node }) => {
    const { uri } = node;
    return !avoidList.includes(uri) ? node : null;
  });

  return (
    <NewsContainer>
      <SEO title={"Noticias"} />
      <Wrapper>
        <h1>Blog</h1>
        <PostContainer>
          {filteredPosts.map(({ node }) => {
            const {
              id,
              title,
              uri,
              featuredImage: {
                node: { link },
              },
            } = node;
            return (
              <Link to={`/noticias${uri}`} key={id}>
                <PostCard imageUrl={link}>
                  <Layer>
                    <p>{title}</p>
                  </Layer>
                </PostCard>
              </Link>
            );
          })}
        </PostContainer>
      </Wrapper>
    </NewsContainer>
  );
};

export const query = graphql`
  query PostsQuery {
    wpgraphql {
      posts(first: 32) {
        edges {
          node {
            id
            title
            uri
            content
            featuredImage {
              node {
                link
              }
            }
          }
        }
      }
    }
  }
`;

export default News;
