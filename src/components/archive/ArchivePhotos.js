import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Pagination from "../pagination/Pagination"
import ArchivePhoto from "./ArchivePhoto"

const Wrapper = styled.div`
  max-width: 1191px;
  margin: 0 auto;
  padding: 2.25em 1em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 1em;
  @media only screen and (min-width: 48em) {
    grid-template-columns: repeat(3, minmax(0, 373px));
  }
`

function ArchivePhotos({ data, pageContext }) {
  const getArchiveItems = (query) => {
    return query.nodes.map((node) => (
      <ArchivePhoto
        key={node.id}
        fluid={node.localFile.childImageSharp.fluid}
        alt={node.localFile.name}
      />
    ))
  }

  const { allDropboxImage } = data
  return (
    <Wrapper>
      <Grid>{getArchiveItems(allDropboxImage)}</Grid>
      <Pagination {...pageContext} />
    </Wrapper>
  )
}

ArchivePhotos.propTypes = {
  data: PropTypes.shape({
    allDropboxImage: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}

export default ArchivePhotos
