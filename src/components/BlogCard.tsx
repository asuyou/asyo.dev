import * as React from "react"
import { Link } from "gatsby"
import Card from "components/Card"
import BlogInfo from "components/BlogInfo"

interface props {
  title: string
  date: string
  tags: string[]
  excerpt: string
  timeToRead: number
  slug: string
}

const BlogCard = (props: props) => {
  return (
    <Link to={`/blog/${props.slug}`}>
      <Card className="group">
        <h2 className="text-custom-text text-xl group-hover:text-custom-primary transition">
          {props.title}
        </h2>
        <BlogInfo
          date={props.date}
          timeToRead={props.timeToRead}
          tags={props.tags}
        />
        <p className="text-custom-muted mt-1">{props.excerpt}</p>
      </Card>
    </Link>
  )
}

export default BlogCard
