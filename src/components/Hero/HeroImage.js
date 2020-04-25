import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

function HeroImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero@3x.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.file.childImageSharp.fluid} style={{ minHeight: 600 }} />
  )
}

export default HeroImage
