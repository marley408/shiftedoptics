import React, { createContext, useEffect, useState } from "react"

export const BreakpointContext = createContext({})

export const BreakpointProvider = ({ children, queries }) => {
  const [matches, setMatches] = useState({})

  useEffect(() => {
    // variable used to store the MediaQueryList objects that are returned by window.matchMedia()
    const QueryList = {}

    // list of media queries provided by user that we should listen for
    const queriesToMatch = Object.entries(queries)

    // initialize MediaQueryList objects for each user defined media query and return an object containing whether the media query has been matched
    const matchedQueries = queriesToMatch.reduce((acc, [key, mq]) => {
      const obj = window.matchMedia(mq)
      QueryList[key] = obj

      acc[key] = obj.matches
      return acc
    }, {})

    setMatches(matchedQueries)

    const handleQueryListener = (mq) => {
      const updatedMatchedQueries = Object.entries(QueryList).reduce(
        (acc, [key, mq]) => {
          acc[key] = mq.matches
          return acc
        },
        {}
      )

      setMatches(updatedMatchedQueries)
    }

    Object.entries(QueryList).forEach(([_, mq]) => {
      mq.addListener(handleQueryListener)
    })

    return () => {
      Object.entries(QueryList).forEach(([_, mq]) => {
        mq.removeListener(handleQueryListener)
      })
    }
  }, [queries])

  return (
    <BreakpointContext.Provider value={matches}>
      {children}
    </BreakpointContext.Provider>
  )
}

const mediaQueries = {
  tabletUp: "(min-width: 48em)",
}

export default ({ element }) => (
  <BreakpointProvider queries={mediaQueries}>{element}</BreakpointProvider>
)
