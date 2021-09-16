import * as React from "react"
import Layout from "components/Layout"
import { ProjectData } from "src/data/projects"
import ProjectCard from "components/ProjectCard"

const ProjectsPage = () => {
  return (
    <Layout title="Projects">
      <div className="prose">
        <h1>Projects</h1>
        <p>
          My recent projects that I'm comfortable sharing and could be
          considered ok code
        </p>
      </div>
      {ProjectData.map(project => (
        <ProjectCard
          name={project.name}
          desc={project.desc}
          href={project.href}
          Icon={project.Icon}
          key={project.uid}
        />
      ))}
    </Layout>
  )
}

export default ProjectsPage
