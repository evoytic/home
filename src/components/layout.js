/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ gradient, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          footerData {
            email,
            address,
          }
        },
      }
    }
  `)

  return (
    <>
      <Header className='header-home'
        gradient={gradient}
        siteTitle={data.site.siteMetadata?.title}
        email={data.site.siteMetadata?.footerData?.email}
      />
      <main>{children}</main>
      <Footer
        title={data.site.siteMetadata?.footerData?.title}
        email={data.site.siteMetadata?.footerData?.email}
        address={data.site.siteMetadata?.footerData?.address}
        siteTitle = {data.site.siteMetadata?.title}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
