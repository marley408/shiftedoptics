import { useContext } from "react"
import { BreakpointContext } from "../contexts/BreakpointContext"

export function useBreakpoints() {
  const context = useContext(BreakpointContext)

  return context
}
