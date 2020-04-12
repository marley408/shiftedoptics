module.exports = {
  siteMetadata: {
    title: `Shifted Optics`,
    description: `Dedicated to creating unqiue, focused, and compelling content.`,
    author: `@codewithwes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shifted Optics`,
        short_name: `shiftedoptics`,
        start_url: `/`,
        background_color: `#A79AFD`,
        theme_color: `#A79AFD`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
