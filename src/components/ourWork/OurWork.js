import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"
import Underline from "../underline/Underline"
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

const MoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 2px 0 0 var(--purple);
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
        <MoreLink to="/photos">
          <span>View More</span>
          <Icon name="arrow-right" aria-hidden="true" focusable="false" />
        </MoreLink>
      </p>
    </Wrapper>
  )
}

export default OurWork
