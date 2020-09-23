import React from "react"
import { FiInstagram, FiMail } from "react-icons/fi"
import styled from "styled-components"
import Underline from "../underline/Underline"

const Wrapper = styled.section`
  padding: 2.25em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  margin: 0 0 2em;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 2em;
  }

  > svg {
    margin-right: 0.5em;
    display: block;
  }

  a {
    display: block;
  }

  @media only screen and (min-width: 480px) {
    &:not(:last-of-type) {
      margin-right: 3em;
    }
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <Title className="like-h2">
        <Underline>Ready to reach out?</Underline>
      </Title>
      <List>
        <ListItem>
          <FiInstagram size={34} color="currentColor" />
          <span>
            <a href="mailto:shiftedoptics08@gmail.com">Send me an email</a>
          </span>
        </ListItem>
        <ListItem>
          <FiMail size={34} color="currentColor" />
          <span>
            <a
              href="https://www.instagram.com/shiftedoptics/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Message me on Instagram
            </a>
          </span>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Contact
