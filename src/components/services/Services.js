import React from "react"
import styled from "styled-components"
import Card from "../card/Card"
import CardList from "../card/CardList"
import Underline from "../underline/Underline"
import { Wrapper } from "../wrapper/Wrapper"
import ApertureIcon from "./ApertureIcon"
import DroneIcon from "./DroneIcon"
import VideoIcon from "./VideoIcon"

const Title = styled.h1`
  margin-top: 0;
`

const GridWrapper = styled(Wrapper)`
  padding-top: 4.5em;
`

const Services = () => {
  return (
    <GridWrapper>
      <CardList>
        <div>
          <Title className="like-h2">
            <Underline>Services</Underline>
          </Title>
          <p style={{ color: "#727275" }}>
            Services from a bonafide car enthusiast with a creative eye, and 4k
            equipment include drone work, videography, and photography.
          </p>
        </div>

        <Card>
          <DroneIcon />
          <h3>Drone</h3>
          <p>Capture more than what's in front of the camera.</p>
        </Card>
        <Card>
          <VideoIcon />
          <h3>Video</h3>
          <p>4k footage gets you beyond static storytelling.</p>
        </Card>
        <Card>
          <ApertureIcon />
          <h3>Photo</h3>
          <p>Framable, printable, and sharable but higher quality.</p>
        </Card>
      </CardList>
    </GridWrapper>
  )
}

export default Services
