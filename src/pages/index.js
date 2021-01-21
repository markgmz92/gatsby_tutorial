import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

const index = () => {
  return (
    <div>
      <Navbar />
      Hello People!
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
      <a href="https://www/gatsbyjs.org">gatsby docs</a>
    </div>
  )
}

export default index
