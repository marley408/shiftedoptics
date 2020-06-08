/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allDropboxImage(sort: { order: ASC, fields: lastModified }) {
        nodes {
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allDropboxImage.nodes
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  const hasNextPage = posts.length > postsPerPage

  Array.from({ length: numPages }).forEach((_, i) => {
    const pagePath = "/photos"
    const pageParam = i === 0 ? `` : `/${i + 1}`
    createPage({
      path: pagePath + pageParam,
      component: path.resolve("./src/templates/PhotosArchive.js"),
      context: {
        pagePath,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        hasNextPage,
      },
    })
  })
}
