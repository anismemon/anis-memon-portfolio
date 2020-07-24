/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Header from "./header"
import CustomNavBar from "./navBar"
import ContactForm from "./contactModal"
import { store } from "./store"
import "../styles/styles.scss"

library.add(faGithub, faLinkedin)

const Layout = ({ children, pageInfo }) => {

  // variables and functions from state

  const globalStore = useContext(store)
  const lang = globalStore.state.lang
  const { dispatch } = globalStore
  console.log(lang)

  // data from graphQL

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // local variables + translations

  let contact = "Contact me"
  if (lang === "FR") {
    contact = "Contactez-moi"
  } else if (lang === "IT") {
    contact = "Contattami"
  }

  return (
    <>
      {/*<Container fluid className="px-0-main">*/}
      <div id="page-container">
        <Container fluid className="px-0" id="wrap">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title}/>
            </Col>
          </Row>
          <CustomNavBar pageInfo={pageInfo}/>
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                © {new Date().getFullYear()} {``}
                  <a href="https://github.com/anismemon" target="_blank" className="spaceAround"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                  <a href="https://www.linkedin.com/in/anis-memon-04441518a/" target="_blank" className="spaceAround"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                  <p onClick={() => dispatch({ type: "openModal" })} style={{
                    cursor: "pointer",
                    display: "inline",
                    color: "#add8ff",
                    marginLeft: "0.5rem"
                  }} className="spaceAround">{contact}</p>

              </span>
              </footer>
            </Col>
          </Row>
        </Container>
        <Container>
          <ContactForm/>
        </Container>
      </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// }

export default Layout
