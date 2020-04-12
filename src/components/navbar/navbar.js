import { Link } from "gatsby"
import React, { useRef, useState } from "react"
import Logo from "../logo/logo"
import "./navstyle.css"

function Navbar() {
  const [open, setOpen] = useState(false)
  // We create a reference here so that we can retrieve the height of the navbar in it's closed state
  // this height is then used as the top offset for the nav-links div and it's viewport height
  const navbar = useRef(null)

  // We can use state to manipulate the appearance of nav links
  // This function is attached to the onClick property on the burger element
  const handleBurgerClick = e => setOpen(!open)

  // Just a function that returns a list of <li></li> elements
  // This is also where we attach the animation which was moved into a CSS class
  // We only need to dynamically adjust the animation delay to intended effect
  const buildAnchors = () =>
    [
      { to: "/", text: "Videos" },
      { to: "/", text: "Photos" },
    ].map((anchor, index) => {
      return (
        <li
          className={open && "navLinkFade"}
          style={{
            animationDelay: `${index / 7}s`,
          }}
        >
          <Link to={anchor.to}>{anchor.text}</Link>
        </li>
      )
    })

  return (
    <nav className="nav" ref={navbar}>
      <Logo />
      <ul
        className={open ? "nav-links nav-active" : "nav-links"}
        style={{
          top: open && `${navbar.current.clientHeight}px`,
          height: open && `calc(100vh - ${navbar.current.clientHeight}px)`,
        }}
      >
        {buildAnchors()}
      </ul>
      <div className="burger" onClick={handleBurgerClick}>
        <div className="lin1e"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar
