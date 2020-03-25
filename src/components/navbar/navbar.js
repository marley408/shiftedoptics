import React from "react"
// import React, { useState } from "react"
import Logo from "../logo/logo"
import "./navstyle.css"

function navbar() {
  const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll("nav-links li")

    // toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active")
    })
    // animate links
    navLinks.forEach((links, index) => {
      links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
    })
  }

  return (
    <nav>
      <div className="nav-logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="burger" onClick={e => navSlide()}>
        <div className="lin1e"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default navbar
