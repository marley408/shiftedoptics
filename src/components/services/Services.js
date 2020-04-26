import React from "react"
import CardList from "../card/CardList"
import Underline from "../underline/Underline"
import Card from "../card/Card"
import DroneIcon from "./DroneIcon"
import VideoIcon from "./VideoIcon"
import ApertureIcon from "./ApertureIcon"

const Services = () => {
  return (
    <div>
      <CardList>
        <div>
          <h2 style={{ marginTop: "0" }}>
            <Underline>Our Services</Underline>
          </h2>
          <p style={{ color: "#727275" }}>
            We love to share stories. With our equipment and expertise, we’re
            able to provide 4K content to help you tell your story on any
            platform. 
          </p>
        </div>

        <Card>
          <DroneIcon />
          <h3 style={{ margin: "0.25em 0" }}>Drone</h3>
          <p>Expand your point of view with aerial footage.</p>
        </Card>
        <Card>
          <VideoIcon />
          <h3 style={{ margin: "0.25em 0" }}>Video</h3>
          <p>Move beyond static story telling with 4k footage.</p>
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
