import React from "react"
import Layout from "../components/Layout"
import aboutStyle from "./About.module.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(relativePath: { eq: "images/myphoto.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = props => {
  console.log(query)
  return (
    <Layout>
      <div className={aboutStyle.main}>
        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}>
            {" "}
            <Img
              className={aboutStyle.img}
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
          <div className={aboutStyle.texto}>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-map-marker-alt fa-md"></i>
              <br></br>
              <p className="loc">Ghent, Belgium </p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-graduation-cap fa-md"></i>
              <p>Istanbul Kultur University</p>
              <p>BeCode Web-Dev Education</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-code fa-md"></i>
              <p>HTML, CSS, JS, React, MySQL, Git, VSC, Figma</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-language fa-md"></i>
              <p>English, Dutch, Turkish</p>
            </div>
          </div>
        </div>
        <div className={aboutStyle.derecha}>
          <h2>Hello there, I'm Ezgi!</h2>
          <p>
            To make a long story short, I am currently looking for my next
            challenge as a{" "}
            <span style={{ color: "#D77562" }} className="frontend">
              Front-End Developer
            </span>
            , having expertise in both Web Development and UI/UX design. After
            graduating in Communication Arts & Advertising, I have worked as a
            copywriter, buying assistant and cabin crew, three distinct
            experiences which have all contributed to my professional
            development.
          </p>
          <p>
            After moving to Belgium I decided to return to my passion about
            design & advertising and further build upon my university studies in
            Communication Arts.
          </p>
          <p>
            After an internship as UI/UX designer at an ambitious start-up
            company within{" "}
            <a href="https://thefactory.works/" target="blank">
              EY
            </a>
            , I am currently at the end of an intensive 7 month Education in Web
            Development{" "}
            <a href="https://becode.org/about/campuses/ghent/" target="blank">
              @BeCode
            </a>
            .
          </p>

          <p>
            During my stay in Stockholm, Sweden, I got fascinated by Nordic
            design and since then I integrate minimalist design principles in
            many of my projects.
          </p>

          <div className={aboutStyle.logoContainer}>
            <p>The tech I love:</p>
            <img
              alt="javascript"
              className={aboutStyle.logo}
              src="./logos/javascript.svg"
            />
            <img
              alt="React"
              className={aboutStyle.logo}
              src="./logos/react.svg"
            />
            <img
              alt="Figma"
              className={aboutStyle.logo}
              src="./logos/figma.png"
              width="33.3px"
              height="50px"
            />
            <img
              alt="Gatsby"
              className={aboutStyle.logo}
              src="./logos/gatsby.svg"
            />

            <img alt="Git" className={aboutStyle.logo} src="./logos/git.png" />
            <img alt="VSC" className={aboutStyle.logo} src="./logos/VSC.png" />
            <img
              alt="Sketch"
              className={aboutStyle.logo}
              src="./logos/sketch.png"
            />
            <img
              alt="Tailwind"
              className={aboutStyle.logo}
              src="./logos/tailwind.svg"
            />
            <img
              alt="Sass"
              className={aboutStyle.logo}
              src="./logos/sass-1.svg"
            />
          </div>

          <div className={aboutStyle.socialContainer}>
            <p>Let's Talk!</p>
            <a
              className={aboutStyle.social}
              href="https://github.com/ezgihendrickx"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="mailto: ezgihendrickx@gmail.com"
            >
              <i class="far fa-envelope"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://twitter.com/ezgihendrickx"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://www.instagram.com/ezgihendrickx/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
