import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../logo/logo"
import Nav from "./Nav"
import "./navstyle.css"
import NavToggle from "./NavToggle"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`

const LogoLink = styled(Link)`
  &:hover,
  &:focus {
    box-shadow: none;
  }
`

function NavBar() {
  return (
    <Header>
      <LogoLink to="/" aria-label="Go to home page">
        <Logo />
      </LogoLink>
      <Nav />
      <NavToggle />
    </Header>
  )
}

export default NavBar
