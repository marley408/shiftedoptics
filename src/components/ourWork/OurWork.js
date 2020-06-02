import React from "react"
import Underline from "../underline/Underline"
import FeaturedFocus from "./FeaturedFocus"
import FeaturedSubieExterior from "./FeaturedSubieExterior"
import FeaturedSubieInterior from "./FeaturedSubieInterior"
import styled from "styled-components"
import { Link } from "gatsby"
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 767px));
  grid-gap: 1em;
  > div:first-child {
    grid-column: 1 / span 2;
  }

  > div {
    border-radius: 8px;
    overflow: hidden;
  }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2em;
`
const Wrapper = styled.div`
  padding: 2.25em 1em 0;
  max-width: 767px;
  width: 100%;
  margin: 0 auto;
  > p {
    text-align: right;
    margin-top: 2em;
    margin-bottom: 0;
  }
`

const OurWork = () => {
  return (
    <Wrapper>
      <Title>
        <Underline>Our Work</Underline>
      </Title>
      <Section>
        <div>
          <FeaturedFocus />
        </div>
        <div>
          <FeaturedSubieExterior />
        </div>
        <div>
          <FeaturedSubieInterior />
        </div>
      </Section>
      <p>
        <Link to="/">View More</Link>
      </p>
    </Wrapper>
  )
}

export default OurWork
