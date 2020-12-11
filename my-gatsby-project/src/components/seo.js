/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
// Very simplified version of a component

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../images/og-image.jpg"

export default function SEO() {
  return (
    <Helmet
      meta={[
        {
          property: `og:title`,
          content:
            "I am Ezgi and I am currently looking for my next challenge as a Front-End Developer, having expertise in both Web Development and UI/UX design.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          content: `https://ezgihendrickx.dev/${ogImage}`,
        },
      ]}
    />
  )
}
