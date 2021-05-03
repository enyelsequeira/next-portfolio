import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project, Projects } from "../../../utils/constant";

const Cards = ({ data }: Projects): JSX.Element => {

  console.log(data)

  const classNamesForGrid = (id: number) => {
    const prefix = 'md:max-w-xs md:h-[650px] lg:h-[650px]  lg:max-w-md max-w-md  group  transform hover:-translate-y-1 duration-300 hover:shadow-xl rounded shadow-lg border-2 border-t-primary mb-2 bg-secondary-bg dark:bg-transparent md:relative'
    switch (id) {
      case 1: return `${prefix} lg:col-start-div1 lg:col-end-div1 lg:row-start-div1 lg:row-end-div1 `;
      case 2: return `${prefix} lg:col-start-div2 lg:col-end-div2 lg:row-start-div2 lg:row-end-div2`;
      case 3: return `${prefix} lg:col-start-div3 lg:col-end-div3 lg:row-start-div3 lg:row-end-div3`;
      case 4: return `${prefix} lg:col-start-div4 lg:col-end-div4 lg:row-start-div4 lg:row-end-div4`;
    }
  }

  return (
    <>
      <p className="text-6xl text-t-primary p-4  font-display tracking-wider dark:text-d-t-base">My Projects</p>

      <motion.div className="flex flex-col items-center  md:justify-center w-full md:flex-row md:flex-wrap lg:grid lg:grid-cols-test lg:grid-row-t lg:justify-center gap-x-4 gap-y-3 my-12" initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: 360 }}>

        {data.map((project: Project) => {
          console.log(project, "my pere");
          return (
            <>
              <div key={project.data.id} className={`${classNamesForGrid(project.data.id)}`}>
                <Link as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`} href={`/projects/[slug]`}>

                  <div className="p-2 cursor-pointer  ">
                    <Image className="rounded-xl  transform duration-300 group-hover:scale-110" src={project.data.image} width="700" height="400" />
                  </div>
                </Link>


                <div className="px-6 py-4">
                  <p className="font-semibold tracking-wider font-display text-xl mb-2 ">{project.data.title}</p>
                  
                  <div>
                  <p className="text-t-primary text-base">
                    {project.data.summary}
                  </p>

                  </div>
                
                </div>

                <div className="px-6 pt-2 pb-2">
                  <p className="text-lg p-2 font-display font-light">Stack</p>
                  {project.data.keywords.map((tag, i) => {
                    return (
                      <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between px-7 py-2  md:absolute bottom-1 md:w-full ">
                  <a href={project.data.visit} target='_blank'
                    rel='noopener noreferrer' className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md">Visit</a>
                  <a href={project.data.github} target='_blank'
                    rel='noopener noreferrer' className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md">code</a>

                </div>
              </div>
            </>

          )
        })}



      </motion.div>
    </>
  )
}

export default Cards
