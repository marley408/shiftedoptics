import styled from "styled-components"

const CardList = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: block;
  width: 100%;
  @media only screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media only screen and (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default CardList
