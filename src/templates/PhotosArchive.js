import { graphql } from "gatsby"
import React from "react"
import ArchiveHeader from "../components/archive/ArchiveHeader"
import ArchivePhotos from "../components/archive/ArchivePhotos"
import Contact from "../components/contact/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotosArchive = (props) => {
  return (
    <Layout>
      <SEO title="Photos" />
      <article>
        <ArchiveHeader title="Photos" />
        <ArchivePhotos {...props} />
        <Contact />
      </article>
    </Layout>
  )
}

export const PHOTOS_QUERY = graphql`
  query GetPhotos($skip: Int!, $limit: Int!) {
    allSanityPost(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          mainImage {
            asset {
              fluid(maxWidth: 373, toFormat: WEBP) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default PhotosArchive
