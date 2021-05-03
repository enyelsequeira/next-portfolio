export interface Project {
  data: {
    id:number
    title: string;
    publishedAt: string;
    image?: string;
    summary: string;
    github: string;
    visit: string;
    keywords: string[];
  };
  filePath: string

}

export interface Projects{
  data: Project[]
}