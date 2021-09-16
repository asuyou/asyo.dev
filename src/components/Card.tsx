import * as React from "react"

interface props {
  children: React.ReactNode
  className?: string
}

const Card = (props: props) => {
  return (
    <div
      className={`bg-custom-accent rounded p-4 m-4 ml-0 max-w-lg md:hover:-translate-y-1 md:hover:shadow-md md:transition ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  )
}

export default Card
