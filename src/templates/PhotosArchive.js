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
    allDropboxImage(
      sort: { order: ASC, fields: lastModified }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        localFile {
          childImageSharp {
            fluid(maxWidth: 373, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
        id
      }
    }
  }
`

export default PhotosArchive
