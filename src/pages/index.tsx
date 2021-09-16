import * as React from "react"
import { Link } from "gatsby"
import Layout from "components/Layout"

const IndexPage = () => {
  return (
    <Layout title="Home" className="prose">
      <h1>ASYO</h1>
      <p>Hello there!</p>
      <p>
        I'm some random developer with way too little free time and too much
        stress...
      </p>
      <p>
        Feel free to take a look around or message me and if you're bored, read{" "}
        <Link href="/blog/about">about me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
