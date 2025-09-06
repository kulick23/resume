export interface Project {
  title: string
  projectImg: string
  mobileImg?: string
  stack: string[]
  link: string
  repoLink: string
  category: "commercial" | "pet"
}

export interface BusinessProject {
  title: string
  description: string
  stack: string[]
  category: "business"
  isNDA: boolean
  ndaReason?: string
}

export interface LaptopProps {
  project: Project
}

export interface BusinessLaptopProps {
  project: BusinessProject
  onNDAClick: (project: BusinessProject) => void
}
