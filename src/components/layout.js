import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const Layout = ({ children }) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/services/">Services</Link>
          </li>
          <li>
            <Link to="/portfolio/">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>Copyright © {new Date().getFullYear()}
      </p>
    </footer>
  </>
)

export default Layout