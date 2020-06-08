import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const GridItem = styled(Img)`
  display: block;
`

function ArchivePhoto({ fluid, alt }) {
  return <GridItem fluid={fluid} alt={alt} />
}

ArchivePhoto.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

ArchivePhoto.defaultProps = {
  fluid: {},
  alt: "",
}

export default ArchivePhoto
