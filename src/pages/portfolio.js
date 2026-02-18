import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <h1>My Portfolio</h1>
    <h2>Client 1</h2>
    <p>Project Description</p>
    <a href="#">View Project</a>
    <h2>Client 2</h2>
    <p>Project Description</p>
    <a href="#">View Project</a>
    <h2>Client 3</h2>
    <p>Project Description</p>
    <a href="#">View Project</a>
  </Layout>
)

export default PortfolioPage

export const Head = () => (
  <Seo 
    title="Portfolio" 
    description="Showcasing projects and the results of an AI-driven development process." 
  />
)
