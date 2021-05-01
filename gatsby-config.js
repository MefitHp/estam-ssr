const path = require(`path`);

module.exports = {
  pathPrefix: "/estam-ssr",
  siteMetadata: {
    title: "ESTAM",
    description: "Energía Inteligente",
    siteUrl: "http://estam.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-source-wpgraphql-images",
      options: {
        wordPressUrl: "https://noticias.estam.uno/",
        uploadsUrl: "https://noticias.estam.uno/wp-content/uploads/",
        processPostTypes: ["Post"],
        graphqlTypeName: "WPGraphQL",
        generateWebp: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "https://noticias.estam.uno/graphql",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-178404059-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
  ],
};
