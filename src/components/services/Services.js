import React from "react"
import Card from "../card/Card"
import CardList from "../card/CardList"
import Underline from "../underline/Underline"
import ApertureIcon from "./ApertureIcon"
import DroneIcon from "./DroneIcon"
import VideoIcon from "./VideoIcon"

const Services = () => {
  return (
    <div style={{ paddingTop: "2.25em" }}>
      <CardList>
        <div>
          <h2 style={{ marginTop: "0" }}>
            <Underline>Services</Underline>
          </h2>
          <p style={{ color: "#727275" }}>
            Services from a bonafide car enthusiast with a creative eye, and 4k
            equipment include drone work, videography, and photography.
          </p>
        </div>

        <Card>
          <DroneIcon />
          <h3 style={{ margin: "0.25em 0" }}>Drone</h3>
          <p>Capture more than what's in front of the camera.</p>
        </Card>
        <Card>
          <VideoIcon />
          <h3 style={{ margin: "0.25em 0" }}>Video</h3>
          <p>4k footage gets you beyond static storytelling.</p>
        </Card>
        <Card>
          <ApertureIcon />
          <h3 style={{ margin: "0.25em 0" }}>Photo</h3>
          <p>Framable, printable, and sharable but higher quality.</p>
        </Card>
      </CardList>
    </div>
  )
}

export default Services
