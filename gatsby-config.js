require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Shifted Optics`,
    description: `Dedicated to creating unique, focused, and compelling content.`,
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
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    {
      resolve: `gatsby-source-dropbox`,
      options: {
        accessToken: process.env.DROPBOX_ACCESS_TOKEN,
        extensions: [".jpg", ".png", ".JPG"],
        recursive: false,
        createFolderNodes: true,
      },
    },
  ],
}
