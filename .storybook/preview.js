import React from "react"

import { action } from "@storybook/addon-actions"
import { addDecorator } from "@storybook/react"

import { GlobalStyles } from "../src/styles"

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
))

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
