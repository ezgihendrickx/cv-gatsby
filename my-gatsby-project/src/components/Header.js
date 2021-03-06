import React from "react"
import "./header.styles.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import memoji from "../images/ik.png"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"
      />

      <div className="header-main">
        <div className="dev">
          <h1>
            {data.site.siteMetadata.title}
            <img src={memoji} width="70px" height="70px" alt="memoji"></img>
          </h1>
          <span className="dot">•</span>
          <span className="attr">Front-End Developer</span>
          <span className="dot">•</span>
          <span className="attr">UI Designer</span>
        </div>
        <div className="icons">
          <a href="https://github.com/ezgihendrickx" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ezgi-hendrickx-0a897b15b/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto: ezgihendrickx@gmail.com" target="_blank">
            <i class="far fa-envelope"></i>
          </a>
          <a href="https://twitter.com/ezgihendrickx" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://dev.to/ezgihendrickx" target="_blank">
            <i className="fab fa-dev"></i>
          </a>
        </div>
        <span className="pages-link">
          <Link to="/">Portfolio</Link>|<Link to="/about">About</Link>|
          <Link to="/blog">Blog</Link>
        </span>

        <hr />
      </div>
    </div>
  )
}

export default Header
