import * as React from "react"

const Tag = ({ tag }) => {
  return (
    <span className="px-2 py-1 mx-1 text-custom-muted rounded-full bg-custom-highlight hover:bg-custom-highlightHover duration-200">
      {tag}
    </span>
  )
}

export default Tag
