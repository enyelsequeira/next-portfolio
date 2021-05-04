import { FaReact } from "react-icons/fa";
import { SiAmazonaws, SiGatsby, SiGraphql, SiMaterialUi, SiNextDotJs, SiNodeDotJs, SiRedux, SiStyledComponents, SiTailwindcss, SiTypescript } from "react-icons/si";

export interface Technology{
  name: string;
  type:string;
  id: number
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

const icons = {
  React: FaReact,
  Redux: SiRedux,
  MaterialUI: SiMaterialUi,
  Gatsby: SiGatsby,
  GraphQL: SiGraphql,
  StyledComponents: SiStyledComponents,
  Next: SiNextDotJs,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  NodeJs: SiNodeDotJs,
  AWS: SiAmazonaws

}
export const renderIcon = (type) =>{
  if(!icons[type]) return false;

  const Icon = icons[type]
  return <Icon />
}

export const classNamesForGrid = (id: number) => {
  const prefix = 'md:max-w-xs md:h-[650px] lg:h-[650px]  lg:max-w-md max-w-md  group  transform hover:-translate-y-1 duration-300 hover:shadow-xl rounded shadow-lg border-2 border-t-primary mb-2 bg-secondary-bg dark:bg-transparent md:relative'
  switch (id) {
    case 1: return `${prefix} lg:col-start-div1 lg:col-end-div1 lg:row-start-div1 lg:row-end-div1 `;
    case 2: return `${prefix} lg:col-start-div2 lg:col-end-div2 lg:row-start-div2 lg:row-end-div2`;
    case 3: return `${prefix} lg:col-start-div3 lg:col-end-div3 lg:row-start-div3 lg:row-end-div3`;
    case 4: return `${prefix} lg:col-start-div4 lg:col-end-div4 lg:row-start-div4 lg:row-end-div4`;
  }
}
