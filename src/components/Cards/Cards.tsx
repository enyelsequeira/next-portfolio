import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { classNamesForGrid, Project, Projects, renderIcon } from "../../../utils/constant";



const Cards = ({ data }: Projects): JSX.Element => {
  console.log(data)
  return (
    <>
      <p className="text-6xl text-t-primary p-4  font-display tracking-wider dark:text-d-t-base">My Projects</p>
      <motion.div className="flex flex-col items-center  md:justify-center w-full md:flex-row md:flex-wrap lg:grid lg:grid-cols-test lg:grid-row-t lg:justify-center gap-x-4 gap-y-3 my-12" initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: 360 }}>
        {data.map((project: Project) => {
          return (
            <>
              <div key={project.data.id} className={`${classNamesForGrid(project.data.id)}`}>

                <div className="p-2  relative">
                    <Image className="rounded-xl cursor-pointer  transform duration-300 group-hover:scale-110" src={project.data.image} width="700" height="400" />
                  {project.data.technologies && (
                    <div className="flex  absolute -bottom-4 right-3 w-2/5 justify-around">{project.data.technologies.map((tech) => {
                      return (
                        <span key={tech.id} className="text-t-base text-2xl dark:text-d-accent">{renderIcon(tech.name)}</span>
                      )
                    })}</div>
                  )}
                </div>

                <div className="px-6 py-4">
                  <p className="font-semibold tracking-wider font-display text-xl mb-2">{project.data.title}</p>

                  <div>
                    <p className="text-t-primary text-base">
                      {project.data.summary}
                    </p>

                  </div>

                </div> 
                <div className="px-6 pt-2 pb-2">
                  <p className="text-lg pb-3 font-display font-light">Stack</p>
                  {project.data.technologies.map((tag) => {
                    return (
                      <span key={tag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag.name}</span>
                    )
                  })}
                </div>
                <div className="flex items-center justify-between px-7 py-2  md:absolute bottom-1 md:w-full ">
                  <div className="flex w-4/5 justify-between">
                  <a href={project.data.visit} target='_blank'
                    rel='noopener noreferrer' className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md hover:bg-t-ternary dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">Visit</a>
                  <a href={project.data.github} target='_blank'
                    rel='noopener noreferrer' className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md hover:bg-t-ternary dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">code</a>

                  </div>
                  <div className="cursor-pointer font-extrabold hover:text-light-accent dark:hover:text-red-400">
                  <Link as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`} href={`/projects/[slug]`}>
                    <AiOutlineArrowRight className="text-xl" />
                  </Link>
                  </div>
               
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
