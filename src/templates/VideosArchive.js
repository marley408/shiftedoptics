import { graphql } from "gatsby"
import React from "react"
import ArchiveHeader from "../components/archive/ArchiveHeader"
import ArchiveVideos from "../components/archive/ArchiveVideos"
import Contact from "../components/contact/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const VideosArchive = (props) => {
  return (
    <Layout>
      <SEO title="Videos" />
      <ArchiveHeader title="Videos" />
      <ArchiveVideos {...props} />
      <Contact />
    </Layout>
  )
}

export const VIDEOS_QUERY = graphql`
  query GetVideos($skip: Int!, $limit: Int!) {
    allYoutubeVideo(
      sort: { fields: publishedAt, order: DESC }
      filter: { privacyStatus: { eq: "public" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          videoId
          publishedAt(formatString: "MMMM DD, YYYY")
          localThumbnail {
            childImageSharp {
              fluid(
                fit: COVER
                webpQuality: 100
                jpegProgressive: true
                toFormat: WEBP
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default VideosArchive
