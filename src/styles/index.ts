import { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"

import { typography } from "./typography"
import { mediaQueries } from "./mediaQueries"
import { colors } from "./colors"

const variables = css`
  --taupe: rgb(248, 244, 241);
  --dark-text: rgb(11, 10, 10);
  --dark-text-hover: rgba(11, 10, 10, 0.4);
  --heading-font: "Quicksand", sans-serif;
`

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  :root { 
    ${variables} 
  }
  * { box-sizing: border-box;}
  
  html {
    font-size: 10px;
  }
  p {

  }

  h1,h2,h3,h4,h5,h6 {

  }
  img {width: 100%}
`

export { typography, mediaQueries, colors }
