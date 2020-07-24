import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuotationsPage = () => (
  <Layout pageInfo={{ pageName: "Quotations"}}>
    <SEO title="quotations" />
    <p>I like reading and I especially enjoy finding sentences, phrases and images that make me reflect on their meaning. Here you can read some of my favorite quotations, along with my commentary of them, and even leave your own comment!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default QuotationsPage