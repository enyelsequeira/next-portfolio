import { ReactElement } from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineDownload } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiAmazonaws, SiGatsby, SiGraphql, SiMaterialUi, SiNextDotJs, SiNodeDotJs, SiRedux, SiStyledComponents, SiTailwindcss, SiTypescript } from "react-icons/si";
export interface Technology{
  name: string;
  type:string;
  id: number
}

export interface Project {
    id:number
    title: string;
    publishedAt: string;
    image?: string;
    summary: string;
    github: string;
    visit: string;
    technologies: Technology[];
    slug: string;
    readingTime: {
      minutes?: number;
      text?: string;
      time?: number;
      words?: number;
    }

}
export interface Projects{
  data: Project[]
}

// Rendering icons
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
export const renderIcon = (type:string) =>{
  if(!icons[type]) return false;

  const Icon = icons[type]
  return <Icon />
}

// social media 

export interface Social{
  name: string
  icon: ReactElement,
  link: string,
  target: string,
  download?: any
}

export const SocialMedia: Social[] = [
  {
    name: "Twitter",
    icon: <AiFillTwitterCircle/>,
    link: "https://twitter.com/enyelsequeira?lang=en",
    target: "_blank"
  },
  {
    name: "facebook",
    icon: <AiFillFacebook/>,
    link: "https://www.facebook.com/enyel.sequeira/",
    target: "_blank"
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram/>,
    link: "https://www.instagram.com/e.s.codes/?hl=en",
    target: "_blank"
  },
  {
    name: "Github",
    icon: <AiFillGithub/>,
    link:"https://github.com/enyelsequeira",
    target: "_blank"
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin/>,
    link: "https://www.linkedin.com/in/enyel-sequeira-333a60100/",
    target: "_blank"

  },
  {
    name: "Resume",
    icon: <AiOutlineDownload/>,
    link: "/resume.pdf",
    target: "_blank",
    download: true

  }
]

export const classNamesForGrid = (id: number) => {
  const prefix = 'md:max-w-sm md:h-[650px] lg:h-[650px]  lg:max-w-md max-w-md   hover:shadow-xl rounded shadow-lg border-2 border-t-primary mb-2 bg-secondary-bg dark:bg-transparent md:relative'
  switch (id) {
    case 1: return `${prefix} lg:col-start-div1 lg:col-end-div1 lg:row-start-div1 lg:row-end-div1 `;
    case 3: return `${prefix} lg:col-start-div2 lg:col-end-div2 lg:row-start-div2 lg:row-end-div2`;
    case 2: return `${prefix} lg:col-start-div3 lg:col-end-div3 lg:row-start-div3 lg:row-end-div3`;
    case 4: return `${prefix} lg:col-start-div4 lg:col-end-div4 lg:row-start-div4 lg:row-end-div4`;
  }
  
}
