import { Link } from "gatsby"
import React from "react"
import PrimaryHero from "../components/hero/PrimaryHero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/contact/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PrimaryHero />
    <Contact />
  </Layout>
)

export default IndexPage
