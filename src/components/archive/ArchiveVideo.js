import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const GridItem = styled.article`
  border: 1px solid #d2d3d2;
  border-radius: 4px;
  overflow: hidden;
`

const GridItemContent = styled.div`
  padding: 0.5em;
  > p {
    margin-bottom: 0.25em;
  }
`

function ArchiveVideo({ title, videoId, publishedAt, fluid, alt }) {
  return (
    <GridItem>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={fluid} alt={alt} />
        <GridItemContent>
          <p>
            <small>{publishedAt}</small>
          </p>
          <h1 className="like-h6">{title}</h1>
        </GridItemContent>
      </a>
    </GridItem>
  )
}

ArchiveVideo.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

ArchiveVideo.defaultProps = {
  fluid: {},
  alt: "",
}

export default ArchiveVideo
