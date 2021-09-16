import * as React from "react"
import toast from "react-hot-toast"
import Card from "components/Card"
import { Social } from "src/types/socials"
import { BiCopyAlt } from "@react-icons/all-files/bi/BiCopyAlt"
import { IoMdOpen } from "@react-icons/all-files/io/IoMdOpen"

const copyToClipboard = (text: string): Promise<void> => {
  const promise = new Promise<void>((resolve, reject) => {
    try {
      navigator.clipboard.writeText(text)
      resolve()
    } catch {
      reject(new Error("Couldn't copy to clipboard"))
    }
  })
  return promise
}

const Wrapper = ({ children, condition, wrapper }) =>
  condition ? wrapper(children) : children

const LinkCard = ({ name, type, href, data, desc, Icon }: Social) => {
  return (
    <Card className="flex flex-col">
      <div className="flex flex-row items-center space-x-2">
        <Icon className="fill-current text-custom-text w-5 h-auto" />
        <Wrapper
          condition={type == "open"}
          wrapper={(children: any) => (
            <a href={href} target="_blank" className="link-card-header">
              {children}
              <IoMdOpen />
            </a>
          )}
        >
          <h2 className={`text-lg ${type == "copy" ? "text-custom-text" : ""}`}>
            {name}
          </h2>
        </Wrapper>
        <span className="text-custom-muted">•</span>
        <button
          className="text-custom-muted hover:text-custom-text duration-200"
          onClick={() => {
            toast.promise(copyToClipboard(data || href || ""), {
              loading: "Copying...",
              success: "Copied to clipboard",
              error: "Couldn't copy to clipboard",
            })
          }}
        >
          <BiCopyAlt className="fill-current w-5 h-auto" />
        </button>
      </div>
      {desc && <p className="text-custom-muted mt-2">{desc}</p>}
    </Card>
  )
}

export default LinkCard
