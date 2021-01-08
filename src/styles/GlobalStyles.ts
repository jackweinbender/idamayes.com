import { createGlobalStyle } from "styled-components"
import "@fontsource/quicksand"

const GlobalStyles = createGlobalStyle`
  :root {
    --taupe: rgb(248, 244, 241);
    --dark-text: rgb(11, 10, 10);
    --dark-text-hover: rgba(11, 10, 10, 0.4);

    --heading-font: "Quicksand", sans-serif;
  }

  img {width: 100%}
`

export default GlobalStyles
