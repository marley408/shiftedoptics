import React from "react"
import Toggle from "../toggle/Toggle"
import NavButton from "./NavButton"
import NavModal from "./NavModal"

function NavToggle() {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            {on && <NavModal on={on} toggle={toggle} />}
            <NavButton onClick={toggle}>Menu</NavButton>
          </>
        )
      }}
    </Toggle>
  )
}

export default NavToggle
