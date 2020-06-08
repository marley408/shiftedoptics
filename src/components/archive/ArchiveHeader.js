import React from "react"
import styled from "styled-components"
import Underline from "../underline/Underline"

const Section = styled.section`
  padding: 2.25em 1em;
  text-align: center;
  background-color: var(--white);
  h1 {
    margin: 0;
  }
`

function ArchiveHeader({ title }) {
  return (
    <Section>
      <h1>
        <Underline>{title}</Underline>
      </h1>
    </Section>
  )
}

export default ArchiveHeader
