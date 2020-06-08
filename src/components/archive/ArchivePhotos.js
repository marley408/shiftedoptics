import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ArchivePhoto from "./ArchivePhoto"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  max-width: 1191px;
  margin: 0 auto;
  padding: 2.25em 1em 0 1em;
  gap: 1em;
  @media only screen and (min-width: 48em) {
    grid-template-columns: repeat(3, minmax(0, 373px));
  }
`

function ArchivePhotos({ data }) {
  const getArchiveItems = (query) => {
    return query.nodes.map((node) => (
      <ArchivePhoto
        key={node.id}
        fluid={node.localFile.childImageSharp.fluid}
        alt={node.localFile.name}
      />
    ))
  }

  const { allDropboxNode } = data

  return <Grid>{getArchiveItems(allDropboxNode)}</Grid>
}

ArchivePhotos.propTypes = {
  data: PropTypes.shape({
    allDropboxNode: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ArchivePhotos
