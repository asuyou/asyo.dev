import * as React from "react"
import Card from "components/Card"
import { Project } from "src/types/projects"

const ProjectCard = ({ name, desc, href, Icon }: Project) => {
  return (
    <a href={href} target="_blank">
      <Card className="flex flex-col group">
        <div className="flex flex-row- items-center space-x-2">
          <Icon className="fill-current text-custom-text w-5 h-auto group-hover:text-custom-primary transition" />
          <h2 className="text-lg font-bold text-custom-text group-hover:text-custom-primary transition">
            {name}
          </h2>
        </div>
        {desc && <p className="text-custom-muted mt-2">{desc}</p>}
      </Card>
    </a>
  )
}

export default ProjectCard
