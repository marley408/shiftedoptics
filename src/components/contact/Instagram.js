import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 34, height: 34) {
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
