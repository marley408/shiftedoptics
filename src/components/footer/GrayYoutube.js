import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "youtube-gray.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 34, height: 34, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Gatsby Docs are awesome"
    />
  )
}
