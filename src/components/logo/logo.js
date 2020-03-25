import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shiftedoptics-logo.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}
