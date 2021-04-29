import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import { Wrapper, SEO } from "../components/shared";

import Blog from "../components/Home/Blog";

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

const News = ({ data: { posts } }) => {
  console.log({ posts });
  return (
    <NewsContainer>
      <SEO title={"Noticias"} />
      <Wrapper>
        <h1>Blog</h1>
        <PostContainer>
          {posts.edges.map(({ node }) => {
            const {
              id,
              title,
              uri,
              featuredImage: {
                node: { link },
              },
            } = node;
            return (
              <Link to={`/blog/posts${uri}`}>
                <PostCard key={id} imageUrl={link}>
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
    posts: allWpPost {
      edges {
        node {
          id
          title
          uri
          featuredImage {
            node {
              link
            }
          }
        }
      }
    }
  }
`;

export default News;
