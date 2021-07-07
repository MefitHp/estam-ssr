const { slash } = require(`gatsby-core-utils`);
const path = require(`path`);

const avoidList = [
  "/index.php/2021/03/25/en-mexico-trabajan-279-centrales-de-energia-limpia/",
];

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // query content for WordPress posts
  const {
    data: {
      wpgraphql: {
        posts: { nodes: allNodes },
      },
    },
  } = await graphql(`
    query {
      wpgraphql {
        posts(first: 32) {
          nodes {
            uri
            id
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve(`./src/templates/blogPost.js`);
  allNodes.forEach((post) => {
    const urlPath = `/noticias${post.uri}`;
    if (!avoidList.includes(post.uri)) {
      createPage({
        // will be the url for the page
        path: urlPath,
        // specify the component template of your choice
        component: slash(postTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this post's data.
        context: {
          id: post.id,
        },
      });
    }
  });
};
