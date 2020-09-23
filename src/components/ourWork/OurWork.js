import { Link } from "gatsby"
import React from "react"
import { FiArrowRight } from "react-icons/fi"
import styled from "styled-components"
import Underline from "../underline/Underline"
import { Wrapper } from "../wrapper/Wrapper"
import FeaturedFocus from "./FeaturedFocus"
import FeaturedSubieExterior from "./FeaturedSubieExterior"
import FeaturedSubieInterior from "./FeaturedSubieInterior"
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
const GridWrapper = styled(Wrapper)`
  max-width: 767px;
  width: 100%;
  margin: 0 auto;
  > p {
    text-align: right;
    margin-top: 2em;
    margin-bottom: 0;
  }
`

const MoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  &:hover,
  &:focus {
    svg {
      transform: translate3d(0.25em, 0, 0);
    }
  }
  svg {
    transition: transform 250ms ease-in-out;
    margin-left: 0.25em;
  }
`

const OurWork = () => {
  return (
    <GridWrapper>
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
        <MoreLink to="/photos">
          <span>View More</span>
          <FiArrowRight size={28} color="currentColor" />
        </MoreLink>
      </p>
    </GridWrapper>
  )
}

export default OurWork
