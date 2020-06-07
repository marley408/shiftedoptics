import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"
import NavMenu from "./NavMenu"

const Container = styled.nav`
  display: none;
  @media only screen and (min-width: 48em) {
    display: flex;
  }
`

function Nav() {
  return (
    <Container>
      <NavMenu
        items={[
          {
            to: "/videos",
            text: "Videos",
            ariaLabel: "Go to video archive page.",
            component: ({ ariaLabel, text, to }) => (
              <Link aria-label={ariaLabel} to={to}>
                {text}
              </Link>
            ),
          },
          {
            to: "/photos",
            text: "Photos",
            ariaLabel: "Go to photo archive page.",
            component: ({ ariaLabel, text, to }) => (
              <Link aria-label={ariaLabel} to={to}>
                {text}
              </Link>
            ),
          },
        ]}
      />
      <NavMenu
        items={[
          {
            ariaLabel: "Visit the Shifted Optics YouTube channel.",
            component: ({ ariaLabel, to }) => (
              <a href={to} aria-label={ariaLabel}>
                <Icon name="youtube" />
              </a>
            ),
            to: "https://www.youtube.com/channel/UCWlvFe9d0YZhunGxOw17W4g",
          },
          {
            ariaLabel: "Visit the Shifted Optics Instagram page.",
            component: ({ ariaLabel, to }) => (
              <a href={to} aria-label={ariaLabel}>
                <Icon name="instagram" />
              </a>
            ),
            to: "https://www.instagram.com/shiftedoptics/",
          },
        ]}
      />
    </Container>
  )
}

export default Nav
