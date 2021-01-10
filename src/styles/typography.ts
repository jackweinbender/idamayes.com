import { css } from "styled-components"

import "@fontsource/quicksand"
import "@fontsource/cormorant-sc"
import "@fontsource/didact-gothic"

import { colors } from "./colors"

// Default Text Styles
const defaultText = css`
  font-family: "Quicksand", sans-serif;
  font-size: 1.6rem;
`
const altText = css`
  font-family: "Didact Gothic", sans-serif;
`

// Headings
const defaultHeadingText = css`
  font-family: "Cormorant SC", serif;
`

const altHeadingText = css`
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
`

export const typography = {
  default: defaultText,
  alt: altText,
  heading: {
    default: defaultHeadingText,
    alt: altHeadingText,
  },
}
