import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "featured-subie-exterior.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          fluid(quality: 100, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Gatsby Docs are awesome"
    />
  )
}
