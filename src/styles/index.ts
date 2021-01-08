import { createGlobalStyle } from "styled-components"
import "@fontsource/quicksand"

export const colors = {
  taupe: `rgb(248, 244, 241)`,
  darkText: `rgb(11, 10, 10)`,
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --taupe: rgb(248, 244, 241);
    --dark-text: rgb(11, 10, 10);
    --dark-text-hover: rgba(11, 10, 10, 0.4);

    --heading-font: "Quicksand", sans-serif;
  }
  * { box-sizing: border-box;}
  img {width: 100%}
`

const breakpoints = {
  desktop: 480,
}

export const media = {
  Desktop: `@media screen and (max-width: ${breakpoints.desktop}px)`,
}
