import React, { useContext } from "react"
import { Link } from "gatsby"
import { store } from "../components/store"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  // variables from state

  let globalStore = useContext(store)
  let lang = globalStore.state.lang

  // local variables

  let homepage = "Return to the homepage"

  if (lang === "FR") {
    homepage = "Retourner à la page d'accueil"
  } else if (lang === 'IT') {
    homepage = "Tornare alla homepage"
  }

    return (
      <Layout pageInfo={{ pageName: "CV" }}>
        <SEO title="CV"/>
        <p>Below you can view a copy of my resume or download it here.</p>
        <p>Welcome to page 2</p>
        <Link to="/">{homepage}</Link>
      </Layout>
    )
}

export default SecondPage
