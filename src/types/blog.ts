export interface mdxData {
  allMdx: {
    edges: nodeData[]
    totalCount: number
  }
}

export interface nodeData {
  node: {
    slug: string
    id: string
    body: any
    frontmatter: {
      title: string
      date: string
      tags: string[]
      description: string
    }
  }
}
