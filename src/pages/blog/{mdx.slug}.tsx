import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "components/Layout"
import BlogInfo from "components/BlogInfo"
import TableOfContents from "components/TableOfContents"

const BlogPost = ({ data }) => {
  return (
    <Layout title={data.mdx.frontmatter.title} className="flex flec-row">
      <div className="flex flex-col">
        <Link
          to="/blog/"
          className="text-custom-muted hover:text-custom-primary underline"
        >
          Back
        </Link>
        <h1 className="text-custom-text text-5xl font-semibold mb-5">
          {data.mdx.frontmatter.title}
        </h1>
        <BlogInfo
          date={data.mdx.frontmatter.date}
          timeToRead={data.mdx.timeToRead}
          tags={data.mdx.frontmatter.tags}
        />
        <h2 className="text-custom-text text-2xl mt-4 font-semibold">
          Table Of Contents
        </h2>
        <TableOfContents headings={data.mdx.tableOfContents.items} />
        <article className="prose lg:prose-xl mt-3">
          <hr />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMM D, YYYY")
        tags
        title
      }
      timeToRead
      tableOfContents
      body
    }
  }
`
export default BlogPost
