const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ezgi",
    author: "Ezgi Hendrickx",
    siteUrl: `https://ezgihendrickx.dev/`,
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-filesystem",

      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
