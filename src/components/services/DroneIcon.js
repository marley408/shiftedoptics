import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
const Wrapper = styled.div`
  background-color: var(--black);
  border-radius: 20px;
  height: 63px;
  width: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "drone.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 45, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </Wrapper>
  )
}
