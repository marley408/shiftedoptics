import { Link } from "gatsby"
import React from "react"
import PrimaryHero from "../components/hero/PrimaryHero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PrimaryHero />
    
  </Layout>
)

export default IndexPage
