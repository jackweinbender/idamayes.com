import React from "react"

import { Header } from "./"
import { navLinks, NavLink } from "./links"

export default {
  title: "Header",
}
export const Default = () => <Header links={navLinks} />
