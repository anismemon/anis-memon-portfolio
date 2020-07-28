import React, { useContext, useState, useEffect } from "react"
// import { Link } from "gatsby"
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import portrait from "../images/IMG_0145_small.jpg"
import "../styles/styles.scss"
import { store } from "../components/store"

const IndexPage = () => {

  // variables from state

  let globalStore = useContext(store)
  let lang = globalStore.state.lang
  console.log(lang)

  // local state

  const [quoteIndex, setQuoteIndex] = useState(Number)


  // random number generator

  function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min
    return Math.floor(randomNum)
  }

  // local variables + translations

  let newQuote = "New quotation"
  let blurb = "I am an emerging full-stack web developer, committed to my new career direction building on years of work experience in the fields of translation and education. I enjoy putting things together and find quite a few similarities between building bikes with my hands and apps with code. I also like to read and think about language. Check out the quotes!"
  let currentQuote = "Here's a quotation I like"
  if (lang === "FR") {
    newQuote = "Nouvelle citation"
    currentQuote = "Citation du jour"
    blurb = "Après plusieurs années dans la traduction et l’enseignement des langues j’embrasse ma nouvelle carrière dans l’informatique. J’adore les langues et les mots, mais ce que j’aime en particulier c’est la construction d’objets, qu’il s’agisse de vélos, d’applis ou de jeux de mots. "
  } else if (lang === "IT") {
    newQuote = "Nuova citazione"
    currentQuote = "Citazione di oggi"
    blurb = "Dopo diversi anni di lavoro come traduttore e insegnante di lingue, allargo i miei orrizonti verso il web development. Mi affascinano le lingue e le parole, ma ciò che veramente mi appassiona è la costruzione di oggetti, che si tratti di bici, giochi di parole o applicazioni."
  }
  let quotes = ["'It will be a little late for breakfast, and a little early for lunch... So I shall be eating between meals. Everybody knows that is joyous. In fact, I am sure that one of the best things about meals is to eat between them.' - Richard W. Hatch", "'Nude Descending a Staircase still exists, but its effect is softened now, as it occupies the space it created for itself.' - Michael Nesmith", "'Perhaps home is not a place but simply an irrevocable condition.' - James Baldwin"]

  let quotesLength = quotes.length
  console.log(quotesLength)

  useEffect(() => {
    let number = rand(0, quotesLength)
    setQuoteIndex(number)
  }, [])


  // local function

  const changeQuote = () => {
    let number = rand(0, quotesLength)
    setQuoteIndex(number)
  }

  let quote = quotes[quoteIndex]
  console.log(quote)

  return (
    <>
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Anis Memon" keywords={["gatsby", "react", "bootstrap"]}/>
        <Container className="text-center">
          <Row>

            <Col style={{ marginBottom: "1rem" }}>
              <img src={portrait} style={{
                maxWidth: `10rem`,
                maxHeight: "10rem",
                borderRadius: "15%",
                float: "left",
                marginRight: "1rem",
                borderStyle: "solid",
                borderWidth: "0.4rem",
                borderColor: "#707070"
              }} alt={"portrait of Anis Memon"}/>
              {/*<Image/>*/}

              <p>{blurb}</p>

            </Col>
          </Row>
          <Row>
            <div className="spacer">
              <div className="mask"></div>
              {/*<span><i></i></span>*/}
            </div>
          </Row>
          <Row>
            <Col><p>{currentQuote}: {quote}</p>
              <Button className="spaceAround" onClick={changeQuote}>{newQuote}</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
