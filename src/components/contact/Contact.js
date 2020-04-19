import React from "react"
import "./Contact.css"
import InstagramIcon from "./Instagram"
import MailIcon from "./Mail"

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        <span className="underline">Want to work with us?</span>
      </h2>
      <ul>
        <li>
          <MailIcon />
          <span>
            <a href="mailto:shiftedoptics08@gmail.com">Send us an email</a>
          </span>
        </li>
        <li>
          <InstagramIcon />
          <span>
            <a
              href="https://www.instagram.com/shiftedoptics/"
              target="_blank"
              rel="noreferrer noopener"
            >
              DM us on Instagram
            </a>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Contact
