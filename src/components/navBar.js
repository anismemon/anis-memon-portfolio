import React, { useContext } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { store } from "./store"
import CV from "../../public/files/Anis Memon Resume.pdf"

const CustomNavBar = (props) => {
  console.log(props.pageInfo)

  // variables and functions from state

  const globalStore = useContext(store)
  const lang = globalStore.state.lang
  const { dispatch } = globalStore

  // local variables + translations

  let projects = "Projects"
  let cv = "CV"
  let quotes = "Quotations"

  if (lang === "FR") {
    projects = "Projets"
    quotes = "Citations"
  } else if (lang === "IT") {
    projects = "Progetti"
    cv = "Curriculum"
    quotes = "Citazioni"
  }

  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={props.pageInfo && props.pageInfo.pageName}>
            <Link to="/projects" className="link-no-style">
              <Nav.Link as="span" eventKey="projects">
                {projects}
              </Nav.Link>
            </Link>
            <a href={CV} target="_blank">
              {/*<Link to="/cv" className="link-no-style">*/}
              <Nav.Link as="span" eventKey="CV">
                {cv}
              </Nav.Link>
            </a>
            {/*<Link to="/quotations" className="link-no-style">*/}
            {/*  <Nav.Link as="span" eventKey="quotes">*/}
            {/*    {quotes}*/}
            {/*  </Nav.Link>*/}
            {/*</Link>*/}
          </Nav>
          <Nav className="ml-auto">
            <div>
              <Button className="spaceAround" onClick={() => dispatch({ type: "changeToEnglish" })}>EN</Button>
              <Button className="spaceAround" onClick={() => dispatch({ type: "changeToFrench" })}>FR</Button>
              <Button className="spaceAround" onClick={() => dispatch({ type: "changeToItalian" })}>IT</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavBar
