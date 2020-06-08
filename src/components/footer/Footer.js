import React from "react"
import "./Footer.css"
import GrayInstagram from "./GrayInstagram"
import GrayYoutube from "./GrayYoutube"

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/shiftedoptics/"
            target="_blank"
            rel="noreferrer noopener"
            title="Shifted Optics Instagram"
          >
            <GrayInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCWlvFe9d0YZhunGxOw17W4g"
            target="_blank"
            rel="noreferrer noopener"
            title="Shifted Optics YouTube Channel"
          >
            <GrayYoutube />
          </a>
        </li>
      </ul>
      <p>
        Designed, developed, and deployed by{" "}
        <a
          href="https://www.developedbymatt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matthew
        </a>{" "}
        &amp; Wesley Chang.
      </p>
    </footer>
  )
}

export default Footer
