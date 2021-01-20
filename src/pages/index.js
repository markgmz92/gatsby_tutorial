import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      Hello people!
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
      <a href="https://www.gatsbyjs.org">Gatsby docs</a>
    </div>
  )
}
