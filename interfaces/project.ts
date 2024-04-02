export interface Project {
  _id: string
  title: { [index: string]: string }
  description: { [index: string]: string }
  techs: string
  urlDemo: string
  urlGit?: string
}
