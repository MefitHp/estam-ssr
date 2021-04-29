import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Wrapper, Button } from "../shared";

const BlogHighlightsBox = styled.section`
  article {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }

    .blog-card {
      height: 500px;
      position: relative;
      .overlay {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 10px;
      }
    }
  }
`;

const PostImage = styled.div`
  height: 100%;
  background-image: url("https://elceo.com/wp-content/uploads/2020/06/empresas_slim_reuters.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Blog = () => {
  return (
    <BlogHighlightsBox>
      <Wrapper>
        <article>
          <div className="blog-card">
            <div className="overlay">
              <p>
                {`5 CAMBIOS DE
                    LA REFORMA A LA LEY
                    DE INDUSTRIA ELÉCTRICA`}
              </p>
            </div>
            <PostImage />
          </div>
        </article>
      </Wrapper>
    </BlogHighlightsBox>
  );
};

export default Blog;
