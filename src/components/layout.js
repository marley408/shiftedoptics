/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Footer from "./footer/Footer"
import "./layout.css"
import NavBar from "./navbar/NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
