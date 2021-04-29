import React from "react";
import { SEO } from "../components/shared";
import { graphql } from "gatsby";

export default function SinglePizzaPage({ data: { wpPost: post } }) {
  console.log({ post });
  let { title, content, date } = post;
  const baseUrl = `https://noticias.estam.uno/wp-content/uploads/${date}`;
  const regex = /\/static\/[\w]{3,}\/[\w]{3,}/g;
  const aver = content.replace(regex, baseUrl);
  console.log({ aver });
  return (
    <>
      <SEO title={title} />
      <div>
        <div>
          <h2 className="mark">Lol</h2>
          <div dangerouslySetInnerHTML={{ __html: aver }} />
        </div>
      </div>
    </>
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
