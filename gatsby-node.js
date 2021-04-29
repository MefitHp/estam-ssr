const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `);

  const postTemplate = path.resolve(`./src/templates/blogPost.js`);
  allPosts.forEach((post) => {
    let [php, ...newUri] = post.uri.split("/");

    const urlPath = `/blog/posts/${newUri.join("/")}`;
    console.log({ urlPath });
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
  });
};

// import path, { resolve } from 'path';

// async function turnPizzasIntoPages({ graphql, actions }) {
//   // 1. Get a template for this page
//   const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
//   // 2. Query all pizzas
//   const { data } = await graphql(`
//     query {
//       pizzas: allSanityPizza {
//         nodes {
//           name
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   // 3. Loop over each pizza and create a page for that pizza
//   data.pizzas.nodes.forEach((pizza) => {
//     actions.createPage({
//       // What is the URL for this new page??
//       path: `pizza/${pizza.slug.current}`,
//       component: pizzaTemplate,
//       context: {
//         slug: pizza.slug.current,
//       },
//     });
//   });
// }

// async function turnSlicemastersIntoPages({ graphql, actions }) {
//   // 1. Query all slicemasters
//   const { data } = await graphql(`
//     query {
//       slicemasters: allSanityPerson {
//         totalCount
//         nodes {
//           name
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   // TODO: 2. Turn each slicemaster into their own page (TODO)
//   data.slicemasters.nodes.forEach((slicemaster) => {
//     actions.createPage({
//       component: resolve('./src/templates/Slicemaster.js'),
//       path: `/slicemaster/${slicemaster.slug.current}`,
//       context: {
//         name: slicemaster.person,
//         slug: slicemaster.slug.current,
//       },
//     });
//   });

//   // 3. Figure out how many pages there are based on how many slicemasters there are, and how many per page!
//   const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
//   const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);
//   console.log(
//     `There are ${data.slicemasters.totalCount} total people. And we have ${pageCount} pages with ${pageSize} per page`
//   );
//   // 4. Loop from 1 to n and create the pages for them
//   Array.from({ length: pageCount }).forEach((_, i) => {
//     console.log(`Creating page ${i}`);
//     actions.createPage({
//       path: `/slicemasters/${i + 1}`,
//       component: path.resolve('./src/pages/slicemasters.js'),
//       // This data is pass to the template when we create it
//       context: {
//         skip: i * pageSize,
//         currentPage: i + 1,
//         pageSize,
//       },
//     });
//   });
// }

// export async function createPages(params) {
//   // Create pages dynamically
//   // Wait for all promises to be resolved before finishing this function
//   await Promise.all([
//     turnPizzasIntoPages(params),
//     turnSlicemastersIntoPages(params),
//   ]);
//   // 1. Pizzas
//   // 2. Toppings
//   // 3. Slicemasters
// }
