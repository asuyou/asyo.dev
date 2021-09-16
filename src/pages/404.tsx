import * as React from "react"
import { Link } from "gatsby"
import Layout from "components/Layout"

const ErrorPage = () => {
  return (
    <Layout title="404" className="prose">
      <h1>404 - This isn't the page you're looking for</h1>
      <p>I'm not sure how you got here</p>
      <p>
        This doesn't seem to be a page. Let me know if you think it should be
      </p>
      <p>
        Go{" "}
        <span>
          <Link to="/">Home</Link>
        </span>
      </p>
    </Layout>
  )
}

export default ErrorPage
