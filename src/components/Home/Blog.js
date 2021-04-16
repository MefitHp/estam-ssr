import React from "react";
import tw from "twin.macro";

const BlogHighlightsBox = styled.section`
  ${tw`
      flex
      bg-black
      text-white
      py-10
    `}
  background-color: black;
  min-height: 50vh;
  article {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }

    .blog {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: left;
      padding: 8px;
    }
    .left {
      h2 {
        font-size: calc(2.5em + 1vw);
        line-height: 1;
        font-weight: lighter;
        margin-bottom: 32px;
        @media (max-width: 700px) {
          font-size: 42px;
        }
      }
      button {
        font-size: calc(0.25em + 1vw);
        padding: 12px 24px;
      }
      .container {
        padding: 16px;
      }
    }
    .right {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      @media (max-width: 700px) {
        grid-template-columns: 1fr;
      }
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
      .image {
        height: 100%;
        background-image: url("https://elceo.com/wp-content/uploads/2020/06/empresas_slim_reuters.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
`;

const Blog = () => {
  return (
    <BlogHighlightsBox>
      <Wrapper>
        <article>
          <div className="blog left">
            <div className="container">
              <h2>
                Mantente informado <br /> sobre el sector <br /> energético...
              </h2>
              <Button>Leer más</Button>
            </div>
          </div>
          <div className="blog right">
            <div className="blog-card">
              <div className="overlay">
                <p>
                  {`5 CAMBIOS DE
                    LA REFORMA A LA LEY
                    DE INDUSTRIA ELÉCTRICA`}
                </p>
              </div>
              <div className="image"></div>
            </div>
            <div className="blog-card">
              <div className="overlay">
                <p>
                  {`5 CAMBIOS DE
                    LA REFORMA A LA LEY
                    DE INDUSTRIA ELÉCTRICA`}
                </p>
              </div>
              <div className="image"></div>
            </div>
          </div>
        </article>
      </Wrapper>
    </BlogHighlightsBox>
  );
};
