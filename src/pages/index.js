import React, { useState } from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"


const IndexPage = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  const handleContactClick = () => {
    setShowContactForm(true)
  }

  return (
  <Layout>
    <h1>Welcome to my website made with ChatGPT!</h1>
    <p>I am a Tech Lead working as a freelancer/consultant specializing in WordPress, SEO, Analytics, and Web Development.</p>
      <button onClick={handleContactClick}>Contact Me</button>
      {showContactForm && <ContactForm />}
  </Layout>
  )
}

export default IndexPage