import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

// import screenshots of games

import remockScreen from "../images/remock.jpg"
import yelpington from "../images/yelpington.jpg"
import geovermonter from "../images/geovermonter.jpg"
import tictactoe from "../images/tictactoe.jpg"
import pefa from "../images/pefa.png"
import greenup from "../images/greenup.png"
import greenup2 from "../images/greeunup2.jpg"
// import { images } from "../images"
import { Col, Container, Row } from "react-bootstrap"
import Header from "../components/header"

const ProjectsPage = (props) => {

  // variables to change content and keep return statement cleaner (not currently being used to change anything)

  let projects = "Recent projects"
  let remock = "HTML, CSS"
  let tictac = "JavaScript, HTML, CSS"
  let yelp = "JavaScript, HTML, CSS, Leaflet Maps"
  let geoVerm = "React, Leaflet Maps"
  let green = "React, Redux, React Native, Firebase, Expo"
  let audubon = "React, Bootstrap, Firebase, MongoDB, Express"
  let guess = "Guess the number game (human guesses the computer's or computer guesses the human's!)"
  let zork = "Zorkington - a text adventure game!"

  // let geovermonter = images.geovermonter.jpg
  // let pefa = images.pefa.png

  return (
    <Layout pageInfo={{ pageName: "Projects" }}>
      <SEO title="projects"/>
      {/*<h1>{projects}</h1>*/}
      <Container fluid className="px-0" id="wrap">
        <Row className="justify-content-center">
          <Col lg={true} className="image-wrapper">

              <a href="https://peregrine-monitoring.herokuapp.com/" target="_blank"
                 rel="noopener noreferrer"><img className='screenshot' src={pefa} alt='screenshot of webpage'
                                                title='pefa'/></a>
              <div>
                <p>{audubon}</p>
              </div>

          </Col>
          <Col lg={true} className="image-wrapper">
            <a href="https://play.google.com/store/apps/details?id=org.greenupvermont.app&hl=en_US" target="_blank"
               rel="noopener noreferrer"><img className='screenshot' src={greenup2} alt='screenshot of webpage'
                                              title='greenup'
            /></a>
            <div>
              <p>{green}</p>
            </div>
          </Col>
        </Row>
        {/*/!*<div className="buffer"></div>*!/*/}
        <Row className="justify-content-center">
          <Col lg={true} className="image-wrapper">
            <a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-anis-michael" target="_blank"
               rel="noopener noreferrer"><img className='screenshot' src={geovermonter} alt='screenshot of webpage'
                                              title='geovermonter'
            /></a>
            <div>
              <p>{geoVerm}</p>
            </div>
          </Col>
          <Col lg={true} className="image-wrapper">
            <a href="https://github.com/BurlingtonCodeAcademy/yelpington-anismemon" target="_blank"
               rel="noopener noreferrer"><img className='screenshot' src={yelpington} alt='screenshot of webpage'
                                              title='yelpington'
            /></a>
            <div>
              <p>{yelp}</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={true} className="image-wrapper">
            <a href="https://github.com/BurlingtonCodeAcademy/remock-rob-and-anis" target="_blank"
               rel="noopener noreferrer"><img className='screenshot' src={remockScreen} alt='screenshot of webpage'
                                              title='remock'/></a>
            <div>
              <p>{remock}</p>
            </div>
          </Col>
          <Col lg={true} className="image-wrapper">
            <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-anismemon" target="_blank"
               rel="noopener noreferrer"><img className='screenshot' src={tictactoe} alt='screenshot of webpage'
                                              title='tictactoe'/></a>
            <div>
              <p>{tictac}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}


export default ProjectsPage