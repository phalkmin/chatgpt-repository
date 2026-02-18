import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <div style={{ marginBottom: `2rem` }}>
      <StaticImage
        src="../images/icon.png"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A profile picture placeholder"
        style={{ borderRadius: `50%` }}
      />
    </div>
    <p>Hi there! My name is Paulo H. and I'm a Tech Lead with 15+ years of experience in WordPress, SEO, Analytics, and Web Development.</p>
    <p>I specialize in WordPress, and have worked with clients in [Industry/Vertical].</p>
    <p>If you're interested in working with me, please don't hesitate to contact me!</p>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo 
    title="About" 
    description="Learn more about Paulo H. and how this entire site was built using AI agents without manual coding." 
  />
)