import * as React from "react"

interface heading {
  title: string
  url: string
  items?: heading[]
}

const RecursiveExpand = (headings: heading[]) => {
  return headings.map(heading => (
    <li key={heading.title}>
      <a
        href={heading.url}
        className="text-custom-muted hover:text-custom-text"
        onClick={e => {
          e.preventDefault()
          document
            .querySelector(heading.url)
            .scrollIntoView({ behavior: "smooth" })
        }}
      >
        {heading.title}
      </a>
      {heading.items && <ul>{RecursiveExpand(heading.items)}</ul>}
    </li>
  ))
}

const TableOfContents = ({ headings }: { headings: heading[] }) => {
  return (
    <nav className="text-custom-text">
      <ul>{RecursiveExpand(headings)}</ul>
    </nav>
  )
}

export default TableOfContents
