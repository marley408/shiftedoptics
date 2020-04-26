import React from "react"
import styled from "styled-components"
import HeroImage from "./HeroImage"

const HeroContainer = styled.div`
  position: relative;
`

const HeroContent = styled.div`
  color: var(--white);
  left: 50%;
  max-width: 1280px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
`

function PrimaryHero() {
  return (
    <HeroContainer>
      <HeroImage />
      <HeroContent>
        <h1>Unique, Focused, and Compelling Content.</h1>
        <p>From the big picture to the details that matter.</p>
      </HeroContent>
    </HeroContainer>
  )
}

export default PrimaryHero
