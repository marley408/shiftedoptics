import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ArchiveHeader from "../components/archive/ArchiveHeader"
import ArchivePhotos from "../components/archive/ArchivePhotos"
import Contact from "../components/contact/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotosPage = () => {
  const data = useStaticQuery(graphql`
    query GetPhotos {
      allDropboxNode {
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
  `)

  return (
    <Layout>
      <SEO title="Photos" />
      <article>
        <ArchiveHeader title="Photos" />
        <ArchivePhotos data={data} />
        <Contact />
      </article>
    </Layout>
  )
}
export default PhotosPage
