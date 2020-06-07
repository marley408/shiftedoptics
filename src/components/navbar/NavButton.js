import styled from "styled-components"

const NavButton = styled.button`
  border: 2px solid var(--black);
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 4px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: var(--white);
  }

  @media only screen and (min-width: 48em) {
    display: none;
  }
`
export default NavButton
