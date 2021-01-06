/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
