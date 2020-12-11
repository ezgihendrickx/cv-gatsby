import React from "react"
import Layout from "../components/Layout"
import "./index.styles.scss"
import portfolioItems from "../components/portfolio-items"
import Helmet from "react-helmet"

function renderFolio() {
  return portfolioItems.map(
    ({ title, sinopsis, idx, desc, repo, live, img, badge }) => {
      console.log(title)
      return (
        <div key={"div" + idx} className="tab">
          <Helmet>
            <title>Ezgi | Web Dev</title>

            {/* <meta
              property="og:image"
              content={domain + "src/images/myphoto.png"}
            />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="50" /> */}
          </Helmet>

          <input key={"index" + idx} type="checkbox" id={idx + title} />
          <label key={"label" + idx} className="tab-label" for={idx + title}>
            {" "}
            <span key={"pTit" + idx} className="folio-title">
              {title}{" "}
            </span>
            <span key={"dot" + idx} className="folio-title">
              ·{" "}
            </span>
            <span key={"pSinop" + idx} className="folio-sinopsis">
              {sinopsis}
            </span>
          </label>
          <div key={"tab" + idx} class="tab-content">
            <img alt="projectphotos" src={img} />
            {desc}
            <span className="repolinks" key={"repo" + idx}>
              <a
                key={"repoLink" + idx}
                href={repo}
                target="_blank"
                rel="noreferer"
              >
                Github Repo
              </a>
            </span>

            {live ? (
              <span className="livelinks" key={"live" + idx}>
                <a
                  key={"liveLink" + idx}
                  href={live}
                  target="_blank"
                  rel="noreferer"
                >
                  🍋Live
                </a>{" "}
              </span>
            ) : null}
            {badge ? (
              <span className="badge" key={"react" + "tailwind" + idx}>
                <a
                  key={"badge" + idx}
                  href={badge}
                  target="_blank"
                  rel="noreferer"
                >
                  {" "}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferer"
                  >
                    <img
                      alt="Badge ReactJS"
                      src="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"
                    />
                  </a>{" "}
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferer"
                  >
                    <img
                      alt="Badge Tailwindcss"
                      src="https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"
                    />
                  </a>
                </a>
              </span>
            ) : null}
          </div>
        </div>
      )
    }
  )
}

const Index = () => {
  return (
    <Layout>
      <h1 className="opener">Welcome to My World!</h1>
      <p className="subtitle">
        These are some of my favorite projects. <strong>Click on</strong> below
        items to have a look at my repo's and live versions!
      </p>
      {renderFolio()}
    </Layout>
  )
}

export default Index
