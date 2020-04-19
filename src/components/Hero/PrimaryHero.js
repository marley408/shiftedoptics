import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  position: relative;
`

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  color: var(--white);
`

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
    <HeroContainer>
      <Img fluid={data.file.childImageSharp.fluid} />
      <HeroContent>
        <h1>Unique, Focused, and Compelling Content.</h1>
        <p>From the big picture to the details that matter.</p>
      </HeroContent>
    </HeroContainer>
  )
}

export default PrimaryHero
