import React from "react"
import Underline from "../underline/Underline"
import "./Contact.css"
import InstagramIcon from "./Instagram"
import MailIcon from "./Mail"

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        <Underline>Want to work with us?</Underline>
      </h2>
      <ul>
        <li>
          <MailIcon />
          <span>
            <a href="mailto:shiftedoptics08@gmail.com">Send me an email</a>
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
              Message me on Instagram
            </a>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Contact
