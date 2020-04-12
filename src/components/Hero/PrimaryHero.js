import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

function PrimaryHero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero@3x.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section>
      <Img fluid={data.file.childImageSharp.fluid} />
      <h1>hey</h1>
    </section>
  )
}

export default PrimaryHero
