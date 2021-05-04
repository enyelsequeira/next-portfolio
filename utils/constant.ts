export interface Technology{
  name: string;
  type:string
}

export interface Project {
  data: {
    id:number
    title: string;
    publishedAt: string;
    image?: string;
    summary: string;
    github: string;
    visit: string;
    technologies: Technology[];
  };
  filePath: string

}

export interface Projects{
  data: Project[]
}