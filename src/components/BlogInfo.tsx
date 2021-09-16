import * as React from "react"
import Tag from "components/Tag"

interface props {
  date: string
  timeToRead: number
  tags: string[]
}

const BlogInfo = (props: props) => {
  return (
    <span className="text-custom-muted text-xs m-0">
      {props.date} • {props.timeToRead} min(s) •{" "}
      {props.tags.map((tag, i) => (
        <Tag tag={tag} key={i} />
      ))}
    </span>
  )
}

export default BlogInfo
