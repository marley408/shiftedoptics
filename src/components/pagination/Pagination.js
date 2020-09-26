import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { getRange } from "./getRange"
import NumberButton from "./NumberButton"
import Omission from "./Omission"

const PaginationList = styled.ul`
  margin: 2.25em 0;
  padding: 0;
  list-style: none;
  text-align: right;
`

const PaginationItem = styled.li`
  display: inline-flex;
  font-size: 0.9em;
  a {
    padding: 0.15em 0.5em;
    border-radius: 4px;
    background-color: var(--pure-white);
    border: 1px solid #d2d3d2;
    color: inherit;
    text-decoration: none;
    &:hover {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      background-color: var(--white);
    }
  }

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }
`

function Pagination({ currentPage, numPages, hasNextPage, pagePath }) {
  const range = getRange(currentPage, numPages)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const getPageLink = (targetPage) =>
    targetPage === 1 ? pagePath : `${pagePath}/${targetPage}`

  const getNumberedItems = () =>
    range.map((page) =>
      Number.isNaN(Number(page)) ? (
        <PaginationItem key={page.toString()}>
          <Omission />
        </PaginationItem>
      ) : (
        <PaginationItem key={page.toString()}>
          <NumberButton
            to={getPageLink(page)}
            content={page}
            activeStyle={{
              backgroundColor: "var(--black)",
              color: "var(--pure-white)",
            }}
          />
        </PaginationItem>
      )
    )

  const getPrevButton = () =>
    !isFirst && (
      <PaginationItem>
        <Link to={getPageLink(prevPage)}>Previous page</Link>
      </PaginationItem>
    )

  const getNextButton = () =>
    hasNextPage &&
    !isLast && (
      <PaginationItem>
        <Link to={getPageLink(nextPage)}>Next page</Link>
      </PaginationItem>
    )

  const composePaginatedItems = () => {
    return (
      <>
        {getPrevButton()}
        {getNumberedItems()}
        {getNextButton()}
      </>
    )
  }

  return (
    <nav aria-label="Pagination navigation">
      <PaginationList>{composePaginatedItems()}</PaginationList>
    </nav>
  )
}

export default Pagination
