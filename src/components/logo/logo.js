import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shifted-optics-logo.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 200, quality: 100, toFormat: WEBP) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Shifted Optics logo"
      style={{ display: "block" }}
    />
  )
}
