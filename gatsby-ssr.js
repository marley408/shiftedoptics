/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import BreakpointProvider from "./src/components/contexts/BreakpointContext"

export const wrapRootElement = BreakpointProvider
