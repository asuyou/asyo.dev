import * as React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import BlogCard from "components/BlogCard"

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog">
      <div className="prose">
        <h1>Blog</h1>
        <p>
          Just blogs of things I find intersting or answers to problems I've
          come across
        </p>
        <p>(And a little about me)</p>
        <p>Number of blog posts: {data.allMdx.totalCount}</p>
      </div>
      <ul>
        {data.allMdx.nodes.map(node => (
          <BlogCard
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
            timeToRead={node.timeToRead}
            slug={node.slug}
            key={node.id}
          />
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          tags
        }
        excerpt
        slug
        timeToRead
      }
    }
  }
`

export default BlogPage
