/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import BreakpointProvider from "./src/components/contexts/BreakpointContext"

export const wrapRootElement = BreakpointProvider
