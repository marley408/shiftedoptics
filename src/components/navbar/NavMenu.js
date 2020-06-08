import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  align-items: center;
  &:not(:last-of-type) {
    padding-right: 1em;
  }

  &:last-of-type {
    padding-left: 1em;
    border-left: 2px solid #d2d3d2;
  }
`

const MenuItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  &:not(:first-of-type) {
    margin-left: 1em;
  }

  a,
  svg {
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const createMenuItems = (items) =>
  items.map(({ component: Component, ...rest }, index) => (
    <MenuItem key={index}>
      <Component {...rest} />
    </MenuItem>
  ))

function NavMenu({ items }) {
  return <Menu>{createMenuItems(items)}</Menu>
}

NavMenu.propTypes = {
  items: PropTypes.array,
}

export default NavMenu
