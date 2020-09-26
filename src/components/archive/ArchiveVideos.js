import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Pagination from "../pagination/Pagination"
import ArchiveVideo from "./ArchiveVideo"

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

function ArchiveVideos({ data, pageContext }) {
  const getArchiveItems = (query) => {
    return query.edges.map(({ node }) => (
      <ArchiveVideo
        key={node.id}
        title={node.title}
        videoId={node.videoId}
        publishedAt={node.publishedAt}
        fluid={node.localThumbnail.childImageSharp.fluid}
        alt={node.title}
      />
    ))
  }

  const { allYoutubeVideo } = data
  return (
    <Wrapper>
      <Grid>{getArchiveItems(allYoutubeVideo)}</Grid>
      <Pagination {...pageContext} />
    </Wrapper>
  )
}

ArchiveVideos.propTypes = {
  data: PropTypes.shape({
    allYoutubeVideo: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}

export default ArchiveVideos
