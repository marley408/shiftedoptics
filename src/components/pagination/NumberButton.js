import { Link } from "gatsby"
import React from "react"

function NumberButton({ content, ...rest }) {
  return <Link {...rest}>{content}</Link>
}

export default NumberButton
