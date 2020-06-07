import React, { useEffect } from "react"
import styled from "styled-components"
import { useBreakpoints } from "../hooks/useBreakpoints"
import Portal from "../portal/Portal"
import Nav from "./Nav"
import NavButton from "./NavButton"

const Wrapper = styled.div`
  position: fixed;
  top: 1em;
  left: 1em;
  right: 1em;
  bottom: 1em;
  background-color: var(--white);
  padding: 1em;
  border-radius: 14px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.16);
  z-index: 9;

  ${NavButton} {
    margin-left: auto;
    margin-bottom: 2em;
    &:hover {
      background-color: var(--pure-white);
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    text-align: center;
  }

  ul:first-of-type {
    display: block;
    padding: 0 0 2em;
    li {
      display: block;
      font-size: 1.4em;
      font-weight: 500;

      &:not(:first-of-type) {
        margin-top: 2em;
        margin-left: 0;
      }
    }
  }

  ul:last-of-type {
    padding: 2em 0 0 0;
    border-left: 0;
    border-top: 2px solid #d2d3d2;
  }
`

function NavModal({ on, toggle }) {
  const { tabletUp } = useBreakpoints()
  useEffect(() => {
    if (on && tabletUp) {
      toggle()
    }
  }, [on, tabletUp, toggle])

  return (
    <Portal>
      <Wrapper>
        <NavButton onClick={toggle}>Close</NavButton>
        <Nav />
      </Wrapper>
    </Portal>
  )
}

export default NavModal
