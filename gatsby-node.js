/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const POSTS_PER_PAGE = 6
const createPaginatedPagePath = (path, page) => {
  const pageParam = page === 0 ? `` : `/${page + 1}`
  return path + pageParam
}

async function createPhotosArchive(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(sort: { fields: _createdAt, order: DESC }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = (result.data.allSanityPost || {}).edges || []
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const hasNextPage = posts.length > POSTS_PER_PAGE

  Array.from({ length: numPages }).forEach((_, i) => {
    const pagePath = "/photos"
    createPage({
      path: createPaginatedPagePath(pagePath, i),
      component: path.resolve("./src/templates/PhotosArchive.js"),
      context: {
        pagePath,
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPage: i + 1,
        hasNextPage,
      },
    })
  })
}

async function createVideosArchive(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allYoutubeVideo(
        sort: { fields: publishedAt, order: DESC }
        filter: { privacyStatus: { eq: "public" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const videos = (result.data.allYoutubeVideo || {}).edges || []
  const numPages = Math.ceil(videos.length / POSTS_PER_PAGE)
  const hasNextPage = videos.length > POSTS_PER_PAGE

  Array.from({ length: numPages }).forEach((_, i) => {
    const pagePath = "/videos"
    createPage({
      path: createPaginatedPagePath(pagePath, i),
      component: path.resolve("./src/templates/VideosArchive.js"),
      context: {
        pagePath,
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPage: i + 1,
        hasNextPage,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([
    createPhotosArchive(graphql, actions, reporter),
    createVideosArchive(graphql, actions, reporter),
  ])
}
