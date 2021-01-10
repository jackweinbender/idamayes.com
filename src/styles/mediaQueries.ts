import { css } from "styled-components"

const breakpoints = {
  desktop: 480,
}
export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.desktop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
}
